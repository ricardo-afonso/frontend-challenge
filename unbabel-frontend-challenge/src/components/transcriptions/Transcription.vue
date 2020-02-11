<template>
  <div class="transcription">
    <Checkbox :id="transcription.id">
      <BaseIcon name="person" />
    </Checkbox>
    <div class="transcription__text">
      <EditableText
        v-model="transcription.voice"
        :id="transcription.id"
        field="voice"
      />
      <EditableText
        v-model="transcription.text"
        :id="transcription.id"
        field="text"
      />
    </div>
    <BaseIcon
      name="delete"
      class="transcription__delete"
      @click.native="deleteTranscription(transcription.id)"
    />
  </div>
</template>

<script>
  import EditableText from '@/components/shared/EditableText.vue'
  import { mapActions } from 'vuex'

  export default {
    name: 'Transcription',
    props: {
      transcription: Object
    },
    components: { EditableText },
    methods: {
      ...mapActions('transcriptions', ['deleteTranscription'])
    }
  }
</script>

<style scoped lang="scss">
  .transcription {
    display: flex;
    //flex-flow: row nowrap;
    align-items: flex-start;
    background: #ffffff;
    border: 1px solid $color-border;
    padding: 30px 50px 30px 30px;
    &:not(:last-child) {
      border-bottom: none;
    }
    &:hover &__delete {
      visibility: visible;
    }
    &__text {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    &__delete {
      visibility: hidden;
      cursor: pointer;
    }
    &.-error {
      border: 1px solid $color-negative;
    }
  }
</style>
