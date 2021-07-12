<template>
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="text-center">
      <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    </div>
    <p class="text-center hover:bg-dark-500">Hello Test Message</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  }
})
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
