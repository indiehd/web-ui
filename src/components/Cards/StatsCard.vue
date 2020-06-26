<template>
  <card class="card-stats">
    <div class="statistics statistics-horizontal">
      <div class="info info-horizontal">
        <div class="row">
          <div class="col-5" v-if="$slots.icon || icon">
            <div :class="`icon-${type}`" class="icon icon-circle">
              <slot name="icon">
                <i :class="icon"></i>
              </slot>
            </div>
          </div>
          <div class="col-7 text-right" v-if="$slots.content || title">
            <slot>
              <h3 class="info-title" v-if="title">{{title}}</h3>
              <h6 class="stats-title" v-if="subTitle">{{subTitle}}</h6>
            </slot>
          </div>
        </div>
      </div>
    </div>
    <div class="stats" slot="footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </card>
</template>
<script>
  import Card from './Card.vue';

  export default {
    name: 'stats-card',
    components: {
      Card
    },
    props: {
      type: {
        type: String,
        default: 'primary'
      },
      icon: String,
      title: String,
      subTitle: String
    }
  };

</script>
<style>

</style>
