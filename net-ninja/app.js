new Vue({
  el: '#vue-app', // 어떤 element에 연결될지
  data: {
    available: false,
    nearby: false
  },
  methods: {
    
  },
  computed: {
    compClasses: function() {
      return {
        available: this.available,
        nearby: this.nearby
      }
    }
  }
})