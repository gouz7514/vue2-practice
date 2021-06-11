<template>
  <div>
    <h1>{{title}}</h1>
    <kim></kim>
  </div>
</template>

<script>
// import Kim from './components/Kim.vue'

export default {
  name: 'App',
  data() {
    return {
      title: "My App"
    }
  },
  components: {
    // Kim    
  }
}
</script>

<style>

</style>
