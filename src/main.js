// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

Vue.prototype.coustomApi = {
  "api": {
      "getNews": "/get",
      "getChannel": "/channel",
      "searchNews": "/newSearch"
  },
  "coustomRequest": function(config, success, fail) {
    this.axios(config)
          .then(function(response) {
              success(response);
          })
          .catch(function (error) {
              fail(error);
          });
  }
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})