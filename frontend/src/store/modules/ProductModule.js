import * as api from '@/api/index.js'

export default {
	mutations: {
		cacheAllProducts(state, getters, rootState) {
			return (products) => {
				rootState.allProducts = products

				let tmplist = {}
				products.map((item) => (tmplist[item._id] = item))
				rootState.allProdDictionary = tmplist
			}
		},
	},
	getters: {
		prodById(state, getters, rootState) {
			return (pid) => {
				let tmp = rootState.allProdDictionary[pid]
				if (!(tmp === undefined)) {
					return tmp
				} else {
					return {
						title: 'Unknown Product',
						price: '0',
						shortDesc: 'Unknown',
						longDesc:
							'No description. This product cannot be found in the database',
						imgFile: 'notfound.png',
						_id: '',
					}
				}
			}
		},

		prodsByIdArray(n, getters) {
			return (parray) => parray.map((id) => getters.prodById(id))
		},
	},
	actions: {
		//#region product CRUDs
		async loadAllProducts({ commit }) {
			let tmp = await api.getAllItems()
			commit('cacheAllProducts', tmp)
		},

		async createProduct({ state, dispatch, rootState }, product) {
			let result = await api.createProduct(product, rootState.loggedInUser)
			dispatch('loadAllProducts')
		},

		async saveProduct({ state, dispatch, rootState }, product) {
			let result = await api.updateProductById(product, rootState.loggedInUser)
			dispatch('loadAllProducts')
		},

		async deleteProductById({ state, dispatch, rootState }, product) {
			let result = await api.deleteProductById(product, rootState.loggedInUser)
			dispatch('loadAllProducts')
		},
		//#endregion
	},
}
