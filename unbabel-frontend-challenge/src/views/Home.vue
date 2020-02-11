<template>
  <div class="bg">
    <Loading v-if="transcriptions.loading" />
    <TranscriptionList />
  </div>
</template>

<script>
  import TranscriptionList from '@/components/transcriptions/TranscriptionList.vue'
  import Loading from '@/components/shared/Loading.vue'
  import { mapState } from 'vuex'

  export default {
    name: 'Home',
    components: {
      TranscriptionList,
      Loading
    },
    computed: {
      ...mapState(['transcriptions'])
    }
  }
</script>

<style lang="scss" scoped></style>
