import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Home';
import Navbar from './layout/MainNavbar.vue';
import Footer from './layout/MainFooter.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      components: {default: Index, header: Navbar, footer: Footer},
      props: {
        header: {colorOnScroll: 400},
        footer: {backgroundColor: 'black'}
      }
    },
  ],
  scrollBehavior: (to, from, savedPosition) => {
    if (to.hash) {
      return {selector: to.hash};
    } else {
      return {x: 0, y: 0};
    }
  },
});
