<template>
  <div class="intro">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto">
          <img
            class="indie-logo"
            :src="require('@/assets/img/logo.svg')"
            alt=""
          />
          <h2 class="title">The IndieHD Project</h2>
          <h4 class="description">A simple, do-it-yourself platform for selling your music to fans, digitally.</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'intro'
  };
</script>
<style lang="scss" scoped>
  .intro {
    text-align: center;
    padding: 80px 0;
  }
</style>
