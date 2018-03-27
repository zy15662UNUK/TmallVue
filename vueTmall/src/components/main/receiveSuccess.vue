<template>
  <div id="">
    <searchBar></searchBar>
    <div class="container">
      <div class="orderFinishDiv">
          <div class="orderFinishTextDiv">
              <img src="http://how2j.cn/tmall/img/site/orderFinish.png">
              <span>交易已经成功，卖家将收到您的货款。</span>
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import simplifiedSearch from "./simplifiedSearch.vue"
export default {
  components: {
    searchBar: simplifiedSearch
  },
}
</script>
<style scoped>
.container{
  min-width: 1110px;
  font-size: 14px;
  font-family: Arial;
}
.orderFinishDiv{
  margin: 20px auto;
  width: 490px;
  height: 160px;
  padding: 40px;
  border: 1px solid #E5E5E5;
  font-weight: bold;
}
.orderFinishTextDiv span{
  color: black!important;

}

</style>
