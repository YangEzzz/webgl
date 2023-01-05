import {
	createRouter,
	createWebHashHistory,
} from 'vue-router'
export const routes = [
	{
		name: 'container',
		path:  '/',
		redirect: '/cube',
		component: ()=>import('../components/Container.vue'),
		children: [
			{
				name: '属性测试',
				path: '/test',
				component: ()=>import('../components/AttrTest.vue')
			},
			{
				name: '正方体',
				path: '/cube',
				component: ()=>import('../components/Cube.vue')
			},
			{
				name: '卫星',
				path: '/star',
				component: ()=>import('../components/Star.vue')
			},
			{
				name: '基础',
				path: '/basic',
				component: ()=>import('../components/Basic.vue')
			},
			{
				name: '光照',
				path: '/light',
				component: ()=>import('../components/Light.vue')
			},
		]
	},
]
const router = createRouter({
	history: createWebHashHistory(),
	routes,
})
export default router
