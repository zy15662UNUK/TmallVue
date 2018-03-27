<template>
  <div id="">
    <topSearch></topSearch>
    <div class="container">
      <div class="imgAndInfo">
        <div class="imgInimgAndInfo">
          <img  width="100px" class="bigImg" src="http://how2j.cn/tmall/img/productSingle/8619.jpg">
          <div class="smallImageDiv">
              <img  @mouseover="mouseOver" width="56px" class="smallImage" src="http://how2j.cn/tmall/img/productSingle_small/8620.jpg">
              <img  @mouseover="mouseOver" width="56px" class="smallImage" src="http://how2j.cn/tmall/img/productSingle_small/8619.jpg">
              <img  @mouseover="mouseOver" width="56px" class="smallImage" src="http://how2j.cn/tmall/img/productSingle_small/8618.jpg">
              <img  @mouseover="mouseOver" width="56px" class="smallImage" src="http://how2j.cn/tmall/img/productSingle_small/8617.jpg">
              <img  @mouseover="mouseOver" width="56px" class="smallImage" src="http://how2j.cn/tmall/img/productSingle_small/8616.jpg">
          </div>
        </div>
        <div style="clear:both"></div>
      </div>
      <div class="infoInimgAndInfo">
          <div class="productTitle">
            名媛2016新款女装夏两件套裤韩版雪纺七分裤阔腿裤休闲时尚套装女
          </div>
          <div class="productSubTitle">
            高端定制  高档棉麻  现货即发  加购物车  领优惠卷
          </div>
          <div class="productPrice">
            <div class="discount">
              <span class="discountBig">聚划算</span>
              <span>此商品即将参加聚划算，<span class="discountTime">1天19小时</span>后开始，</span>
            </div>
            <div class="productPriceDiv">
              <div class="voucherDiv"><img height="16px" src="http://how2j.cn/tmall/img/site/gouwujuan.png">
              <span> 全天猫实物商品通用</span>
              </div>
              <div class="originalDiv">
                <span class="originalPriceDesc">价格</span>
                <span class="originalPriceYuan">¥</span>
                <span class="originalPrice">
                  399.00
                </span>
              </div>
              <div class="promotionDiv">
                <span class="promotionPriceDesc">促销价 </span>
                <span class="promotionPriceYuan">¥</span>
                <span class="promotionPrice">
                  379.05
                </span>
              </div>
            </div>
          </div>
          <div class="productSaleAndReviewNumber">
            <div>销量 <span class="redColor boldWord"> 50</span></div>
            <div>累计评价 <span class="redColor boldWord"> 19</span></div>
          </div>
          <div class="productNumber">
            <span>数量</span>
            <span>
              <span class="productNumberSettingSpan">
              <input type="text" value="1" class="productNumberSetting">
              </span>
              <span class="arrow">
                <a class="increaseNumber" href="#nowhere">
                <span class="updown">
                   <img src="http://how2j.cn/tmall/img/site/increase.png">
                </span>
                </a>
                <span class="updownMiddle"> </span>
                <a class="decreaseNumber" href="#nowhere">
                <span class="updown">
                    <img src="http://how2j.cn/tmall/img/site/decrease.png">
                </span>
                </a>
              </span>
            件</span>
            <span>库存66件</span>
          </div>
          <div class="serviceCommitment">
            <span class="serviceCommitmentDesc">服务承诺</span>
            <span class="serviceCommitmentLink">
              <a href="#nowhere">正品保证</a>
              <a href="#nowhere">极速退款</a>
              <a href="#nowhere">赠运费险</a>
              <a href="#nowhere">七天无理由退换</a>
            </span>
          </div>
          <div class="buyDiv">
            <a href="#nowhere" class="buyLink"><button class="buyButton">立即购买</button></a>
            <a class="addCartLink" href="#nowhere"><button class="addCartButton"><span class="glyphicon glyphicon-shopping-cart"></span>加入购物车</button></a>
          </div>
        </div>
        <div style="clear:both"></div>
      <div class="productDetailDiv" style="display: block;">
        <div class="productDetailTopPart">
            <a class="productDetailTopPartSelectedLink selected" @click="productDetail=true;switchContent($event)">  商品详情</a>
            <a class="productDetailTopReviewLink" @click="productDetail=false;switchContent($event)">  累计评价 <span class="productDetailTopReviewLinkNumber">19</span> </a>
        </div>
        <div class="productDetail" v-if="productDetail">
          <div class="productParamterPart">
              <div class="productParamter">产品参数：</div>
              <div class="productParamterList">
                      <span>材质成分:  聚酯纤维100% </span>
                      <span>品牌:  Emyche/艾米秋 </span>
                      <span>货号:  129668 </span>
                      <span>尺码:  L M S XL X </span>
                      <span>上市年份季节:  2016年夏季 </span>
                      <span>颜色分类:  白色 黑色 浅蓝 </span>
                      <span>适用年龄:  18-25周岁 </span>
              </div>
              <div style="clear:both"></div>
          </div>
          <div class="productDetailImagesPart">
              <img src="http://how2j.cn/tmall/img/productDetail/8626.jpg">
              <img src="http://how2j.cn/tmall/img/productDetail/8624.jpg">
              <img src="http://how2j.cn/tmall/img/productDetail/8625.jpg">
              <img src="http://how2j.cn/tmall/img/productDetail/8623.jpg">
              <img src="http://how2j.cn/tmall/img/productDetail/8622.jpg">
              <img src="http://how2j.cn/tmall/img/productDetail/8621.jpg">
          </div>
        </div>
        <div class="productReview" v-else>
          <div class="productReviewContentPart">
                  <div class="productReviewItem">
                      <div class="productReviewItemDesc">
                          <div class="productReviewItemContent">
                              不错的购物，包装很精细，布料也不错舒服，因为之前一直购买品牌装，很好的一次网购，生完宝宝刚刚一个多月我一百五十斤穿2XL不错
                          </div>
                          <div class="productReviewItemDate">2016-08-10</div>
                      </div>
                      <div class="productReviewItemUserInfo">
                          哀****莉<span class="userInfoGrayPart">（匿名）</span>
                      </div>
                      <div style="clear:both"></div>
                  </div>
                  <div class="productReviewItem">
                      <div class="productReviewItemDesc">
                          <div class="productReviewItemContent">
                              面料很好，大小也刚刚好，本来买之前还担心，犹豫，等货到了，比我心中想象的好很多，大家放心购买，很满意的购物，以后还会来??
                          </div>
                          <div class="productReviewItemDate">2016-08-23</div>
                      </div>
                      <div class="productReviewItemUserInfo">
                          贤*闲<span class="userInfoGrayPart">（匿名）</span>
                      </div>
                      <div style="clear:both"></div>
                  </div>
                  <div class="productReviewItem">
                      <div class="productReviewItemDesc">
                          <div class="productReviewItemContent">
                              <span>商品：</span>宝贝料子和手感都不错，是值这价，卖家很贴心的送了内衣带，5分好评是必须的。喜欢的可以 下手了
                          </div>
                          <div class="productReviewItemDate">2016-08-16</div>
                      </div>
                      <div class="productReviewItemUserInfo">
                          孤*****爱<span class="userInfoGrayPart">（匿名）</span>
                      </div>
                      <div style="clear:both"></div>
                  </div>
                  <div class="productReviewItem">
                      <div class="productReviewItemDesc">
                          <div class="productReviewItemContent">
                              衣服收到了，给朋友买的，真心不错，料子也特别好，穿起来特别有气质，跟模特穿的效果差不多。。。好评，好评
                          </div>
                          <div class="productReviewItemDate">2016-08-19</div>
                      </div>
                      <div class="productReviewItemUserInfo">
                          哀****莉<span class="userInfoGrayPart">（匿名）</span>
                      </div>
                      <div style="clear:both"></div>
                  </div>
                  <div class="productReviewItem">
                      <div class="productReviewItemDesc">
                          <div class="productReviewItemContent">
                              衣服不错，手感不错，试穿很有型，真心的喜欢，谢谢老板
                          </div>
                          <div class="productReviewItemDate">2016-07-19</div>
                      </div>
                      <div class="productReviewItemUserInfo">
                          孤*****爱<span class="userInfoGrayPart">（匿名）</span>
                      </div>
                      <div style="clear:both"></div>
                  </div>
                  <div class="productReviewItem">
                      <div class="productReviewItemDesc">
                          <div class="productReviewItemContent">
                              喜欢(⊙o⊙)哦，美美哒，值得一试！！！宽松雪纺，很舒服
                          </div>
                          <div class="productReviewItemDate">2016-08-10</div>
                      </div>
                      <div class="productReviewItemUserInfo">
                          这****0<span class="userInfoGrayPart">（匿名）</span>
                      </div>
                      <div style="clear:both"></div>
                  </div>
                  <div class="productReviewItem">
                      <div class="productReviewItemDesc">
                          <div class="productReviewItemContent">
                              衣服已经收到，大小很合适，面料也可以，就是感觉衣服面料有一点厚，其他都还不错，款式也好看，希望店家多出一点新款，以后回来光顾你们。?
                          </div>
                          <div class="productReviewItemDate">2016-07-10</div>
                      </div>
                      <div class="productReviewItemUserInfo">
                          y****心<span class="userInfoGrayPart">（匿名）</span>
                      </div>
                      <div style="clear:both"></div>
                  </div>
                  <div class="productReviewItem">
                      <div class="productReviewItemDesc">
                          <div class="productReviewItemContent">
                              很漂亮的衣服，料子有垂感，我很满意，老公也说好呢
                          </div>
                          <div class="productReviewItemDate">2016-07-27</div>
                      </div>
                      <div class="productReviewItemUserInfo">
                          阿*丶<span class="userInfoGrayPart">（匿名）</span>
                      </div>
                      <div style="clear:both"></div>
                  </div>
                  <div class="productReviewItem">
                      <div class="productReviewItemDesc">
                          <div class="productReviewItemContent">
                              真不错，已经迫不及待的穿上了，朋友们都说好，挺有气质的，就是上衣稍微有点肥，不过肉肉被藏起来了！有看上的赶紧下单吧！
                          </div>
                          <div class="productReviewItemDate">2016-08-12</div>
                      </div>
                      <div class="productReviewItemUserInfo">
                          名*****_<span class="userInfoGrayPart">（匿名）</span>
                      </div>
                      <div style="clear:both"></div>
                  </div>
                  <div class="productReviewItem">
                      <div class="productReviewItemDesc">
                          <div class="productReviewItemContent">
                              质量是真的不错，适合个子高一点的美眉穿，很漂亮?
                          </div>
                          <div class="productReviewItemDate">2016-08-03</div>
                      </div>
                      <div class="productReviewItemUserInfo">
                          安**°<span class="userInfoGrayPart">（匿名）</span>
                      </div>
                      <div style="clear:both"></div>
                  </div>
                  <div class="productReviewItem">
                      <div class="productReviewItemDesc">
                          <div class="productReviewItemContent">
                              再买的时候纠结了好久，最后还是选择在这里购买，一次满意的网购，让我对网购有了希望，或刚收到，因觉得物超所值，就迫不及待拍了照片，那个玻璃的声音非常脆，我个人觉得挺好的，值得拥有！
                          </div>
                          <div class="productReviewItemDate">2016-08-08</div>
                      </div>
                      <div class="productReviewItemUserInfo">
                          这****0<span class="userInfoGrayPart">（匿名）</span>
                      </div>
                      <div style="clear:both"></div>
                  </div>
                  <div class="productReviewItem">
                      <div class="productReviewItemDesc">
                          <div class="productReviewItemContent">
                              <span>服务：</span>不错
                          </div>
                          <div class="productReviewItemDate">2016-08-20</div>
                      </div>
                      <div class="productReviewItemUserInfo">
                          醉**心<span class="userInfoGrayPart">（匿名）</span>
                      </div>
                      <div style="clear:both"></div>
                  </div>
                  <div class="productReviewItem">
                      <div class="productReviewItemDesc">
                          <div class="productReviewItemContent">
                              强烈推荐，我的天，质量也太好了，让我情何以堪，大爱啊。说说我的体格吧，162.105斤，腰围大概是22，穿m码刚刚好。快递那么快，特地跟店家说10号要外出店家也尽心备注的很好。真的特别感动，我收藏店铺了，下次还来你们家。衣服比雪纺舒服，薄薄的，现在穿刚好，我配了高跟鞋和小白鞋都很完美。店家还送了无痕肩带，真的太细心了，给一百个好评，赞。衣服我看了没有线头，薄薄的。不说了，我赶紧发给我姐让她看看。
                          </div>
                          <div class="productReviewItemDate">2016-08-17</div>
                      </div>
                      <div class="productReviewItemUserInfo">
                          安**°<span class="userInfoGrayPart">（匿名）</span>
                      </div>
                      <div style="clear:both"></div>
                  </div>
                  <div class="productReviewItem">
                      <div class="productReviewItemDesc">
                          <div class="productReviewItemContent">
                              此用户没有填写评论！
                          </div>
                          <div class="productReviewItemDate">2016-07-21</div>
                      </div>
                      <div class="productReviewItemUserInfo">
                          乱**型<span class="userInfoGrayPart">（匿名）</span>
                      </div>
                      <div style="clear:both"></div>
                  </div>
                  <div class="productReviewItem">
                      <div class="productReviewItemDesc">
                          <div class="productReviewItemContent">
                              衣服质量真心不错很厚实，上身效果很棒哦，穿起来很舒服，很洋气。价格也很合理……赞赞赞
                          </div>
                          <div class="productReviewItemDate">2016-08-19</div>
                      </div>
                      <div class="productReviewItemUserInfo">
                          丶***眠<span class="userInfoGrayPart">（匿名）</span>
                      </div>
                      <div style="clear:both"></div>
                  </div>
                  <div class="productReviewItem">
                      <div class="productReviewItemDesc">
                          <div class="productReviewItemContent">
                              衣服裤子都很合身，同事笑我说这是我买得最好看最时尚的一套衣服，衣服上身效果也不错，很是满意，还送了隐形带，正好用上，质量很好穿着凉快，唯一不足的就是洗了后需要烫一下才不皱，不过不影响衣服的美，很满意。上传两张没P的照片
                          </div>
                          <div class="productReviewItemDate">2016-08-08</div>
                      </div>
                      <div class="productReviewItemUserInfo">
                          乱**型<span class="userInfoGrayPart">（匿名）</span>
                      </div>
                      <div style="clear:both"></div>
                  </div>
                  <div class="productReviewItem">
                      <div class="productReviewItemDesc">
                          <div class="productReviewItemContent">
                              不好意思好久才来评价  质量好  上身效果好  主要有胖子穿的漂亮衣服啦   赞赞赞
                          </div>
                          <div class="productReviewItemDate">2016-07-11</div>
                      </div>
                      <div class="productReviewItemUserInfo">
                          l******1<span class="userInfoGrayPart">（匿名）</span>
                      </div>
                      <div style="clear:both"></div>
                  </div>
                  <div class="productReviewItem">
                      <div class="productReviewItemDesc">
                          <div class="productReviewItemContent">
                              网购以来为数不多的质量好到超乎意料，穿上特别舒服，大小也正合适，超赞！这个店里值得好好逛逛！
                          </div>
                          <div class="productReviewItemDate">2016-07-10</div>
                      </div>
                      <div class="productReviewItemUserInfo">
                          盗**记<span class="userInfoGrayPart">（匿名）</span>
                      </div>
                      <div style="clear:both"></div>
                  </div>
                  <div class="productReviewItem">
                      <div class="productReviewItemDesc">
                          <div class="productReviewItemContent">
                              宝贝面料很舒服，一字领也非常美，说实话是充上衣买的！犹豫了很长时间才下定决心的，很喜欢，很满意！喜欢就是最值的！
                          </div>
                          <div class="productReviewItemDate">2016-07-24</div>
                      </div>
                      <div class="productReviewItemUserInfo">
                          贤*闲<span class="userInfoGrayPart">（匿名）</span>
                      </div>
                      <div style="clear:both"></div>
                  </div>
              </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
