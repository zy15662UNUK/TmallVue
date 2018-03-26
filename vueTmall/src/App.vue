<template>
  <div id="app">
    <appHeader></appHeader>
    <router-view></router-view>
    <appFooter></appFooter>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
export default {
  data () {
    return {

    }
  },
  components: {
    appHeader: Header,
    appFooter: Footer,
  }
}
</script>

<style>

</style>
