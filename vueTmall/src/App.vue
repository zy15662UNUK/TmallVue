<template>
  <div id="app">
    <appHeader></appHeader>
    <cartPage></cartPage>
    <appFooter></appFooter>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import cartPage from "./components/main/cartPage.vue"
export default {
  data () {
    return {

    }
  },
  components: {
    appHeader: Header,
    appFooter: Footer,
    cartPage: cartPage,
  }
}
</script>

<style>

</style>
