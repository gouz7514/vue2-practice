<template>
  <div>
    <!-- <add-blogs></add-blogs> -->
    <show-blogs></show-blogs>
  </div>
</template>

<script>
// import AddBlogs from './components/AddBlogs.vue'
import ShowBlogs from './components/ShowBlogs.vue'

export default {
  components: {
    // 'add-blogs' : AddBlogs,
    'show-blogs': ShowBlogs
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  }
}
</script>

<style>
body{
    margin: 0;
    font-family: 'Nunito SemiBold';
}
</style>

