new Vue({
  el: '#vue-app',
  data: {
    output: "Your fav food"
  } ,
  methods: {
    readRefs: function() {
      console.log(this.$refs.test.innerText) // $refs : scope 내의 모든 refs 불러온다
      this.output = this.$refs.input.value
    }
  } 
})