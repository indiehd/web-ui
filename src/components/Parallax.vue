<template>
  <div :style="styles">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'parallax',
    data () {
      return {
        styles: {},
        debounceTimeout: 6
      };
    },
    methods: {
      debounce (func, wait, immediate) {
        let timeout;
        return function () {
          const context = this;
          const args = arguments;
          clearTimeout(timeout);
          timeout = setTimeout(() => {
            timeout = null;
            if (!immediate) func.apply(context, args);
          }, wait);
          if (immediate && !timeout) func.apply(context, args);
        };
      },
      handleScroll (scrollVal) {
        let oVal = (scrollVal / 3);
        this.styles = {
          transform: `translate3d(0, ${oVal}px,0)`
        };
      },
      checkForParallax (scrollVal) {
        let fn = this.debounce(() => this.handleScroll(scrollVal), this.debounceTimeout);
        fn();
      }
    },
    mounted () {
      let self = this;
      window.addEventListener('scroll', function () {
        self.checkForParallax(this.scrollY);
      });
    }
  };
</script>
