export default {
    // mutations for cartPage
    proceedToPay: function(state){//把被选中的商品放入结算list中，供结算面渲染使用
      state.paymentCart=[];
      for(var i=0;i<state.cart.length;i++){
        if(state.cart[i].check){
          state.paymentCart.push(state.cart[i]);
        }
      }
      console.log(state.paymentCart);
    },
    modifyCart: function(state,payload){//用于改变商品参数
      state.cart[payload.index][payload.prop] = payload.value;
    },
    overAllPrice: function(state){//更新商品总价/改变打勾/按钮样式
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
      }else if((selectedNum<state.cart.length)&&(selectedNum>0)) {//如果仅选择一部分，换掉全选图片，但是依旧改变结算按钮样式
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
