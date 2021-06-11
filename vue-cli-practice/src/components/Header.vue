<template>
  <header>
    <h1 @click="changeTitle">{{title}}</h1>
  </header>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  // data() {
  //   return {
  //     title: 'This is header'
  //   }
  // }
  methods: {
    changeTitle: function() {
      this.title = "title changed"
    }
  }
}
</script>

<style scoped>
header {
  background: lightcoral;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>
