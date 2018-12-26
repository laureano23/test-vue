import Vue from 'vue'
import './plugins/vuetify'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import Vuetify from 'vuetify'
//import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'

// router setup
import routes from './routes/routes'
// plugin setup
Vue.use(VueRouter)
Vue.use(LightBootstrap)
//Vue.use(Vuetify)

// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router
})
