new Vue({
  el: '#vue-app',
  data: {
    health: 100,
    ended: false
  },
  methods: {
    punchBtn: function() {
      this.health -= 20
      if (this.health <= 0) {
        this.ended = true
      }
    },
    resetBtn: function() {
      this.health = 100
      this.ended = false
    }
  },
  computed: {
    
  }
})