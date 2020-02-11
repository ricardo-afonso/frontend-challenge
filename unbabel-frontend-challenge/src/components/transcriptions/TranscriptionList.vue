<template>
  <div class="container transcriptions">
    <div v-if="transcriptions.transcriptions.length">
      <Transcription
        v-for="transcription in transcriptions.transcriptions"
        :key="transcription.id"
        :transcription="transcription"
      />
    </div>
    <div class="transcriptions__add">
      <BaseIcon
        name="add-row"
        clickable
        @click.native="addSingleTranscription()"
      />
    </div>
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

<style scope lang="scss">
  .transcriptions {
    max-width: $content-width;
    &__add {
      margin: 35px 0;
      text-align: center;
    }
  }
</style>
