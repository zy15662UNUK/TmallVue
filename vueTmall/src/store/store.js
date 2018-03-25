import Vue from "vue";
import Vuex from "vuex";
// Import the modules for vuex

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    overAllPrice: 0,
    cart: [
      {
        name: "美国iRobot扫地机器人吸尘器全自动家用智能扫地机650 天猫电器城",
        src: "http://how2j.cn/tmall/img/productSingle_middle/3665.jpg",
        originPrice: "7580.0",
        promotionPrice: "5306.0",
        select: "http://how2j.cn/tmall/img/site/cartNotSelected.png",
        check: false,//true if this is selected
        num: 1
      },
      {
        name: "阔腿裤三件套装女夏装2016新款大码雪纺时尚休闲气质棉麻九分裤潮",
        src: "http://how2j.cn/tmall/img/productSingle_middle/8510.jpg",
        originPrice: "235.0",
        promotionPrice: "152.75",
        select: "http://how2j.cn/tmall/img/site/cartNotSelected.png",
        check: false,
        num: 1
      },
    ]
  },
  getters: {
    getCart: function(state){
      return state.cart;
    },
    overAllPrice: function(state){
      return state.overAllPrice.toFixed(2);
    }
  },
  mutations: {
    modifyCart: function(state,payload){
      state.cart[payload.index][payload.prop] = payload.value;
    },
    overAllPrice: function(state){
      // loop through the cart list, if product is checked, add to the overAllPrice
      state.overAllPrice=0;
      for(var i=0;i<state.cart.length;i++){
        if(state.cart[i].check){
          state.overAllPrice+=state.cart[i].num * parseFloat(state.cart[i].promotionPrice);
        }
      }
    }
  }
});