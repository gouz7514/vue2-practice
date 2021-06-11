<template>
  <footer>
    <p>{{copyright}}</p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      copyright: 'Copyright 2021 Vue by KHJ'
    }
  }
}
</script>

<style scoped>
footer {
  background: #222;
  padding: 6px;
}
p {
  color: coral;
  text-align: center;
}
</style>
