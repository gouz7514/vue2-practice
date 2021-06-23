import Vue from 'vue'
import App from './App.vue'

export const bus = new Vue(); // event bus

// custom directives
// Vue.directive('rainbow', {
//   bind(el) {
//     el.style.color = "#" + Math.random().toString().slice(2,8);
//   }
// })

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

// Filters
// Vue.filter('to-uppercase', function(value) { // value는 여기서는 blog.title
//   return value.toUpperCase()
// })

Vue.filter('snippet', function(value) {
  return value.slice(0, 100) + '...'
})

// root vue instance
new Vue({
  el: '#app',
  render: h => h(App)
})