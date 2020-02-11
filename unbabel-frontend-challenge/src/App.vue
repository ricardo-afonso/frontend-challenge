<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'

  export default {
    components: {
      NavBar
    }
  }
</script>

<style>
  /* Load normalize without scoped attribute */
  @import './assets/scss/_normalize.scss';
</style>
