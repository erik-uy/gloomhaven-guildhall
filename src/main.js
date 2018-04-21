import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App.vue'
import router from './router'
import store from './store'

// require styles
import 'vuetify/dist/vuetify.min.css'
import '../src/assets/spritemap/skin.css'

Vue.use(Vuetify)
Vue.config.productionTip = false

/**
gold - 765a1c
green - bedc9b
dgreen-2a3323
purple - bb97c6
red-eaa295
dred-7d2523
yellow-eecb6f
dyellow-e0ab23
gold-765a1c
dgold-4b340e
dbrown-453225
brown-d3b89d
blue-5682b2
 */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
