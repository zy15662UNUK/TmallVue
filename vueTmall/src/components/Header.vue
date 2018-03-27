<template>
  <div>
    <nav class="">
      <div class="container">
        <div class="left float-left">
          <span class="nav-one"><i class="fas fa-home"></i></span>
          <span class="nav-two"><a href="#">天猫首页</a></span>
          <span class="nav-three">喵，欢迎来天猫</span>
          <span class="nav-four"><a href="#">请登录</a></span>
          <span class="nav-five"><a href="#">免费注册</a></span>
        </div>
        <div class="right text-right">
           <span class="nav-six"><a href="#">我的订单</a></span>
           <span class="nav-seven"><router-link to="/"><a><i class="fas fa-shopping-cart"></i> 购物车{{cartNum}}件</a></router-link></span>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  computed: {
    cartNum() {
      return this.$store.state.cart.length + "";
    }
  },

}
</script>
<style scoped>
  a{
    color: #999;
  }
  a:hover{
    text-decoration: none;
    color: #C40000;
  }

  .container{
    min-width: 570px;
  }
  .fa-shopping-cart,.fa-home{
    color: #C40000;
    font-size: 15px;
  }
  nav{
    font-size: 12px;
    font-family: Arial;
    height: 27px;
    background-color: #f2f2f2;
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid #e7e7e7;
  }
  nav span{
    color: #999;
    margin-left: 10px;
    margin-right: 10px;
  }
</style>
