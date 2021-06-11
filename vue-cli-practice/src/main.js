import Vue from 'vue'
import App from './App.vue'
import Kim from './components/Kim.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

Vue.component('kim', Kim)

// root vue instance
new Vue({
  el: '#app',
  render: h => h(App)
})