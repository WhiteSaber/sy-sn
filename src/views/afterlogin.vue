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

                </div>
                <div class="middle"></div>
                <div class="recommend"></div>
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
</style>