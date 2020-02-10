<template>
  <div class="checkbox">
    <input class="checkbox__input" type="checkbox" :id="id" />
    <label class="checkbox__label" :for="id">
      <slot></slot>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'CheckBox',

    props: {
      id: {
        type: Number
      }
    }
  }
</script>

<style lang="scss" scoped>
  //TODO: Add colors from global style
  .checkbox {
    &__input {
      opacity: 0;
      &:checked {
        + .checkbox__label:after {
          content: '';
        }
      }
    }
    &__label {
      position: relative;
      display: inline-block;
      padding-left: 22px;
      &:before {
        position: absolute;
        content: '';
        display: inline-block;
        height: 16px;
        width: 16px;
        border: 1px solid;
        left: 0px;
        top: 3px;
      }
      &:after {
        position: absolute;
        content: none;
        display: inline-block;
        height: 5px;
        width: 9px;
        border-left: 2px solid;
        border-bottom: 2px solid;
        transform: rotate(-45deg);
        left: 4px;
        top: 7px;
      }
    }
  }
</style>
