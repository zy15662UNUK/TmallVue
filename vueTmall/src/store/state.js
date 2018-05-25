export default {
    // state for cartPage
    overAllPrice: 0,// 总价
    readyToGo: false,
    // 购物车内全部商品，每个商品为一个对象
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
    paymentCart: [], //打算结算的商品
    // state for paymentPage
    address:{//填写的地址
      addressdetails:"",
      zipcode: "",
      name: "",
      phoneNumber: ""
  },

};
