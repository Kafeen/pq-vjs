const character = {
  namespaced: true,

  state: {
      name: 'Brian',
      race: 'Human',
      job: 'Slave',
      level: 1,
      exp: 0
    },
  
  mutations: {
    increaseExp (state, amount) {state.exp += amount;}
  },
  
  actions: {
    progress ({commit}) {
        commit('increaseExp', 10);
    }
  },

  getters: {
    levelUp: (state, getters) => { return state.exp > 1000; }
  }
};

export default character;