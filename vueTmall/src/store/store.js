import Vue from "vue";
import Vuex from "vuex";
// Import the modules for vuex

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    // state for cartPage
    overAllPrice: 0,
    readyToGo: false,
    cart: [
      {
        name: "美国iRobot扫地机器人吸尘器全自动家用智能扫地机650 天猫电器城",
        src: "http://how2j.cn/tmall/img/productSingle_middle/3665.jpg",
        originPrice: "7580.0",
        promotionPrice: "5306.0",
        select: "http://how2j.cn/tmall/img/site/cartNotSelected.png",
        check: false,//true if this is selected
        num: 1,
        routerLink: "/"
      },
      {
        name: "阔腿裤三件套装女夏装2016新款大码雪纺时尚休闲气质棉麻九分裤潮",
        src: "http://how2j.cn/tmall/img/productSingle_middle/8510.jpg",
        originPrice: "235.0",
        promotionPrice: "152.75",
        select: "http://how2j.cn/tmall/img/site/cartNotSelected.png",
        check: false,
        num: 1,
        routerLink: "/productPage"
      },
    ],
    paymentCart: [],
    // state for paymentPage
    address:{
      addressdetails:"",
      zipcode: "",
      name: "",
      phoneNumber: ""
    },
  },
  getters: {
    // getters for cartPage
    readyToGo: function(state){
      return state.readyToGo;
    },
    getCart: function(state){
      return state.cart;
    },
    overAllPrice: function(state){
      return state.overAllPrice.toFixed(2);
    },
    // getters for paymentPage
    paymentCart: function(state){
      return state.paymentCart;
    },
    // getters for paySuccess
    address: function(state){
      return state.address;
    }
  },
  mutations: {
    // mutations for cartPage
    proceedToPay: function(state){
      state.paymentCart=[];
      for(var i=0;i<state.cart.length;i++){
        if(state.cart[i].check){
          state.paymentCart.push(state.cart[i]);
        }
      }
      console.log(state.paymentCart);
    },
    modifyCart: function(state,payload){
      state.cart[payload.index][payload.prop] = payload.value;
    },
    overAllPrice: function(state){
      // loop through the cart list, if product is checked, add to the overAllPrice
      state.overAllPrice=0;
      var selectedNum = 0;//count the num of selected items
      for(var i=0;i<state.cart.length;i++){
        if(state.cart[i].check){
          state.overAllPrice+=state.cart[i].num * parseFloat(state.cart[i].promotionPrice);
          selectedNum ++;
        }
      }
      if((selectedNum===state.cart.length)&&(state.cart.length!==0)){//if selectAll, switch the selectAll box to be checked, turn button to red
        $(".selectAllItem").attr('src', "http://how2j.cn/tmall/img/site/cartSelected.png");
        $(".createOrderButton").addClass('buttonPaymentReady');//style the button according to selection state
        state.readyToGo=true;
      }else if((selectedNum<state.cart.length)&&(selectedNum>0)) {
        $(".selectAllItem").attr('src', "http://how2j.cn/tmall/img/site/cartNotSelected.png");
        $(".createOrderButton").addClass('buttonPaymentReady');
        state.readyToGo=true;
      }else{//if not selectAll, switch the selectAll box to be unchecked,turn button to grey
        $(".selectAllItem").attr('src', "http://how2j.cn/tmall/img/site/cartNotSelected.png");
        $(".createOrderButton").removeClass('buttonPaymentReady');
        state.readyToGo=false;
      }
    },
    // mutations for paymentPage
    updateAddress: function(state,payload){
      state.address = payload;
    }
  }
});
