import axios from './axios';

function FetchFeaturedArtists ({commit}) {
  return new Promise((resolve, reject) => {
    axios.get('/featured/artists')
      .then(resp => {
        commit('SET_FEATURED_ARTISTS', resp.data);
        resolve(resp.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

export default {
  FetchFeaturedArtists,
};
