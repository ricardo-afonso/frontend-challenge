<template>
  <div class="icon-wrap">
    <svg
      class="icon"
      :class="{ 'icon-clickable': clickable }"
      :width="width"
      :height="height"
    >
      <use v-bind="{ 'xlink:href': '/icons-sprite.svg#' + name }" />
    </svg>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'Icon',
    props: {
      name: String,
      width: {
        type: [Number, String],
        default: 24
      },
      height: {
        type: [Number, String],
        default: 24
      },
      clickable: {
        type: [Boolean, String],
        default: false
      }
    },
    computed: {
      isClickable() {
        return this.props.clickable
      }
    }
  }
</script>

<style scoped lang="scss">
  .icon {
    margin-right: 6px;
    &-wrap {
      display: inline-flex;
      align-items: center;
      font-size: 1rem;
      font-weight: 600;
    }
    &-clickable {
      cursor: pointer;
    }
  }
</style>
