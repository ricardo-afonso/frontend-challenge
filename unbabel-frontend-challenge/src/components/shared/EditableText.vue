<template>
  <div class="editable-text">
    <div v-if="!editing">
      <span :class="fieldTypeClass" @click="enableEditing">{{ itemText }}</span>
    </div>
    <div v-if="editing">
      <input
        v-if="field === 'voice'"
        ref="input"
        type="text"
        v-model="newValue"
        @blur="clickOutside"
      />
      <textarea
        v-if="field === 'text'"
        ref="input"
        v-model="newValue"
        @blur="clickOutside"
      ></textarea>
      <button class="editable-text__btn -cancel" @click="disableEditing" />
      <button class="editable-text__btn -save" @click="saveEdit" />
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
        window.setTimeout(() => {
          this.$refs.input.focus()
        }, 100)
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
        this.disableEditing()
      },
      clickOutside() {
        if (
          event &&
          event.relatedTarget &&
          event.relatedTarget.localName === 'button'
        ) {
          // Keep going - event will trigger on the button itself.
        } else {
          this.saveEdit()
          // a bit hacky, but not all DOM clicks produce an event.
        }
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
      },
      fieldTypeClass() {
        return `editable-text__${this.field}`
      }
    }
  }
</script>

<style scoped lang="scss">
  .editable-text {
    line-height: 22px;
    cursor: pointer;
    &__voice {
      @include voice-text;
    }
    &__text {
      @include transcription-text;
    }
    input[type='text'] {
      @include voice-text;
      width: 100%;
    }
    textarea {
      @include transcription-text;
      width: 100%;
      height: 150px;
      resize: vertical;
    }
    &__btn {
      background: transparent;
      border: none;
      cursor: pointer;
      &:hover {
        box-shadow: 0 1px 0 #0000004a;
      }
      &.-save:after {
        content: '\2714';
        color: $color-positive-dark;
      }
      &.-cancel:after {
        content: '\2716';
        color: $color-negative-dark;
      }
    }
  }
</style>
