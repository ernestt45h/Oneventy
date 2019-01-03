import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      component: _=>import('../view/feeds'),
      children: [
        {path: '/', name: 'Recent', component: _=>import('../view/feeds/Recent.vue')},
        {path: '/favorites', name: 'Favorites', component: _=>import('../view/feeds/Favorites.vue')},
        {path: '/nearby', name: 'Nearby', component: _=>import('../view/feeds/Nearby.vue')},
        {path: '/:id', name: 'ViewFeed', component: _=>import('../view/feeds/ViewFeed.vue')},
      ]
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
