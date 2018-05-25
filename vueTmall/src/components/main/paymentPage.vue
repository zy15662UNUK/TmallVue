<template>
  <div id="">
    <div class="buyPageDiv container">
      <div class="buyFlow">
        <img src="http://how2j.cn/tmall/img/site/simpleLogo.png" class="float-left">
        <img src="http://how2j.cn/tmall/img/site/buyflow.png" class="float-right">
        <div style="clear:both"></div>
      </div>
      <div class="address">
          <div class="addressTip">输入收货地址</div>
          <div>
              <table class="addressTable">
                <tbody>
                <tr>
                  <td class="firstColumn">详细地址<span class="redStar">*</span></td>
                  <td><textarea v-model="address" name="address"></textarea></td>
                </tr>
                <tr>
                  <td>邮政编码</td>
                  <td><input type="text" v-model="zipcode" name="post"></td>
                </tr>
                <tr>
                  <td>收货人姓名<span class="redStar">*</span></td>
                  <td><input type="text" v-model="name" name="receiver"></td>
                </tr>
                <tr>
                  <td>手机号码 <span class="redStar">*</span></td>
                  <td><input type="text" v-model="phoneNumber" name="mobile"></td>
                </tr>
              </tbody>
              </table>
          </div>
      </div>
      <div class="productList">
        <div class="productListTip">确认订单信息</div>
        <table class="productListTable">
          <thead>
            <tr>
              <th class="productListTableFirstColumn" colspan="2">
                <img src="http://how2j.cn/tmall/img/site/tmallbuy.png" class="tmallbuy" width="16px" height="16px">
                <a href="#nowhere" class="marketLink">店铺：天猫店铺</a>
                <a href="#nowhere" class="wangwanglink"> <span class="wangwangGif"></span> </a>
              </th>
              <th>单价</th>
              <th>数量</th>
              <th>小计</th>
              <th>配送方式</th>
            </tr>
            <tr class="rowborder">
              <td colspan="2"></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody class="productListTableTbody">
              <tr class="orderItemTR" v-for="elem in paymentCart" :key="elem.name">
                <td class="orderItemFirstTD"><img width="20px"  :src="elem.src" class="orderItemImg"></td>
                <td class="orderItemProductInfo">
                <a class="orderItemProductLink" href="#nowhere">
                  {{elem.name}}
                </a>
                  <img title="支持信用卡支付" src="http://how2j.cn/tmall/img/site/creditcard.png">
                  <img title="消费者保障服务,承诺7天退货" src="http://how2j.cn/tmall/img/site/7day.png">
                  <img title="消费者保障服务,承诺如实描述" src="http://how2j.cn/tmall/img/site/promise.png">
                </td>
                <td>
                <span class="orderItemProductPrice">￥{{elem.promotionPrice}}</span>
                </td>
                <td>
                <span class="orderItemProductNumber">{{elem.num}}</span>
                </td>
                <td><span class="orderItemUnitSum">
                ￥{{elem.num*parseFloat(elem.promotionPrice)}}
                </span>
                </td>
                <td class="orderItemLastTD">
                <label class="orderItemDeliveryLabel">
                  <input type="radio" checked="checked" value="">
                  普通配送
                </label>
                <select class="orderItemDeliverySelect">
                  <option>快递 免邮费</option>
                </select>
                </td>
              </tr>
          </tbody>
        </table>
        <div class="orderItemSumDiv">
          <div class="float-left mt-3 ml-2">
            <span class="leaveMessageText">给卖家留言:</span>
            <span>
              <img src="http://how2j.cn/tmall/img/site/leaveMessage.png" class="leaveMessageImg" @click="leaveMessage">
            </span>
            <span class="leaveMessageTextareaSpan" style="display: none;">
              <textarea class="leaveMessageTextarea" name="userMessage"></textarea>
              <div class="feedback">
                <span>还可以输入200个字符</span>
              </div>
            </span>
          </div>
          <span class="float-right mr-2">店铺合计(含运费): ￥{{overAllPrice}}</span>
        </div>
      </div>
      <div class="orderItemTotalSumDiv text-right">
        <div class="mr-2">
          <span>实付款：</span>
          <span class="orderItemTotalSumSpan">￥{{overAllPrice}}</span>
        </div>
      </div>
      <div class="submitOrderDiv text-right">
          <button class="submitOrderButton mr-2" type="button"><router-link to="/aliPayPage" @click.native="toAlipay"><span style="color:white">提交订单</span></router-link></button>
      </div>
    </div>
  </div>
