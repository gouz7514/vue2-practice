<template>
  <div id="show-blogs">
    <h1>All Blog Articles</h1>
    <div v-for="(blog,idx) in blogs" :key="idx" class="single-blog">
      <h2>{{blog.title}}</h2>
      <article>{{blog.body}}</article>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  components: {
    
  },
  data() {
    return {
      blogs: []
    }
  },
  methods: {
    
  },
  created() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then((data) => this.blogs = data.data.slice(0,10))
  }
}
</script>

<style>
#show-blogs {
  max-width: 800px;
  margin: 0 auto;
}

.single-blog {
  padding: 20px;
  margin: 20px;
  box-sizing: border-box;
  background: #eee;
}
</style>

