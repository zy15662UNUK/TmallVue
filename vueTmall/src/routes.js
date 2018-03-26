import cartPage from "./components/main/cartPage.vue";
import paymentPage from "./components/main/paymentPage.vue";
import aliPayPage from "./components/main/alipayPage.vue";
import paymentSuccess from "./components/main/paymentSucess.vue";
import productReceive from "./components/main/productReceive.vue";
import receiveSuccess from "./components/main/receiveSuccess.vue";

// import components
export const routes = [
  {path: "/",component: cartPage},
  {path: "/paymentPage",component: paymentPage},
  {path: "/aliPayPage",component: aliPayPage},
  {path: "/paymentSuccess",component: paymentSuccess},
  {path: "/productReceive",component: productReceive},
  {path: "/receiveSuccess",component: receiveSuccess}
];
