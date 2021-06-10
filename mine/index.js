'use strict';

let app = new Vue({
  el: '#app',
  data: {
    message: "Hello Vue!"
  }
})

let app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  },
  methods: {
    reverseSeen() {
      console.log("reversed")
      this.seen = !this.seen
    }
  }
})

let app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'First'},
      { text: 'Seccond'},
      { text: 'Third'},
    ]
  }
})

Vue.component('todo-item', {
  props:['todo'],
  template: '<li>{{todo.text}}</li>'
})

let app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      {id:0, text:'Vegetables', purchased:true},
      {id:1, text:'Cheese', purchased:false},
      {id:2, text:'Whatever else that human can eat', purchased:true}
    ]
  }
})
