<template>
  <ul>
    <li v-for="(name, idx) in kim" :key="idx">{{name}}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      kim: ["aaaaa", "bbbbb", "ccccc"]
    }
  },
  components: {
    
  }
}
</script>

<style>

</style>
