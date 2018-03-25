import Portfolio from "./components/Portfolio.vue";
import Stock from "./components/Stock.vue";
import Home from "./components/Home.vue";
// import components
export const routes = [
  {path: "/Portfolio",component: Portfolio},
  {path: "/Stock",component: Stock},
  {path: "",component: Home}
];
