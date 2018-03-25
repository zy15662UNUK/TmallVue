<template>
  <div class="container">
          <span class="gif">
            <a href="#nowhere">
              <img src="http://how2j.cn/tmall/img/site/simpleLogo.png" class="simpleLogo" id="simpleLogo">
            </a>
          </span>
          <div class="searchDiv float-right">
            <div class="searchBox">
              <input type="text" placeholder="平衡车 原汁机 " name="keyword">
              <button class="searchButton" type="submit">搜天猫</button>
            </div>
              <div class="searchBelow">
                  <span> <a href="#nowhere"> 箱 </a> <span>|</span>
                  </span>
                  <span> <a href="#nowhere">空调 </a> <span>|</span>
                  </span>
                  <span> <a href="#nowhere">女表 </a> <span>|</span>
                </span> <span> <a href="#nowhere">男装 </a></span>
              </div>
          </div>
      </div>

      <div style="height:50px"></div>
</template>
<script>
export default {

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

button:hover,button:active{
  cursor: pointer;
}
button:active{
  transform: translateY(5px);
}
.container{
  min-width: 750px;
  font-size: 14px;
  font-family: Arial;
}
.gif{
  margin-top: 50px;
  display: inline-block;
  z-index: -1;
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
  width: 345px;
}
.searchBox input{
  width: 225px;
  border: none;
  height: 34px;
  margin: 2px;
  outline: none;
  /* 去掉输入框轮廓，否则获取焦点的时候会发生颜色变化 */
}
.searchDiv{
  margin: 50px auto;
  display: inline-block;
}
.searchDiv span{
  color: #999;
  margin-left: 10px;
  margin-right: 10px;
}

</style>
