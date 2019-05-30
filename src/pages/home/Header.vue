<template>
  <div class="page-header clear-filter" filter-color="secondary">
    <parallax
      class="page-header-image"
      :style="`background-image:url(${require('@/assets/img/header.jpg')})`"
    >
    </parallax>
    <div class="container">
      <FeaturedArtists/>
      <Intro/>
    </div>
  </div>
</template>

<script>
  import FeaturedArtists from '../sections/FeaturedArtists';
  import Intro from './Intro';

  export default {
    name: 'index-header',
    components: {
      Intro,
      FeaturedArtists
    },
  };
</script>

<style lang="scss" scoped>
  .page-header {
    @media (max-width: 768px) {
      .container {
        overflow: scroll;
      }
    }
  }
</style>
