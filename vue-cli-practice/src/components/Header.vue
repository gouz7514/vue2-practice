<template>
  <header>
    <h1 @click="changeTitle">{{title}}</h1>
  </header>
</template>

<script>
import {bus} from "../main"

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
      // this.$emit('changeTitle', "event emiitted to change title")
      this.title = 'event emitted by bus'
      bus.$emit('titleChanged', 'event emitted by bus')
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
