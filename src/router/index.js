import Vue from 'vue'
import VueRouter from 'vue-router'
import Phonebook from '../views/Phonebook.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/:id?',
		name: 'Phonebook',
		props: true,
		component: Phonebook,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
