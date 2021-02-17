import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Products from '../views/Products.vue'
import Account from '../views/Account.vue'
import MakeOrder from '../views/MakeOrder.vue'
import AdminProducts from '../views/AdminProducts.vue'
import Orders from '../views/Orders.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Register,
	},

	{
		path: '/register',
		component: Register,
	},

	{
		path: '/account',
		component: Account,
	},

	{
		path: '/products',
		component: Products,
	},
	{
		path: '/adminproduct',
		component: AdminProducts,
	},
	{
		path: '/orders',
		component: Orders,
	},

	{
		path: '/makeOrder',
		component: MakeOrder,
	},

	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
