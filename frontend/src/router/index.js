import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../views/Register.vue'
import Products from '../views/Products.vue'
import MakeOrder from '../views/MakeOrder.vue'
import AdminProducts from '../views/AdminProducts.vue'
import Orders from '../views/Orders.vue'

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
	},
	{
		path: '/orders',
		component: Orders,
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

export default router
