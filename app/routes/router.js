import Vue from 'vue';
import VueRouter from 'vue-router';
import CharacterSelect from './character-select.vue';
import CharacterCreate from './character-create.vue';
import Play from './play.vue';

Vue.use(VueRouter);

const routes = [
  { path: '*', redirect: '/'},
  { path: '/', redirect: '/character-select'},
  { path: '/character-select', component: CharacterSelect },
  { path: '/character-create', component: CharacterCreate },
  { path: '/play/:id', component: Play }
];

export default new VueRouter({
  routes
});