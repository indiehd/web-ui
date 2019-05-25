<template>
  <footer class="footer footer-big" data-background-color="primary">
    <div class="container">
      <div class="content">
        <div class="row">
          <div class="col-md-3">
            <a href="#">
              <h5>Why IndieHD ?</h5>
            </a>
            <p>
              Artists may join the indieHD community free of charge, and are free to close their accounts at any time
              no long-term contract, no fine-print.
            </p>
          </div>
          <div class="col-md-3">
            <h5>
              Numbers Don't Lie
            </h5>
            <h5>
              281,032 <small>Total Albums</small>
            </h5>
            <h5>
              2,823,056 <small>Total Tracks</small>
            </h5>
            <h5>
              2,321,592 <small>Total Downloads</small>
            </h5>
          </div>
          <div class="col-md-3">
            <h5>Help</h5>
            <ul class="links-vertical">
              <li>
                <a href="#">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="#">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#">
                  Sign-Up
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-3">
            <h5>Legal</h5>
            <ul class="links-vertical">
              <li>
                <a href="#">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#">
                  DMCA Info
                </a>
              </li>
              <li>
                <a href="#">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#">
                  Security Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr/>
      <div class="copyright pull-center">
        Copyright &copy; 2008 - 2019 IndieHD LLC, All Rights Reserved.
      </div>
    </div>
  </footer>
</template>
<script>
  export default {
    props: {
      backgroundColor: String,
      type: String
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
