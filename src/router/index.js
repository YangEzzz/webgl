import {
	createRouter,
	createWebHashHistory,
} from 'vue-router'
const routes = [
	{
		name: 'first',
		path: '/',
		component: ()=>import('../components/first.vue')
	},
	{
		name: 'star',
		path: '/star',
		component: ()=>import('../components/star.vue')
	},
]
const router = createRouter({
	history: createWebHashHistory(),
	routes,
})
export default router
