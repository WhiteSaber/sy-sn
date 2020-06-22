<template>
    <div id="app">
        <!-- 头部 -->
        <div class="c-box-title">
            <img src="../img/c-big1.png" alt="" class="c-title-return">
            <div class="search-box">
                <img src="../img/c-loupe.png" alt="" class="c-title-loupe">
                <input type="text" placeholder="请输入您想要的商品" value="">
            </div>
            
            <a href="#" class="c-title-search">搜索</a>
            <!-- <div class="c-title-xiala">下拉框</div> -->
        </div>
        <!-- 内容 -->
        <div class="c-box-content">
            <p>热门搜索</p>
            <div class="c-app-content">
                <div class="c-content-box">
                    <div><a href="https://m.suning.com/search/%E7%A9%BA%E8%B0%83/">空调</a></div>
                    <div><a href="https://cuxiao.m.suning.com/scms/612to621.html?adtype=3&safp=f73ee1cf.21471.searchKeywordsborb.2&safc=hotkeyword.2.1703822520200620" id="c-box-discolour1">6.18平价风暴</a></div>
                    <div><a href="https://shop.m.suning.com/30000355.html?adtype=3&safp=f73ee1cf.21471.searchKeywordsborb.3&safc=hotkeyword.2.1704139320200620" id="c-box-discolour2">洗衣液5折起</a></div>
                </div>
                <div class="c-content-box">
                    <div><a href="https://m.suning.com/search/%E6%89%8B%E6%9C%BA/">手机</a></div>
                    <div><a href="https://m.suning.com/search/%E5%86%B0%E7%AE%B1/">冰箱</a></div>
                    <div><a href="https://m.suning.com/search/%E7%94%B5%E8%A7%86/">电视</a></div>
                </div>
                <div class="c-content-box">
                    <div><a href="https://cuxiao.m.suning.com/scms/2020618_2.html?adtype=3&safp=f73ee1cf.21471.searchKeywordsborb.7&safc=hotkeyword.2.1703895920200620" id="c-box-discolour3">至高降1000元</a></div>
                    <div><a href="https://m.suning.com/search/%E8%8C%85%E5%8F%B0/">茅台</a></div>
                    <div><a href="https://m.suning.com/search/ipad/">ipad</a></div>
                </div>
                <div class="c-content-box">
                    <div><a href="https://m.suning.com/search/%E7%83%AD%E6%B0%B4%E5%99%A8/">热水器</a></div>
                    <div><a href="https://m.suning.com/search/%E9%A9%AC%E6%A1%B6/">马桶</a></div>
                    <div><a href="https://m.suning.com/search/%E8%80%B3%E6%9C%BA/">耳机</a></div>
                </div>
            </div> 
        </div>
    </div>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
#add{
    margin: 100%;
    padding: 100%;
}
/* 头部 */
.c-box-title{
    width: 96%;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content:space-between;
    border-bottom: 1px solid rgb(219, 217, 217);
    position: relative;
}

.search-box{
    width:75%;
    height:30px;
    display:flex;
    flex-direction: row;
    flex-wrap: nowrap;
    background-color: #f2f2f2;
    border-radius: 4px;
    position:relative;
}

.c-title-return {
    width: 53.5px;
    height: 49.5px;
}
.c-title-loupe{
    width: 12px;
    height: 12px;
    margin:9px 7.5px;
}
.search-box input{
    width: 68%;
    height: 30px;   /*待设置 */
    border: none;
    outline:none;
    border:none;
    background-color: #f2f2f2;
    margin-right: 10px; 
    
}

.c-title-search{
    width: 44px;
    height:44px;
    text-align: center;
    line-height: 44px;
    text-decoration: none;
    color: #353d44;
    font-weight: 500;
    font-size: 15px;
    
}
/* 内容 */
.c-box-content{
    width: 100%;
    height: 100%;
    padding: 20px 14px;
}
.c-box-content p{
    width:100%;
    height:24px;
    font-size: 15px;
    color:#999;
}

.c-app-content
{
    width:100%;
    height:auto;
    display:flex;
    flex-direction: column;
}

.c-content-box{
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-grow: 1;
}
.c-content-box >div{
    width: 29%;
    height: 25px;
    background-color: #f2f2f2;
    margin: 2% 2% 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    flex-grow: 1;
}
#c-box-discolour1,#c-box-discolour2,#c-box-discolour3{
    color: #ff6600;
}
.c-content-box >div> a{
    color: #333333;
    font-weight: 500;
    font-size: 10%;
    text-decoration: none;
}

</style>