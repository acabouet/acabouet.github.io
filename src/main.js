// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MainNav from './components/MainNav'
import MainFooter from './components/MainFooter'
import Project from './components/Project'

Vue.component('main-nav', MainNav)
Vue.component('main-footer', MainFooter)
Vue.component('project', Project)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
