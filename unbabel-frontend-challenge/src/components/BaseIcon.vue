<template>
  <div class="icon-wrap">
    <svg class="icon" :width="width" :height="height">
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
      }
    }
  }
</script>

<style scoped>
  .icon-wrap {
    display: inline-flex;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
  }
  .icon {
    margin-right: 6px;
  }
</style>
