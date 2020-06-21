<template>
    <div>
        <div class="z-middle-bar">
            <div class="login-content">
                <div class="top">
                    <div class="title-box">
                        <div class="title">
                            我的易购
                            <div class="title-img"></div>
                        </div>
                    </div>
                    <div class="information-box">
                        <div class="user-img">
                            <img src="../assets/smyimg.jpg">
                            <div class="name-check">去实名认证</div>
                        </div>
                        <div class="user-id">
                            <div class="user-phone">
                                <span>189******35</span>
                            </div>
                            <div class="user-shengtaizhi">
                                <span>生态值164</span>
                            </div>
                        </div>
                        <div class="user-code"></div>
                    </div>
                    <div class="detail">
                        <div class="detail-item">
                            <p>0</p>
                            <span>优惠券</span>
                        </div>
                        <div class="detail-item">
                            <p>1</p>
                            <span>领云钻</span>
                        </div>
                        <div class="detail-item">
                            <p>10</p>
                            <span>足迹</span>
                        </div>
                        <div class="detail-item">
                            <p>0</p>
                            <span>我的关注</span>
                        </div>
                    </div>
                    <div class="remember-box">
                        <img class="remember-card" src="../assets/sremembercard.png">
                        <div class="be-remember">福利！98元抢腾讯视频联名卡</div>
                        <div class="go">
                            <p>立即去抢</p>
                            <img src="../assets/sgetremember.png">
                        </div>
                    </div>
                </div>
                <div class="middle">
                    <div class="my-list">
                        <div class="list-title">
                            <p>我的订单</p>
                            <span>
                                查看全部
                                <img src="../assets/slookall.png">
                            </span>
                        </div>
                        <div class="list-icon">
                            <div class="list-icon-item">
                                <img src="../assets/sdaizhifu.png">
                                <span>待支付</span>
                            </div>
                            <div class="list-icon-item">
                                    <img src="../assets/sdaishouhuo.png">
                                <span>待收货</span>
                            </div>
                            <div class="list-icon-item">
                                    <img src="../assets/spingjiayouli.png">
                                <span>评价有礼</span>
                            </div>
                            <div class="list-icon-item">
                                    <img src="../assets/stuihuanshouhou.png">
                                <span>退换/售后</span>
                            </div>
                            <div class="list-icon-item">
                                    <img src="../assets/schanggouqingdan.png">
                                <span>常购清单</span>
                            </div>
                        </div>
                    </div>
                    <div class="ness-tool">
                        <div class="tool-title">
                            <span>必备工具</span>
                        </div>
                        <div class="tool-list">
                            <div class="tool-list-item">
                                <img src="../assets/shongbao.png">
                                <span>红包</span>
                            </div>
                            <div class="tool-list-item">
                                <img src="../assets/sdianpuguanzhu.png">
                                <span>店铺关注</span>
                            </div>
                            <div class="tool-list-item">
                                <img src="../assets/szuji.png">
                                <span>足迹</span>
                            </div>
                            <div class="tool-list-item">
                                <img src="../assets/skehufuwu.png">
                                <span>客户服务</span>
                            </div>
                            <div class="tool-list-item">
                                <img src="../assets/sbiqiangqingdan.png">
                                <span>必抢清单</span>
                            </div>
                            <div class="tool-list-item">
                                <img src="../assets/spingou.png">
                                <span>拼购</span>
                            </div>
                            <div class="tool-list-item">
                                <img src="../assets/sxiaoyuan.png">
                                <span>校园VIP</span>
                            </div>
                            <div class="tool-list-item">
                                <img src="../assets/swodeshiyong.png">
                                <span>我的试用</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="recommend">
                    <div class="recommend-left"></div>
                    <div class="good-recommend">好货推荐</div>
                    <div class="recommend-right"></div>
                </div>
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
        
        
        
        
        <div class="z-bottom-bar">
            <div class="z-bottom-item" @click="itemChange(0)">
                <img src="../img/房子白.png" alt />
                <div>首页</div>
            </div>
            <div class="z-bottom-item" @click="itemChange(1)">
                <img src="../img/放大镜白.png" alt />
                <div>分类</div>
            </div>
            <div class="z-bottom-item" @click="itemChange(2)">
                <img src="../img/清单白.png" alt />
                <div>必抢清单</div>
            </div>
            <div class="z-bottom-item" @click="itemChange(3)">
                <img src="../img/购物车白.png" alt />
                <div>购物车</div>
            </div>
            <div class="z-bottom-item">
                <img src="../img/myygwhite.png" alt />
                <div style="color:#ffcc00">我的易购</div>
            </div>
        </div>
    </div>

