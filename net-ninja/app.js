let one = new Vue({
  el: '#vue-app-one',
  data: {
    title: 'Vue-app One'
  },
  methods: {
    
  },
  computed: {
    greet: function() {
      console.log('app1')
      return 'Hello from app one'
    }
  }
})

let two = new Vue({
  el: '#vue-app-two',
  data: {
    title: 'Vue-app Two'
  },
  methods: {
    changeTitle: function() {
      one.title = "Title changed"
    }
  },
  computed: {
    greet: function() {
      return 'Hello from app two'
    }
  }
})

two.title = "Changed from outside"