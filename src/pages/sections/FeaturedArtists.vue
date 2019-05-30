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
          <Card type="profile" plain>
            <img
              slot="image"
              class="img img-raised rounded"
              :src="require(`@/assets/img/temp/card-profile1.jpg`)"
              alt=""
            />

            <h4 class="card-title">{{ artist.moniker }}</h4>
            <h6 class="category">Albums: {{ artist.albums_count }} | Songs: {{ artist.songs_count }}</h6>
            <div class="card-footer">
              <Button type="info">
                Visit Profile
              </Button>
            </div>

          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    Button,
    Card
  } from '@/components';

  import { mapActions } from 'vuex';

  export default {
    name: 'featured-artists',
    components: {
      Card,
      Button,
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
    .card {
      .card-title {
        margin: 10px 0 0;
      }

      h6 {
        margin-top: 5px;
      }
    }

    [class*="col-md-"]:nth-child(2) {
      margin-top: 45px;
    }
  }
</style>
