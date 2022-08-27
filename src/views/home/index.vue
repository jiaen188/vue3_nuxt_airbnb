<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.params, route.query)

const { proxy }: any = getCurrentInstance()
proxy.$message('this is a message.')
</script>

<template>
  首页
  <el-button>button</el-button>
</template>

<style scoped>
</style>
