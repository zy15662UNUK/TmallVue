<template>
  <div id="">
    <div class="container">
      <span class="gif">
        <a href="#nowhere"> <img class="logo" src="http://how2j.cn/tmall/img/site/logo.gif"
            id="logo">
        </a>
      </span>
      <div class="searchDiv">
        <div class="searchBox">
          <input type="text" placeholder="时尚男鞋  太阳镜 " name="keyword">
          <button class="searchButton" type="submit">搜索</button>
        </div>
          <div class="searchBelow">
              <span> <a href="#nowhere"> 平衡车 </a> <span>|</span>
              </span>
              <span> <a href="#nowhere"> 扫地机器人 </a> <span>|</span>
              </span>
              <span> <a href="#nowhere"> 原汁机 </a> <span>|</span>
              </span> <span> <a href="#nowhere"> 冰箱 </a></span>
          </div>
      </div>
    </div>
    <div style="height:50px"></div>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
  .container{
  font-size: 14px;
  font-family: Arial;
  min-width: 1110px;
  }
  .gif{
  margin-top: 35px;
  display: inline-block;
  z-index: -1;
  float: left;
  }
  input::-webkit-input-placeholder{
  font-size: 12px;
  color: #999;
  }
  .searchBelow span{
  color: #999;
  }
  .searchButton{
  height: 36px;
  width: 110px;
  background-color: transparent;
  border-color: transparent;
  font-size: 20px;
  font-weight: bold;
  color: white;
  border: 0;
  padding: 0;

  }
  .searchBox{
  background-color:  #C40000;
  padding: 0.5px 0.5px 2px 0.5px;
  width: 395px;
  }
  .searchBox input{
  width: 275px;
  border: none;
  height: 36px;
  margin: 1px;
  outline: none;
  }
  .searchDiv{
  margin: 50px auto;
  display: inline-block;
  }
  .top-search span{
  color: #999;
  margin-left: 10px;
  margin-right: 10px;
  }

</style>
