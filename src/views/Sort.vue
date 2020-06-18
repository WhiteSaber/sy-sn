<template>
  <div class="z-home">
    <div class="z-top-bar">
        <div class="s-classify-top">
            <div class="s-left-wrap">
                商品分类
            </div>
            <div class="s-right-wrap">
                <a>爆款好货5折开抢</a>
            </div>
        </div>
    </div>
    <div class="z-middle-bar">
        <div class="s-classify-content">
            <div class="s-select-box">
                <ul >
                    <div v-for="(item,index) in classifyList" :key="item">
                        
                        <li v-if="myIndex==index" class="sign" @click="changeTab(index)">
                            <span class="orange">{{item}}</span>
                        </li>
                        
                        <li v-else @click="changeTab(index)">
                            <span>{{item}}</span>
                        </li>
                    </div>
                </ul>
            </div>
            <div class="s-select-content">
                <div class="s-adver-box-1">
                    <div class="s-adver-box-2">
                        <div class="s-adver-box-3">
                            <ul class="s-adver-box-4">
                                <li>
                                    <a>
                                        <img src="../assets/s-618.jpg">
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="s-selected-item">
                    <div class="s-item-title">
                        <span>热门推荐</span>
                    </div>
                    <ul class="s-item-list">
                        <li v-for="item in itemList" :key="item.name"></li>
                    </ul>
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
        <img src="../img/放大镜.png" alt />
        <div style="color:rgb(255,204,0);">分类</div>
      </div>
      <div class="z-bottom-item" @click="itemChange(2)">
        <img src="../img/清单白.png" alt />
        <div>必抢清单</div>
      </div>
      <div class="z-bottom-item" @click="itemChange(3)">
        <img src="../img/购物车白.png" alt />
        <div>购物车</div>
      </div>
      <div class="z-bottom-item" @click="itemChange(4)">
        <img src="../img/易购白.png" alt />
        <div>我的易购</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { 
        itemIndex: 0,
        myIndex:0,
        classifyList:["热门推荐","手机数码","大家电","电脑办公","厨卫大电","生活家电","食品酒水","个人护理","美妆护肤","奶粉尿裤","苏宁国际","珠宝首饰","品质男装","流行女装","精品女鞋"],
        itemList:
        [
            {
              name:"手机",
              src:"../assets/s-手机.png",
            },
        ]
    };
  },
  methods: {
    changeTab(index)
    {
        this.myIndex=index;
    },
    
    itemChange(index) {
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
      if (this.itemIndex == 4) {
        this.$router.push({
          path: "/myYg",
          query: {
            name: index
          }
        });
      }
    }
  }
};
</script>

<style scoped>
.z-home {
  width: 100%;
  height: 100%;
}
.z-home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.z-home .z-middle-bar {
  width: 100%;
  overflow: auto;
  height: 1800px;
}
.z-home .z-bottom-bar {
  flex-shrink: 0;
  display: flex;
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
}

*{margin:0;padding:0;}

html body
{
    background: #fff;
    margin:0 auto;
}

.s-classify-top
{
    position:fixed;
    top:0;
    left:0;
    display:flex;
    flex-direction:row;
    z-index:100;
}

.s-left-wrap
{
    width:90px;
    height:100%;
    text-align: center;
    font-size: 18px;
    line-height: 54px;
    color:#333333;
    float:left;
}

.s-right-wrap
{
    width:285px;
    height:54px;
}

.s-right-wrap a
{
    display:block;
    font-size: 14px;
    line-height: 32px;
    width:261px;
    height:32px;
    background: url("../assets/s-search-icon.png")  9px 7px/18px 18px no-repeat #f7f7f7;
    border-radius: 16px;
    color:#999999;
    margin:11px 12px;
    padding-left: 33px;
}

.s-classify-content
{
    margin-top:54px;
    overflow: hidden;
    padding-bottom:49px;
}

.s-select-box
{
    width:90px;
    height:calc(100% - 54px - 49px);
    position:fixed;
    left:0;
    top:54px;
    background:#f9f9f9;
    overflow: auto;
}

.s-select-box ul
{
    list-style-type: none;
}

.sign
{
    position:relative;
    background:#fff;
}

.s-select-box span
{
    font-size: 14px;
    display:block;
    width:90px;
    height:50px;
    line-height:50px;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    color:#666;
    padding:0 12.5px;
}

.orange
{
    font-weight: bold;
}

.orange::before
{
    content:'';
    position:absolute;
    left:6px;
    top:20.5px;
    width:4px;
    height:9px;
    border-radius: 4px;
    background: #fc0;
}

.sign::before
{
    content:'';
    position:absolute;
    right:0;
    width:12px;
    height:12px;
    top:-12px;
    background:url("../assets/s-up.png")center/100% no-repeat;
}

.sign::after
{
    content:'';
    position:absolute;
    right:0;
    width:12px;
    height:12px;
    bottom:-12px;
    background:url("../assets/s-down.png")center/100% no-repeat;
}

.s-select-content
{
    width:calc(100% - 90px);
    height:900px;
    background:#fff;
    margin-left:90px;
    padding:124.5px 15px 0;
    overflow: auto;
    float:left;
}

.s-adver-box-1
{
    position:fixed;
    top:54px;
    left:90px;
    background:#fff;
    z-index:100;
}

.s-adver-box-2
{
    margin:0 15px 0;
}

.s-adver-box-3
{
    width:253px;
    height:94.5px;
    overflow: hidden;
    border-radius: 12px;
    margin-top: 15px;
}

.s-adver-box-4
{
    white-space:nowrap;
    font-size:0;
    overflow: hidden;
    list-style: none;
}

.s-adver-box-4 li 
{
    float:left;
    width:255px;
    height:94.5px;
    position:relative;
    border-radius: 12px;
    overflow: hidden;
}

.s-adver-box-4 a
{
    display:block;
    width:100%;
    height:100%;
    overflow: hidden;
    position:absolute;
    left:-1px;
    top:0;
}

.s-adver-box-4 img
{
    display:block;
    width:254px;
    height:94.5px;
    border-radius: 12px;
}

.s-selected-item
{
    margin:0;
    padding:0;
}

.s-item-title
{
    padding:15px 0;
}

.s-item-title span
{
    color:#000;
    font-weight: bold;
    float:left;
    font-size:12px;
    line-height: 12px;
}

.s-item-list
{
    display:block;
    margin-block-start:12px;
    margin-block-end:12px;
    margin-inline-start:0px;
    margin-inline-end:0px;
    padding-inline-start:40px;
}

.s-item-list li
{
  width:63px;
  margin:0 33px 15px 0;
}

.s-item-list a
{
  text-decoration:none;
  color:#333;
  font-size:12px;
}
</style>