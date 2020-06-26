<template>
  <div :class="`info-${direction}`" class="info">
    <div :class="[`icon-${type}`, iconClasses]" class="icon" v-if="$slots.icon || icon">
      <slot name="icon">
        <i :class="icon"></i>
      </slot>
    </div>
    <div class="description" v-if="$slots.default || title">
      <slot>
        <h4 class="info-title">{{title}}</h4>
        <p class="description">{{description}}</p>
      </slot>
    </div>
    <slot name="raw-content"></slot>
  </div>
</template>
<script>
  export default {
    props: {
      direction: {
        type: String,
        default: 'horizontal'
      },
      type: {
        type: String,
        default: ''
      },
      icon: {
        type: String,
        default: ''
      },
      iconClasses: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: ''
      },
      description: {
        type: String,
        default: ''
      }
    }
  };
</script>
<style lang="scss">
  @import "~@/assets/sass/indiehd/variables";
  @import "~@/assets/sass/indiehd/mixins";
  @import "~@/assets/sass/indiehd/info-areas";
</style>
