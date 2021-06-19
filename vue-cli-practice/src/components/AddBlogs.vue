<template>
  <div id="add-blog">
    <form v-if="!submitted">
      <label>Blog Title : </label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog content : </label>
      <textarea v-model.lazy.trim="blog.content"></textarea>
      <div id="checkboxes">
        <p>Blog Categoreis : </p>
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
      <button @click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thank you!</h3>
    </div>

    <div id="preview">
      <h3>Preview blog</h3>
      <p>This is Blog Title : {{blog.title}}</p>
      <p>This is Blog Content : {{blog.content}}</p>
      <p>Blog Categories</p>
      <ul>
        <li v-for="(category, idx) in blog.categories" :key="idx">{{category}}</li>
      </ul>
      <p>Author : {{blog.author}}</p>
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
      blog: {
        title: "",
        content: "",
        categories: [],
        author: ""
      },
      authors: ['Kim', 'Lee', 'Park'],
      submitted: false,
    }
  },
  methods: {
    post: function() {
      axios.post('http://jsonplaceholder.typicode.com/posts', {
        title: this.blog.title,
        body: this.blog.content,
        userid: 1,
      }).then((data) => console.log(data))
      this.submitted = true;
    }
  }
}
</script>

<style>
#add-blog *{
  box-sizing: border-box;
}
#add-blog{
  margin: 20px auto;
  max-width: 500px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"], textarea{
  display: block;
  width: 100%;
  padding: 8px;
}
#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
  display: inline-block;
  margin-right: 10px;
}
#checkboxes label{
  display: inline-block;
  margin-top: 0;
}
</style>