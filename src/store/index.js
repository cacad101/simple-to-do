import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  count: 0,
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
  increment(state) {
    state.count += 1;
  },
  incrementBy(state, incrVal) {
    state.count += incrVal;
  },
  decrement(state) {
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
  incrementBy(context, payload) {
    context.commit('incrementBy', payload);
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
