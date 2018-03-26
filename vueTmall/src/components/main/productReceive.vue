<template>
  <div id="">
    <div class="container">
      <div class="confirmPayImageDiv">
        <img src="http://how2j.cn/tmall/img/site/comformPayFlow.png">
        <div class="confirmPayTime1">
          2016-09-14 11:14:45
        </div>
        <div class="confirmPayTime2">
          2016-09-14 11:14:47
        </div>
        <div class="confirmPayTime3">
          yyyy-MM-dd HH:mm:ss
        </div>
      </div>
      <div class="confirmPayOrderInfoDiv">
        <div class="confirmPayOrderInfoText">我已收到货，同意支付宝付款</div>
      </div>
      <div class="orderListTitle">
        <table class="orderListTitleTable">
            <tbody><tr>
              <td>宝贝</td>
              <td width="100px">单价</td>
              <td width="100px">数量</td>
              <td width="120px">实付款</td>
              <td width="100px">交易操作</td>
            </tr>
           </tbody>
        </table>
      </div>
      <div class="orderListItem">
        <table>
          <tbody>
            <tr v-for="elem in paymentCart" :key="elem.name">
                <td><img width="50px" :src="elem.src"></td>
                <td class="confirmPayOrderItemProductLink">
                  <a href="#nowhere">{{elem.name}}</a>
                </td>
                <td>￥{{elem.originPrice}}</td>
                <td>{{elem.num}}</td>
                <td class="text-right"><span class="conformPayProductPrice">￥{{elem.promotionPrice}}</span></td>
                <td class="text-right pr-1"><span>快递 ： 0.00 </span></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="confirmPayOrderItemText float-right mt-4">
          实付款： <span class="confirmPayOrderItemSumPrice">￥{{overAllPrice}}</span>
      </div>
      <div class="confirmPayOrderDetailDiv">
          <table class="confirmPayOrderDetailTable">
            <tbody>
              <tr>
                  <td>订单编号：</td>
                  <td>201609141114454899001 <img width="23px" src="http://how2j.cn/tmall/img/site/confirmOrderTmall.png"></td>
              </tr>
              <tr>
                  <td>卖家昵称：</td>
                  <td>天猫商铺 <span class="confirmPayOrderDetailWangWangGif"></span></td>
              </tr>
              <tr>
                  <td>收货信息： </td>
                  <td>{{address.addressdetails}}， {{address.phoneNumber}}，{{address.zipcode}} </td>
              </tr>
              <tr>
                <td>成交时间：</td>
                <td>2016-09-14 11:14:45</td>
              </tr>
            </tbody>
          </table>
      </div>
      <div class="confirmPayButtonDiv">
        <div class="confirmPayWarning">请收到货后，再确认收货！否则您可能钱货两空！</div>
        <a href="#nowhere"><button class="confirmPayButton"><router-link to="/receiveSuccess"><span style="color:white">确认支付</span></router-link></button></a>
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
          "address",
          "paymentCart"
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

.confirmPayImageDiv img{
  width: 100%;
}
.confirmPayImageDiv div{
  display: inline-block;
  font-size: 12px;
}
.confirmPayTime1{
}
.confirmPayTime2{
  margin-left: 150px;
}
.confirmPayTime3{
  margin-left: 150px;
}
.confirmPayOrderInfoDiv{
  margin: 20px auto;
  font-weight: bold;
  font-size: 16px;
}
.orderListTitle{
  background-color: #F5F5F5;
  height: 35px;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 10px;
}
.orderListTitleTable{
  width: 1110px;
}
.orderListTitle tr td{
  font-size: 12px;
  text-align: center;
}
.orderListTitle tr td:first-of-type{
  width: 592px;
  margin: 0;
}
/* product items */
.orderListItem table{
  width: 1110px;
}
.confirmPayOrderItemProductLink{
  width: 580px;
}
.orderListItem tr{
  height: 80px;
  border: 1px solid #DDDDDD;
}
.conformPayProductPrice{
  font-size: 18px;
  font-weight: bold;
}
.orderListItem tr td:first-of-type{
  padding-left: 10px;
}
.confirmPayOrderItemSumPrice{
  color: #C40000;
}
/* confirmPayOrderDetail-lower part */
.confirmPayOrderDetailDiv{
  width: 1110px;
  margin-top: 50px;
}
.confirmPayOrderDetailTable,
.confirmPayOrderDetailTable tr{
  width: 1110px;
}
.confirmPayOrderDetailTable{
  border-top: 1px solid #DDDDDD;
}
.confirmPayOrderDetailTable tr{
  height: 36px;
}
.confirmPayOrderDetailTable tr td{
  padding-left: 10px;
}
.confirmPayButtonDiv{
  border: 1px solid #F58B0F;
  margin: 20px;
}
.confirmPayWarning{
  font-size: 18px;
  color: red;
  font-weight: bold;
}
.confirmPayWarning,
.confirmPayButton{
  margin: 20px 50px;
}
.confirmPayButton{
  width: 67px;
  height: 30px;
  border: 1px solid #E67C00;
  background-color: #F4A21D;
  border-radius: 4px;
  color: white;
  font-size: 12px;
}

</style>
