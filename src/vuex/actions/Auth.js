import axios from './axios';

function Login ({ commit, state }, frmData) {
  const data = {
    'email': frmData.email,
    'password': frmData.password
  };

  return new Promise((resolve, reject) => {
    axios.post('/auth/login', data)
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

function ValidateAuth ({ commit, state }) {
  /* todo: Setup api route on web-api */
  let url = '/auth/validate';

  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        commit('SET_TOKEN', null);
        localStorage.clear();
        reject(err);
      });
  });
}

export default {
  Login,
  ValidateAuth
};
