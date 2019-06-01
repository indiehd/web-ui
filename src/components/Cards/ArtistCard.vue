<template>
  <div class="artist-card">
    <Card type="profile" plain>
      <!-- todo: Get an image from the artist somehow -->
      <img
        slot="image"
        class="img img-raised rounded"
        :src="require(`@/assets/img/temp/card-profile1.jpg`)"
        alt=""
      />

      <h4 class="card-title">{{ artist.profile.moniker }}</h4>
      <h6 class="category">Albums: {{ artist.albums.length }} | Songs: {{ artist.songs.length }}</h6>
      <div class="card-footer">
        <!-- todo: @click.native="$route.push(artist profile route)" -->
        <Button type="primary">
          Visit Profile
        </Button>
      </div>
    </Card>
  </div>
</template>

<script>
  import Card from './Card';
  import Button from '../Button';

  export default {
    name: 'artist-card',
    components: {
      Card,
      Button
    },
    props: {
      artist: {type: Object, required: true}
    }
  };
</script>

<style lang="scss" scoped>
  .artist-card {

  }
</style>
