import Vue from 'vue';
import Vuex from 'vuex';

import state from './state';
import * as mutations from './mutaions';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {

  },
});
