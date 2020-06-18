<template>
  <div class="z-home">
    <!-- 顶部栏有消失和出现,开始是消失的 -->
    <div class="z-top-bar" v-if="scroll >= 900">
      <img src="../img/分类.png" alt="">
      <div class="z-top-bar-item">
          <img src="../img/搜索.png" alt="">
          <div>爆款好货5折开抢</div>
      </div>
      <img src="../img/登录.png" alt="">
    </div>
    
    <!-- 中部 -->
    <div class="z-middle-bar" id="zyr-middle-bar">
      <!-- 中部的顶部搜索栏 -->
      <div class="z-moddle-bar-list">
        <div class="z-middle-bar-list-item">
          <img src="../img/分类.png" alt="">
          <img src="../img/159237517720211281.gif" alt="" class="z-middle-bar-list-item-img-two">
          <img src="../img/登录.png" alt="">
        </div>
        <div class="z-middle-bar-list-item-one">
          <img src="../img/搜索.png" alt="">
          <div>爆款好货5折开抢</div>
        </div>
        <!-- 中部的猜你喜欢页面部分 -->
        <div class="z-moddle-bar-list-box"></div>
      </div>
      <!-- 中部的商品列表部分 -->
      <div class="z-moddle-goods-list-all">
        <div class="z-moddle-goods-list-one">
          <div class="z-moddle-goods-list-item" v-for="(item,index) in goodsListOne" :key="index">
            <img :src="item.img" class="z-moddle-goods-img">
            <p class="z-goods-content">{{item.name}}</p>
            <P></P>
            <div class="z-goods-price-item">
              <span class="z-goods-icon">￥</span>
              <span class="z-goods-price">{{item.price}}</span>
              <span class="z-goods-evaluate">100+评价</span>
            </div>
          </div>
        </div>
        <div class="z-moddle-goods-list-two">
          <div class="z-moddle-goods-list-item" v-for="(item,index) in goodsListTwo" :key="index">
            <img :src="item.img" class="z-moddle-goods-img">
            <p class="z-goods-content">{{item.name}}</p>
            <P></P>
            <div class="z-goods-price-item">
              <span class="z-goods-icon">￥</span>
              <span class="z-goods-price">{{item.price}}</span>
              <span class="z-goods-evaluate">100+评价</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部登录条 -->
      <img src="../img/zSignIn.png" alt="" class="z-sign-in" @click="SignInChange">
    </div>

    <!-- 底部 -->
    <div class="z-bottom-bar">
        <div class="z-bottom-item" @click="itemChangeLiveHeart()" v-if="scroll<=900 && LiveHeart == 'false'">
          <img src="../img/zLive.png" alt="">
          <div style="color:#000000;font-weight:bold">猜你喜欢</div>
        </div>
        <div class="z-bottom-item" @click="itemChange(0)" v-else>
          <img src="../img/house.png" alt="">
          <div style="color:#000000;font-weight:bold">首页</div>
        </div>
        <div class="z-bottom-item" @click="itemChange(1)">
          <img src="../img/放大镜白.png" alt="">
          <div>分类</div>
        </div>
        <div class="z-bottom-item" @click="itemChange(2)">
          <img src="../img/清单白.png" alt="">
          <div>必抢清单</div>
        </div>
        <div class="z-bottom-item" @click="itemChange(3)">
          <img src="../img/购物车白.png" alt="" >
          <div>购物车</div>
        </div>
        <div class="z-bottom-item" @click="itemChange(4)">
          <img src="../img/易购白.png" alt="">
          <div>我的易购</div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return {
      itemIndex:0,
      LiveHeart:"false", //猜你喜欢图标的出现和消失
      scroll: '' ,    //滚动条高度
      goodsListOne:[
        {
          name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
          img:require("../img/headset.png"),
          price:608
          
        },
        {
          name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
          img:require("../img/headset.png"),
          price:608
        },
        {
          name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
          img:require("../img/headset.png"),
          price:608
        },
        {
          name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
          img:require("../img/headset.png"),
          price:608
        },
        {
          name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
          img:require("../img/headset.png"),
          price:608
        },
        {
          name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
          img:require("../img/headset.png"),
          price:608
        },
        {
          name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
          img:require("../img/headset.png"),
          price:608
        },
        {
          name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
          img:require("../img/headset.png"),
          price:608
        },
        {
          name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
          img:require("../img/headset.png"),
          price:608
        },
      ],
      goodsListTwo:[
        {
          name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
          img:require("../img/headset.png"),
          price:608
        },
        {
          name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
          img:require("../img/headset.png"),
          price:608
        },
        {
          name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
          img:require("../img/headset.png"),
          price:608
        },
        {
          name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
          img:require("../img/headset.png"),
          price:608
        },
        {
          name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
          img:require("../img/headset.png"),
          price:608
        },
        {
          name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
          img:require("../img/headset.png"),
          price:608
        },
        {
          name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
          img:require("../img/headset.png"),
          price:608
        },
        {
          name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
          img:require("../img/headset.png"),
          price:608
        },
        {
          name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
          img:require("../img/headset.png"),
          price:608
        },
      ]
    }
  },

  methods:{
    //滚动条滚动到一定距离出现元素
    menu() {
        this.scroll = document.getElementById("zyr-middle-bar").scrollTop
        // console.log(this.scroll)
      },
    
    //底部路由切换
    itemChangeLiveHeart(){
      this.scroll = 900
      this.LiveHeart = "true"
      document.getElementById("zyr-middle-bar").scrollTop = 900
      // console.log(this.LiveHeart)
    },
    itemChange(index){
      this.itemIndex = index;
      if(this.itemIndex == 0){
        this.scroll = 0
        document.getElementById("zyr-middle-bar").scrollTop = 0
        this.LiveHeart = "false"
        // console.log(this.LiveHeart)
        // this.$router.push({
        //   path:"/",
        //   query:{
        //         name:index
        //       }
        // });
      };
      if(this.itemIndex == 1){
        this.$router.push({
          path:"/sort",
          query:{
                name:index
              }
        });
      };
      if(this.itemIndex == 2){
        window.location.href='https://c.m.suning.com/channel/higoubq11.html?safp=f73ee1cf.wapindex7.113464329889.3&safpn=10001';
      };
      if(this.itemIndex == 3){
        this.$router.push({
          path:"/shoppingCart",
          query:{
                name:index
              }
        });
      };
      if(this.itemIndex == 4){
        this.$router.push({
          path:"/myYg",
          query:{
                name:index
              }
        });
      };
    },
    SignInChange(){
      this.$router.push({
        path:"/myYg",
        query:{
          name:4
        }
      });
    }
  },

  mounted() {
      document.getElementById("zyr-middle-bar").addEventListener('scroll', this.menu)
    },
}
</script>
<style scoped>
    .z-home{
      width: 100%;
      height: 100%;
    }
    .z-home{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    /* 顶部 */
    .z-top-bar{
      width: 100%;
      display: flex;
      flex-shrink: 0;
      background-color: rgb(0,0,95);
      padding: 8px;
      justify-content: space-between;
      align-items: center;
    }
    .z-top-bar img{
      width: 20px;
      height: 33px;
    }
    .z-top-bar-item{
      width: 100%;
      border-radius: 35px;
      display: flex;
      background-color: #fff;
      padding: 8px 10px;
      align-items: center;
      margin: 0 30px;
    }
    .z-top-bar-item img{
      width: 15px;
      height: 15px;
    }
    .z-top-bar-item div{
      color: #999;
      font-size: 14px;
      padding-left: 8px;
    }

    /* 中部 */
    .z-home .z-middle-bar{
      width: 100%;
      overflow: auto;
    }
    /* 中部顶部 */
    .z-moddle-bar-list{
      width: 100%;
      background-color: rgb(0,0,95);
      padding: 8px 15px;
    }
    .z-middle-bar-list-item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding-bottom: 10px;
    }
    .z-middle-bar-list-item img{
      width: 20px;
      height: 33px;
    }
    .z-home .z-middle-bar-list-item-img-two{
      width: 73%;
      height: 100%;
    }
    .z-middle-bar-list-item-one{
      width: 100%;
      border-radius: 35px;
      display: flex;
      background-color: #fff;
      padding: 8px 10px;
      align-items: center;
    }
    .z-middle-bar-list-item-one img{
      width: 15px;
      height: 15px;
    }
    .z-middle-bar-list-item-one div{
      color: #999;
      font-size: 14px;
      padding-left: 8px;
    }
    /* 中部的猜你喜欢页面部分 */
    .z-moddle-bar-list-box{
      width: 100%;
      height: 1600px;
    }
    /* 中部的商品列表部分 */
    .z-moddle-goods-list-all{
      width: 100%;
      display: flex;
      background-color: rgb(250, 250, 250);
    }
    .z-moddle-goods-list-one{
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      overflow: auto;
      padding: 0 5px 10px 10px;
    }
    .z-moddle-goods-list-two{
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      padding: 0 10px 10px 5px;
    }
    .z-moddle-goods-list-item{
      display: flex;
      flex-direction: column;
      align-items: center;
      flex-shrink: 0;
      background-color: #fff;
      margin-top: 10px;
    }

    .z-moddle-goods-img{
      width: 90%;
      height: 90%;
      flex-shrink: 0;
    }
    .z-goods-content{
      font-size: 12px;
      padding: 5px 10px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      height: 40px;
      font-weight: bold;
    }
    .z-goods-price-item{
      width: 100%;
      padding: 10px 10px 10px 10px;
    }
    .z-goods-icon{
      font-size: 0.7em;
      font-weight: bold;
      color: #ff4422;
    }
    .z-goods-price{
      font-size: 0.9em;
      font-weight: bold;
      color: #ff4422;
    }
    .z-goods-evaluate{
      font-size: 0.6em;
      color: #999999;
      margin-left: 10px;
    }
    
    /* 底部登录条 */
    .z-sign-in{
      height: 6%;
      width: 100%;
      flex-shrink: 0;
      position: fixed;
      bottom: 60px;
      left: 0;
    }
    /* 底部 */
    .z-bottom-bar{
      flex-shrink: 0;
      display: flex;
      padding: 5px 0;
    }
    .z-bottom-item{
      width: 100%;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: center;
      padding: 5px 0;
    }
    .z-bottom-item img{
      flex-grow: 1;
      width: 24px;
      height: 24px;
    }
    .z-bottom-item div{
      flex-grow: 1;
      font-size: 12px;
      display: flex;
      color: #666666;
      flex-direction: column;
      justify-content: center;
    }
</style>
