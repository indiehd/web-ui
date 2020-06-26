<template>
  <!--     *********    PROFILE CARDS     *********      -->
  <div class="cards">
    <div class="container">
      <div class="title">
        <h3>
          <small>Profile Cards</small>
        </h3>
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3">
          <card type="profile">
            <img class="img rounded" slot="image" src="img/julie.jpg">
            <a href="pablo">
              <h4 class="card-title">Julie Andrew</h4>
            </a>
            <h6 class="card-category text-info">
              Web Designer
            </h6>
            <div class="card-footer">
              <a class="btn btn-icon btn-neutral btn-lg btn-twitter" href="#pablo"><i
                  class="fab fa-twitter"></i></a>
              <a class="btn btn-icon btn-neutral btn-lg btn-dribbble" href="#pablo"><i
                  class="fab fa-dribbble"></i></a>
              <a class="btn btn-icon btn-neutral btn-lg btn-instagram" href="#pablo"><i
                  class="fab fa-instagram"></i></a>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-3">
          <card type="profile">
            <img class="img img-raised" slot="avatar" src="img/mike.jpg">
            <div class="card-body">
              <h4 class="card-title">Alec Mike</h4>
              <h6 class="category text-gray">
                Designer
              </h6>
              <p class="card-description">
                One of the co-founders. Alec drives the technical strategy of the platform, customer
                support and brand.
              </p>
              <div class="card-footer">
                <a class="btn btn-icon btn-twitter btn-round" href="#pablo"><i
                    class="fab fa-twitter"></i></a>
                <a class="btn btn-icon btn-facebook btn-round" href="#pablo"><i
                    class="fab fa-facebook-square"></i></a>
                <a class="btn btn-icon btn-google btn-round" href="#pablo"><i class="fab fa-google"></i></a>
              </div>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-3">
          <card color="black" type="profile">
            <img class="img img-raised" slot="avatar" src="img/james.jpg">
            <div>
              <h6 class="card-category">CEO / Co-Founder</h6>
              <h4 class="card-title">James Thompson</h4>
              <p class="card-description">
                Don't be scared of the truth because we need to restart the human foundation in truth.
              </p>
              <a class="btn btn-primary btn-round" href="#pablo">Follow</a>
            </div>
          </card>
        </div>
        <div class="col-md-6 col-lg-3">
          <card type="profile">
            <div>
              <div class="card-avatar">
                <a href="#pablo">
                  <img class="img img-raised" src="img/olivia.jpg">
                </a>
              </div>
              <h6 class="category text-gray">Growth Hacker</h6>
              <h4 class="card-title">Olivia Thompson</h4>
              <p class="card-description">
                "Work hard play harder."
              </p>
              <div class="card-footer">
                <a class="btn btn-icon btn-primary btn-simple btn-round" href="#pablo"><i
                    class="fab fa-twitter"></i></a>
                <a class="btn btn-icon  btn-primary btn-simple btn-round" href="#pablo"><i
                    class="fab fa-facebook-square"></i></a>
                <a class="btn btn-icon  btn-primary btn-simple btn-round" href="#pablo"><i
                    class="fab fa-google"></i></a>
              </div>
            </div>
          </card>
        </div>
      </div>
    </div>
  </div>
  <!--     *********    END PROFILE CARDS      *********      -->
</template>
<script>
  import { Button, Card } from '@/components';

  export default {
    components: {
      Card,
      [Button.name]: Button
    }
  };
</script>
<style>
</style>
