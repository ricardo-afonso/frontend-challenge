<template>
  <div id="app">
    <NavBar />
    <router-view />
    <NotificationWrap />
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
  import NotificationWrap from '@/components/shared/NotificationWrap.vue'

  export default {
    components: {
      NavBar,
      NotificationWrap
    }
  }
</script>

<style>
  /* Load normalize without scoped attribute */
  @import './assets/scss/_normalize.scss';
</style>
