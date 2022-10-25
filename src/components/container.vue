<script setup>
import {ref} from 'vue'
import router from '../router';
const routeMap = [
	{
		label: '正方体',
		value: '/first',
	},
	{
		label: '卫星',
		value: '/star',
	},
]
const cur=ref('/first')
const routeChange=()=>{
	router.push(cur.value)
}
</script>

<template>
	<div class="select">
		<el-select v-model="cur" @change="routeChange">
			<el-option v-for="item in routeMap" :key="item.label" :value="item.value" :label="item.label"/>
		</el-select>
	</div>
	<router-view></router-view>
</template>

<style scoped>
.select {
	position: absolute;
	top: 16px;
	left: 16px;
}
</style>
