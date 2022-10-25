import {
	createRouter,
	createWebHashHistory,
} from 'vue-router'
const routes = [
	{
		name: 'container',
		path:  '/',
		redirect: '/first',
		component: ()=>import('../components/container.vue'),
		children: [
			{
				name: 'first',
				path: '/first',
				component: ()=>import('../components/first.vue')
			},
			{
				name: 'star',
				path: '/star',
				component: ()=>import('../components/star.vue')
			},
		]
	},
]
const router = createRouter({
	history: createWebHashHistory(),
	routes,
})
export default router
