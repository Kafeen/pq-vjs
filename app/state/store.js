import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import character from './character/index.js';
import story from './story.js';
import quest from './quest.js';

const store = new Vuex.Store({
  modules: {
    character,
    story,
    quest
  },

  actions: { 
    progress ({commit}, deltaTime) {
        commit('quest/increaseProgress', deltaTime);
    }
  },

  state: {
    count: 7
  },

  getters: {
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
  }
});

export default store;
