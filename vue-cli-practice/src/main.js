import Vue from 'vue'
import App from './App.vue'

export const bus = new Vue(); // event bus

// root vue instance
new Vue({
  el: '#app',
  render: h => h(App)
})