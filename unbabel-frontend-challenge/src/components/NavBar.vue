<template>
  <nav class="navbar">
    <div class="container navbar__container">
      <h1 class="navbar__title">Transcriptions</h1>
      <div class="navbar__buttons">
        <BaseIcon
          name="upload"
          clickable
          @click.native="uploadTranscriptions()"
        />
        <BaseIcon
          name="fetch-document"
          clickable
          @click.native="fetchTranscriptions()"
        />
      </div>
    </div>
  </nav>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Navbar',
    methods: {
      ...mapActions('transcriptions', [
        'fetchTranscriptions',
        'uploadTranscriptions'
      ])
    }
  }
</script>

<style lang="scss" scoped>
  .navbar {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    background-color: #ffffff;
    width: 100%;
    height: 70px;
    margin: 0 0 50px 0;
    box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.35);

    &__container {
      width: 100%;
      max-width: $content-width;
      padding: 0 $padding-base;
      display: flex;
      flex-flow: row nowrap;
      align-items: center;
      justify-content: space-between;
    }

    &__title {
      font-family: Montserrat;
      font-weight: $font-weight-medium;
      font-size: $font-size-title;
      color: $color-title;
      display: inline-block;
    }
  }
</style>
