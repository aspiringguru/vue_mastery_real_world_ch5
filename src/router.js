import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about-us',
      name: 'about',
      component: About
    },
    {
      path: '/user/:username',
      name: 'user',
      component: User,
      props: true
    }
  ]
})
