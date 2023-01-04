<script setup>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { onMounted } from 'vue'
import { gsap } from 'gsap'
import * as dat from "dat.gui"

const sizes={
	width:window.innerWidth,
	height:window.innerHeight
}
onMounted(()=>{
	// 获取canvas
	const canvas=document.querySelector('canvas.webgl')
	
	// 创建场景
	const scene = new THREE.Scene()
	// 创建相机
	const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 1000)
	camera.position.set(0,0,10)
	scene.add(camera)
	
	// 添加物体
	const cubeGeometry=new THREE.BoxGeometry(1,1,1) // 形状
	const cubeMaterial = new THREE.MeshBasicMaterial({color: 0xffff00}) // 材质（颜色）
	const cube=new THREE.Mesh(cubeGeometry, cubeMaterial) // 完整几何体
	scene.add(cube)
	
	const axesHelper = new THREE.AxesHelper(5)
	scene.add(axesHelper)
	
	// 初始化渲染器
	const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true })
	// 设置渲染尺寸大小
	renderer.setSize(sizes.width, sizes.height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
	
	// 创建控制器
	const controls = new OrbitControls(camera, canvas)
	controls.enableDamping=true
	// const clock=new THREE.Clock()
	// gsap.to(cube.position, {x:5, duration: 5,repeat: 3})
	
	
	const gui=new dat.GUI()
	gui.add(cube.position, "x").min(0).max(5).name("移动x轴")
	
	
	const tick = () => {
		// const time = clock.getDelta()
		// console.log(time)
		// 更新渲染器
		renderer.render(scene, camera);
		
		controls.update();
		// 页面重绘时调用自身
		window.requestAnimationFrame(tick);
	}
	tick();
	window.addEventListener('resize', ()=>{
		sizes.width = window.innerWidth;
		sizes.height = window.innerHeight;
		renderer.setSize(sizes.width, sizes.height)
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
		
		camera.aspect = sizes.width / sizes.height;
		camera.updateProjectionMatrix();
	})
	
})

</script>

<template>
	<canvas class="webgl" />
</template>

<style scoped>
</style>
