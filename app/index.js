import Vue from 'vue';
import VueRx from 'vue-rx';
import App from './App.vue';

import router from './routes/router';
import store from './state/store';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';

Vue.use(VueRx, {
  Observable,
  Subscription,
  Subject
});

new Vue({
  router,
  el: '#app',
  store,
  render: h => h(App),
  data: {
    privateState: {},
    sharedState: store.state
  }
});