</template>
<script>
import simplifiedSearch from "./simplifiedSearch.vue"
import {mapGetters} from "vuex";
export default {
  components: {
    searchBar: simplifiedSearch
  },
  computed: {
          ...mapGetters([
          "paymentCart",
          "overAllPrice",
        ])
  },
  data: function(){
    return {
      address:"建议您如实填写详细收货地址，例如接到名称，门牌号码，楼层和房间号等信息",
      zipcode: "如果您不清楚邮递区号，请填写000000",
      name: "长度不超过25个字符",
      phoneNumber: "请输入11位手机号码"
    };
  },
  methods: {
    toAlipay(){//采集表单中地址并发送给vuex储存
      var payload={
        addressdetails: this.address,
        zipcode: this.zipcode,
        name: this.name,
        phoneNumber: this.phoneNumber
      };
      this.$store.commit("updateAddress",payload);
      console.log(payload);
    },
    leaveMessage() {
      $(".leaveMessageImg").hide();
      $(".orderItemSumDiv").height(100);
      $(".leaveMessageTextarea").css('border-width', '1px');
      $(".leaveMessageTextarea").css('border-color', '#FFAD35');
      $(".leaveMessageTextarea").css('border-style', 'solid');
      $(".leaveMessageTextareaSpan").show();
    }
  }
}
</script>
<style scoped>
  .container{
  min-width: 1000px;
  }
  /* payment top  */
  .buyFlow{
  margin: 20px auto;
  }
  /* payment table */
  .address,
  .addressTable{
  width: 1110px;
  }
  .addressTable{
  font-size: 12px;
  }
  .addressTable tr{
  /* cannot set margin for table, use this way to set up blank */
  height: 50px;
  }
  .addressTable textarea,
  .addressTable input{
  min-width: 310px;
  height: 40px;
  }
  .addressTip,
  .productListTip{
  color: #333333;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
  margin-bottom: 30px;
  }
  .redStar{
  color: red;
  font-size: 8px;
  }
  /* productList */
  .productList,
  .productListTable{
  width: 1110px;
  margin-top: 20px;
  }
  .productListTableFirstColumn{
  width: 570px;
  }
  .productListTable th,
  .productListTable td{
  padding-left: 20px;
  }
  .orderItemImg{
  width: 50px;
  height: 50px;
  }
  .orderItemTR{
  height: 75px;
  border-top: 1px solid #E5E5E5;
  font-size: 12px;
  }
  .orderItemProductPrice{
  color: #CC0000;
  font-weight: bold
  }
  .rowborder td{
  background-color: #b2d1ff;
  border-right: 2px solid #fff;
  height: 3px;
  }
  .orderItemSumDiv{
  border-top: 2px solid #b2d1ff;
  background-color: #F2F6FF;
  height: 50px;
  width: 1110px;
  }
  .orderItemTotalSumDiv,
  .submitOrderDiv{
  display: block;
  width: 1110px;
  height: 40px;
  margin: 10px;
  }
  .orderItemTotalSumSpan{
  color: #C40000 !important;
  font-size: 22px;
  font-weight: bold;
  border-bottom: 1px dotted #F2F6FF;
  }
  .submitOrderButton{
  border: 1px solid #C40000;
  background-color: #C40000;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  font-weight: 700;
  color: white;
  float: right;
  width: 180px;
  height: 40px;
  }
  .leaveMessageTextarea{
  width: 500px;
  height: 50px;
  }

</style>
