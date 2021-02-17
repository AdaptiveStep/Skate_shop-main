//Author Hariz Hasecic 2015

import Vue from 'vue'
import Vuex from 'vuex'
import LocalStorageModule from '@/store/modules/localStorageHandlers.js'
import Admin from '@/store/modules/AdminModule.js'
import Basket from '@/store/modules/BasketModule.js'
import Orders from '@/store/modules/OrdersModule.js'
import Product from '@/store/modules/ProductModule.js'
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
	mutations: {},
	actions: {},
	getters: {},

	modules: {
		localStorage: LocalStorageModule,
		Admin,
		Basket,
		Orders,
		Product,
	},
	plugins: [createPersistedState()],
})
