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
                                                <img src="../assets/s2020.jpg">
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
        
                        <div class="s-selected-item">
                            <div class="s-item-title">
                                <span>热销大牌</span>
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
    
                <div class="s-selected-item">
                    <div class="s-item-title">
                        <span>手机通讯</span>
                    </div>
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
                <div class="last-btn">
                    <a href="https://c.m.suning.com/snjdyq.html">进入手机频道</a>
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
                    name:"apple",
                    src:require("../assets/sapple.jpg"),
                },
                {
                    name:"huawei",
                    src:require("../assets/shuawei.jpg"),
                },
                {
                    name:"vivo",
                    src:require("../assets/svivo.jpg"),
                },
            ],

            secondRow:
            [
                {
                name:"honor",
                src:require("../assets/shonor.jpg"),
                },
                {
                    name:"xiaomi",
                    src:require("../assets/sxiaomi.jpg"),
                },
                {
                    name:"oppo",
                    src:require("../assets/soppo.jpg"),
                },
            ],

            thirdRow:
            [
                {
                    name:"realme",
                    src:require("../assets/srealme.png"),
                },
                {
                    name:"samsung",
                    src:require("../assets/ssumsung.jpg"),
                },
                {
                    name:"iqoo",
                    src:require("../assets/siqoo.jpg"),
                },
            ],

            fourthRow:
            [
                {
                    name:"yijia",
                    src:require("../assets/syijia.jpg"),
                },
                {
                    name:"鹿客",
                    src:require("../assets/sloock.jpg"),
                },
                {
                    name:"小天才",
                    src:require("../assets/sxiaotiancai.jpg"),
                },
            ],

            fifthRow:
            [
                {
                    name:"大疆创新",
                    src:require("../assets/sdajiangchuangxin.png"),
                },
                {
                    name:"bose",
                    src:require("../assets/sbose.jpg"),
                },
                {
                    name:"步步高",
                    src:require("../assets/sbubugao.jpg"),
                },
            ],

            sixthRow:
            [
                {
                    name:"全部手机",
                    src:require("../assets/squanbushouji.jpg"),
                },
                {
                    name:"5g手机",
                    src:require("../assets/s5gshouji.jpg"),
                },
                {
                    name:"全面屏手机",
                    src:require("../assets/squanmianpingshouji.jpg"),
                },
            ],
            
            seventhRow:
            [
                {
                    name:"游戏手机",
                    src:require("../assets/syouxishouji.jpg"),
                },
                {
                    name:"老人机",
                    src:require("../assets/slaorenji.jpg"),
                },
                {
                    name:"拍照手机",
                    src:require("../assets/spaizhaoshouji.jpg"),
                },
            ],

            eighthRow:
            [
                {
                    name:"指纹手机",
                    src:require("../assets/szhiwenshouji.jpg"),
                },
                {
                    name:"面部识别手机",
                    src:require("../assets/smianbushibieshouji.jpg"),
                },
                {
                    name:"女性手机",
                    src:require("../assets/snvxingshouji.jpg"),
                },
            ],

            ninthRow:
            [
                {
                    name:"长续航手机",
                    src:require("../assets/schangxuhangshouji.jpg"),
                },
                {
                    name:"以旧换新手机",
                    src:require("../assets/syijiuhuanxin.jpg"),
                },
                {
                    name:"手机维修",
                    src:require("../assets/sshoujiweixiu.png"),
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

.last-btn
{
    width:260px;
    height:33px;
    margin:19px 0 39px;
}

.last-btn a
{
    display:block;
    width:256px;
    height:33px;
    border:1px solid #ddd;
    border-radius: 6px;
    color:#222;
    line-height: 33px;
    text-align: center;
}
</style>