<template>
  <div>
    <app-header></app-header>
    <kim></kim>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Kim from './components/Kim.vue'

export default {
  data() {
    return {
      
    }
  },
  components: {
    'app-header': Header,
    'app-footer': Footer,
    Kim
  }
}
</script>

<style>

</style>
