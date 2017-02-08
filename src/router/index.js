import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Contact from 'components/Contact'
import About from 'components/About'
import Projects from 'components/Projects'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    }
  ]
})
