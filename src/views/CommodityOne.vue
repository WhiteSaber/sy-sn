<template>
    <div class="commodity-page">
        <div class="commodity-details">
            <div class="commodity-details-list">
            </div>
        </div>
        <div class="commodity-bottom">
            <div class="commodity-bottom-left">
                <van-goods-action class="van-goods-action-list">
                    <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
                    <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
                    <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" badge="2"/>
                    <div class="van-goods-action-box">
                        <div class="commodity-bottom-right-one" is-link @click="showPopup">立刻购买</div>
                        <div class="commodity-bottom-right-two" is-link @click="showPopup">加入购物车</div>
                    </div>
                </van-goods-action>
            </div>
            <div class="commodity-bottom-right">
                <van-popup v-model="show" position="bottom" :style="{ height: '70%' }" closeable close-icon="close" round class="commodity-bottom-right-box">
                    <div v-if="appear==true">
                        <div class="commodity-bottom-right-top-list">
                            <div class="commodity-bottom-right-imgBig">
                                <img :src="contentList[0].imgBig" alt="">
                            </div>
                            <div class="commodity-bottom-right-top-middle-list">
                                <div class="commodity-bottom-right-top-middle-parce">￥{{contentList[0].parce}}</div>
                                <div class="commodity-bottom-right-top-middle-code">商品编码:{{contentList[0].code}}</div>
                                <div class="commodity-bottom-right-top-middle-title">{{contentList[0].title}}</div>
                            </div>
                        </div>
                        <div class="commodity-bottom-right-middle-list">
                            <p>色号</p>
                            <div class="commodity-bottom-right-middle-list-content">
                                <div class="commodity-bottom-right-middle-list-content-one">
                                    <img :src="contentList[0].imgSmall" alt="">
                                    <span>{{contentList[0].color}}</span>
                                </div>
                                <div class="commodity-bottom-right-middle-list-content-two" @click="colorTwo">
                                    <img :src="contentList[1].imgSmall" alt="">
                                    <span>{{contentList[1].color}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="commodity-bottom-right-bottom-list">
                            <div class="commodity-bottom-right-bottom-list-title">购买数量</div>
                            <div class="commodity-bottom-right-bottom-list-btn">
                                <van-stepper v-model="value" theme="round" @plus="plus(0)" @minus="minus(0)"  input-width="38px" button-size="20px" />
                            </div>
                        </div>
                        <div class="commodity-bottom-right-bottom-item">
                            <div class="commodity-bottom-right-bottom-item-one" @click="atOnec">立刻购买</div>
                            <div class="commodity-bottom-right-bottom-item-two" @click="joinOne(0)">加入购物车</div>
                        </div>
                    </div>

                    <div v-else>
                        <div class="commodity-bottom-right-top-list">
                            <div class="commodity-bottom-right-imgBig" style="width:63%;">
                                <img :src="contentList[1].imgBig" alt="">
                            </div>
                            <div class="commodity-bottom-right-top-middle-list">
                                <div class="commodity-bottom-right-top-middle-parce">￥{{contentList[1].parce}}</div>
                                <div class="commodity-bottom-right-top-middle-code">商品编码:{{contentList[1].code}}</div>
                                <div class="commodity-bottom-right-top-middle-title">{{contentList[1].title}}</div>
                            </div>
                        </div>
                        <div class="commodity-bottom-right-middle-list">
                            <p>色号</p>
                            <div class="commodity-bottom-right-middle-list-content">
                                <div class="commodity-bottom-right-middle-list-content-one-else" @click="colorOne">
                                    <img :src="contentList[0].imgSmall" alt="">
                                    <span>{{contentList[0].color}}</span>
                                </div>
                                <div class="commodity-bottom-right-middle-list-content-two-else">
                                    <img :src="contentList[1].imgSmall" alt="">
                                    <span>{{contentList[1].color}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="commodity-bottom-right-bottom-list">
                            <div class="commodity-bottom-right-bottom-list-title">购买数量</div>
                            <div class="commodity-bottom-right-bottom-list-btn">
                                <van-stepper v-model="value" theme="round" @plus="plus(0)" @minus="minus(0)"  input-width="38px" button-size="20px" />
                            </div>
                        </div>
                        <div class="commodity-bottom-right-bottom-item">
                            <div class="commodity-bottom-right-bottom-item-one" @click="atOnec">马上抢</div>
                            <div  class="commodity-bottom-right-bottom-item-two" @click="joinTwo()">加入购物车</div>
                        </div>
                    </div>
                </van-popup>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
// https://m.suning.com/product/0000000000/000000011393934167.html?safp=f73ee1cf.wapindex7.113464229882.58&safc=prd.1.rec_25-56_25-56_352,OPA1,OPC1_sys%3Arec,inpo%3A0,cpn%3A0,p%3A14-41,uuid%3A817c2f40983b126d8594b65c56537189,d%3A1,ab%3AH,dab%3A5-5_A&safpn=10001
export default {
    data() {
        return {
            num:0,
            appear:true,
            value: 1,
            show: false,
            contentList:[
                {
                    imgBig:require("../img/z16.jpg"),
                    imgSmall:require("../img/z17.jpg"),
                    parce:129,
                    code:10597996078,
                    title:"LANEIGE兰芝 雪纱丝柔隔离#绿色 30ml/瓶 SPF25 PA++ 提亮遮瑕 粉底/遮瑕防晒隔离",
                    number:1,
                    checked:false,
                    color:"绿色",
                    name:"苏宁自营"
                },
                {
                    imgBig:require("../img/z18.jpg"),
                    imgSmall:require("../img/z19.jpg"),
                    parce:149,
                    code:11393934167,
                    title:"【改善暗沉】兰芝雪纱丝柔修颜隔离霜#No.20 柔粉 30ml SPF25 PA++防晒隔离",
                    number:1,
                    checked:false,
                    color:"柔粉",
                    name:"苏宁自营"
                }
            ]
        };
    },

    methods: {
        showPopup() {
        this.show = true;
        },
        plus(index){
            this.num++
        },
        minus(index){
            this.num--
        },
        colorTwo(){
            this.appear = false
        },
        colorOne(){
            this.appear = true
        },
        atOnec(){
            window.location.href="https://passport.suning.com/ids/login?loginTheme=neworder&service=https%3A%2F%2Faq.suning.com%2Fasc%2Fauth%3FtargetUrl%3Dhttps%253A%252F%252Fshopping.suning.com%252Fwapv2%252FnowBuy%252FquickBuy.do%253Fpagesrc%253Dhttps%25253A%25252F%25252Fm.suning.com%25252Fproduct%25252F0000000000%25252F000000011393934167.html%25253Fsafp%25253Df73ee1cf.wapindex7.113464229882.58%252526safc%25253Dprd.1.rec_25-56_25-56_352%25252COPA1%25252COPC1_sys%2525253Arec%25252Cinpo%2525253A0%25252Ccpn%2525253A0%25252Cp%2525253A14-41%25252Cuuid%2525253A817c2f40983b126d8594b65c56537189%25252Cd%2525253A1%25252Cab%2525253AH%25252Cdab%2525253A5-5_A%252526safpn%25253D10001%2526redirectFix%253Dcart2#/"
        },

        // 商品添加
        joinOne(index){
            this.show = false;
            Toast('添加购物车成功');
            this.$store.commit("addOne",{
                imgBig:require("../img/z16.jpg"),
                imgSmall:require("../img/z17.jpg"),
                parce:129,
                code:10597996078,
                title:"LANEIGE兰芝 雪纱丝柔隔离#绿色 30ml/瓶 SPF25 PA++ 提亮遮瑕 粉底/遮瑕防晒隔离",
                number:1+this.num,
                checked:false,
                color:"绿色",
                name:"苏宁自营"
            })
            console.log(this.$store.state.productDetails)
        },
        joinTwo(index){
            this.show = false;
            Toast('添加购物车成功');
            this.$store.commit("addTwo",{
                imgBig:require("../img/z18.jpg"),
                    imgSmall:require("../img/z19.jpg"),
                    parce:149,
                    code:11393934167,
                    title:"【改善暗沉】兰芝雪纱丝柔修颜隔离霜#No.20 柔粉 30ml SPF25 PA++防晒隔离",
                    number:1+this.num,
                    checked:false,
                    color:"柔粉",
                    name:"苏宁自营"
            })
            console.log(this.$store.state.productDetails)
        },
        onClickIcon() {
            Toast('点击图标');
        },
    },
}
</script>

<style scoped>
    a{
        -webkit-tap-highlight-color:transparent;
        text-decoration: none;
    }
    .commodity-page{
        width: 100%;
        height: 100%;
        background-color: rgb(250, 250, 250);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .commodity-details{
        width: 100%;
        overflow: auto;
    }
    .commodity-details-list{
        background-color: blueviolet;
        height: 1500px;
    }
    /* 底部 */
    .commodity-bottom{
        flex-shrink: 0;
        display: flex;
        padding: 0px 5px;
    }
    .commodity-bottom-left{
        width: 45%;
        display: flex;
    }
    .commodity-bottom-left img{
        width: 30%;
    }
    .commodity-bottom-right{
        width: 55%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .commodity-bottom-right-one{
        background-color: #fc0;
        color: #000000;
        font-size: 15px;
        padding: 10px 16px;
        margin-right: 2px;
        width: 50%;
        text-align: center;
        border-top-left-radius:5px ;
        border-bottom-left-radius:5px ;
    }
    .commodity-bottom-right-two{
        background-color: #f60;
        font-size: 15px;
        width: 50%;
        color: #fff;
        padding: 10px 16px;
        margin-left: 2px;
        border-top-right-radius:5px ;
        border-bottom-right-radius:5px ;
    }
    .van-goods-action-list{
        display: flex;
        justify-content: space-around;
        padding: 5px 10px;
    }
    .van-goods-action-box{
        display: flex;
        justify-content: center;
        align-items: center ;
        width: 100%;
    }
    /* 加入购物车弹出框 */
    /* 上半部分 */
    .commodity-bottom-right-top-list{
        display: flex;
        padding-bottom: 8px;
        border-bottom: 1px solid rgb(250, 250, 250);
        
    }
    /* 大图片 */
    .commodity-bottom-right-imgBig{
        border: 1px solid rgb(250, 250, 250);
        width: 68%;
        border-radius: 8px;
        margin-top: 10px;
        margin-left: 10px;
        padding: 5px 5px;
    }
    .commodity-bottom-right-imgBig img{
        width: 100%;
    }
    /* 价格 */
    .commodity-bottom-right-top-middle-list{
        margin-top: 55px;
        margin-left: 15px;
        padding: 0px 15px;
    }
    .commodity-bottom-right-top-middle-parce{
        color: #ff4422;
        font-size: 17px;
        padding-bottom: 10px;
    }
    .commodity-bottom-right-top-middle-code{
        color: #999999;
        font-size: 12px;
        padding-bottom: 5px;
    }
    .commodity-bottom-right-top-middle-title{
        font-size: 13.8px;
        color: #222222;
    }
    /* 中间 */
    .commodity-bottom-right-middle-list{
        padding: 10px 15px;
    }
    .commodity-bottom-right-middle-list p{
        color: #222222;
        font-size: 13.86px;
    }
    .commodity-bottom-right-middle-list-content{
        display: flex;
        margin-top: 10px;
    }
    .commodity-bottom-right-middle-list-content div{
        display: flex;
        align-items: center;
        padding: 5px 5px;
        justify-content: center;
        border-radius: 6px ;
    }
    .commodity-bottom-right-middle-list-content-one{
        background: #ffeda2;
        border: 1px #fc0 solid;
    }
    .commodity-bottom-right-middle-list-content-two{
        margin-left: 10px;
        background-color: rgb(250, 250, 250);
    }
    .commodity-bottom-right-middle-list-content-one-else{
        background-color: rgb(250, 250, 250);
    }
    .commodity-bottom-right-middle-list-content-two-else{
        margin-left: 10px;
        background: #ffeda2;
        border: 1px #fc0 solid;
    }
    .commodity-bottom-right-middle-list-content img{
        margin-right: 5px;
        width: 29%;
    }
    .commodity-bottom-right-middle-list-content span{
        font-size: 14px;
        color: #222222;
        margin-left: 5px;
    }
    /* 数量加减 */
    .commodity-bottom-right-bottom-list{
        display: flex;
        justify-content: space-between;
        padding: 10px 18px 200px;
        align-items: center;
    }
    .commodity-bottom-right-bottom-list-title{
        font-size: 13.8px;
        font-size: #222222;
    }
    .commodity-page .van-stepper--round .van-stepper__plus{
        background-color: rgb(250, 250, 250);
    }
    .commodity-bottom-right-bottom-list-btn{
        border: 1px solid rgb(221, 221, 221);
        padding: 5px 8px;
        border-radius:20px ;
    }
    .commodity-bottom-right-bottom-item{
        display: flex;
        justify-content: center;
    }
    .commodity-bottom-right-bottom-item-one{
        font-size: 15px;
        color: #000000;
        background: #fc0;
        width: 50%;
        padding: 8px 0px;
        text-align: center;
        margin-left: 10px;
        margin-right: 2px;
        border-top-left-radius:5px ;
        border-bottom-left-radius:5px ;
    }
    .commodity-bottom-right-bottom-item-two{
        font-size: 15px;
        color: #fff;
        background: #f60;
        width: 50%;
        text-align: center;
        padding: 8px 0px;
        margin-left: 2px;
        margin-right: 10px;
        border-top-right-radius:5px ;
        border-bottom-right-radius:5px ;
    }
</style>
    