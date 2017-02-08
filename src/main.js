// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.component('main-nav', {
  data: function () {
    return {
      msg: 'Test'
    }
  },
  template: '<div class="container"><input id="toggle" type="checkbox"><label class="toggle-container" for="toggle"><span class="button button-toggle"></span></label><nav class="nav"><a class="nav-item" href="">Home</a><a class="nav-item" href="">About Me</a><a class="nav-item" href="">Projects</a><a class="nav-item" href="">Contact</a></nav></div>'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
