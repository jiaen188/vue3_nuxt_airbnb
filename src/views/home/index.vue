<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'
import { fetchRoomList } from '../../api'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const route = useRoute()
console.log(route.params, route.query)

const { proxy }: any = getCurrentInstance()
proxy.$message('this is a message.')
const getRoomList = () => {
  fetchRoomList()
}
getRoomList()
</script>

<template>
  {{t('message.home')}}这是动态的中英文
  <el-button>button</el-button>
  <div class="text">fjalkfjgfsdjkhjlshhskfdl</div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/home/index.scss"
</style>
