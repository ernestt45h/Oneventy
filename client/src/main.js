// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './routes'
import Vuex from 'vuex'
import Store from './store'
import iView from 'iview'
import locale from 'iview/dist/locale/en-US';
import 'iview/dist/styles/iview.css';
import Transitions from 'vue2-transitions'
import VueProgressiveImage from 'vue-progressive-image'
import firebase from './plugins/firebase.plugin'

iView.LoadingBar.config({
  color: '#FF8900',
  height: 5
});

Vue.use(VueProgressiveImage)
Vue.use(Transitions)
Vue.use(firebase)
Vue.use(iView, {locale})
Vue.use(Vuex)


Vue.config.productionTip = false


/* eslint-disable no-new */

export default new Vue({
  el: '#app',
  router,
  store: Store,
  components: { App },
  template: '<App/>'
})
