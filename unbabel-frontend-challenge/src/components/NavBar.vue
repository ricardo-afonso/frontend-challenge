<template>
  <nav>
    Transcriptions
    <BaseIcon name="upload" clickable @click.native="uploadTranscriptions()" />
    <BaseIcon
      name="fetch-document"
      clickable
      @click.native="fetchTranscriptions()"
    />
  </nav>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Navbar',
    methods: {
      ...mapActions('transcriptions', [
        'fetchTranscriptions',
        'uploadTranscriptions'
      ])
    }
  }
</script>

<style lang="scss" scoped></style>
