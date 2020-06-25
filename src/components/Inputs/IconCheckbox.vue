<template>
  <div :class="{active: checked}"
       @click="updateValue"
       class="choice"
       data-toggle="wizard-checkbox">
    <input :checked="checked"
           :disabled="disabled"
           :name="name"
           type="checkbox">
    <div class="icon">
      <slot name="icon">
        <i :class="icon"></i>
      </slot>
    </div>
    <slot name="title">
      <h6>{{title}}</h6>
    </slot>
  </div>
</template>
<script>
  export default {
    name: 'icon-checkbox',
    model: {
      prop: 'checked'
    },
    props: {
      checked: {
        type: Boolean,
        default: false
      },
      name: String,
      title: String,
      icon: String,
      disabled: Boolean
    },
    methods: {
      updateValue () {
        this.$emit('input', !this.checked);
      }
    }
  };
</script>
<style>
</style>
