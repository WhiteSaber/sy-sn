<template>
    <div>
        <div class="s-select-view">
            <div class="s-select-content">
                <div class="title-wrap">
                    <ul>
                        <div v-for="(item,index) in titleList" :key="item" @click="changeItem(index)">
                            <li v-if="myIndex==index" class="orangeRow">{{item}}</li>
                            <li v-else>{{item}}</li>
                        </div>
                    </ul>
                </div>

                <div class="s-selected-item">
                    <div class="s-item-title">
                        <span>空调</span>
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
                        </a>
                    </li>
                </div>
                <div class="item-box">
                    <li v-for="item in secondRow" :key="item.name">
                        <a :href="'https://m.suning.com/search/'+item.name+'/'">
                            <div class="item-img">
                                <img :src="item.src">
                            </div>
                        </a>
                    </li>
                </div>
                <div class="item-box">
                    <li v-for="item in thirdRow" :key="item.name">
                        <a :href="'https://m.suning.com/search/'+item.name+'/'">
                            <div class="item-img">
                                <img :src="item.src">
                            </div>
                            <div class="s-selected-item">
                                <div class="s-item-title">
                                    <span>冰箱</span>
                                </div>
                            </div>
                        </a>
                    </li>
                </div>
                <div class="item-box">
                    <li v-for="item in fourthRow" :key="item.name">
                        <a :href="'https://m.suning.com/search/'+item.name+'/'">
                            <div class="item-img">
                                <img :src="item.src">
                            </div>
                            
                        </a>
                    </li>
                </div>
                <div class="item-box">
                    <li v-for="item in fifthRow" :key="item.name">
                        <a :href="'https://m.suning.com/search/'+item.name+'/'">
                            <div class="item-img">
                                <img :src="item.src">
                            </div>
                            
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
                <div class="item-box">
                    <li v-for="item in eighthRow" :key="item.name">
                        <a :href="'https://m.suning.com/search/'+item.name+'/'">
                            <div class="item-img">
                                <img :src="item.src">
                            </div>
                            <div class="item-name">{{item.name}}</div>
                        </a>
                    </li>
                </div>
                <div class="item-box">
                    <li v-for="item in ninthRow" :key="item.name">
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
            titleList:["空调","冰箱","洗衣机","电视","集成家电","商用电器","推荐品牌"],

            firstRow:
            [
                {
                    name:"apple",
                    src:require("../assets/s-apple.jpg"),
                },
                {
                    name:"huawei",
                    src:require("../assets/s-huawei.jpg"),
                },
                {
                    name:"vivo",
                    src:require("../assets/s-vivo.jpg"),
                },
            ],

            secondRow:
            [
                {
                name:"honor",
                src:require("../assets/s-honor.jpg"),
                },
                {
                    name:"xiaomi",
                    src:require("../assets/s-xiaomi.jpg"),
                },
                {
                    name:"oppo",
                    src:require("../assets/s-oppo.jpg"),
                },
            ],

            thirdRow:
            [
                {
                    name:"realme",
                    src:require("../assets/s-realme.png"),
                },
                {
                    name:"samsung",
                    src:require("../assets/s-sumsung.jpg"),
                },
                {
                    name:"iqoo",
                    src:require("../assets/s-iqoo.jpg"),
                },
            ],

            fourthRow:
            [
                {
                    name:"yijia",
                    src:require("../assets/s-yijia.jpg"),
                },
                {
                    name:"鹿客",
                    src:require("../assets/s-loock.jpg"),
                },
                {
                    name:"小天才",
                    src:require("../assets/s-xiaotiancai.jpg"),
                },
            ],

            fifthRow:
            [
                {
                    name:"大疆创新",
                    src:require("../assets/s-dajiangchuangxin.png"),
                },
                {
                    name:"bose",
                    src:require("../assets/s-bose.jpg"),
                },
                {
                    name:"步步高",
                    src:require("../assets/s-bubugao.jpg"),
                },
            ],

            sixthRow:
            [
                {
                    name:"全部手机",
                    src:require("../assets/s-quanbushouji.jpg"),
                },
                {
                    name:"5g手机",
                    src:require("../assets/s-5gshouji.jpg"),
                },
                {
                    name:"全面屏手机",
                    src:require("../assets/s-quanmianpingshouji.jpg"),
                },
            ],
            
            seventhRow:
            [
                {
                    name:"游戏手机",
                    src:require("../assets/s-youxishouji.jpg"),
                },
                {
                    name:"老人机",
                    src:require("../assets/s-laorenji.jpg"),
                },
                {
                    name:"拍照手机",
                    src:require("../assets/s-paizhaoshouji.jpg"),
                },
            ],

            eighthRow:
            [
                {
                    name:"指纹手机",
                    src:require("../assets/s-zhiwenshouji.jpg"),
                },
                {
                    name:"面部识别手机",
                    src:require("../assets/s-mianbushibieshouji.jpg"),
                },
                {
                    name:"女性手机",
                    src:require("../assets/s-nvxingshouji.jpg"),
                },
            ],

            ninthRow:
            [
                {
                    name:"长续航手机",
                    src:require("../assets/s-changxuhangshouji.jpg"),
                },
                {
                    name:"以旧换新手机",
                    src:require("../assets/s-yijiuhuanxin.jpg"),
                },
                {
                    name:"手机维修",
                    src:require("../assets/s-shoujiweixiu.png"),
                },
            ],
            myIndex:0
        }
    },

    methods:
    {
        changeItem(index)
        {
            this.myIndex=index;
        }
    }
}
</script>

<style scoped>
.s-select-view
{
    width:calc(100% - 90px);
    height:657px;
    position:absolute;
    background:#fff;
    margin-left:90px;
    padding:0 15px 0;
    overflow: auto;
}

.s-select-content
{
    width:260px;
    height:auto;
    background:#fff;
}

.title-wrap
{
    width:260px;
    height:38px;
    overflow: auto;
    z-index:999
}

.title-wrap ul
{
    width:400px;
    height:38px;
    background: #fff;
}

.title-wrap li
{
    width:auto;
    height:38px;
    list-style-type: none;
    float:left;
    font-size: 12px;
    color:#333;
    margin-right: 21px;
    white-space: nowrap;
    line-height: 38px;
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

.orangeRow
{
    font-weight: bold;
    position:relative;
}

.orangeRow::after
{
    content:'';
    position:absolute;
    left:calc(50% - 4.5px);
    bottom:2px;
    width:9px;
    height:3px;
    border-radius: 4px;
    background: #fc0;
}
</style>