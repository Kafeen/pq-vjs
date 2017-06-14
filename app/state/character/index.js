import * as getters from './getters';
import * as actions from './actions';
import * as mutations from './mutations';

const state = {
    name: 'Brian',
    race: 'Human',
    job: 'Slave',
    level: 1,
    exp: 0
};

const character = {
  namespaced: true,
  
  state,
  mutations,
  actions,
  getters
};

export default character;