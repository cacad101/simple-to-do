import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 1,
};

const getters = {
  evenOrOdd(state) {
    if (state.count % 2 === 0) {
      return 'even';
    }
    return 'odd';
  },
};

const mutations = {
  increment() {
    state.count += 1;
  },
  decrement() {
    state.count -= 1;
  },
};

const actions = {
  increment(context, payload) {
    context.commit('increment');
  },
  decrement(context, payload) {
    context.commit('decrement');
  },
  incrementIfOdd(context, payload) {
    if ((state.count + 1) % 2 === 0) {
      context.commit('increment');
    }
  },
  incrementAsync(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit('increment');
        resolve();
      }, 1000);
    });
  },
};

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
