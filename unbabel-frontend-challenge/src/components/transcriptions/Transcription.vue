<template>
  <div>
    <BaseIcon name="person" />
    <EditableText v-model="transcription.voice" />
    <EditableText v-model="transcription.text" type="textarea" />
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
