import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes
})

export const bus = new Vue(); // event bus


Vue.directive('theme', {
  bind(el, binding) {
    if (binding.value == 'wide') {
      el.style.maxWidth = "1200px"
    } else if (binding.value == 'narrow') {
      el.style.maxWidth = "600px"
    }
    if (binding.arg == 'column') {
      el.style.background = '#ddd'
      el.style.padding = '20px'
    }
  }
})

Vue.filter('snippet', function(value) {
  return value.slice(0, 100) + '...'
})

// root vue instance
new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})