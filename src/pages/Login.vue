<template>
  <div class="login page-header header-filter" filter-color="secondary">
    <div :style="`background-image:url(${require('@/assets/img/header.jpg')})`"
         class="page-header-image">
    </div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <Card type="login">
            <div class="logo-container" slot="header">
              <img :src="require('@/assets/img/logo.svg')" alt="" />
            </div>

            <fg-input
                addon-left-icon="now-ui-icons users_circle-08"
                class="no-border input-lg"
                placeholder="Email ..."
                v-model="frmData.email"
            />

            <fg-input
                addon-left-icon="now-ui-icons text_caps-small"
                class="no-border input-lg"
                password
                placeholder="Password ..."
                v-model="frmData.password"
            />

            <template slot="raw-content">
              <div class="card-footer text-center">
                <Button
                    :disabled="loading"
                    :loading="loading"
                    @click.native="submit()"
                    block
                    round
                    size="lg"
                    type="primary"
                >
                  {{ loading ? 'Loading ... ' : 'Login' }}
                </Button>
              </div>
              <div class="pull-left">
                <h6>
                  <a class="link footer-link" href="#">Create Account</a>
                </h6>
              </div>
              <div class="pull-right">
                <h6>
                  <a class="link footer-link" href="#">Need Help?</a>
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
  import { Button, Card, FormGroupInput } from '@/components';

  import { mapActions } from 'vuex';

  export default {
    name: 'login',
    components: {
      Button,
      Card,
      'fg-input': FormGroupInput
    },
    data () {
      return {
        loading: false,
        frmData: {}
      };
    },
    methods: {
      ...mapActions([
        'Login'
      ]),
      submit () {
        this.loading = true;
        this.Login(this.frmData).then(() => {
          this.loading = false;
          this.$router.push('/dashboard');
        }).catch(err => {
          this.loading = false;
          console.log(err);
        });
      }
    }
  };
</script>
<style lang="scss" scoped>
  .login {
    .card-login {
      padding: 50px;
    }
  }
</style>
