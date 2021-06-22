<template>
  <div v-theme:column="'narrow'" id="show-blogs">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="search blogs"/>
    <div v-for="(blog,idx) in filteredBlogs" :key="idx" class="single-blog">
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
      <article>{{blog.body | snippet}}</article>
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
      blogs: [],
      search: ""
    }
  },
  methods: {
    
  },
  created() {
    axios.get('http://jsonplaceholder.typicode.com/posts')
      .then((data) => this.blogs = data.data.slice(0,10))
  },
  computed: {
    filteredBlogs: function() {
      return this.blogs.filter((blog) => {
        return blog.title.match(this.search)
      })
    }
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

