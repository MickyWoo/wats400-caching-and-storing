import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueLocalStorage from 'vue-ls';

let options = {
  // This is a name that will be prepended to any data we save in the object.
  namespace: 'weather__'
};

Vue.use(VueLocalStorage, options);



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
