const quest = {
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
    isComplete ({currentProgress}) {
        console.log('isComeplte::currentProgress = ' + currentProgress);
        return currentProgress >= 1000;
    }
  }
};

export default quest;