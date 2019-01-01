import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: _=>import('../view')
    },
    {
      path: '/login',
      name: 'Login',
      component: _=>import('../view/Login.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: _=>import('../view/Signup.vue')
    }
  ]
})
