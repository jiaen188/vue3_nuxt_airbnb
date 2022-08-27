<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import { useRouter } from 'vue-router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import { ref } from 'vue'

const router = useRouter()
const locale = ref(zhCn)
const changeLang = (language:any) => {
  locale.value = language
}
</script>

<template>
  <el-config-provider :locale="locale">
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vite + Vue" />
    <button @click="() => router.push({path: '/home', params: {id: 2}})">首页</button>
    <button @click="() => router.push({path: '/mine'})">个人信息</button>
    <router-link to="/home?id=1">首页</router-link>
    <router-link to="/mine">个人信息</router-link>
    <el-button @click="changeLang(zhCn)">中文</el-button>
    <el-button @click="changeLang(en)">英文</el-button>
    <el-date-picker
      type="week"
      format="[Week] ww"
      placeholder="Pick a week"
    />
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
