<template>
  <div class="index-page">

    <Header />

    <Intro />

    <Subscribe />

  </div>
</template>

<script>
  import Header from './home/Header';
  import Subscribe from './sections/Subscribe';
  import Intro from './home/Intro';

  export default {
    name: 'index',
    bodyClass: 'index-page',
    components: {
      Intro,
      Header,
      Subscribe
    }
  };
</script>

<style lang="scss" scoped>
  .index-page {

  }
</style>
