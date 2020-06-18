<template>
    <div>
        <div class="s-select-view">
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
                        </div>
                    </div>
            <ul class="s-item-list">
                <div class="item-box">
                    <li v-for="item in firstRow" :key="item.name">
                        <a :href="'https://m.suning.com/search/'+item.name+'/'">
                            <div class="item-img">
                                <img :src="item.src">
                            </div>
                            <div class="item-name">{{item.name}}</div>
                        </a>
                    </li>
                </div>
                <div class="item-box">
                    <li v-for="item in secondRow" :key="item.name">
                        <a :href="'https://m.suning.com/search/'+item.name+'/'">
                            <div class="item-img">
                                <img :src="item.src">
                            </div>
                            <div class="item-name">{{item.name}}</div>
                        </a>
                    </li>
                </div>
                <div class="item-box">
                    <li v-for="item in thirdRow" :key="item.name">
                        <a :href="'https://m.suning.com/search/'+item.name+'/'">
                            <div class="item-img">
                                <img :src="item.src">
                            </div>
                            <div class="item-name">{{item.name}}</div>
                        </a>
                    </li>
                </div>
                <div class="item-box">
                    <li v-for="item in fourthRow" :key="item.name">
                        <a :href="'https://m.suning.com/search/'+item.name+'/'">
                            <div class="item-img">
                                <img :src="item.src">
                            </div>
                            <div class="item-name">{{item.name}}</div>
                        </a>
                    </li>
                </div>
                <div class="item-box">
                    <li v-for="item in fifthRow" :key="item.name">
                        <a :href="'https://m.suning.com/search/'+item.name+'/'">
                            <div class="item-img">
                                <img :src="item.src">
                            </div>
                            <div class="item-name">{{item.name}}</div>
                        </a>
                    </li>
                </div>
                <div class="item-box">
                    <li v-for="item in sixthRow" :key="item.name">
                        <a :href="'https://m.suning.com/search/'+item.name+'/'">
                            <div class="item-img">
                                <img :src="item.src">
                            </div>
                            <div class="item-name">{{item.name}}</div>
                        </a>
                    </li>
                </div>
                <div class="item-box">
                    <li v-for="item in seventhRow" :key="item.name">
                        <a :href="'https://m.suning.com/search/'+item.name+'/'">
                            <div class="item-img">
                                <img :src="item.src">
                            </div>
                            <div class="item-name">{{item.name}}</div>
                        </a>
                    </li>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data()
    {
        return {
            firstRow:
            [
                {
                    name:"手机",
                    src:require("../assets/s-shouji.png"),
                },
                {
                    name:"笔记本",
                    src:require("../assets/s-bijiben.jpg"),
                },
                {
                    name:"平板电脑",
                    src:require("../assets/s-pingbandiannao.png"),
                },
            ],

            secondRow:
            [
                {
                name:"冰箱",
                src:require("../assets/s-bingxiang.jpg"),
                },
                {
                    name:"电风扇",
                    src:require("../assets/s-dianfengshan.jpg"),
                },
                {
                    name:"破壁机",
                    src:require("../assets/s-pobiji.jpg"),
                },
            ],

            thirdRow:
            [
                {
                    name:"空调",
                    src:require("../assets/s-kongtiao.jpg"),
                },
                {
                    name:"电视机",
                    src:require("../assets/s-dianshiji.jpg"),
                },
                {
                    name:"粽子",
                    src:require("../assets/s-zongzi.png"),
                },
            ],

            fourthRow:
            [
                {
                    name:"热水器",
                    src:require("../assets/s-reshuiqi.jpg"),
                },
                {
                    name:"哑铃",
                    src:require("../assets/s-yaling.jpg"),
                },
                {
                    name:"瑜伽垫",
                    src:require("../assets/s-yujiadian.jpg"),
                },
            ],

            fifthRow:
            [
                {
                    name:"跑步机",
                    src:require("../assets/s-paobuji.jpg"),
                },
                {
                    name:"洗衣机",
                    src:require("../assets/s-xiyiji.jpg"),
                },
                {
                    name:"手表",
                    src:require("../assets/s-shoubiao.png"),
                },
            ],

            sixthRow:
            [
                {
                    name:"奶粉",
                    src:require("../assets/s-naifen.png"),
                },
                {
                    name:"白酒",
                    src:require("../assets/s-baijiu.png"),
                },
                {
                    name:"休闲零食",
                    src:require("../assets/s-xiuxianlingshi.jpg"),
                },
            ],
            
            seventhRow:
            [
                {
                    name:"水果",
                    src:require("../assets/s-shuiguo.jpg"),
                },
                {
                    name:"文化图书",
                    src:require("../assets/s-wenhuatushu.jpg"),
                },
                {
                    name:"生活用纸",
                    src:require("../assets/s-shenghuoyongzhi.jpg"),
                },
            ],
        }
    }
}
</script>

<style scoped>
.s-select-view
{
    width:calc(100% - 90px);
    height:657px;
    position:fixed;
    background:#fff;
    margin-left:90px;
    padding:124.5px 15px 0;
    overflow: auto;
}

.s-select-content
{
    width:260px;
    height:auto;
    background:#fff;
    
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
    height:auto;
}

.s-item-title
{
    padding:15px 0;
    height:42px;
}

.s-item-title span
{
    color:#000;
    font-weight: bold;
    float:left;
    font-size:12px;
    line-height:12px;
}

.s-item-list
{
    display:flex;
    flex-direction: column;
    list-style-type: none;
}

.item-box
{
    width:260px;
    display:flex;
    flex-direction: row;
    justify-content:space-between;
    margin-bottom:15px;
}

.s-item-list li
{
    width:63px;
    height:81px;
}

.s-item-list a
{
    text-decoration:none;
    color:#333;
    font-size:12px;
}

.item-img
{
    width:63px;
    height:63px;
}

.item-img img
{
    display:block;
    width:63px;
    height:63px;
    background: #fff;
}

.item-name
{
    text-align: center;
}
</style>