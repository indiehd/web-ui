<template>
  <navbar
    position="fixed"
    type="primary"
    :transparent="transparent"
    :color-on-scroll="colorOnScroll"
    menu-classes="ml-auto"
  >
    <template slot-scope="{ toggle, isToggled }">
      <router-link class="navbar-brand" to="/">
        <img
          class="indie-logo"
          :src="require('@/assets/img/logo.svg')"
          alt=""
        />
      </router-link>
    </template>
    <template slot="navbar-menu">

      <drop-down
        tag="li"
        title="Music"
        icon="now-ui-icons media-2_note-03"
        class="nav-item"
      >
        <nav-link to="/browse/most_popular">
          Most Popular
        </nav-link>
        <nav-link to="/browse/trending">
          Trending
        </nav-link>
        <nav-link to="/browse/top_sellers">
          Top Sellers
        </nav-link>
        <nav-link to="/browse/latest">
          New Releases
        </nav-link>
      </drop-down>

      <drop-down
        tag="li"
        title="Browse"
        class="nav-item"
      >
        <nav-link to="/browse">
          All
        </nav-link>
        <nav-link to="/browse/artists">
          Artists
        </nav-link>
        <nav-link to="/browse/albums">
          Albums
        </nav-link>
        <nav-link to="/browse/songs">
          Songs
        </nav-link>
      </drop-down>

      <drop-down
        tag="li"
        title="Popular Genre's"
        class="nav-item"
      >
        <nav-link to="/browse">
          Rock
        </nav-link>
        <nav-link to="/browse/genre/r_and_b">
          R&B
        </nav-link>
        <nav-link to="/browse/genre/rap">
          RAP
        </nav-link>
        <nav-link to="/browse/genre/electronic">
          Electronic
        </nav-link>
        <nav-link to="/browse/genre/country_music">
          Country Music
        </nav-link>
        <nav-link to="/browse/genre/seasonal">
          Seasonal
        </nav-link>
      </drop-down>

      <li class="nav-item">
        <a class="nav-link" href="#" @click.prevent="$router.push('/login')">
          <i class="now-ui-icons users_circle-08"></i>
          <p>Login / Register</p>
        </a>
      </li>

      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Twitter"
          data-placement="bottom"
          href="https://twitter.com/"
          target="_blank"
        >
          <i class="fab fa-twitter"></i>
          <p class="d-lg-none d-xl-none">Twitter</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Like us on Facebook"
          data-placement="bottom"
          href="https://www.facebook.com/"
          target="_blank"
        >
          <i class="fab fa-facebook-square"></i>
          <p class="d-lg-none d-xl-none">Facebook</p>
        </a>
      </li>
      <li class="nav-item">
        <a
          class="nav-link"
          rel="tooltip"
          title="Follow us on Instagram"
          data-placement="bottom"
          href="https://www.instagram.com/"
          target="_blank"
        >
          <i class="fab fa-instagram"></i>
          <p class="d-lg-none d-xl-none">Instagram</p>
        </a>
      </li>
    </template>
  </navbar>
</template>

<script>
  import { DropDown, NavbarToggleButton, Navbar, NavLink } from '@/components';

  export default {
    name: 'main-navbar',
    props: {
      transparent: Boolean,
      colorOnScroll: Number
    },
    components: {
      DropDown,
      Navbar,
      NavbarToggleButton,
      NavLink,
    }
  };
</script>

<style lang="scss" scoped>
  .indie-logo {
    max-width: 100px;
  }
</style>
