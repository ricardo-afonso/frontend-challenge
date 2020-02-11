<template>
  <div class="notification" :class="notificationTypeClass">
    <p>{{ notification.message }}</p>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    props: {
      notification: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        timeout: null
      }
    },
    mounted() {
      this.timeout = setTimeout(() => this.remove(this.notification), 4000)
    },
    beforeDestroy() {
      clearTimeout(this.timeout)
    },
    computed: {
      notificationTypeClass() {
        return `-${this.notification.type}`
      }
    },
    methods: mapActions('notification', ['remove'])
  }
</script>

<style scoped lang="scss">
  .notification {
    margin: 1em 0 1em;
    padding: 1px 10px;
    font-family: Open Sans;
    font-size: 10px;
    &.-success {
      background-color: $color-positive;
      color: $color-positive-dark;
      border-left: 3px solid $color-positive-dark;
    }
    &.-error {
      background-color: $color-negative;
      color: $color-negative-dark;
      border-left: 3px solid $color-negative-dark;
    }
  }
</style>
