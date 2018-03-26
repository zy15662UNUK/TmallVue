<template>
  <div id="">
    <div class="payedDiv container">
      <div class="payedTextDiv">
        <img src="http://how2j.cn/tmall/img/site/paySuccess.png">
        <span>您已成功付款</span>
      </div>
      <div class="payedAddressInfo">
        <ul>
          <li>收货地址： {{address.addressdetails}}  {{address.zipcode}}</li>
          <li>实付款：<span class="payedInfoPrice">
          ￥{{overAllPrice}}
          </span></li>
          <li>预计08月08日送达	</li>
        </ul>
        <div class="paedCheckLinkDiv">
          您可以
          <a href="#nowhere" class="payedCheckLink"><router-link to="/productReceive">查看已买到的宝贝</router-link></a>
          <a href="#nowhere" class="payedCheckLink"><router-link to="/productReceive">查看交易详情</router-link> </a>
        </div>
      </div>
      <div class="warningDiv">
        <img src="http://how2j.cn/tmall/img/site/warning.png">
        <b>安全提醒：</b>下单后，<span class="redColorBoldWord">用QQ给您发送链接办理退款的都是骗子！</span>天猫不存在系统升级，订单异常等问题，谨防假冒客服电话诈骗！
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
          "address"
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
.payedDiv{
border: 1px solid #D4D4D4;
margin: 10px auto 20px auto;
padding: 0;
}
.payedTextDiv{
height: 66px;
background-color: #ECFFDC;
padding: 20px;
font-weight: bold;
}
.payedAddressInfo{
padding-top: 35px;
padding-left: 75px;
font-size: 12px;
padding-bottom: 25px;
border-bottom: 1px dashed grey;
}
.payedCheckLink{
color: #2D8CBA;
}
.warningDiv{
padding: 25px;
font-size: 12px;
}
.redColorBoldWord{
color: #C40000;
font-weight: bold;
}

</style>
