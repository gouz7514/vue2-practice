new Vue({
  el: '#vue-app', // 어떤 element에 연결될지
  data: {
    age: 26,
    x: 0,
    y: 0
  },
  methods: {
    // this는 Vue 인스턴스 자체
    // data 안의 모든 속성들이 인스턴스에 종속된다.
    add: function(x) {
      this.age += x
    },
    subtract: function(x) {
      this.age -= x
    },
    updateXY: function(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
    click: function() {
      alert('you clicked me')
    }
  }
})

new Vue({
  el: '#vue-key',
  data: {
    name: '',
    age: ''
  },
  methods: {
    logName: function() {
      console.log('you entered name')
    },
    logAge: function() {
      console.log('you entered age')

    }
  }
})