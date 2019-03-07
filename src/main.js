import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.filter('titleCase', str =>
  str
    .split(/\s+/)
    .map((item) => {
      if (item.length > 2) {
        if (item.toLowerCase() === 'dos') {
          return item.toLowerCase();
        }
        return item.charAt(0).toUpperCase() + item.substring(1).toLowerCase();
      }
      return item.toLowerCase();
    })
    .join(' '));

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
