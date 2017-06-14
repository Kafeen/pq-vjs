const story = {
  namespaced: true,

  state: {
      currentProgress: 0
    },
  
  mutations: {
    increaseProgress (state, amount) {state.currentProgress += amount;}
  },
  
  actions: {
    progress ({commit}) {
        commit('increaseProgress', 1);
    }
  },

  getters: {

  }
};

export default story;