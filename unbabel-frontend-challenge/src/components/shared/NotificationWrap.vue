<template>
  <div class="notification-wrap" transition="fade">
    <Notification
      v-for="notification in notifications"
      :key="notification.id"
      :notification="notification"
    />
  </div>
</template>

<script>
  import Notification from '@/components/shared/Notification.vue'
  import { mapState } from 'vuex'

  export default {
    components: {
      Notification
    },
    computed: mapState('notification', ['notifications'])
  }
</script>

<style scoped lang="scss">
  .notification-wrap {
    position: fixed;
    top: 80px;
    right: 0;
    margin-right: 40px;
  }
</style>
