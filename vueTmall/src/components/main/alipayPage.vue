<template>
  <div id="">
    <div class="aliPayPageDiv container text-center mt-3">
      <div class="aliPayPageLogo text-left mb-5">
        <img src="http://how2j.cn/tmall/img/site/simpleLogo.png" class="pull-left">
        <div style="clear:both"></div>
      </div>
      <div>
        <span class="confirmMoneyText">扫一扫付款（元）</span>
        <span class="confirmMoney">
        ￥{{overAllPrice}}</span>
      </div>
      <div>
        <img src="http://how2j.cn/tmall/img/site/alipay2wei.png" class="aliPayImg">
      </div>
      <div>
        <button class="confirmPay"><router-link to="/paymentSuccess"><span style="color:white">确认支付</span></router-link></button>
      </div>
    </div>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
export default {
  computed: {
          ...mapGetters([
          "overAllPrice",
        ])
  },
}
</script>
<style scoped>
  .container{
  min-width: 1110px;
  font-size: 14px;
  font-family: Arial;
  }
  .confirmMoneyText,
  .confirmMoney{
  display: block;
  }
  .confirmMoney{
  display: block;
  color: #FF6600;
  font-weight: bold;
  font-size: 20px;
  margin: 10px;
  }
  .confirmPay{
  background-color: #00AAEE;
  border: 1px solid #00AAEE;
  text-align: center;
  line-height: 31px;
  font-size: 14px;
  font-weight: 700;
  color: white;
  width: 107px;
  margin-top: 20px;
  border-radius: 2px;
  }

</style>
