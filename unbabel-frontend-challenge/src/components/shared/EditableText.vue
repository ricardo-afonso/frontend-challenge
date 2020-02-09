<template>
  <div>
    <div v-if="!editing">
      <span class="text" @click="enableEditing">{{ value }}</span>
    </div>
    <div v-if="editing">
      <input v-if="type !== 'textarea'" type="text" v-model="newValue" />
      <textarea
        v-if="type === 'textarea'"
        ref="input"
        v-model="newValue"
      ></textarea>
      <button class="input-btn --cancel" @click="disableEditing">Cancel</button>
      <button class="input-btn --save" @click="saveEdit">Save</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EditableText',
    props: {
      value: String,
      transcription: Object,
      type: String
    },
    data() {
      return {
        newValue: null,
        editing: false
      }
    },
    methods: {
      enableEditing: function() {
        this.newValue = this.value
        this.editing = true
      },
      disableEditing: function() {
        this.newValue = null
        this.editing = false
      },
      saveEdit: function() {
        this.value = this.newValue
        this.disableEditing()
      }
    }
  }
</script>

<style scoped lang="scss"></style>
