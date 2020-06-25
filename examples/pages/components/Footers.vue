<template>
  <div class="section section-footers" data-background-color="gray">
    <div class="container">
      <div class="title">
        <h3>Footer Areas</h3>
      </div>
    </div>
    <div id="footer-areas">
      <!--     *********    SIMPLE FOOTER WITH SOCIAL AND BRAND     *********      -->
      <footer class="footer footer-white">
        <div class="container">
          <a class="footer-brand" href="https:///www.creative-tim.com">Now Ui Kit PRO</a>
          <ul class="pull-center">
            <li>
              <a class="nav-link" href="#pablo">
                Creative Tim
              </a>
            </li>
            <li>
              <a class="nav-link" href="#pablo">
                About Us
              </a>
            </li>
            <li>
              <a class="nav-link" href="#pablo">
                Blog
              </a>
            </li>
            <li>
              <a class="nav-link" href="#pablo">
                Licenses
              </a>
            </li>
          </ul>
          <ul class="social-buttons pull-right">
            <li>
              <a class="btn btn-icon btn-neutral btn-twitter" href="https://twitter.com/CreativeTim"
                 target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a class="btn btn-icon btn-neutral btn-dribbble" href="https://www.facebook.com/CreativeTim"
                 target="_blank">
                <i class="fab fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a class="btn btn-icon btn-neutral btn-google" href="https://www.instagram.com/CreativeTimOfficial"
                 target="_blank">
                <i class="fab fa-google-plus"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <!--     *********   END SIMPLE FOOTER WITH SOCIAL AND BRAND     *********      -->
      <br />
      <br />
      <!--     *********    SIMPLE FOOTER     *********      -->
      <footer class="footer">
        <div class="container">
          <nav>
            <ul>
              <li>
                <a class="nav-link" href="https://www.creative-tim.com">
                  Creative Tim
                </a>
              </li>
              <li>
                <a class="nav-link" href="https:///presentation.creative-tim.com">
                  About Us
                </a>
              </li>
              <li>
                <a class="nav-link" href="https:///blog.creative-tim.com">
                  Blog
                </a>
              </li>
              <li>
                <a class="nav-link" href="https://www.creative-tim.com/license" target="_blank">
                  License
                </a>
              </li>
            </ul>
          </nav>
          <div class="copyright">
            &copy;
            {{year}}
            , Designed by
            <a class="copyright-link" href="https:///www.invisionapp.com" target="_blank">Invision</a>. Coded
            by
            <a class="copyright-link" href="https://www.creative-tim.com" target="_blank">Creative Tim</a>.
          </div>
        </div>
      </footer>
      <!--     *********   END SIMPLE FOOTER     *********      -->
      <br />
      <br />
      <!--     *********    BLACK SIMPLE FOOTER WITH SOCIAL AND BRAND     *********      -->
      <footer class="footer" data-background-color="black">
        <div class="container">
          <a class="footer-brand" href="#pablo">Now Ui Kit PRO</a>
          <ul class="pull-center">
            <li>
              <a href="#pablo">
                Blog
              </a>
            </li>
            <li>
              <a href="#pablo">
                Presentation
              </a>
            </li>
            <li>
              <a href="#pablo">
                Discover
              </a>
            </li>
            <li>
              <a href="#pablo">
                Payment
              </a>
            </li>
            <li>
              <a href="#pablo">
                Contact Us
              </a>
            </li>
          </ul>
          <ul class="social-buttons pull-right">
            <li>
              <a class="btn btn-icon btn-link btn-neutral" href="https://twitter.com/CreativeTim"
                 target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a class="btn btn-icon btn-neutral btn-link" href="https://www.facebook.com/CreativeTim"
                 target="_blank">
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a class="btn btn-icon btn-neutral btn-link" href="https://www.instagram.com/CreativeTimOfficial"
                 target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <!--     *********   END BLACK SIMPLE FOOTER WITH SOCIAL AND BRAND     *********      -->
      <br />
      <br />
      <!--     *********    BIG FOOTER     *********      -->
      <footer class="footer footer-big footer-white">
        <div class="container">
          <div class="content">
            <div class="row">
              <div class="col-md-4">
                <h5>About Us</h5>
                <p>Creative Tim is a startup that creates design tools that make the web development
                  process faster and easier. </p>
                <p>We love the web and care deeply for how users interact with a digital product. We
                  power businesses and individuals to create better looking web projects around the
                  world. </p>
              </div>
              <div class="col-md-4">
                <h5>Social Feed</h5>
                <div class="social-feed">
                  <div class="feed-line">
                    <i class="fab fa-twitter"></i>
                    <p>How to handle ethical disagreements with your clients.</p>
                  </div>
                  <div class="feed-line">
                    <i class="fab fa-twitter"></i>
                    <p>The tangible benefits of designing at 1x pixel density.</p>
                  </div>
                  <div class="feed-line">
                    <i class="fab fa-facebook-square"></i>
                    <p>A collection of 25 stunning sites that you can use for inspiration.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <h5>Instagram Feed</h5>
                <div class="gallery-feed">
                  <img alt="" class="img img-raised rounded" v-lazy="'img/olivia.jpg'" />
                  <img alt="" class="img img-raised rounded" v-lazy="'img/james.jpg'" />
                  <img alt="" class="img img-raised rounded" v-lazy="'img/michael.jpg'" />
                  <img alt="" class="img img-raised rounded" v-lazy="'img/emily.jpg'" />
                  <img alt="" class="img img-raised rounded" v-lazy="'img/marie.jpg'" />
                  <img alt="" class="img img-raised rounded" v-lazy="'img/usher.jpg'" />
                  <img alt="" class="img img-raised rounded" v-lazy="'img/mike.jpg'" />
                  <img alt="" class="img img-raised rounded" v-lazy="'img/julie.jpg'" />
                </div>
              </div>
            </div>
          </div>
          <hr />
          <ul class="pull-left">
            <li>
              <a href="#pablo">
                Blog
              </a>
            </li>
            <li>
              <a href="#pablo">
                Presentation
              </a>
            </li>
            <li>
              <a href="#pablo">
                Discover
              </a>
            </li>
            <li>
              <a href="#pablo">
                Payment
              </a>
            </li>
            <li>
              <a href="#pablo">
                Contact Us
              </a>
            </li>
          </ul>
          <div class="copyright pull-right">
            Copyright &copy;
            {{year}}
            Creative Tim All Rights Reserved.
          </div>
        </div>
      </footer>
      <!--     *********   END BIG FOOTER     *********      -->
      <br />
      <br />
      <!--     *********    BIG BlACK FOOTER     *********      -->
      <footer class="footer footer-big" data-background-color="black">
        <div class="container">
          <div class="content">
            <div class="row">
              <div class="col-md-2">
                <h5>About Us</h5>
                <ul class="links-vertical">
                  <li>
                    <a class="text-muted" href="#pablo">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#pablo">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#pablo">
                      Presentation
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#pablo">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <h5>Market</h5>
                <ul class="links-vertical">
                  <li>
                    <a class="text-muted" href="#pablo">
                      Sales FAQ
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#pablo">
                      How to Register
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#pablo">
                      Sell Goods
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#pablo">
                      Receive Payment
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#pablo">
                      Transactions Issues
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#pablo">
                      Affiliates Program
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <h5>Social Feed</h5>
                <div class="social-feed">
                  <div class="feed-line">
                    <i class="fab fa-twitter"></i>
                    <p>How to handle ethical disagreements with your clients.</p>
                  </div>
                  <div class="feed-line">
                    <i class="fab fa-twitter"></i>
                    <p>The tangible benefits of designing at 1x pixel density.</p>
                  </div>
                  <div class="feed-line">
                    <i class="fab fa-facebook-square"></i>
                    <p>A collection of 25 stunning sites that you can use for inspiration.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <h5>Follow Us</h5>
                <ul class="social-buttons">
                  <li>
                    <a class="btn btn-icon btn-neutral btn-twitter btn-round" href="#pablo">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a class="btn btn-icon btn-neutral btn-facebook btn-round" href="#pablo">
                      <i class="fab fa-facebook-square"></i>
                    </a>
                  </li>
                  <li>
                    <a class="btn btn-icon btn-neutral btn-dribbble btn-round" href="#pablo">
                      <i class="fab fa-dribbble"></i>
                    </a>
                  </li>
                  <li>
                    <a class="btn btn-icon btn-neutral btn-google btn-round" href="#pablo">
                      <i class="fab fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a class="btn btn-icon btn-neutral btn-instagram btn-round" href="#pablo">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
                <h5>
                  <small>Numbers Don't Lie</small>
                </h5>
                <h5>14.521
                  <small class="text-muted">Freelancers</small>
                </h5>
                <h5>1.423.183
                  <small class="text-muted">Transactions</small>
                </h5>
              </div>
            </div>
          </div>
          <hr />
          <div class="copyright">
            Copyright &copy;
            {{year}}
            Creative Tim All Rights Reserved.
          </div>
        </div>
      </footer>
      <!--     *********   END BIG WHITE FOOTER     *********      -->
      <br />
      <br />
      <!--     *********    BIG WHITE FOOTER V2     *********      -->
      <footer class="footer footer-white footer-big">
        <div class="container">
          <div class="content">
            <div class="row">
              <div class="col-md-3">
                <a href="#pablo">
                  <h5>Now Ui Kit PRO</h5>
                </a>
                <p>Probably the best UI Kit in the world! We know you've been waiting for it, so don't
                  be shy!</p>
              </div>
              <div class="col-md-2">
                <h5>About</h5>
                <ul class="links-vertical">
                  <li>
                    <a href="#pablo">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      Presentation
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <h5>Market</h5>
                <ul class="links-vertical">
                  <li>
                    <a href="#pablo">
                      Sales FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      How to Register
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      Sell Goods
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      Receive Payment
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      Transactions Issues
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-2">
                <h5>Legal</h5>
                <ul class="links-vertical">
                  <li>
                    <a href="#pablo">
                      Transactions FAQ
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a href="#pablo">
                      Licenses
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-md-3">
                <h5>Subscribe to Newsletter</h5>
                <p>
                  Join our newsletter and get news in your inbox every week! We hate spam too, so no
                  worries about this.
                </p>
                <form action="" class="form form-newsletter" method="">
                  <fg-input placeholder="Your Email...">
                  </fg-input>
                  <n-button icon round type="primary">
                    <i class="now-ui-icons ui-1_email-85"></i>
                  </n-button>
                </form>
              </div>
            </div>
          </div>
          <hr />
          <ul class="social-buttons">
            <li>
              <a class="btn btn-icon btn-neutral btn-twitter btn-lg" href="#pablo">
                <i class="fab fa-twitter"></i>
              </a>
            </li>
            <li>
              <a class="btn btn-icon btn-neutral btn-facebook btn-lg" href="#pablo">
                <i class="fab fa-facebook-square"></i>
              </a>
            </li>
            <li>
              <a class="btn btn-icon btn-neutral btn-dribbble btn-lg" href="#pablo">
                <i class="fab fa-dribbble"></i>
              </a>
            </li>
            <li>
              <a class="btn btn-icon btn-neutral btn-google btn-lg" href="#pablo">
                <i class="fab fa-google-plus"></i>
              </a>
            </li>
            <li>
              <a class="btn btn-icon btn-neutral btn-youtube btn-lg" href="#pablo">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
          </ul>
          <div class="copyright pull-center">
            Copyright &copy;
            {{year}}
            Creative Tim All Rights Reserved.
          </div>
        </div>
      </footer>
      <!--     *********   END BIG WHITE FOOTER v2     *********      -->
    </div>
  </div>
</template>
<script>
  import { Button, FormGroupInput } from '@/components';

  export default {
    components: {
      [FormGroupInput.name]: FormGroupInput,
      [Button.name]: Button
    },
    data () {
      return {
        year: new Date().getFullYear()
      };
    }
  };
</script>
<style>
</style>
