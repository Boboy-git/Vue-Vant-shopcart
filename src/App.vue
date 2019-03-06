<template>
  <div id="app">
      <router-view></router-view>
      <Tabbar></Tabbar>
  </div>
</template>

<script>
import Tabbar from './components/tabbar.vue'

export default {
  name: 'app',
  components: {
    Tabbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
