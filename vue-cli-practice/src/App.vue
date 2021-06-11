<template>
  <div>
    <form-helper>
      <template v-slot:form-header>
        <h3>This is tilte of form</h3>
        <p>information about form</p>
      </template>
      <template v-slot:form-fields>
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </template>
      <template v-slot:form-controls>
        <button @click="handleSubmit">Submit</button>
      </template>
    </form-helper>
    
  </div>
</template>

<script>
import formHelper from './components/FormHelper.vue'

export default {
  components: {
    'form-helper': formHelper
  },
  data() {
    return {
      title: 'I am a dynamic slot'
    }
  },
  methods: {
    handleSubmit: function() {
      console.log('btn clicked')
    }
  }
}
</script>

<style>

</style>