$(".productDetailTopPart a").click(function(event) {
  if(!$(this).hasClass('selected')){
    $(this).toggleClass('selected');
    $(this).siblings('a').toggleClass('selected');
  }
});
import topSearch from "./topSearch.vue"
export default {
  data: function(){
    return {
      productDetail: true
    };
  },
  components: {
    topSearch: topSearch
  },
  methods: {
    mouseOver() {
      $(".smallImage").hover(function() {
      /* Stuff to do when the mouse enters the element */
      var imgSrc_small = $(this).attr('src');
      var imgSrc = "http://how2j.cn/tmall/img/productSingle/"+imgSrc_small.slice(imgSrc_small.length-8,imgSrc_small.length);
      $(".bigImg").attr('src', imgSrc);
      },function(){
        var imgSrc_small = $(".smallImage:first-of-type").attr('src');
        var imgSrc = "http://how2j.cn/tmall/img/productSingle/"+imgSrc_small.slice(imgSrc_small.length-8,imgSrc_small.length);
        $(".bigImg").attr('src', imgSrc);
      });
    },
    switchContent(e){
      $(".productDetailTopPart a").toggleClass('selected');
    }
  }
}
</script>
<style scoped>
  .container{
    min-width: 1000px;
    font-size: 14px;
    font-family: Arial;
  }
  /* left img css */
  .bigImg{
    width: 358px;
    height: 357px;
    border: 1px solid #F2F2F2;
    padding: 22px;

  }
  .imgAndInfo{
    width: 400px;
    height: 550px;
    float: left;
    display: inline-block;
    text-align: center;
  }
  .smallImageDiv{
    margin: 15px auto;
  }
  .smallImage{
    margin: 5px;
  }
  .smallImage:hover{
    cursor: pointer;
    border: 2px solid black;
  }
  /* right information css */
  .infoInimgAndInfo{
    width: 535px;
    height: 400px;
    display: inline-block;
  }
  .productTitle{
    color: black;
    font-size: 16px;
    font-weight: bold;
    margin: 0px 10px;
  }
  .productSubTitle{
    margin-left: 10px;
    color: #DD2727;
    font-size: 12px;
    margin: 0px 10px;
  }
  .discount{
    background-color: #2DA77A;
    width: 535px;
    height: 40px;
    text-align: center;
    color: white;
    font-size: 12px;
    padding-top: 6px;
  }
  .discountBig{
      font-size: 18px;
      font-weight: bold;
      font-family: Arial;
  }
  .discountTime{
    color: #FFC057;
    font-weight: bold;
  }
  .productPriceDiv{
    width: 535px;
    height: 105px;
    background-color: #ced5db;
    color: #666666;
    padding-top: 10px;
  }
  .voucherDiv,
  .originalDiv,
  .promotionDiv{
    margin-left: 10px;
    font-size: 12px;
    margin-top: 5px;
  }
  .originalPriceYuan{
    margin-left: 40px;

  }
  .originalPrice{
    text-decoration: line-through;
  }
  .promotionPriceYuan{
    margin-left: 40px;
    color: #c40000;
    font-family: Arial;
    font-size: 30px;
    font-weight: bold;
  }
  .promotionPrice{
    color: #c40000;
    font-family: Arial;
    font-size: 30px;
    font-weight: bold;
  }
  .productSaleAndReviewNumber{
    width: 535px;
    height: 40px;
    margin: 20px auto;
    text-align: center;
  }
  .productSaleAndReviewNumber div{
    display: inline-block;
    border: 1px dotted #C9C9C9;
    width: 265.5px;
    padding: 5px;
    font-size: 12px;
    color: #E5DFDA;
  }
  .productSaleAndReviewNumber div span{
    color: #C40000;
    font-weight: bold;
  }
  .productNumber{
    width: 535px;
    font-size: 12px;
    color: #E5DFDA;
  }
  .productNumber input{
   font-size: 12px;
   color: #E5DFDA;
   width: 42px;
   height: 32px;
  }
  .arrow{
    display: inline-block;
    vertical-align: bottom;
    margin: auto 10px;
  }
  .arrow a{
    display: block;
    width: 20px;
    height: 13px;
    border: 1px solid #E5DFDA;
    text-align: center;
  }
  .updown img{
    margin-bottom: 5px;
  }
  .serviceCommitment{
    width: 535px;
    font-size: 12px;
    color: #E5DFDA;
    margin: 10px auto;
  }
  .buyDiv{
    text-align: center;
    width: 535px;
    font-size: 16px;
    margin: 30px auto;
  }
  .buyDiv a button{
    width: 180px;
    height: 42px;
    margin: auto 10px;
  }
  .buyButton{
    border: 1px solid #C40000;
    background-color: #FFEDED;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: #C40000;
    font-family: arial;
  }
  .addCartButton{
    border: 1px solid #C40000;
    background-color: #C40000;
    text-align: center;
    line-height: 40px;
    font-size: 16px;
    color: white;
    font-family: arial;
  }
  /* css for product details */
  .productDetailDiv{
    width: 790px;
    margin-left: 95px;
    border: 1px solid #DFDFDF
  }
  .productDetailImagesPart img{
    width: 100%;
  }
  .productDetailTopPart{
    height: 50px;
    border: 1px solid #DFDFDF;
  }
  .productDetailTopPartSelectedLink,
  .productDetailTopReviewLink{
    height: 49px;
    line-height: 40px;
    color: black;
    text-align: center;
    width: 90px;
    padding: 0px 5px;
  }
  .selected{
    border-left: 1px solid #cfbfb1;
    border-right: 1px solid #cfbfb1;
    color: #b10000!important;
    display: inline-block;
    font-weight: bold;
    line-height: 46px;
    width: 90px;
    position: relative;
  }
  .selected::before{
    content: "";
    border: 1px solid #b00000;
    width: 90px;
    height: 0;
    position: absolute;
    top: -1px;
    left: -1px;
  }
  .selected::after{
    border-color: #b00000 transparent transparent;
    /* 美人尖的原理是只有上边框，其他边框是透明色，#b00000 transparent transparent; 这种写法既表示只有上边框有颜色，其他都是透明色 */
    border-style: solid;
    border-width: 5px;
    content: "";
    display: block;
    width: 0;
    height: 0;
    position: absolute;
    top: -1px;
    left: 50%;
    margin-left: -5px;
  }
  .productDetailTopReviewLinkNumber{
    color: #3355B9;
    margin: 0;
  }
  .productParamterPart{
    height: 220px;
    border: 1px solid #DFDFDF;
  }
  .productParamter{
    color: #999999;
    font-weight: bold;
    margin-bottom: 20px;
    margin: 20px;
  }
  .productParamterList{
    color: grey;
    margin: 20px;
    font-size: 12px;
  }
  .productParamterList span{
    width: 200px;
    margin-right: 20px;
    margin-bottom: 20px;
    display: inline-block;
  }
  /* css for product review */
  .productReview{
  }
  .productReviewItem{
    border-bottom: 1px solid #E3E3E3;
    margin: 10px 0px;
    height: 115px;
    padding: 20px;
    font-size: 12px;
    color: #333333;
  }
  .productReviewItemUserInfo{
    float: right;
    margin-top: -20px;
  }
  .userInfoGrayPart{
    color: #999999;
  }
  .productReviewItemDate{
    color: #999999;
    display: flex;
    margin-top: 15px;
    display: inline-block;
  }
</style>
