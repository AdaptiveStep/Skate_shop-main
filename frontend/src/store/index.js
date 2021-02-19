import Vue from 'vue'
import Vuex from 'vuex'
import Admin from '@/store/modules/AdminModule.js'
import Basket from '@/store/modules/BasketModule.js'
import Orders from '@/store/modules/OrdersModule.js'
import Product from '@/store/modules/ProductModule.js'
import router from '@/router'
import createPersistedState from 'vuex-persistedstate'

// import * as api from '@/api/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		loggedInUser: {},
		basketItems: [
			// { _id: 'x12', amount: 3 },
			// { _id: 'nnvd', amount: 1 },
		],
		paymentComplete: false,
		selectedUser: {},
		allProducts: [],
		allProdDictionary: [],
		allOrders: [
			// {_id: fm3k32, items:[...productids], orderValue, status, timestamp},
			// {...},
			// {....}
		],
	},
	mutations: {
		login(state, user) {
			//Don't use this. Use action instead.
			state.loggedInUser = user
		},
		logout(state) {
			//Don't use this. Use action instead.
			state.loggedInUser = {}
			state.allOrders = []
		},

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
			const index = state.basketItems.findIndex((p) => p._id === product._id)

			if (index > -1) {
				if (state.basketItems[index].amount === 1) {
					state.basketItems.splice(index, 1)
				} else {
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
			router.push('/products')
		},
		cacheAllOrders(state, orders) {
			state.allOrders = orders
		},
		removeCachedOrder(state, order) {
			let tmp = state.allOrders.findIndex((x) => x._id === order._id)
			tmp >= 0 ? state.allOrders.splice(tmp, 1) : ''
		},
		cacheAllProducts(state, products) {
			state.allProducts = products

			let tmplist = {}
			products.map((item) => (tmplist[item._id] = item))
			state.allProdDictionary = tmplist
		},
	},
	actions: {},
	getters: {},

	modules: {
		Admin,
		Basket,
		Orders,
		Product,
	},
	plugins: [createPersistedState()],
})
