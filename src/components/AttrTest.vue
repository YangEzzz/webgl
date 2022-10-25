<script setup>
import * as THREE from 'three';
import { onMounted } from 'vue';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

onMounted(()=>{
    const canvas = document.querySelector('canvas.webgl')
    /**
     * 渲染器，new初始化，并将canvas容器作为参数传给他
     * 通过setSize设置渲染器尺寸，调用setPixelRatio设置像素比为当前设备屏幕像素比，避免模糊
     */
    const renderer = new THREE.WebGLRenderer({ canvas: canvas });
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    /**
     * 场景对象，所有网格对象，灯光动画需要放在场景中
     * fog：设置场景的雾化效果,可以渲染出一层雾气，隐层远处的的物体。
     * overrideMaterial：强制场景中所有物体使用相同材质。
     * autoUpdate：设置是否自动更新。
     * background：设置场景背景，默认为黑色。
     * children：所有对象的列表。
     * add()：向场景中添加对象。
     * remove()：从场景中移除对象。
     * getChildByName()：根据名字直接返回这个对象。
     * traverse()：传入一个回调函数访问所有的对象。
     */
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x1A1A1A)
    const light = new THREE.AmbientLight(0xdeedff, 1.5);
    scene.add(light);
    /**
     * 透视相机，为了在场景中显示物体，就必须给场景添加相机，分为正交相机和透视相机
     * PerspectiveCamera(fov, aspect, near, far)
     * fov：表示视场，就是能够看到的角度范围，人的眼睛大约能够看到 180度 的视场，视角大小设置要根据具体应用，一般游戏会设置 60~90 度，默认值 45。
     * aspect：表示渲染窗口的长宽比，如果一个网页上只有一个全屏的 canvas 画布且画布上只有一个窗口，那么 aspect 的值就是网页窗口客户区的宽高比 window.innerWidth/window.innerHeight。
     * near：属性表示的是从距离相机多远的位置开始渲染，一般情况会设置一个很小的值。 默认值 0.1。
     * far：属性表示的是距离相机多远的位置截止渲染，如果设置的值偏小，会有部分场景看不到，默认值 1000。
     */
    const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.2, 1000)
    camera.position.z=3
    scene.add(camera)
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // 页面缩放事件监听
    window.addEventListener('resize', () => {
        sizes.width = window.innerWidth;
        sizes.height = window.innerHeight;
        // 更新渲染
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        // 更新相机
        camera.aspect = sizes.width / sizes.height;
        camera.updateProjectionMatrix();
    });
    /**
     * 要创建可加载显示在场景中的内置三维模型，需要添加网格 Mesh，并为它创建几何体 Geometry 和 材质 Material
     */
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshDepthMaterial();
    const mesh = new THREE.Mesh(geometry, material);
    
    mesh && (mesh.rotation.y += 20);
    mesh && (mesh.rotation.x += 20);
    scene.add(mesh);
    const tick = () => {
    // 更新渲染器
        renderer.render(scene, camera);
        controls.update();
        // 给网格模型添加一个转动动画
        // mesh && (mesh.rotation.y += 20);
        // mesh && (mesh.rotation.x += 20);
        // 页面重绘时调用自身
        window.requestAnimationFrame(tick);
    }
    tick();
})

</script>

<template>
    <canvas class="webgl" />
</template>

<style scoped>
</style>