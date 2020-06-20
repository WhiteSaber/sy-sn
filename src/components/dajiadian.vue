<template>
    <div>
        <div class="s-select-view" id="s-select-view">
            <div class="s-select-content">
                <div class="s-title-wrap" id="s-select-list">
                    <ul>
                        <div v-for="(item,index) in titleList" :key="item" @click="changeItem(index)">
                            <li v-if="myIndex==index" class="orangeRow">{{item}}</li>
                            <li v-else>{{item}}</li>
                        </div>
                    </ul>
                </div>
            </div>
            <ul class="s-item-list">
                <div class="s-selected-item">
                    <div class="s-item-title">
                        <span>空调</span>
                    </div>
                </div>
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

                <div class="s-selected-item">
                    <div class="s-item-title">
                        <span>冰箱</span>
                    </div>
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

                <div class="s-selected-item">
                    <div class="s-item-title">
                        <span>洗衣机</span>
                    </div>
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

                <div class="s-selected-item">
                    <div class="s-item-title">
                        <span>电视</span>
                    </div>
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
                <div class="item-box">
                    <li v-for="item in tenthRow" :key="item.name">
                        <a :href="'https://m.suning.com/search/'+item.name+'/'">
                            <div class="item-img">
                                <img :src="item.src">
                            </div>
                            <div class="item-name">{{item.name}}</div>
                        </a>
                    </li>
                </div>
                <div class="item-box">
                    <li v-for="item in eleventhRow" :key="item.name">
                        <a :href="'https://m.suning.com/search/'+item.name+'/'">
                            <div class="item-img">
                                <img :src="item.src">
                            </div>
                            <div class="item-name">{{item.name}}</div>
                        </a>
                    </li>
                </div>

                <div class="s-selected-item">
                    <div class="s-item-title">
                        <span>集成家电</span>
                    </div>
                </div>
                <div class="item-box">
                    <li v-for="item in twelfthRow" :key="item.name">
                        <a :href="'https://m.suning.com/search/'+item.name+'/'">
                            <div class="item-img">
                                <img :src="item.src">
                            </div>
                            <div class="item-name">{{item.name}}</div>
                        </a>
                    </li>
                </div>
                <div class="item-box">
                    <li v-for="item in thirteenthRow" :key="item.name">
                        <a :href="'https://m.suning.com/search/'+item.name+'/'">
                            <div class="item-img">
                                <img :src="item.src">
                            </div>
                            <div class="item-name">{{item.name}}</div>
                        </a>
                    </li>
                </div>

                <div class="s-selected-item">
                    <div class="s-item-title">
                        <span>商用电器</span>
                    </div>
                </div>
                <div class="item-box">
                    <li v-for="item in forteenthRow" :key="item.name">
                        <a :href="'https://m.suning.com/search/'+item.name+'/'">
                            <div class="item-img">
                                <img :src="item.src">
                            </div>
                            <div class="item-name">{{item.name}}</div>
                        </a>
                    </li>
                </div>

                <div class="item-box">
                    <li v-for="item in fifteenthRow" :key="item.name">
                        <a :href="'https://m.suning.com/search/'+item.name+'/'">
                            <div class="item-img">
                                <img :src="item.src">
                            </div>
                            <div class="item-name">{{item.name}}</div>
                        </a>
                    </li>
                </div>
                <div class="item-box">
                    <li v-for="item in sixteenthRow" :key="item.name">
                        <a :href="'https://m.suning.com/search/'+item.name+'/'">
                            <div class="item-img">
                                <img :src="item.src">
                            </div>
                            <div class="item-name">{{item.name}}</div>
                        </a>
                    </li>
                </div>

                <div class="s-selected-item">
                    <div class="s-item-title">
                        <span>推荐品牌</span>
                    </div>
                </div>
                <div class="item-box">
                    <li v-for="item in seventeenthRow" :key="item.name">
                        <a :href="'https://m.suning.com/search/'+item.name+'/'">
                            <div class="item-img">
                                <img :src="item.src">
                            </div>
                            <div class="item-name">{{item.name}}</div>
                        </a>
                    </li>
                </div>
                <div class="item-box">
                    <li v-for="item in eighteenthRow" :key="item.name">
                        <a :href="'https://m.suning.com/search/'+item.name+'/'">
                            <div class="item-img">
                                <img :src="item.src">
                            </div>
                            <div class="item-name">{{item.name}}</div>
                        </a>
                    </li>
                </div>
                <div class="item-box">
                    <li v-for="item in ninteenthRow" :key="item.name">
                        <a :href="'https://m.suning.com/search/'+item.name+'/'">
                            <div class="item-img">
                                <img :src="item.src">
                            </div>
                            <div class="item-name">{{item.name}}</div>
                        </a>
                    </li>
                </div>

                <div class="last-btn">
                    <a href="https://c.m.suning.com/snjdyq.html">进入家电频道</a>
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
                    name:"空调挂机",
                    src:require("../assets/skongtiaoguaji.jpg"),
                },
                {
                    name:"空调柜机",
                    src:require("../assets/skongtiaoguiji.png"),
                },
                {
                    name:"移动空调",
                    src:require("../assets/syidongkongtiao.png"),
                },
            ],

            secondRow:
            [
                {
                name:"风管机",
                src:require("../assets/sfengguanji.jpg"),
                },
                {
                    name:"多联机",
                    src:require("../assets/sduolianji.jpg"),
                },
                {
                    name:"一级能效",
                    src:require("../assets/syijinengxiao.jpg"),
                },
            ],

            thirdRow:
            [
                {
                    name:"空调以旧换新",
                    src:require("../assets/skongtiaoyijiuhuanxin.png"),
                },
                {
                    name:"空调零元安装",
                    src:require("../assets/skongtiaolingyuananzhuang.png"),
                },
                {
                    name:"空调免息",
                    src:require("../assets/skongtiaomianxi.jpg"),
                },
            ],

            fourthRow:
            [
                {
                    name:"冰箱",
                    src:require("../assets/sbingxiang.jpg"),
                },
                {
                    name:"对开门冰箱",
                    src:require("../assets/sduikaimenbingxiang.jpg"),
                },
                {
                    name:"多门冰箱",
                    src:require("../assets/sduomenbingxiang.jpg"),
                },
            ],

            fifthRow:
            [
                {
                    name:"十字对开门冰箱",
                    src:require("../assets/sshiziduikaimenbingxiang.jpg"),
                },
                {
                    name:"三门冰箱",
                    src:require("../assets/ssanmenbingxiang.jpg"),
                },
                {
                    name:"双门冰箱",
                    src:require("../assets/sshuangmenbingxiang.jpg"),
                },
            ],

            sixthRow:
            [
                {
                    name:"冷柜",
                    src:require("../assets/slenggui.jpg"),
                },
                {
                    name:"商用冷柜",
                    src:require("../assets/sshangyonglenggui.jpg"),
                },
                {
                    name:"红酒柜",
                    src:require("../assets/shongjiugui.png"),
                },
            ],
            
            seventhRow:
            [
                {
                    name:"洗干一体机",
                    src:require("../assets/sxiganyitiji.jpg"),
                },
                {
                    name:"滚筒洗衣机",
                    src:require("../assets/sguntongxiyiji.jpg"),
                },
                {
                    name:"波轮洗衣机",
                    src:require("../assets/sbolunxiyiji.jpg"),
                },
            ],

            eighthRow:
            [
                {
                    name:"大容量洗衣机",
                    src:require("../assets/sdarongliangxiyiji.jpg"),
                },
                {
                    name:"迷你洗衣机",
                    src:require("../assets/sminixiyiji.jpg"),
                },
                {
                    name:"烘干机",
                    src:require("../assets/shongganji.png"),
                },
            ],

            ninthRow:
            [
                {
                    name:"电视",
                    src:require("../assets/sdianshiji.jpg"),
                },
                {
                    name:"55吋电视机",
                    src:require("../assets/s55cundianshiji.jpg"),
                },
                {
                    name:"全面屏电视机",
                    src:require("../assets/squanmianpingjianshiji.jpg"),
                },
            ],

            tenthRow:
            [
                {
                    name:"65吋电视机",
                    src:require("../assets/s65cundianshiji.jpg"),
                },
                {
                    name:"4K电视机",
                    src:require("../assets/s4kdianshiji.png"),
                },
                {
                    name:"教育电视",
                    src:require("../assets/sjiaoyudianshi.jpg"),
                },
            ],

            eleventhRow:
            [
                {
                    name:"家庭影院",
                    src:require("../assets/sjiatingyingyuan.jpg"),
                },
                {
                    name:"智慧屏",
                    src:require("../assets/szhihuiping.jpg"),
                },
                {
                    name:"投影仪",
                    src:require("../assets/stouyingyi.jpg"),
                },
            ],

            twelfthRow:
            [
                {
                    name:"壁挂式新风",
                    src:require("../assets/sbiguashixinfeng.jpg"),
                },
                {
                    name:"吊顶式新风",
                    src:require("../assets/sdiaodingshixinfeng.jpg"),
                },
                {
                    name:"前置过滤器",
                    src:require("../assets/sqianzhiguolvqi.jpg"),
                },
            ],

            thirteenthRow:
            [
                {
                    name:"空气能热水器",
                    src:require("../assets/skongqinengreshuiqi.jpg"),
                },
                {
                    name:"壁挂炉",
                    src:require("../assets/sbigualu.jpg"),
                },
                {
                    name:"全屋净水",
                    src:require("../assets/squanwujingshui.jpg"),
                },
            ],

            forteenthRow:
            [
                {
                    name:"商用发酵机",
                    src:require("../assets/sshangyongfaxiaoji.jpg"),
                },
                {
                    name:"商用展示柜",
                    src:require("../assets/sshangyongzhanshigui.jpg"),
                },
                {
                    name:"商用冰柜",
                    src:require("../assets/sshangyongbinggui.jpg"),
                },
            ],

            fifteenthRow:
            [
                {
                    name:"商用冰箱",
                    src:require("../assets/sshangyongbingxiang.jpg"),
                },
                {
                    name:"商用冷柜",
                    src:require("../assets/sshangyongchufanglenggui.jpg"),
                },
                {
                    name:"商用制冰机",
                    src:require("../assets/sshangyongzhibingji.jpg"),
                },
            ],

            sixteenthRow:
            [
                {
                    name:"商用电烤箱",
                    src:require("../assets/sshangyongdiankaoxiang.jpg"),
                },
                {
                    name:"天花机",
                    src:require("../assets/stianhuaji.jpg"),
                },
                {
                    name:"商用柜机",
                    src:require("../assets/sshangyongguiji.jpg"),
                },
            ],

            seventeenthRow:
            [
                {
                    name:"美的",
                    src:require("../assets/smeidi.jpg"),
                },
                {
                    name:"海尔",
                    src:require("../assets/shaier.jpg"),
                },
                {
                    name:"创维",
                    src:require("../assets/schuangwei.jpg"),
                },
            ],

            eighteenthRow:
            [
                {
                    name:"TCL",
                    src:require("../assets/stcl.jpg"),
                },
                {
                    name:"奥克斯",
                    src:require("../assets/saokesi.jpg"),
                },
                {
                    name:"格力",
                    src:require("../assets/sgeli.jpg"),
                },
            ],

            ninteenthRow:
            [
                {
                    name:"海信",
                    src:require("../assets/shaixin.jpg"),
                },
                {
                    name:"西门子",
                    src:require("../assets/sximenzi.jpg"),
                },
                {
                    name:"康佳",
                    src:require("../assets/skangjia.jpg"),
                },
            ],

            myIndex:6,
            myScrollX:"",
            myScrollY:""
        }
    },

    methods:
    {
        changeItem(index)
        {
            this.myIndex=index;
        },
        
        moveX()
        {
            this.myScrollX=document.getElementById("s-select-list").scrollLeft;
        },
        
        moveY()
        {
            this.myScrollY=document.getElementById("s-select-view").scrollTop;
        }
    },

    mounted()
    {
        document.getElementById("s-select-list").addEventListener('scroll',this.moveX);
        document.getElementById("s-select-view").addEventListener('scroll',this.moveY);
    },
    watch:
    {
        myIndex(newVal)
        {
            if(newVal==0)
            {
                document.getElementById("s-select-view").scrollTop=0;
                document.getElementById("s-select-list").scrollLeft=0;
            }
            else if(newVal==1)
            {
                document.getElementById("s-select-view").scrollTop=331;
                document.getElementById("s-select-list").scrollLeft=0;
            }
            else if(newVal==2)
            {
                document.getElementById("s-select-view").scrollTop=663;
                document.getElementById("s-select-list").scrollLeft=0;
            }
            else if(newVal==3)
            {
                document.getElementById("s-select-view").scrollTop=902;
                document.getElementById("s-select-list").scrollLeft=44;
            }
            else if(newVal==4)
            {
                document.getElementById("s-select-view").scrollTop=1233;
                document.getElementById("s-select-list").scrollLeft=98;
            }
            else if(newVal==5)
            {
                document.getElementById("s-select-view").scrollTop=1469;
                document.getElementById("s-select-list").scrollLeft=140;
            }
            else if(newVal==6)
            {
                document.getElementById("s-select-view").scrollTop=1589;
                
            }
        },

        myScrollY(oldVal)
        {
            if(oldVal<311)
            {
                this.myIndex=0;
            };
            if(oldVal>=331)
            {
                this.myIndex=1;
            };
            if(oldVal>=663 && oldVal<902)
            {
                this.myIndex=2;
            };
            if(oldVal>=902 && oldVal<1233)
            {
                this.myIndex=3;
            };
            if(oldVal>=1233 && oldVal<1469)
            {
                this.myIndex=4;
            };
            if(oldVal>=1469 && oldVal<1580)
            {
                this.myIndex=5;
            };
            if(oldVal>=1580)
            {
                this.myIndex=6;
            }
        }
    }
};
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

.s-title-wrap
{
    width:260px;
    height:38px;
    overflow: auto;
    z-index:999;
    position:fixed;
}

.s-title-wrap ul
{
    width:400px;
    height:38px;
    background: #fff;
}

.s-title-wrap li
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
    margin-top:38px;
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