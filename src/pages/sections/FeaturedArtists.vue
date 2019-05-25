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
        <div class="col-md-4">
          <Card type="profile" plain>
            <img
              slot="image" class="img img-raised rounded"
              :src="require('@/assets/img/temp/card-profile1.jpg')"
              alt=""
            />

            <h4 class="card-title">Sofia Scarlett</h4>
            <h6 class="category">Albums: 7 | Songs: 43</h6>
            <div class="card-footer">
              <Button type="info">
                Sofia's Profile
              </Button>
            </div>

          </Card>
        </div>
        <div class="col-md-4">
          <Card type="profile" plain>
            <img
              slot="image"
              class="img img-raised rounded"
              :src="require('@/assets/img/temp/card-profile2.jpg')"
            />

            <h4 class="card-title">Lucas Jacob</h4>
            <h6 class="category">Albums: 3 | Songs: 22</h6>
            <div class="card-footer">
              <Button type="info">
                Lucas's Profile
              </Button>
            </div>

          </Card>
        </div>
        <div class="col-md-4">
          <Card type="profile" plain>
            <img
              slot="image"
              class="img img-raised rounded"
              :src="require('@/assets/img/temp/card-profile3.jpg')"
              alt=""
            />

            <h4 class="card-title">Amelia Charlotte</h4>
            <h6 class="category">Albums: 4 | Songs: 16</h6>
            <div class="card-footer">
              <Button type="info">
                Amelia's Profile
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

  export default {
    name: 'featured-artists',
    components: {
      Card,
      Button,
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
