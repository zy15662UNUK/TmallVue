export default {
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
}
