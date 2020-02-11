<template>
  <div class="loader">
    <div class="loader__spinner"></div>
  </div>
</template>

<script>
  export default {
    name: 'Loading'
  }
</script>

<style scoped lang="scss">
  .loader {
    background: transparentize($color-background, 0.2);
    position: fixed;
    z-index: 99999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .loader__spinner,
  .loader__spinner:before,
  .loader__spinner:after {
    background: $color-checkbox;
    -webkit-animation: load1 1s infinite ease-in-out;
    animation: load1 1s infinite ease-in-out;
    width: 1em;
    height: 4em;
    position: absolute;
  }
  .loader__spinner {
    color: $color-checkbox;
    position: absolute;
    text-indent: -9999em;
    margin: 88px auto;
    //position: relative;
    left: 50%;
    top: 20%;
    font-size: 11px;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }
  .loader__spinner:before,
  .loader__spinner:after {
    position: absolute;
    top: 0;
    content: '';
  }
  .loader__spinner:before {
    left: -1.5em;
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }
  .loader__spinner:after {
    left: 1.5em;
  }
  @-webkit-keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
  @keyframes load1 {
    0%,
    80%,
    100% {
      box-shadow: 0 0;
      height: 4em;
    }
    40% {
      box-shadow: 0 -2em;
      height: 5em;
    }
  }
</style>
