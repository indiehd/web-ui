import axios from 'axios';

import {
  API_URL,
  API_AUTH_URL,
} from '../../constants';

function Login ({commit, state}, frmData) {

  const data = {
    'email': frmData.email,
    'password': frmData.password,
  };

  return new Promise((resolve, reject) => {
    axios.post(API_AUTH_URL, data)
        .then(resp => {
          const user = JSON.stringify(resp.data.user, ' ');
          commit('SET_TOKEN', resp.data.access_token);
          commit('SET_USER', user);
          resolve(resp.data.user);
        })
        .catch(err => {
          reject(err);
        });
  });
}

function ValidateAuth ({commit, state}) {
  /* todo: Setup api route on web-api */
  let url = API_URL + 'api/auth/validate';
  let options = {
    headers: {
      Authorization: `Bearer ${state.token}`,
    },
  };

  return new Promise((resolve, reject) => {
    axios.get(url, options)
        .then(response => {
          resolve(response.data);
        })
        .catch((error) => {
          commit('SET_TOKEN', null);
          localStorage.clear();
          reject(error.response.data);
        });
  });
}

function StoreToken ({commit}, token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  localStorage.setItem('token', token);
  commit('SET_TOKEN', token);
}

export default {
  Login,
  ValidateAuth,
  StoreToken,
};