<template>
  <div class="featured-artists">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 class="title">Featured Artists</h2>
          <h4 class="description">
            Our featured artists for the week.
          </h4>
        </div>
      </div>
      <div class="row">
        <div
          v-for="artist in artists"
          class="col-md-4"
          :key="artist.id"
        >
          <ArtistCard :artist="artist"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import ArtistCard from '@/components/Cards/ArtistCard';

  export default {
    name: 'featured-artists',
    components: {
      ArtistCard,
    },
    data () {
      return {
        artists: []
      };
    },
    methods: {
      ...mapActions([
        'FetchFeaturedArtists'
      ]),
    },
    mounted () {
      this.FetchFeaturedArtists()
        .then(artists => {
          this.artists = artists;
        })
        .catch(err => console.error(err));
    }
  };
</script>

<style lang="scss" scoped>
  .featured-artists {

  }
</style>
