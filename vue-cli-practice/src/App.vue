<template>
  <div>
    <app-header v-bind:title="title" @changeTitle="updateTitle($event)"></app-header>
    <kim v-bind:ninjas="ninjas"></kim>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Kim from './components/Kim.vue'

export default {
  data() {
    return {
      ninjas: [
        {name: 'Ryu', speciality: 'Vue Components', show: false},
        {name: 'Crystal', speciality: 'HTML Wizardry', show: false},
        {name: 'Hitoshi', speciality: 'Click Events', show: false},
        {name: 'Tango', speciality: 'Conditionals', show: false},
        {name: 'Kami', speciality: 'Webpack', show: false},
        {name: 'Yoshi', speciality: 'Data Diggin', show: false}
      ],
      title: "❤️",

    }
  },
  components: {
    'app-header': Header,
    'app-footer': Footer,
    Kim
  },
  methods: {
    updateTitle: function(e) {
      this.title = e
    }
  }
}
</script>

<style>

</style>
