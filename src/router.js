import Vue from 'vue';
import Router from 'vue-router';

// Layout
import Navbar from './layout/MainNavbar.vue';
import Footer from './layout/MainFooter.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        default: () => import(/* webpackChunkName: "home" */ './pages/Home.vue'),
        header: Navbar,
        footer: Footer
      },
      props: {
        header: {colorOnScroll: 400},
        footer: {backgroundColor: 'primary'}
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import(/* webpackChunkName: "login" */ './pages/Login.vue'),
        header: Navbar
      },
      props: {
        header: {colorOnScroll: 400},
      },
      meta: {
        guest: true
      }
    },
    {
      path: '/register',
      name: 'register',
      // component: Register,
      meta: {
        guest: true
      }
    },
    {
      path: '/dashboard',
      name: 'userboard',
      components: {
        default: () => import(/* webpackChunkName: "userboard-dashboard" */ './pages/dashboard/user/UserBoard.vue'),
      },
      meta: {
        secure: true
      }
    },
    {
      path: '/admin',
      name: 'adminboard',
      components: {
        default: () => import(/* webpackChunkName: "adminboard-dashboard" */ './pages/dashboard/admin/AdminBoard.vue'),
      },
      meta: {
        secure: true,
        admin : true
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

router.beforeEach((to, from, next) => {
  if (to.matched.some(route => route.meta.secure)) {
    if (localStorage.getItem('token') == null) {
      next({
        path: '/login',
        params: {nextUrl: to.fullPath}
      })
    } else {
      if (to.matched.some(route => route.meta.admin)) {
        let user = JSON.parse(localStorage.getItem('user'));
        if (user && user.admin === 1) {
          next()
        } else {
          next({name: 'userboard'})
        }
      } else {
        next()
      }
    }
  } else if (to.matched.some(route => route.meta.guest)) {
    if (localStorage.getItem('token') == null) {
      next()
    } else {
      next({name: 'userboard'})
    }
  } else {
    next()
  }
});

export default router;