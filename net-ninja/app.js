new Vue({
  el: '#vue-app', // 어떤 element에 연결될지
  data: {
    name: 'Kim',
    age: 26,
    website: 'https://www.naver.com',
    websiteTag: '<a href="https://www.naver.com">Naver Tag</a>',
    message: 'type your message'
  },
  methods: {
    // this는 Vue 인스턴스 자체
    // data 안의 모든 속성들이 인스턴스에 종속된다.
    greet: function() {
      return 'Hello Vue ' + this.name
    }
  }
})