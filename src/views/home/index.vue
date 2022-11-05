<script setup lang="ts">
import { getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'
import { fetchRoomList, fetchElephant } from '../../api'
import { useI18n } from 'vue-i18n'
// import IndexDB from '../../utils/indexDB'

const { t } = useI18n()
const route = useRoute()
console.log(route.params, route.query)

const { proxy }: any = getCurrentInstance()
proxy.$message('this is a message.')
// 真实接口
const getRoomList = () => {
  fetchRoomList().then(res => {
    console.log('fetchRoomList', res)
  })
}
getRoomList()

// Mock接口
function getElephant () {
  fetchElephant().then(res => {
    console.log('fetchElephant', res)
  })
}

getElephant()

// const airbnbDB = new IndexDB('airbnb')
// airbnbDB.openStore('elephant', 'id', ['nose', 'ear'])

// function add (storeName: string) {
//   airbnbDB.updateItem(storeName, {
//     nose: '44m',
//     ear: '比较小'
//   })
// }

// // 删除
// function deleteDB (storeName: string, key: number | string) {
//   airbnbDB.deleteItem(storeName, key)
// }
// // 查询所有数据
// function getObjectStore (storeName: string) {
//   airbnbDB.getList(storeName)
// }
// // 查询某一条数据
// function getObjectStoreItem (storeName: string, key: number | string) {
//   airbnbDB.getItem(storeName, key)
// }
</script>

<template>
  {{t('message.home')}}这是动态的中英文
  <!-- <el-button @click="add('elephant')">点击新增</el-button>
  <el-button @click="deleteDB('elephant', 2)">删除</el-button>
  <el-button @click="getObjectStore('elephant')">查询所有数据</el-button>
  <el-button @click="getObjectStoreItem('elephant', 1)">查询某一条数据</el-button> -->
  <div class="text">fjalkfjgfsdjkhjlshhskfdl</div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/home/index.scss"
</style>
