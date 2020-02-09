<template>
  <div>
    <h1>Transcription list</h1>
    <div v-if="transcriptions.transcriptions.length">
      <Transcription
        v-for="transcription in transcriptions.transcriptions"
        :key="transcription.id"
        :transcription="transcription"
      />
    </div>
  </div>
</template>

<script>
  import Transcription from '@/components/transcriptions/Transcription.vue'
  import { mapState } from 'vuex'

  export default {
    components: {
      Transcription
    },
    computed: {
      ...mapState(['transcriptions'])
    }
  }
</script>
