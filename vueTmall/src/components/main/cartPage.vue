<template>
  <div>
    <searchBar></searchBar>
    <div class="container">
      <div class="cartDiv">
        <div class="cartTitle text-right">
          <span>已选商品  (不含运费)</span>
          <span class="cartTitlePrice">￥{{overAllPrice}}</span>
          <button class="createOrderButton" style="background-color: rgb(170, 170, 170);" disabled="disabled" v-if="readyToGo"><router-link  @click.native="toPayment" to="/paymentPage"><span style="color:white">结 算</span></router-link></button>
          <button class="createOrderButton" style="background-color: rgb(170, 170, 170);" disabled="disabled" v-if="!readyToGo">结 算</button>
        </div>
        <div class="cartContent" style="text-align:center;color:gray;" >
          <div class="cartProductList">
            <table class="cartProductTable">
              <thead>
                <tr>
                    <th class="selectAndImage">
                            <img src="http://how2j.cn/tmall/img/site/cartNotSelected.png" class="selectAllItem" selectit="false" @click="selectAll">
                    全选
                    </th>
                    <th>商品信息</th>
                    <th>单价</th>
                    <th>数量</th>
                    <th width="120px">金额</th>
                    <th class="operation">操作</th>
                </tr>
              </thead>
              <tbody>
                    <tr class="cartProductItemTR" oiid="936" v-for="(elem,index) in getCart" :key="elem.name">
                        <td>
                            <img :src="elem.select" class="cartProductItemIfSelected" oiid="936" selectit="false" @click="selectEach(index)">
                            <img width="40px" :src="elem.src" class="cartProductImg">
                        </td>
                        <td>
                            <div class="cartProductLinkOutDiv">
                                <a class="cartProductLink" href="#nowhere">{{elem.name}}</a>
                                <div class="cartProductLinkInnerDiv">
                                    <img title="支持信用卡支付" src="http://how2j.cn/tmall/img/site/creditcard.png">
                                    <img title="消费者保障服务,承诺7天退货" src="http://how2j.cn/tmall/img/site/7day.png">
                                    <img title="消费者保障服务,承诺如实描述" src="http://how2j.cn/tmall/img/site/promise.png">
                                </div>
                            </div>
                        </td>
                        <td>
                            <span class="cartProductItemOringalPrice">￥{{elem.originPrice}}</span>
                            <span class="cartProductItemPromotionPrice">￥{{elem.promotionPrice}}</span>
                        </td>
                        <td>
                            <div class="cartProductChangeNumberDiv">
                                <a href="#nowhere" class="numberMinus" pid="365" @click="decrease(elem.num,index)">-</a>
                                <input autocomplete="off" class="orderItemNumberSetting" :value="elem.num">
                                <a href="#nowhere" class="numberPlus" pid="365" stock="75" @click="increase(elem.num,index)">+</a>
                            </div>
                         </td>
                        <td>
                            <span pid="365" oiid="936" class="cartProductItemSmallSumPrice" value="5306">￥{{elem.promotionPrice}}</span>
                        </td>
                        <td>
                            <a href="#nowhere" oiid="936" class="deleteOrderItem" @click="deleteItem(index)">删除</a>
                        </td>
                    </tr>
            </tbody>
            </table>
          </div>
        </div>
        <div class="cartFoot">
          <div class="cartFoot-left">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAANCAYAAAB2HjRBAAAACXBIWXMAAAsTAAALEwEAmpwYAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAAbklEQVR42mK8efPm/zdv3jAQC0RERBjU1NQYQWyAAGI4evTof1IAVD0DCAMEEBMDBQAggCjSDBBAFGkGCCCKNAMEEEWaAQKIIs0AAUSRZoAAokgzQABRpBkggCjSDBBALKC0euzYMZLSNgwABBgA76dCSxeoALkAAAAASUVORK5CYII=" class="selectAllItem" selectit="false" @click="selectAll">
            <span>全选</span>
          </div>
          <div class="float-right">
            <span>已选商品 <span class="cartSumNumber">{{selectedProductNum}}</span> 件</span>
            <span>合计 (不含运费): </span>
            <span class="cartSumPrice">￥<span class="cartSumPriceNum">{{overAllPrice}}</span></span>
            <button class="createOrderButton" style="background-color: rgb(170, 170, 170);" disabled="disabled"  v-if="readyToGo"><router-link to="/paymentPage" @click.native="toPayment"><span style="color:white">结 算</span></router-link></button>
            <button class="createOrderButton" style="background-color: rgb(170, 170, 170);" disabled="disabled"  v-if="!readyToGo">结 算</button>
          </div>
        </div>
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
  data: function(){
        return {
          selectedProductNum: 0,
          selectAllCheckBox: false,
        };
      },
  computed: {
          ...mapGetters([
          "getCart",
          "overAllPrice",
          "readyToGo",
        ])
  },
  methods: {
      toPayment(){
        this.$store.commit("proceedToPay");
      },
      increase(elem,index){
        var value = elem + 1;
        var payload = {
          index: index,
          prop: "num",
          value: value
        };
        console.log(payload);
        this.$store.commit("modifyCart",payload);
        this.$store.commit("overAllPrice");
      },
      decrease(elem,index){
        if(elem>1){
          var value = elem-1;
          var payload = {
            index: index,
            prop: "num",
            value: value
          };
          console.log(payload)
          this.$store.commit("modifyCart",payload);
          this.$store.commit("overAllPrice");
          // once change product num, update the overAllPrice
        }
      },
      handleEach(index){//manipution for each item in cart, which can be used for both funs below
        this.$store.state.cart[index].check = !this.$store.state.cart[index].check;
        if(this.$store.state.cart[index].check){//change selection state for each item
          this.$store.commit("modifyCart",{index:index,value:"http://how2j.cn/tmall/img/site/cartSelected.png",prop:"select"});//change checkbox img
          this.selectedProductNum ++;
        }else{
          this.$store.commit("modifyCart",{index:index,value:"http://how2j.cn/tmall/img/site/cartNotSelected.png",prop:"select"});
        }
      },
      selectAll(){
        this.selectedProductNum = 0;
        for(var i=0;i<this.$store.state.cart.length;i++){
          this.handleEach(i);
        }
        this.$store.commit("overAllPrice");//update the overAllPrice&&selectAll based on each item's selection state
      },
      selectEach(index){
        this.handleEach(index);
        this.$store.commit("overAllPrice");
      },
      deleteItem(index){
        this.$store.state.cart.splice(index,1);
        this.$store.commit("overAllPrice");
      }
  },

}
</script>
<style scoped>
  .container{
    min-width: 1000px;
  }
  /* cart top css */
  .cartDiv{
    margin: 20px auto;
    font-size: 12px;
  }

  .cartTitlePrice{
    color: #C40000;
    font-size: 14px;
    font-weight: bold;
    margin-left: 5px;
    margin-right: 3px;
  }
  .createOrderButton{
    border: 1px solid #AAAAAA;
    color: white;
    width: 53px;
    height: 25px;
    border-radius: 2px;
  }
  .buttonPaymentReady{
    background-color: rgb(196, 0, 0)!important;
  }
  .cartFoot{
    background-color: #E5E5E5;
    width: 1110px;
    height: 50px;
  }
  .cartSumNumber,
  .cartSumPrice{
    color: #C40000;
    font-size: 16px;
    font-weight: bold;
    margin-left: 5px;
    margin-right: 3px;
  }
  .cartFoot-left{
    padding: 15px;
    width: 200px;
    display: inline-block;
  }
  .cartFoot .createOrderButton{
    height: 50px;
    width: 122px;
    font-size: 20px;
  }
  /* cart product list */
  .cartContent{
    margin-top: 20px;
  }
  .cartProductTable{
    width: 1110px;
  }
  .cartProductItemTR{
    border: 1px solid #CCCCCC;
    width: 1110px;
    height: 120px;
    padding: 0;
  }
  .cartProductImg{
    width: 78px;
    height: 78px;
    display: inline-block;
  }
  .cartProductItemIfSelected{
    display: inline-block;
  }
  .cartProductLinkOutDiv{
    position: relative;
    height: 80px;
  }
  .cartProductLink{
    display: block;
    height: 16px;
  }
  .cartProductLinkInnerDiv{
    height: 20px;
    margin-top: 30px;
  }
  .cartProductLinkInnerDiv img{
    display: inline-block;
  }
  .orderItemNumberSetting{
    width: 42px;
    height: 15px;
  }
  .cartProductItemOringalPrice{
    display: block;
    height: 20px;
    font-family: Arial;
    font-size: 14px;
    font-weight: bold;
    text-decoration: line-through;
  }
  .cartProductItemPromotionPrice,
  .cartProductItemSmallSumPrice{
    display: block;
    font-family: Arial;
    font-size: 14px;
    font-weight: bold;
    color: #C40000;
  }

  .numberMinus,
  .numberPlus{
    width: 14px;
    display: inline-block;
    text-align: center;
    color: black;
    font-size: 16px;
  }
  .orderItemNumberSetting{
    height: 20px;
    border: 1px solid grey;
    display: inline-block;
  }
  .deleteOrderItem{
    color: #337ab7;
  }

</style>
