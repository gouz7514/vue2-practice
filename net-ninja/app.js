Vue.component("greeting", {
  template: '<p>I am {{name}} <button @click="changeName">Change Name</button></p>',
  data: function() {
    return {
      name: "Kim"
    }
  },
  methods: {
    changeName: function() {
      this.name == "kim" ? this.name = "park" : this.name = "kim"
    }
  }
})

new Vue({
  el: '#vue-app-one'
})

new Vue({
  el: '#vue-app-two'
})