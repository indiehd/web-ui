import Vue from 'vue';
import Vuex from 'vuex';

import Actions from './actions';
import Mutations from './mutations';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
    featured: {
      artists: [],
      albums: [],
      songs: [],
    }
  },
  getters: {
    user (state) {
      return state.user;
    },
    token (state) {
      return state.token;
    },
    featured_artists (state) {
      return state.featured.artists;
    },
    featured_albums (state) {
      return state.featured.albums;
    },
    featured_songs (state) {
      return state.featured.songs;
    },
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user;
      localStorage.setItem('user', user);
    },
    SET_TOKEN (state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    ...Mutations
  },
  actions: Actions,
});