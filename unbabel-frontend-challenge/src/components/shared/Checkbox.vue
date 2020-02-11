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
  .checkbox {
    display: flex;
    vertical-align: top;
    margin-right: 15px;
    cursor: pointer;
    &__input {
      opacity: 0;
      &:checked {
        + .checkbox__label:after {
          content: '';
        }
        + .checkbox__label:before {
          background: $color-checkbox;
        }
      }
    }
    &__label {
      position: relative;
      display: inline-block;
      padding-left: 30px;
      cursor: pointer;
      &:before {
        position: absolute;
        content: '';
        display: inline-block;
        box-sizing: border-box;
        height: 16px;
        width: 16px;
        border: 2px solid $color-checkbox;
        border-radius: 3px;
        left: 0px;
        top: 3px;
      }
      &:after {
        position: absolute;
        content: none;
        display: inline-block;
        height: 4px;
        width: 7px;
        color: #ffffff;
        border-left: 2px solid;
        border-bottom: 2px solid;
        transform: rotate(-45deg);
        left: 4px;
        top: 7px;
      }
    }
  }
</style>
