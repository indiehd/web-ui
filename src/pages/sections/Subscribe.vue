<template>
  <div
    class="subscribe-line subscribe-line-image"
    :style="`background-image:url(${require('@/assets/img/bg-1-lg.jpg')})`"
  >
    <div class="container">
      <div class="row">
        <div class="col-md-6 ml-auto mr-auto">
          <div class="text-center">
            <h4 class="title">Subscribe</h4>
            <p class="description">
              Subscribe and get news in your inbox every week! We hate spam too, so no worries about this.
            </p>
          </div>
          <div class="card card-raised card-form-horizontal">
            <div class="card-body">

              <div class="row">
                <div class="col-sm-8">
                  <fg-input
                    placeholder="Your Email..."
                    addon-left-icon="now-ui-icons ui-1_email-85">
                  </fg-input>
                </div>
                <div class="col-sm-4">
                  <Button type="primary" round block>
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    FormGroupInput,
    Button
  } from '@/components';

  export default {
    name: 'subscribe',
    components: {
      Button,
      'fg-input': FormGroupInput,
    }
  };
</script>
<style lang="scss" scoped>

</style>
