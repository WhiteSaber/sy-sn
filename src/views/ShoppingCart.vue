<template>
  <div class="z-home">
    <div class="z-top-bar"></div>
    <div class="z-middle-bar">123122133</div>
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
</style>
