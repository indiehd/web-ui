<template>
  <div class="login page-header header-filter" filter-color="secondary">
    <div class="page-header-image"
         :style="`background-image:url(${require('@/assets/img/header.jpg')})`">
    </div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <Card type="login">
            <div slot="header" class="logo-container">
              <img :src="require('@/assets/img/logo.svg')" alt=""/>
            </div>

            <fg-input
              v-model="frmData.email"
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="Email ..."
            />

            <fg-input
              v-model="frmData.password"
              class="no-border input-lg"
              addon-left-icon="now-ui-icons text_caps-small"
              placeholder="Password ..."
              password
            />


            <template slot="raw-content">
              <div class="card-footer text-center">
                <a
                  @click.prevent="submit()"
                  href="#"
                  class="btn btn-primary btn-round btn-lg btn-block"
                >Login</a>
              </div>
              <div class="pull-left">
                <h6>
                  <a href="#" class="link footer-link">Create Account</a>
                </h6>
              </div>
              <div class="pull-right">
                <h6>
                  <a href="#" class="link footer-link">Need Help?</a>
                </h6>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    Card,
    Button,
    FormGroupInput,
  } from '@/components';

  import {mapActions} from 'vuex';

  export default {
    name: 'login',
    components: {
      Button,
      Card,
      'fg-input': FormGroupInput,
    },
    data () {
      return {
        frmData: {},
      };
    },
    methods: {
      ...mapActions([
        'Login',
      ]),
      submit () {
        this.Login(this.frmData)
            .then(() => {
              this.$router.push('/dashboard');
            });
      },
    },
  };
</script>
<style lang="scss" scoped>
  .login {
    .card-login {
      padding: 50px;
    }
  }
</style>