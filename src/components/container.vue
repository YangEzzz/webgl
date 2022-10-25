<script setup>
import {ref, computed} from 'vue'
import { useRoute, useRouter } from 'vue-router';
import {routes as myRoutes} from '../router'
const router=useRouter()
const routes = useRoute()

const routeMap=computed(()=>{
  return myRoutes[0].children.map((item)=>{
    return {
      label: item.name,
      value: item.path,
    }
  })
})
const cur=ref(routes.name)
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
