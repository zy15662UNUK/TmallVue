**这个项目是将之前的Tmall项目加上了VueJS**
- 之前的Tmall项目只是将天猫网站的每一个功能页面用HTML,CSS,jQuery做出来，并没有将这些网页结合起来。
这个TmallVue项目将之前Tmall里做好的页面再搭建在Vue-CLI 的 webpack-simple 模板上，变成一个单页应用。
- 包含了购物车，填写收货地址，二维码付款，交易成功，确认收货，产品主页这几个页面。
- 默认页面为购物车主页，有两个案例商品，点击第二个案例商品可以进入其产品主页。点击网页右上端“购物车”可以回到购物车主页
- 购物车中只有勾选商品后才能进入下一步。


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
