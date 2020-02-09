<template>
  <div>
    Hello Main component
    <TranscriptionList />
  </div>
</template>

<script>
  import TranscriptionList from '@/components/transcriptions/TranscriptionList.vue'

  export default {
    name: 'Home',
    components: {
      TranscriptionList
    }
  }
</script>

<style lang="scss" scoped></style>
