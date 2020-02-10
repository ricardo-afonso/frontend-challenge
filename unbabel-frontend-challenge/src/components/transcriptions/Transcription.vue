<template>
  <div>
    <Checkbox :id="transcription.id" />
    <BaseIcon name="person" />
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
    <hr />
  </div>
</template>

<script>
  import EditableText from '@/components/shared/EditableText.vue'

  export default {
    name: 'Transcription',
    props: {
      transcription: Object
    },
    components: { EditableText }
  }
</script>

<style scoped lang="scss"></style>
