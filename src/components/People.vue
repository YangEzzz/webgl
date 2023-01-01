<script setup>
import { Clock, Scene, LoadingManager, WebGLRenderer, sRGBEncoding, Group, PerspectiveCamera, DirectionalLight, PointLight, MeshPhongMaterial } from 'three';
import { TWEEN } from 'three/examples/jsm/libs/tween.module.min.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { onMounted } from 'vue'

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
}
const canvas=document.querySelector('canvas.webgl')
onMounted(()=>{
	const renderer=new WebGLRenderer({
		canvas,
		antialias: true,
		alpha: true,
		powerPreference: 'high-performance'
	})
	renderer.setSize(sizes.width, sizes.height)
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
	renderer.autoClear = true
	renderer.outputEncoding = sRGBEncoding
	
	const scene = new Scene()
	
	const camera = new PerspectiveCamera(35, sizes.width/sizes.height, 1, 100)
	camera.position.set(19, 1.54, -1)
	scene.add(camera)
	
	// 加载管理器
	const loadingManager = new LoadingManager()
	loadingManager.onLoad=()=>{
		const yPosition = {y: 0}
		new TWEEN.Tween(yPosition).to({y: 100}, 900)
		.easing(TWEEN.Easing.Quadratic.InOut)
		.start()
		.onUpdate(()=>{
			loadingC
		})
	}
	
	
	window.addEventListener('resize', ()=>{
		sizes.width = window.innerWidth
		sizes.height = window.innerHeight
		renderer.setSize(sizes.width, sizes.height);
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
		camera.aspect = sizes.width / sizes.height
		camera.updateProjectionMatrix()
	})
})
</script>

<template>
	<canvas class="webgl" />
</template>

<style scoped>
</style>
