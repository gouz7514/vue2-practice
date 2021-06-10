new Vue({
  el: '#vue-app', // 어떤 element에 연결될지
  data: {
    age: 26,
    a: 0,
    b: 0
  },
  // methods: {
    
  // },
  computed: {
    addToA: function() {
      console.log('addToA run')
      return this.a + this.age
    },
    addToB : function() {
      console.log('addToB run')
      return this.b + this.age
    }
  }
})