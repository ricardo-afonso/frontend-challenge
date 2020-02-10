<template>
  <div>
    <div v-if="!editing">
      <span class="text" @click="enableEditing">{{ itemText }}</span>
    </div>
    <div v-if="editing">
      <input v-if="field === 'voice'" type="text" v-model="newValue" />
      <textarea
        v-if="field === 'text'"
        ref="input"
        v-model="newValue"
      ></textarea>
      <button class="input-btn --cancel" @click="disableEditing">Cancel</button>
      <button class="input-btn --save" @click="saveEdit">Save</button>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'EditableText',
    props: {
      value: String,
      id: Number,
      field: String
    },
    data() {
      return {
        newValue: null,
        editing: false
      }
    },
    methods: {
      ...mapActions('transcriptions', ['editTranscription']),
      enableEditing() {
        this.newValue = this.value
        this.editing = true
      },
      disableEditing() {
        this.newValue = null
        this.editing = false
      },
      saveEdit() {
        this.editTranscription({
          field: this.field,
          id: this.id,
          text: this.newValue
        })
        console.log('THE LOG:', {
          field: this.field,
          id: this.id,
          text: this.newValue
        }),
          this.disableEditing()
      }
    },
    computed: {
      itemText() {
        return (
          this.value ||
          (this.field === 'voice'
            ? 'Add a voice for the transcription'
            : "Add the transcription's text")
        )
      }
    }
  }
</script>

<style scoped lang="scss"></style>
