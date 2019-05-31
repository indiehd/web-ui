import axios from './axios';

function FetchTopArtists ({commit}) {
  return new Promise((resolve, reject) => {
    axios.get('/top/artists')
      .then(resp => {
        commit('SET_TOP_ARTISTS', resp.data);
        resolve(resp.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function FetchTopSongs ({commit}) {
  return new Promise((resolve, reject) => {
    axios.get('/top/songs')
      .then(resp => {
        commit('SET_TOP_SONGS', resp.data);
        resolve(resp.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function FetchTopAlbums ({commit}) {
  return new Promise((resolve, reject) => {
    axios.get('/top/albums')
      .then(resp => {
        commit('SET_TOP_ALBUMS', resp.data);
        resolve(resp.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export default {
  FetchTopArtists,
  FetchTopSongs,
  FetchTopAlbums
};
