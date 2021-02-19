import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '@/views/Register.vue'
import Products from '@/views/Products.vue'
import MakeOrder from '@/views/MakeOrder.vue'
import AdminProducts from '@/views/AdminProducts.vue'
import Orders from '@/views/Orders.vue'
import store from '@/store'
Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Register,
	},

	{
		path: '/register',
		component: Register,
	},

	{
		path: '/products',
		component: Products,
	},
	{
		path: '/adminproduct',
		component: AdminProducts,
		beforeEnter: (to, from, next) => {
			if (store.getters.loggedInAsAdmin) {
				next()
			} else {
				next('/')
			}
		},
	},
	{
		path: '/orders',
		component: Orders,
		meta: {
			requiresAuth: true,
		},
	},

	{
		path: '/makeOrder',
		component: MakeOrder,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

router.beforeEach((to, from, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (store.getters.loggedIn) {
			next()
			return
		}
		next('/register')
	} else {
		next()
	}

	
})

export default router
