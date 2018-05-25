import Vue from "vue";
import Vuex from "vuex";
import State from './state.js';
import Mutations from './mutations.js';
import Getters from './getters.js';
// Import the modules for vuex

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: State,
  getters: Getters,
  mutations: Mutations
});
