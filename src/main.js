import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App.vue'
import router from './router'
import store from './store'

import 'vuetify/dist/vuetify.min.css'
import '../src/assets/spritemap/skin.css'

Vue.use(Vuetify)
Vue.config.productionTip = false


/**
 * 
 * purple - b092bd accent
 * gold - e1c889 
 * red -e89d90
 * dark gold - 74581b
 * dark red - 4e1212
 * green-b0d38c
 * brown - 87654a
 * dark brown - 241b15
 */
new Vue({
  theme:{
    primary: "#87654a",
    secondary: "#e1c889",
    accent: "#b0d38c",
    error: "#4e1212",
    warning: "#e89d90",
    info: "#b092bd",
    success: "#b092bd"
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
