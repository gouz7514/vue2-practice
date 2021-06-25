<template>
  <div>
    <!-- <add-blogs></add-blogs> -->
    <show-blogs></show-blogs>
    <list-blogs></list-blogs>
  </div>
</template>

<script>
// import AddBlogs from './components/AddBlogs.vue'
import ShowBlogs from './components/ShowBlogs.vue'
import listBlogs from './components/listBlogs.vue'

export default {
  components: {
    // 'add-blogs' : AddBlogs,
    'show-blogs': ShowBlogs,
    'list-blogs': listBlogs
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