</template>
<script>
export default {
    data()
    {
        return {
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
    methods: 
    {
        itemChange(index)
        {
            this.itemIndex = index;
            if (this.itemIndex == 0) {
              this.$router.push({
                path: "/",
                query: {
                  name: index
                }
              });
            }
            if (this.itemIndex == 1) {
                this.$router.push({
                path: "/sort",
                query: {
                  name: index
                }
                });
            }
            if (this.itemIndex == 3) {
                this.$router.push({
                path: "/shoppingCart",
                query: {
                  name: index
                }
                });
            }
        }
    }
}
</script>
<style scoped>
.z-middle-bar {
  width: 100%;
  overflow: auto;
  height: 700px;
  background-color: #f2f2f2;
}
.z-bottom-bar {
  flex-shrink: 0;
  display: flex;
  flex-grow: 1;
  padding: 5px 0;
}
.z-bottom-item {
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  align-items: center;
  padding: 5px 0;
}
.z-bottom-item img {
  flex-grow: 1;
  width: 24px;
  height: 24px;
}
.z-bottom-item div {
  flex-grow: 1;
  font-size: 12px;
  display: flex;
  color: #666666;
  flex-direction: column;
  justify-content: center;
}

.login-content
{
    width:100%;
    height:auto;
}

.top
{
    width:100%;
    height:206px;
    background-color: #ffdb47;
}

.title-box
{
    width:100%;
    height:32px;
    padding-top:9px;
    position:relative;
}

.title
{
    width:100%;
    height:27px;
    font-size: 18px;
    color:#000;
    text-align: center;
    font-weight: bold;
}

.title-img
{
    display:inline-block;
    width:21px;
    height:21px;
    background:url("../assets/ssetting.png");
    background-size: 100%;
    position:absolute;
    top:10px;
    right:15px;
}

.information-box
{
    width:100%;
    height:86.5px;
    padding:26.5px 21px 0;
    display:flex;
    position:relative;
}

.user-img
{
    display:inline-block;
    width:60px;
    height:60px;
    position:relative;
}
.user-img img
{
    width:60px;
    height:60px;
    border-radius: 50%;
    border:2.5px solid white;
}

.name-check
{
    width:71px;
    height:15px;
    text-align: center;
    line-height:12px;
    background-color: #ffeca3;
    font-size:10px;
    border-radius: 10px;
    color:#222;
    position:absolute;
    left:-3px;
    bottom:-2.5px;
}

.user-id
{
    display:inline-block;
    width:76.63px;
    height:60px;
    margin-left:15px;
    position:relative;
}

.user-phone
{
    width:71.625px;
    height:21px;
    margin-bottom:6px;
    position:absolute;
    top:10px;
    left:0;
}

.user-phone span
{
    display:block;
    font-size:12px;
    margin-right:8px;
    font-weight:700;
}

.user-shengtaizhi
{
    width:100%;
    height:15px;
    position:absolute;
    top:36px;
    left:-6px;
}

.user-shengtaizhi span
{
    width:68px;
    height:15px;
    font-size: 10px;
    line-height: 12px;
    margin:0 6px;
    border-radius: 7.5px;
    display:flex;
    justify-content: center;
    color:#fff;
    background-color: #e1bb23;
}

.user-code
{
    display:inline-block;
    width:60px;
    height:60px;
    background:url("../assets/smycode.png");
    background-size: 100%;
    position:absolute;
    bottom:0;
    right:21px;
}

.detail
{
    width:100%;
    height:87.5px;
    display:flex;
    flex-direction: row;
}

.detail-item
{
    width:25%;
    flex-grow: 1;
    display:flex;
    flex-direction: column;
    justify-content: center;
}

.detail-item p
{
    height:22px;
    text-align: center;
    display:block;
    font-size:15px;
    color:#222;
    font-weight: bold;
}

.detail-item span
{
    height:19px;
    text-align: center;
    display:block;
    text-align: center;
    font-size:13px;
    color:#222;
}

.remember-box
{
    width:92.3%;
    height:45px;
    background:#fff;
    border-radius: 6px;
    margin-top:-15px;
    margin-left:12px;
    padding:7px 12px 7px 10px;
    position:relative;
}

.remember-card
{
    width:45px;
    height:30px;
}

.be-remember
{
    display:inline-block;
    width:50%;
    height:18px;
    font-size: 12px;
    color:#222;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    position:absolute;
    top:12px;
    left:61px;
}

.go 
{
    position:absolute;
    top:10px;
    right:12px;
    display:inline-block;
    width:66px;
    height:18px;
    line-height:18px;
}

.go p
{
    display:inline-block;
    width:auto;
    height:18px;
    line-height:18px;
    font-size: 12px;
    color:#444;
}

.go img
{
    display:inline-block;
    width:15px;
    height:15px;
    margin-left:3px;
    position:absolute;
    top:4px;
}

.middle
{
    width:100%;
    height:auto;
}

.my-list
{
    width:92.4%;
    height:129px;
    margin:42px 0 10px 12px;
    padding:12px;
    border-radius: 6px;
    background-color: #fff;
}

.list-title
{
    width:100%;
    height:17px;
    display:flex;
    justify-content: space-between;
}

.list-title p
{
    display:block;
    width:60px;
    height:22px;
    font-size:15px;
    font-weight: bold;
    margin-top:-1px;
}

.list-title span
{
    display:inline-block;
    width:auto;
    height:18px;
    line-height:18px;
    color:#666;
    font-size: 12px;
    font-weight: 700;
    
}

.list-title img
{
    width:12px;
    height:12px;
    margin-bottom: -1px;
}

.list-icon
{
    width:100%;
    height:88px;
    display:flex;
}

.list-icon-item
{
    display:flex;
    width:20%;
    width:100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.list-icon-item img
{
    display:block;
    width:30px;
    height:30px;
    margin-bottom: 6.5px;
}

.list-icon-item span
{
    width:100%;
    color:#666;
    font-size: 12px;
    text-align: center;
}

.ness-tool
{
    width:92.4%;
    height:188px;
    border-radius: 6px;
    background:#fff;
    margin-left:12px;
    margin-bottom: 10px;
    padding:12px;
}

.tool-title
{
    width:100%;
    height:17px;
    display:flex;
    align-items: center;
    font-size: 15px;
    color:#222;
    justify-content: space-between;
    font-weight: 700;
    letter-spacing: 0;
}

.tool-list
{
    display:flex;
    flex-wrap: wrap;
}

.tool-list-item
{
    display:flex;
    width:25%;
    height:59px;
    float:left;
    flex-direction: column;
    margin-top:14.5px;
    justify-content: center;
    align-items: center;
    color:#333;
}

.tool-list-item img
{
    display:block;
    width:24px;
    height:24px;
    margin-bottom: 8px;
}

.tool-list-item span
{
    display:block;
    width:100%;
    text-align: center;
    color:#222;
    font-size:12px;
}

.recommend
{
    width:100%;
    height:21px;
    margin-bottom: 12px;
    text-align: center;
    line-height: 21px;
    display:flex;
    justify-content: center;
    align-items: center;
}

.recommend-left
{
    width:25.5px;
    height:6px;
    background:url("../assets/srecommendicon.png");
    background-size:100%;
}

.good-recommend
{
    width:60px;
    height:21px;
    font-size:15px;
    margin:0 12px;
    color:#222;
    font-weight: bold;
}

.recommend-right
{
    width:25.5px;
    height:6px;
    background:url("../assets/srecommendicon.png");
    background-size:100%;
    transform: rotateY(180deg);
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