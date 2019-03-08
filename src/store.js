/* eslint-disable no-undef, arrow-body-style, no-param-reassign, no-console, camelcase */
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movie: {},
  },
  mutations: {
    SET_MOVIE: (state, payload) => {
      state.movie = payload;
    },
  },
  actions: {
    GET_MOVIE: ({ commit }, payload) => new Promise((resolve, reject) => {
      console.log(payload);
      axios
        .get(`https://www.omdbapi.com/?t=${payload.movie}&apikey=8fcef95b`)
        .then(
          (response) => {
            resolve(response);
            commit('SET_MOVIE', response.data);
          },
          (error) => {
            reject(error);
          },
        );
    }),
  },
});
