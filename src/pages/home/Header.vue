<template>
  <div class="page-header clear-filter" filter-color="secondary">
    <parallax
      class="page-header-image"
      :style="`background-image:url(${require('@/assets/img/header.jpg')})`"
    >
    </parallax>
    <div class="container">
      <FeaturedArtists/>
    </div>
  </div>
</template>

<script>
  import FeaturedArtists from '../sections/FeaturedArtists';

  export default {
    name: 'index-header',
    components: {
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
