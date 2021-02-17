//Author Hariz Hasecic 2015

import Vue from 'vue'
import Vuex from 'vuex'
import LocalStorageModule 	from '@/store/modules/localStorageHandlers.js'
import Admin 				from '@/store/modules/AdminModule.js'
import Basket 				from '@/store/modules/BasketModule.js'
import Orders 				from '@/store/modules/OrdersModule.js'
import Product 				from '@/store/modules/ProductModule.js'

import createPersistedState from 'vuex-persistedstate'

import * as api from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		//General states
		loggedInUser: {},

		basketItems: [
			// { _id: 'x12', amount: 3 },
			// { _id: 'nnvd', amount: 1 },
		],

		paymentComplete: false,

		//Admin related states:
		selectedUser: {},

		//Cache related states:
		allProducts: [],
		allProdDictionary: [],

		allOrders: [
			// {_id: fm3k32, items:[...productids], orderValue, status, timestamp},
			// {...},
			// {....}
		],
	},
	mutations: {
		cacheAllProducts(state, products) {
			state.allProducts = products

			let tmplist = {}
			products.map((item) => (tmplist[item._id] = item))
			state.allProdDictionary = tmplist
		},

		//#region UserMutations
		addToCart(state, product) {
			let exists = state.basketItems.some((p) => p._id === product._id)
			if (exists) {
				const withId = (p) => p._id === product._id
				let pIndex = state.basketItems.findIndex(withId)
				state.basketItems[pIndex].amount += 1
			} else {
				let tmpobj = {
					_id: product._id,
					amount: 1,
				}
				state.basketItems.push(tmpobj)
			}
		},

		removeFromCart(state, product) {
			const index = state.basketItems.findIndex( (p) => p._id === product._id)
			
			if (index > -1) {
				if(state.basketItems[index].amount===1){
					state.basketItems.splice(index, 1)
				}
				else
				{
					state.basketItems[index].amount -= 1
				}
			}
		},
		

		completePayment(state) {
			//För att komma till sidan efter konfirmerat payment
			state.basketItems = []
			state.paymentComplete = true
		},

		startNewOrder(state) {
			state.paymentComplete = false
		},

		login(state, user) {
			//Don't use this. Use action instead.
			state.loggedInUser = user
		},
		logout(state) {
			//Don't use this. Use action instead.
			state.loggedInUser = {}
			state.allOrders=[]
		},
		//#endregion

		//#region admin Helpers
		selectUser(state, user) {
			state.selectedUser = user
		},

		cacheAllOrders(state, orders){
			state.allOrders = orders
		},
		removeCachedOrder(state, order){
			let tmp = state.allOrders.findIndex(x=> x._id === order._id)
			tmp>=0 ? state.allOrders.splice(tmp,1): "";
			
		}
		//#endregion


			
	},
	actions: {
		//#region User CRUDs
		async login({ commit,dispatch }, user) {
			let result = await api.login(user)
			let compiledUser = result.user
			compiledUser.token = result.token
			commit('login', compiledUser)
			dispatch('getAllOrders')
		},
		logout({ commit }) {
			this.commit('logout')
		},
		

		async createUser({dispatch}, user){
			let result = await api.createUser(user)
			if(result.message === "User registered!"){
				dispatch("login",user)
			}
			else if(result.message === "Email already exists"){
				console.log("Email already exists")
			}
		},

		saveUser() {
			//Adds new if it doesnt exist
		},
		//#endregion

		//#region product CRUDs
		async loadAllProducts({ commit }) {
			let tmp = await api.getAllItems()
			commit('cacheAllProducts', tmp)
		},

		async createProduct({ state, dispatch }, product) {
			let result = await api.createProduct(product, state.loggedInUser)
			dispatch('loadAllProducts')
		},

		async saveProduct({ state, dispatch }, product) {
			let result = await api.updateProductById(product, state.loggedInUser)
			dispatch('loadAllProducts')
		},

		async deleteProductById({ state, dispatch }, product) {
			let result = await api.deleteProductById(product, state.loggedInUser)
			dispatch('loadAllProducts')
		},
		//#endregion


		//#region order CRUDs
		async placeNewOrder({ commit, state }, payload) {
			let result = await api.createOrder(
				payload.user,
				payload.items,
				payload.price
			)
		},

		async getAllOrders({state,commit}) {
			let result = await api.getAllOrders(state.loggedInUser)
			commit('cacheAllOrders',result)
			return result;
		},

		//#endregion		
	},

	getters: {

		//#region Basket Getters
		// basketCount(state, getters) {
		// 	return state.basketItems.reduce((x, next) => x + next.amount, 0)
		// },
		// basketTotalPrice(state, getters) {
		// 	let tmp = Object.entries(getters.basket)

		// 	const reducer = (accumulator, currentValue) =>
		// 		accumulator + currentValue.[1].amount*currentValue.[1].product.price

		// 	const newnum = tmp.reduce(reducer, 0)
		// 	return newnum
		// },
		// basketEmpty(state, getters) {
		// 	return getters.basketCount === 0
		// },
		// basketAveragePrice(state, getters) {
		// 	return getters.basketTotalPrice / getters.basketCount
		// },

		loggedIn(state) {
			return Object.keys(state.loggedInUser).length > 0
		},
		loggedInAsAdmin(state) {
			return state.loggedInUser.role === 'admin'
		},
		allFiles() {
			const req = require.context('@/assets/', true, /\.(png)$/i)
			let tmpFiles = []
			req.keys().map((key) => {
				tmpFiles.push(key.slice(2))
			})
			return tmpFiles
		},

		// basket(state) {
		// 	let tmpbasket = {}
		// 	state.basketItems.map((item) => {
		// 		tmpbasket[item._id] = {
		// 			product: state.allProdDictionary[item._id],
		// 			amount: item.amount,
		// 		}
		// 	})

		// 	return tmpbasket
		// },
		//#endregion
		
		//#region Order Getters
		inProcessOrders(state,getters){
			return state.allOrders.filter(x => x.status === "inProcess")
			//return getters.filteredOrders(x => x.status === "inProcess")

		},
		doneOrders(state,getters){
			return state.allOrders.filter(x => x.status === "done")
			//return getters.filteredOrders(x => x.status === "done")
		},

		filteredOrders(state){
			return filter => state.allOrders.filter(filter)
		},

		prodById(state){
			return pid => {
				let tmp = state.allProdDictionary[pid]
				if(! (tmp===undefined))
				{
					return tmp

				}else{
					return {
						title: 'Unknown Product',
						price: '0',
						shortDesc: 'Unknown' ,
						longDesc: 'No description. This product cannot be found in the database',
						imgFile: 'notfound.png',
						_id: '',
					}
				}
			}
		},
			
		prodsByIdArray(n,getters){
			return parray => parray.map(id => getters.prodById(id))
		} 
		
		
		
		// {
		// 	return parray.map(id => getters.prodById(id))
		// }
		//#endregion
	},

	modules: {
		localStorage: LocalStorageModule,
		Admin,
		Basket,
		Orders,
		Product,
	},
	plugins: [createPersistedState()],
})
