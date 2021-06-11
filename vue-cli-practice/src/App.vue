<template>
  <div>
    <h1>{{title}}</h1>
    <p>{{greeting()}}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      title: "Hello World!"
    }
  },
  methods: {
    greeting: function() {
      return 'greeting!'
    }
  },
  components: {
    
  }
}
</script>

<style>

</style>
