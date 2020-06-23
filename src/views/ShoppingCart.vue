<template>
  <div class="z-home">
    <div class="z-top-bar"></div>
    <div class="z-middle-bar">
        <div class="cart-content">
            
            <div class="top-title">
                <span class="title"></span>
                <span class="title">购物车</span>
                <span class="a">编辑</span>
            </div>

            <div class="location">
                <span>北京北京东城区</span>
                <img src="../assets/forward.png">
            </div>
            
            <div class="cart-item-container" v-if="isLogin==true">
                <div v-for="(item,index) in shoppingCartList" :key="item.name">

                  <div class="item">
                      <div class="item-top">
                          <span class="check-box check-checked" v-if="item.checked==true" @click="checkItem(index)">
                              <input type="checkbox">
                              <span class="check-box-2"></span>
                          </span>
                          <span class="check-box" v-else @click="checkItem(index)">
                              <input type="checkbox" >
                              <span class="check-box-2"></span>
                          </span>
                      </div>
                      <div class="item-content">
                          <div class="button-box">
                              <span class="item-box check-checked" v-if="item.checked==true" @click="checkItem(index)">
                                  <input type="checkbox">
                                  <span class="item-box-2"></span>
                              </span>
                              <span class="item-box" v-else @click="checkItem(index)">
                                  <input type="checkbox" >
                                  <span class="item-box-2"></span>
                              </span>
                          </div>
                          
                      </div>
                      <div>{{item.price}}</div>
                  </div>

                  
                </div>
                

            </div>

            <div class="recommend-container">
                <div class="recommend-title"></div>
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
            </div>
        </div>
        <div class="pay">
            <div class="pay-check">
                <span class="all-check-box check-checked" v-if="allChecked==true" @click="wantAll">
                    <input type="all-checkbox">
                    <span class="all-check-box-2"></span>
                </span>
                <span class="all-check-box" v-else @click="wantAll">
                    <input type="all-checkbox">
                    <span class="all-check-box-2"></span>
                </span>
                <span class="all">全部</span>
            </div>
            <div class="pay-item">
                <div class="money-box">
                    <div class="all-price">合计：{{allPrice}}</div>
                    <div class="post-price">含运费：0</div>
                </div>
            </div>
            
            <div class="pay-money">
                <p>去结算(0)</p>
            </div>
        </div>
    </div>
    <div class="z-bottom-bar">
        <div class="z-bottom-item" @click="itemChange(0)">
          <img src="../img/fangzi-w.png" alt="">
          <div>首页</div>
        </div>
        <div class="z-bottom-item" @click="itemChange(1)">
          <img src="../img/fangdajing-w.png" alt="">
          <div>分类</div>
        </div>
        <div class="z-bottom-item" @click="itemChange(2)">
          <img src="../img/qingdan-w.png" alt="">
          <div>必抢清单</div>
        </div>
        <div class="z-bottom-item" @click="itemChange(3)">
          <img src="../img/gouwuche.png" alt="" >
          <div style="color:rgb(255,204,0);">购物车</div>
        </div>
        <div class="z-bottom-item" @click="itemChange(4)">
          <img src="../img/yigou-w.png" alt="">
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
        list:[],
        allPrice:0.00,
        allChecked:false,
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
        ],

        shoppingCartList:
        [
          {
            name:"商品A",
            price:10,
            checked:false
          },
          {
            name:"商品B",
            price:20,
            checked:false
          },
        ]
      }
    },
    methods:{
      itemChange(index){
        this.itemIndex = index;
        if(this.itemIndex == 0){
          this.$router.push({
            path:"/",
            query:{
                  name:index
                }
          });
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
        if(this.itemIndex == 4 && this.isLogin==true){
            this.$router.push({
              path:"/afterlogin",
              query:{
                    name:"afterlogin"
                  }
            });
          }
      },
      checkItem(index)
      {
        this.shoppingCartList[index].checked=!this.shoppingCartList[index].checked;
        this.add();
      },

      add()
      {
        for(let i=0;i<this.shoppingCartList.length;i++)
        {
          if(this.shoppingCartList[i].checked==true && this.list.indexOf(this.shoppingCartList[i])==-1)
          {
            this.list.push(this.shoppingCartList[i]);
          }
          if(this.shoppingCartList[i].checked==false && this.list.indexOf(this.shoppingCartList[i])!==-1)
          {
            this.list.splice(this.list.indexOf(this.shoppingCartList[i]),1);
          }
        }
      },

      wantAll()
      {
        this.allChecked=!this.allChecked;
        if(this.allChecked==true)
        {
          for(let i=0;i<this.shoppingCartList.length;i++)
          {
            this.shoppingCartList[i].checked=true;
          }
        }
        else
        {
          for(let i=0;i<this.shoppingCartList.length;i++)
          {
            this.shoppingCartList[i].checked=false;
          }
        }
        this.add();
      }
    },
    computed:
    {
      isLogin()
      {
        return this.$store.state.loginBool;
      },
    },
    watch:
    {
      list()
      {
        this.allPrice=0.00;
        if(this.list.length==this.shoppingCartList.length)
        {
          this.allChecked=true;
        }
        else
        {
          this.allChecked=false;
        }
        for(let i=0;i<this.list.length;i++)
        {
          this.allPrice+=this.list[i].price;
        }
      },
    }
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
    .z-home .z-middle-bar{
      width: 100%;
      overflow: auto;
      height: 1800px;
    }
    .z-home .z-bottom-bar{
      flex-shrink: 0;
      display: flex;
      padding:5px 0;
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
    }

    .cart-content
    {
      width:100%;
      height:auto;
      background-color:#f2f2f2;
      margin-bottom:45px;
    }

    .top-title
    {
      width:100%;
      height:44px;
      background:#fff;
      padding:0 12px;
      border:1px solid rgba(0,0,0,0.1);
    }

    .title
    {
      width:33.3%;
      display:inline-block;
      line-height:44px;
      text-align: center;
      font-size:17px;
      color:#222;
    }

    .a
    {
      width:33.3%;
      display:inline-block;
      line-height:44px;
      text-align:right;
      font-size: 14px;
      color:#37f;
    }

    .location
    {
      margin:12px 12px 0;
      width:93.5%;
      width:356px;
      height:36px;
      padding:7.5px 12px;
      background: #ffe37e;
      border-radius: 12px;
    }

    .location span
    {
      width:100%;
      height:18px;
      line-height: 18px;
      font-size: 12px;
      color:#222;
    }

    .location img
    {
      width:21px;
      height:21px;
      float:right;
    }

    .cart-item-container
    {
      width:100%;
      height:auto;
      padding:12px;
    }

    .item
    {
      width:100%;
      height:300px;
      background-color: #fff;
      border-radius: 6px;
      margin-bottom:12px;
    }

    .item-top
    {
      padding:12px 12px 9px 0;
      width:100%;
      height:auto;
    }

    .item-content
    {
      width:100%;
      height:141px;
      border:1px dotted black;
      padding-right:12px;
      padding-bottom:15px;
    }

    .button-box
    {
      width:8%;
      height:90px;
      border:1px solid black;
      display:flex;
      justify-content: center;
    }

    .item-box
    {
      position:relative;
      display:inline-block;
      vertical-align: middle;
      width:18px;
      height:18px;
      margin:0 6px;
    }

    .item-box input
    {
      display:inline-block;
      position:absolute;
      top:0;
      left:0;
      width:18px;
      height:18px;
      margin:0 auto;
      opacity:0;
      
    }

    .item-box-2
    {
      position:absolute;
      width:18px;
      height:18px;
      border:1px solid #ccc;
      border-radius: 50%;
      top:0;
      left:0;
    }

    .check-box
    {
      position:relative;
      display:inline-block;
      vertical-align: middle;
      width:18px;
      height:18px;
      margin:0 6px;
    }

    .check-box input
    {
      display:inline-block;
      position:absolute;
      top:0;
      left:0;
      width:18px;
      height:18px;
      margin:0 auto;
      opacity:0;
      
    }

    .check-box-2
    {
      position:absolute;
      width:18px;
      height:18px;
      border:1px solid #ccc;
      border-radius: 50%;
      top:0;
      left:0;
    }
    
    .check-checked
    {
      background: url("../assets/iconselected.png");
      background-size:100%;
    }
    
    .pay
    {
      width:100%;
      height:45px;
      padding:0 12px;
      position:absolute;
      bottom:50px;
      display:flex;
      flex-direction: row;
      background-color: #fff;
      border-top:0.5px solid rgba(0,0,0,0.08);
    }

    .pay-item
    {
      flex-grow: 1;
      flex-direction: row;
      position:relative;
      margin-right:6px;
    }
    .pay-check
    {
      width:52px;
      height:45px;
      display:flex;
      flex-direction: row;
      position:relative;
    }

    .all-check-box
    {
      position:absolute;
      top:15px;
      left:0;
      position:relative;
      display:inline-block;
      width:18px;
      height:18px;
    }

    .all-check-box input
    {
      display:inline-block;
      position:absolute;
      top:0;
      left:0;
      width:18px;
      height:18px;
      margin:0 auto;
      opacity:0;
      
    }

    .all-check-box-2
    {
      position:absolute;
      width:18px;
      height:18px;
      border:1px solid #ccc;
      border-radius: 50%;
      top:0;
      right:0;
    }

    .all
    {
      font-size: 14px;
      width:auto;
      height:auto;
      margin-left:6px; 
      position:absolute;
      top:13px;
      right:0;
    }

    

    .all-price
    {
      margin-top:7.5px;
      text-align: right;
      font-size:14px;
      height:21px;
      color:#000000;
    }

    .post-price
    {
      text-align: right;
      margin-right:5px;
      font-size: 12px;
      color:#222222;
    }

    .pay-money
    {
      width:100px;
      height:33px;
      margin:6px 0;
      float:right;
      background-color: #fc0;
      border-radius: 6px;
    }

    .pay-money p
    {
      font-size: 14px;
      font-weight: 700;
      margin:1px 0 0;
      color:#222222;
      height:14px;
      width:auto;
      text-align: center;
      margin-top:7px;
    }

    .recommend-container
    {
      width:380px;
      height:auto;
    }

    .recommend-title
    {
      width:204px;
      height:24px;
      margin:0 auto 12px;
      background: url("../assets/scainixihuan.png");
      background-size: 100%;
    }

    .money-box
    {
      width:auto;
      height:auto;
      float:right;
    }

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
</style>
