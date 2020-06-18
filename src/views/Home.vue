<template>
  <div class="z-home">
    <!-- 顶部栏有消失和出现,开始是消失的 -->
    <div class="z-top-bar" v-if="scroll >= 800">
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
        <!-- 中部的商品列表部分 -->
        <div class="z-moddle-goods-list">
          
        </div>
      </div>
    </div>

    <div class="z-bottom-bar">
        <div class="z-bottom-item" @click="itemChange(0)">
          <img src="../img/房子.png" alt="">
          <div style="color:rgb(255,204,0);">首页</div>
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
      scroll: ''     //滚动条高度
    }
  },

  methods:{

    //滚动条滚动到一定距离出现元素
    menu() {
        this.scroll = document.getElementById("zyr-middle-bar").scrollTop
        // console.log(this.scroll)
      },
    
    //底部路由切换
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
    .z-moddle-bar-list-box{
      width: 100%;
      height: 1600px;
    }

    /* 底部 */
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
</style>
