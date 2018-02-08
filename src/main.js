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
  "appcode":"1e58cd8eefb3ed489f9f3ddc00ad5486",
  "api": {
      "getNews": "/get",
      "getChannel": "/channel",
      "searchNews": "/newSearch"
  },
};
Vue.filter('substring', function (value,length) {
  if (!value) return '';
  if(value.lenght > length) {
    value = value.substring(0, 10); 
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})