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
            
            <div class="cart-item-container">
                <div class="item">
                    <div class="item-top">
                        <span class="check-box">
                            <input type="checkbox">
                            <span class="check-box-2"></span>
                        </span>
                    </div>
                    <div class="item-content">987654321</div>
                </div>

                <div class="item">
                    <div class="item-top">
                        <span class="check-box">
                            <input type="checkbox">
                            <span class="check-box-2"></span>
                        </span>
                    </div>
                    <div class="item-content">987654321</div>
                </div>

                <div class="item">
                    <div class="item-top">
                        <span class="check-box">
                            <input type="checkbox">
                            <span class="check-box-2"></span>
                        </span>
                    </div>
                    <div class="item-content">987654321</div>
                </div>

                <div class="item">
                    <div class="item-top">
                        <span class="check-box">
                            <input type="checkbox">
                            <span class="check-box-2"></span>
                        </span>
                    </div>
                    <div class="item-content">987654321</div>
                </div>

            </div>

            <div class="recommend-container">
                <div class="recommend-title"></div>
            </div>
        </div>
        <div class="pay">
              <div class="pay-check">
                  <span class="all-check-box">
                      <input type="all-checkbox">
                      <span class="all-check-box-2"></span>
                  </span>
                  <span class="all">全部</span>
              </div>
              <div class="pay-price">
                  <div class="all-price">合计：0.00</div>
                  <div class="post-price">含运费：0</div>
              </div>
              <div class="pay-money">
                  <p>去结算(0)</p>
              </div>
        </div>
    </div>
    <div class="z-bottom-bar">
        <div class="z-bottom-item" @click="itemChange(0)">
          <img src="../img/房子白.png" alt="">
          <div>首页</div>
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
          <img src="../img/购物车.png" alt="" >
          <div style="color:rgb(255,204,0);">购物车</div>
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
      return {itemIndex:0}
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
      }
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
      height:50px;
      border:1px dotted black;
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
      background: url("../assets/icon-selected.png");
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
      top:0;
      left:0;
      position:relative;
      display:inline-block;
      vertical-align: middle;
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
      top:15px;
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

    .pay-price
    {
      width:204px;
      height:37px;
      margin:4px 0;
      padding-right:4px;
    }

    .all-price
    {
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
      background: url("../assets/s-cainixihuan.png");
      background-size: 100%;
    }

    
</style>
