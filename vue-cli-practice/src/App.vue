<template>
  <div>
    <input type="text" v-model.lazy="blog.title" required />
    <textarea v-model="blog.content"></textarea>
    <div id="checkboxes">
      <label>Ninjas</label>
      <input type="checkbox" value="ninjas" v-model="blog.categories"/>
      <label>Wizard</label>
      <input type="checkbox" value="wizard" v-model="blog.categories"/>
      <label>Mario</label>
      <input type="checkbox" value="mario" v-model="blog.categories"/>
      <label>Cheese</label>
      <input type="checkbox" value="cheese" v-model="blog.categories"/>
    </div>
    <label>Author</label>
    <select v-model="blog.author">
      <option v-for="(author, idx) in authors" :key="idx">{{author}}</option>
    </select>
    {{blog.title}}
    {{blog.content}}
    <p>Blog Categories</p>
    <ul>
      <li v-for="(category, idx) in blog.categories" :key="idx">{{category}}</li>
    </ul>
    <p>Author : {{blog.author}}</p>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data() {
    return {
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ['Kim','Lee','Park']
    }
  },
  methods: {
    
  }
}
</script>

<style>
#checkboxes input {
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label {
  display: inline-block;
}
</style>
