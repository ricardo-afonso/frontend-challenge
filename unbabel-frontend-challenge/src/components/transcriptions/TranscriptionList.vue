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
    <BaseIcon
      name="add-row"
      clickable
      @click.native="addSingleTranscription()"
    />
  </div>
</template>

<script>
  import Transcription from '@/components/transcriptions/Transcription.vue'
  import { mapState, mapActions } from 'vuex'

  export default {
    components: {
      Transcription
    },
    computed: {
      ...mapState(['transcriptions'])
    },
    methods: {
      ...mapActions('transcriptions', ['addSingleTranscription'])
    }
  }
</script>
