<template>
    <div class="commodity-page" id="zyr-commodity-list">
        <div class="commodity-details">
            <!-- 顶部广告和导航 -->
            <div class="commodity-details-list">
                <div class="commodity-details-list-top-img" v-if="topImg==true">
                    <img src="../img/z41.png" alt="" @click="topImgBtn">
                </div>
                <div class="commodity-top-navigation" :style="topImgStyle">
                    <img src="../img/z42.png" alt="" @click="returnChange">
                    <div class="commodity-top-navigation-title" :style="topTitleStyle">商品详情</div>
                    <img src="../img/z43.png" alt="" @click="shows = true">
                    <van-overlay :show="shows">
                        <div class="wrapper" @click="shows = false">
                            <div class="block">
                                <div class="block-title">快速导航</div>
                                <div class="block-allbox">
                                    <div class="block-div">
                                        <img src="../img/fangzi.png" alt="">
                                        <div>首页</div>
                                    </div>
                                    <div class="block-div">
                                        <img src="../img/fangdajing.png" alt="">
                                        <div>搜索</div>
                                    </div>
                                    <div class="block-div">
                                        <img src="../img/gouwuche.png" alt="">
                                        <div>购物车</div>
                                    </div>
                                    <div class="block-div">
                                        <img src="../img/myygwhite.png" alt="">
                                        <div>我的易购</div>
                                    </div>
                                    <div class="block-div">
                                        <img src="../img/quanbufenlei.jpg" alt="">
                                        <div>
                                            全部分类
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </van-overlay>
                </div>
                <van-swipe class="my-swipe" @change="onChange">
                    <van-swipe-item v-for="(image, index) in images" :key="index">
                        <img v-lazy="image" />
                    </van-swipe-item>
                    <template #indicator>
                        <div class="custom-indicator">
                        {{ current + 1 }}/5
                        </div>
                    </template>
                </van-swipe>
                <div class="commodity-details-list-price">
                    <span style="font-size:19.2px">￥</span>
                    <span style="font-size:25.6px">149.</span>
                    <span style="font-size:19.2px">00</span>
                </div>
                <div class="commodity-details-list-super-bigbox">
                    <div class="commodity-details-list-super">
                        <div class="commodity-details-list-super-item">
                            <img src="../img/z44.png" alt="">
                            <div>SUPER会员预计返价值1.49元云钻</div>
                        </div>
                        <div class="super-kaitong">立即开通</div>
                    </div>
                </div>
                <div class="commodity-details-list-post">
                    <span>包邮</span>
                    <span>包税</span>
                </div>
                <div class="commodity-details-list-kr">
                    <img src="../img/kr.png" alt="">
                    <span style="padding:0px 8px 0px 5px; border-right:1px solid #dddddd" >韩国品牌</span>
                    <span style="padding:0px 20px 0px 8px">宁波保税局发货</span>
                    <img src="../img/z45.png" alt="">
                    <span style="padding:0px 0px 0px 5px">跨境商品</span>
                </div>
                <div class="commodity-details-list-name">
                    <div class="commodity-details-list-name-title">
                        <span class="commodity-details-list-name-title-one">苏宁国际直营</span>
                        <span class="commodity-details-list-name-title-two">【改善暗沉】兰芝雪纱丝柔修颜隔离霜#No.20 柔粉 30ml SPF25 PA++防晒隔离</span>
                    </div>
                    <div class="guanzhu">
                        <img src="../img/z46.png" alt="">
                    </div>
                </div>
                <div class="baokuanzhijiang">
                    <div>【爆款直降】 明星雪纱丝柔隔离包装新升级,配方和使用感是一如既往地赞！轻薄不闷痘,轻松隔绝外界污染物</div>
                </div>
                <div class="commodity-by-stages">
                    <div>
                        <span class="commodity-by-stages-span-one">分期</span>
                        <span class="commodity-by-stages-span-two">开通任性付返50元礼包</span>
                    </div>
                    <div class="commodity-by-stages-box">
                        <span class="commodity-by-stages-span-three">立即激活</span>
                        <img src="../img/z47.png" alt="">
                    </div>
                </div>
                <div class="commodity-sn-international">
                    <div class="commodity-sn-international-box">
                        <img src="../img/z48.png" alt="" class="commodity-sn-international-imgOne">
                        <span>海外正品 · 国际直营 · 售后无忧</span>
                    </div>
                    <img src="../img/z49.png" alt="" class="commodity-sn-international-imgTwo">
                </div>
                <div class="commodity-sn-cell">
                    <div class="commodity-sn-cell-boxOne">
                        <img src="../img/z50.png" alt="">
                        <span style="padding: 0 5px 0px 5px;">还差</span>
                        <span style="color:#ff4422;padding: 0 5px 0px 0px">1件</span>
                        <span>可参加满减活动</span>
                    </div>
                    <div class="commodity-sn-cell-boxTwo">
                        <span style="color:#999999;font-size:12.8px">领劵</span>
                        <img src="../img/z49.png" alt="">
                    </div>
                </div>
                <div class="commodity-sn-cell-juan">
                    <span>优惠</span>
                    <img src="../img/z51.png" alt="">
                </div>
                <div class="commodity-sn-cell-cuxiao">
                    <div class="commodity-sn-cell-cuxiao-boxOne">
                        促销
                    </div>
                    <div class="commodity-sn-cell-cuxiao-boxTwo">
                        <div>
                            <span class="commodity-sn-cell-cuxiao-spanOne">云钻促销</span>
                            <span class="commodity-sn-cell-cuxiao-spanTwo">普通会员预计返7云钻</span>
                        </div>
                        <div>
                            <span class="commodity-sn-cell-cuxiao-spanOne">实名领券</span>
                            <span class="commodity-sn-cell-cuxiao-spanTwo">实名认证领10元支付券</span>
                        </div>
                        <div>
                            <span class="commodity-sn-cell-cuxiao-spanOne">满减</span>
                            <span class="commodity-sn-cell-cuxiao-spanTwo">满2件打9折</span>
                        </div>
                    </div>
                </div>
                <div class="commodity-sn-cell-guajuan">
                    <div class="commodity-sn-cell-guajuan-item">
                        <div>刮劵</div>
                        <img src="../img/z52.png" alt="">
                        <span>
                            100%刮中券，最高50元无敌券
                        </span>
                    </div>
                    <img src="../img/z49.png" alt="" class="commodity-sn-cell-guajuan-item-img">
                </div>
                <div class="commodity-sn-select">
                    <div class="commodity-sn-select-box">
                        <div>已选</div>
                        <span>柔粉</span>
                        <span>1件</span>
                    </div>
                    <img src="../img/z49.png" alt="">
                </div>
                <div class="commodity-sn-address">
                    <div class="commodity-sn-address-list">
                        <div class="commodity-sn-address-list-songzhi">送至</div>
                        <div class="commodity-sn-address-list-item">
                            <div>
                                <img src="../img/z54.png" alt="">
                                <span class="commodity-sn-address-list-spanOne">浙江 绍兴 越城区 全区</span>
                            </div>
                            <span class="commodity-sn-address-list-spanTwo">现货 明天15:30前付款，预计周日(6月28日)送达</span>
                        </div>
                    </div>
                    <div class="commodity-sn-address-list-img">
                        <img src="../img/z49.png" alt="">
                    </div>
                </div>
                <div class="commodity-sn-ship">
                    <div>运费</div>
                    <span>免运费</span>
                </div>
                <div class="commodity-sn-service">
                    <div class="commodity-sn-service-title">
                        服务
                    </div>
                    <div class="commodity-sn-service-list">
                        <div class="commodity-sn-service-list-item">
                            <div>
                                <img src="../img/z53.png" alt="">
                                <span>苏宁保税仓发货</span>
                            </div>
                            <div>
                                <img src="../img/z53.png" alt="" style="width:26%">
                                <span>免运费</span>
                            </div>
                            <div>
                                <img src="../img/z53.png" alt="" style="width:22%">
                                <span>闪电发货</span>
                            </div>
                        </div>
                        <div class="commodity-sn-service-list-item">
                            <div>
                                <img src="../img/z53.png" alt="" style="width:22%">
                                <span>超时赔付</span>
                            </div>
                            <div>
                                <img src="../img/z53.png" alt="" style="width:22%">
                                <span>过敏包退</span>
                            </div>
                            <div>
                                <img src="../img/z53.png" alt="" style="width:22%">
                                <span>正品溯源</span>
                            </div>
                        </div>
                        <div class="commodity-sn-service-list-item">
                            <div>
                                <img src="../img/z53.png" alt="" style="width:18%">
                                <span>30天无忧退</span>
                            </div>
                        </div>
                    </div>
                    <div class="commodity-sn-service-right">
                        <img src="../img/z49.png" alt="">
                    </div>
                </div>
                <!-- 达人种草集 -->
                <div class="commodity-sn-daren">
                    <div class="commodity-sn-daren-title">达人种草集</div>
                    <div class="commodity-sn-daren-list">
                        <div class="commodity-sn-daren-item" @click="darenOne">
                            <div>
                                <img src="../img/z55.png" alt="">
                            </div>
                            <p>我用的粉色自然妆前防晒隔离乳，不假白，跟本身肤色贴合的贼自然，就跟本身皮肤保养的很好一样。素颜利器！毕竟韩国彩妆大多数都是专为亚洲人肤色设计的。可以隔离妆容、防雾霾、防紫外线、防蓝光，具有可以改善肌肤暗沉的抗氧化效果。</p>
                            <div class="commodity-sn-daren-name">
                                <img src="../img/z57.jpg" alt="">
                                <span>转角遇到你</span>
                            </div>
                        </div>
                        <div class="commodity-sn-daren-item" @click="darenTwo">
                            <div>
                                <img src="../img/z56.png" alt="">
                            </div>
                            <p>上妆效果：非常的服帖，而且不假白 我的肤质：我是敏感肌，角质层薄，平时不敢用粉底液，太闷，每天的底妆全靠隔离加散粉，真的一点点都不闷痘，妆感非常自然，也不会出现粉底液的暗沉。其实我觉得我就算把皮肤调整好了也会继续用这种兰芝隔离➕散粉的底妆方法，真的好用，还安全！ 整体评价：非常好！正品，一直在回购！重要的是价格合理，品质有保证，敏感肌福音！</p>
                            <div class="commodity-sn-daren-name">
                                <img src="../img/z58.jpg" alt="">
                                <span>种草皇上</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 评论 -->
                <div class="commodity-sn-comment">
                    <div class="commodity-sn-comment-pjnum">
                        <div class="commodity-sn-comment-pjnum-num">评价(100+)</div>
                        <div class="commodity-sn-comment-pjnum-item">
                            <div>99%好评率</div>
                            <img src="../img/z49.png" alt="">
                        </div>
                    </div>
                    <div class="commodity-sn-comment-content-list">
                        <div>
                            <img src="../img/z59.jpg" alt="" class="commodity-sn-comment-content-imgOne">
                            <span>油***的</span>
                            <img src="../img/z60.gif" alt="" class="commodity-sn-comment-content-imgTwo">
                        </div>
                        <div class="commodity-sn-comment-content-right">
                            <img src="../img/z61.png" alt="" class="commodity-sn-comment-content-imgThree">
                        </div>
                    </div>
                    <div class="commodity-sn-comment-context"> 
                        <p>老早就想买粉色的了，一直没有买到，应该是正品，试用了一下，是我喜欢的调调，香香的，后续上妆也很服帖，相信苏宁易购直营，嘿嘿嘿</p>
                    </div>
                    <div class="commodity-sn-comment-imgs">
                        <img src="../img/z65.jpg" alt="">
                        <img src="../img/z62.jpg" alt="">
                        <img src="../img/z63.jpg" alt="">
                        <img src="../img/z64.jpg" alt="">
                    </div>
                    <div class="all-comment">
                        <a href="https://revnode.suning.com/review/wap/cluster_review_page/cluster-30203772-000000011393934167-0000000000--.htm">
                            查看全部评论
                        </a>
                    </div>
                </div>
                <!-- 问答 -->
                <div class="commodity-sn-QA">
                    <div>问答</div>
                    <a href="https://c.m.suning.com/wdPage.html#/000000011393934167/0000000000/0000000000/2/0/%E3%80%90%E6%94%B9%E5%96%84%E6%9A%97%E6%B2%89%E3%80%91%E5%85%B0%E8%8A%9D%E9%9B%AA%E7%BA%B1%E4%B8%9D%E6%9F%94%E4%BF%AE%E9%A2%9C%E9%9A%94%E7%A6%BB%E9%9C%9C%23No.20%20%E6%9F%94%E7%B2%89%2030ml%20SPF25%20PA%2B%2B%E9%98%B2%E6%99%92%E9%9A%94%E7%A6%BB/0/null/null">
                        <span>查看全部问答</span>
                        <img src="../img/z49.png" alt="">
                    </a>
                </div>
                <div class="commodity-sn-QA-list"> 
                    <div>
                        <span class="commodity-sn-QA-list-one">问</span>
                        <span class="commodity-sn-QA-list-two">我皮肤黑黄有晒斑选那个呢？</span>
                    </div>
                    <div>
                        <span class="commodity-sn-QA-list-three">0个回答</span>
                    </div>
                </div>
                <!-- 温馨提示 -->
                <div class="commodity-sn-tips">
                    <div class="commodity-sn-tips-title">温馨提示</div>
                    <div class="commodity-sn-tips-list">
                        <div>查看全部</div>
                        <img src="../img/z49.png" alt="">
                    </div>
                </div>
                <div class="commodity-sn-tips-text">
                    <p>
                        国家药监局提示您：宣称用于祛斑美白、防晒、染发、烫发等的化妆品为特殊用途化妆品，产品标签上应标注“国妆特字”或者“国妆特进字”的批准文号
                    </p>
                </div>
                <!-- 进店逛逛 -->
                <div class="commodity-sn-shoping">
                    <img src="../img/z60.jpg" alt="">
                    <span>爱茉莉苏宁国际直营海外旗舰店</span>
                    <a href="https://shop.m.suning.com/30002980.html?safp=f73ee1cf.20006.0.84d1b3b3c5&safc=shop.0.0&safpn=10008.00020">进店逛逛</a>
                </div>
                <div class="commodity-sn-shop-international">
                    <img src="../img/z65.png" alt="">
                    <a href="https://fe.suning.com/oversea/wap/selfsupport.html?safp=f73ee1cf.20006.0.456636e173&safpn=10008.00020">去逛逛</a>
                </div>
                <van-tabs v-model="active" color="#fc0" class="commodity-sn-tab-one">
                    <van-tab title="图文详情">
                        <img src="../img/z66.jpg" alt="" style="margin-top:10px;">
                        <img src="../img/z67.jpg" alt="">
                        <img src="../img/z68.jpg" alt="">
                        <img src="../img/z69.jpg" alt="">
                        <img src="../img/z70.jpg" alt="">
                        <img src="../img/z71.jpg" alt="">
                        <img src="../img/z72.jpg" alt="">
                        <img src="../img/z73.jpg" alt="">
                        <img src="../img/z74.jpg" alt="">
                        <img src="../img/z75.png" alt="">
                    </van-tab>
                    <van-tab title="规格参数">
                        <img src="../img/z76.png" alt="" style="margin-top:10px;">
                    </van-tab>
                    <van-tab title="包装售后" class="commodity-sn-tab-two">
                        <span>包装清单</span>
                        <p>手机x1、电池（内置）x1、充电器x1、数据线x1、快速指南 x1、三包凭证x1、取卡针 x1、保护壳x1、TP保护膜（出厂贴好）x1、云业务权益卡片x1</p>
                        <span>售后服务</span>
                        <p>售后内容： 本产品全国联保，享受三包服务，质保期为：一年质保。 如因质量问题或故障，凭厂商维修中心或特约维修点的质量检测证明，享受7日内退货，15日内换货，15日以上在质保期内享受免费保修等三包服务！ 售后服务电话：400-830-8300 服务承诺： 苏宁易购向您保证销售商品均为正品行货并开具正规发票。凭苏宁易购发票，所有商品均可以享受生产厂家的全国联保服务或指定服务商联保服务，苏宁易购将严格按照国家三包政策以及本《退换货政策》，对所售商品履行换货和退货的义务。</p>
                        <span>特别声明</span>
                        <p>本站苏宁自营商品的商品详情信息及包装参数信息均由供应商自行设计、制作并通过苏宁向其开放的数据端口自行发布，其真实性、准确性和合法性由供应商负责。本站保证苏宁自营商品均为原厂正品行货，但因生产厂家可能会在没有任何提前通知的情况下更改产品包装、产地或者一些附件，本站不能确保用户收到的货物与本站展示的图片、产地、附件说明完全一致。</p>
                        <span>价格说明</span>
                        <p>划线价：商品展示的划线价，可能是品牌专柜标价、品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在苏宁易购平台或销售商门店曾经展示过的挂牌价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价、销售商门店挂牌价等可能会与您购物时展示的不一致，该价格仅供您参考。
                            折扣：如无特殊说明，折扣指销售商在划线价基础上计算出的优惠比例或优惠金额；如有疑问，您可在购买前联系销售商进行咨询。
                            异常问题：商品促销信息以商品详情页“促销”信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系销售商咨询。
                        </p>
                    </van-tab>
                </van-tabs>
                <div class="commodity-sn-look">
                    <img src="../img/z77.png" alt="">
                </div>
                <!-- 看了又看 -->
                <div class="z-moddle-goods-list-all">
                    <div class="z-moddle-goods-list-one">
                    <div class="z-moddle-goods-list-item" v-for="(item,index) in goodsListOne" :key="index"  @click="goodsItemOne">
                        <img :src="item.img" class="z-moddle-goods-img">
                        <p class="z-goods-content">{{item.name}}</p>
                        <div class="shop-box">
                            <span class="shop">自营</span>
                        </div>
                        <div class="z-goods-price-item">
                            <span class="z-goods-icon">￥</span>
                            <span class="z-goods-price">{{item.price}}</span>
                            <span class="z-goods-evaluate">100+评价</span>
                        </div>
                    </div>
                    </div>
                    <div class="z-moddle-goods-list-two">
                    <div class="z-moddle-goods-list-item" v-for="(item,index) in goodsListTwo" :key="index" @click="goodsItemTwo">
                        <img :src="item.img" class="z-moddle-goods-img">
                        <p class="z-goods-content">{{item.name}}</p>
                        <div class="shop-box">
                            <span class="shop">自营</span>
                        </div>
                        <div class="z-goods-price-item">
                            <span class="z-goods-icon">￥</span>
                            <span class="z-goods-price">{{item.price}}</span>
                            <span class="z-goods-evaluate">100+评价</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="commodity-sn-duang">
                    <img src="../img/z78.png" alt="">
                </div>
                <div style="height:70px;"></div>
            </div>
        </div>
        <!-- 问卷 -->
        <a href="https://qss.suning.com/841e3.htm" class="questionnaire" v-if="commodityScroll>=1000">
            <img src="../img/z90.png" alt="">
        </a>
        <div class="commodity-top" v-if="commodityScroll>=4500" @click="commodityTop">
            <img src="../img/z91.png" alt="">
        </div>
        <div class="commodity-top-botton-adv">
            <img src="../img/z92.png" alt="">
        </div>
        <!-- 底部加入购物车 -->
        <div class="commodity-bottom">
            <div class="commodity-bottom-left">
                <van-goods-action class="van-goods-action-list">
                    <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
                    <van-goods-action-icon icon="shop-o" text="店铺" @click="onClickIcon" />
                    <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" badge=""/>
                    <div class="van-goods-action-box">
                        <div class="commodity-bottom-right-one" is-link @click="showPopup">立刻购买</div>
                        <div class="commodity-bottom-right-two" is-link @click="showPopup">加入购物车</div>
                    </div>
                </van-goods-action>
            </div>
            <div class="commodity-bottom-right">
                <van-popup v-model="show" position="bottom" :style="{ height: '70%' }" closeable close-icon="close" round class="commodity-bottom-right-box">
                    <div v-if="appear==true">
                        <div class="commodity-bottom-right-top-list">
                            <div class="commodity-bottom-right-imgBig">
                                <img :src="contentList[0].imgBig" alt="">
                            </div>
                            <div class="commodity-bottom-right-top-middle-list">
                                <div class="commodity-bottom-right-top-middle-parce">￥{{contentList[0].parce}}</div>
                                <div class="commodity-bottom-right-top-middle-code">商品编码:{{contentList[0].code}}</div>
                                <div class="commodity-bottom-right-top-middle-title">{{contentList[0].title}}</div>
                            </div>
                        </div>
                        <div class="commodity-bottom-right-middle-list">
                            <p>色号</p>
                            <div class="commodity-bottom-right-middle-list-content">
                                <div class="commodity-bottom-right-middle-list-content-one">
                                    <img :src="contentList[0].imgSmall" alt="">
                                    <span>{{contentList[0].color}}</span>
                                </div>
                                <div class="commodity-bottom-right-middle-list-content-two" @click="colorTwo">
                                    <img :src="contentList[1].imgSmall" alt="">
                                    <span>{{contentList[1].color}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="commodity-bottom-right-bottom-list">
                            <div class="commodity-bottom-right-bottom-list-title">购买数量</div>
                            <div class="commodity-bottom-right-bottom-list-btn">
                                <van-stepper v-model="value" theme="round" @plus="plus(0)" @minus="minus(0)"  input-width="38px" button-size="20px" />
                            </div>
                        </div>
                        <div class="commodity-bottom-right-bottom-item">
                            <div class="commodity-bottom-right-bottom-item-one" @click="atOnec">立刻购买</div>
                            <div class="commodity-bottom-right-bottom-item-two" @click="joinOne(0)">加入购物车</div>
                        </div>
                    </div>

                    <div v-else>
                        <div class="commodity-bottom-right-top-list">
                            <div class="commodity-bottom-right-imgBig" style="width:63%;">
                                <img :src="contentList[1].imgBig" alt="">
                            </div>
                            <div class="commodity-bottom-right-top-middle-list">
                                <div class="commodity-bottom-right-top-middle-parce">￥{{contentList[1].parce}}</div>
                                <div class="commodity-bottom-right-top-middle-code">商品编码:{{contentList[1].code}}</div>
                                <div class="commodity-bottom-right-top-middle-title">{{contentList[1].title}}</div>
                            </div>
                        </div>
                        <div class="commodity-bottom-right-middle-list">
                            <p>色号</p>
                            <div class="commodity-bottom-right-middle-list-content">
                                <div class="commodity-bottom-right-middle-list-content-one-else" @click="colorOne">
                                    <img :src="contentList[0].imgSmall" alt="">
                                    <span>{{contentList[0].color}}</span>
                                </div>
                                <div class="commodity-bottom-right-middle-list-content-two-else">
                                    <img :src="contentList[1].imgSmall" alt="">
                                    <span>{{contentList[1].color}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="commodity-bottom-right-bottom-list">
                            <div class="commodity-bottom-right-bottom-list-title">购买数量</div>
                            <div class="commodity-bottom-right-bottom-list-btn">
                                <van-stepper v-model="value" theme="round" @plus="plus(0)" @minus="minus(0)"  input-width="38px" button-size="20px" />
                            </div>
                        </div>
                        <div class="commodity-bottom-right-bottom-item">
                            <div class="commodity-bottom-right-bottom-item-one" @click="atOnec">马上抢</div>
                            <div  class="commodity-bottom-right-bottom-item-two" @click="joinTwo()">加入购物车</div>
                        </div>
                    </div>
                </van-popup>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast } from 'vant';
// https://m.suning.com/product/0000000000/000000011393934167.html?safp=f73ee1cf.wapindex7.113464229882.58&safc=prd.1.rec_25-56_25-56_352,OPA1,OPC1_sys%3Arec,inpo%3A0,cpn%3A0,p%3A14-41,uuid%3A817c2f40983b126d8594b65c56537189,d%3A1,ab%3AH,dab%3A5-5_A&safpn=10001
export default {
    data() {
        return {
            nums:0,
            active: 0,
            loop:false,
            current: 0,
            shows: false,
            commodityScroll:'',  //控制顶部导航出现
            topTitleStyle:{
                color:"#fff"
            },
            topImgStyle:{         //顶部样式
                background:"",
                position:"",     
                top:""
            },
            topImg:true,  //顶部广告
            num:0,
            appear:true,
            value: 1,
            show: false,
            images:[
                'https://imgservice.suning.cn/uimg1/b2c/image/aef7t24ZQzlJnlivuWzQ8Q.jpg_800w_800h_4e_100Q',
                'https://imgservice.suning.cn/uimg1/b2c/image/KO6scFC9a4tTl94pN9lRBA.jpg_800w_800h_4e_100Q',
                'https://imgservice.suning.cn/uimg1/b2c/image/C0eSJI3-K75sqEJbJrIbeQ.jpg_800w_800h_4e_100Q',
                'https://imgservice.suning.cn/uimg1/b2c/image/srvOMOdZE2PmiTw0a_86hw.jpg_800w_800h_4e_100Q',
                'https://imgservice.suning.cn/uimg1/b2c/image/srvOMOdZE2PmiTw0a_86hw.jpg_800w_800h_4e_100Q'
            ],
            contentList:[
                {
                    imgBig:require("../img/z16.jpg"),
                    imgSmall:require("../img/z17.jpg"),
                    parce:129,
                    code:10597996078,
                    title:"LANEIGE兰芝 雪纱丝柔隔离#绿色 30ml/瓶 SPF25 PA++ 提亮遮瑕 粉底/遮瑕防晒隔离",
                    number:1,
                    checked:false,
                    color:"绿色",
                    name:"苏宁自营"
                },
                {
                    imgBig:require("../img/z18.jpg"),
                    imgSmall:require("../img/z19.jpg"),
                    parce:149,
                    code:11393934167,
                    title:"【改善暗沉】兰芝雪纱丝柔修颜隔离霜#No.20 柔粉 30ml SPF25 PA++防晒隔离",
                    number:1,
                    checked:false,
                    color:"柔粉",
                    name:"苏宁自营"
                }
            ],
            // 商品数据
            goodsListOne:[
                {
                name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
                img:require("../img/headset.png"),
                price:608
                
                },
                {
                name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
                img:require("../img/headset.png"),
                price:608
                },
                {
                name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
                img:require("../img/headset.png"),
                price:608
                },
                {
                name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
                img:require("../img/headset.png"),
                price:608
                },
                {
                name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
                img:require("../img/headset.png"),
                price:608
                },
                {
                name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
                img:require("../img/headset.png"),
                price:608
                },
                {
                name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
                img:require("../img/headset.png"),
                price:608
                },
                {
                name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
                img:require("../img/headset.png"),
                price:608
                },
                {
                name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
                img:require("../img/headset.png"),
                price:608
                },
            ],
            goodsListTwo:[
                {
                name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
                img:require("../img/headset.png"),
                price:608
                },
                {
                name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
                img:require("../img/headset.png"),
                price:608
                },
                {
                name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
                img:require("../img/headset.png"),
                price:608
                },
                {
                name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
                img:require("../img/headset.png"),
                price:608
                },
                {
                name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
                img:require("../img/headset.png"),
                price:608
                },
                {
                name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
                img:require("../img/headset.png"),
                price:608
                },
                {
                name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
                img:require("../img/headset.png"),
                price:608
                },
                {
                name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
                img:require("../img/headset.png"),
                price:608
                },
                {
                name:"新品Apple二代新款AirPods(配有线充电盒) 入耳式无线蓝牙耳机 MV7N2CH/A",
                img:require("../img/headset.png"),
                price:608
                },
            ]
        };
    },

    methods: {
        // 顶部返回
        returnChange(){
            this.$router.push({
                path:"/",
                query:{
                    name:"Home"
                }
            });
        },

        showPopup() {
        this.show = true;
        },
        plus(index){
            this.num++
        },
        minus(index){
            this.num--
        },
        colorTwo(){
            this.appear = false
        },
        colorOne(){
            this.appear = true
        },
        atOnec(){
            window.location.href="https://passport.suning.com/ids/login?loginTheme=neworder&service=https%3A%2F%2Faq.suning.com%2Fasc%2Fauth%3FtargetUrl%3Dhttps%253A%252F%252Fshopping.suning.com%252Fwapv2%252FnowBuy%252FquickBuy.do%253Fpagesrc%253Dhttps%25253A%25252F%25252Fm.suning.com%25252Fproduct%25252F0000000000%25252F000000011393934167.html%25253Fsafp%25253Df73ee1cf.wapindex7.113464229882.58%252526safc%25253Dprd.1.rec_25-56_25-56_352%25252COPA1%25252COPC1_sys%2525253Arec%25252Cinpo%2525253A0%25252Ccpn%2525253A0%25252Cp%2525253A14-41%25252Cuuid%2525253A817c2f40983b126d8594b65c56537189%25252Cd%2525253A1%25252Cab%2525253AH%25252Cdab%2525253A5-5_A%252526safpn%25253D10001%2526redirectFix%253Dcart2#/"
        },
        
        // 商品添加
        joinOne(index){
            this.show = false;
            Toast('添加购物车成功');
            this.$store.commit("addOne",{
                imgBig:require("../img/z16.jpg"),
                imgSmall:require("../img/z17.jpg"),
                parce:129,
                code:10597996078,
                title:"LANEIGE兰芝 雪纱丝柔隔离#绿色 30ml/瓶 SPF25 PA++ 提亮遮瑕 粉底/遮瑕防晒隔离",
                number:1+this.num,
                checked:false,
                color:"绿色",
                name:"苏宁自营"
            })
            // console.log(this.$store.state.productDetails)
        },
        joinTwo(index){
            this.show = false;
            Toast('添加购物车成功');
            this.$store.commit("addTwo",{
                imgBig:require("../img/z18.jpg"),
                    imgSmall:require("../img/z19.jpg"),
                    parce:149,
                    code:11393934167,
                    title:"【改善暗沉】兰芝雪纱丝柔修颜隔离霜#No.20 柔粉 30ml SPF25 PA++防晒隔离",
                    number:1+this.num,
                    checked:false,
                    color:"柔粉",
                    name:"苏宁自营"
            })
            console.log(this.$store.state.productDetails)
        },
        onClickIcon() {
            this.$router.push({
            path:"/shoppingCart",
            query:{
                    name:3
            }
        });
        },
        //顶部广告开关
        topImgBtn(){
            this.topImg = false
        },
        //轮播图
        onChange(index) {
            this.current = index;
        },
        // 达人种草跳转
        darenOne(){
            window.location.href="https://c.m.suning.com/bcdetail.htm?contentId=8599038258&type=tj&safp=f73ee1cf.20006.0.3ff8f84f93&safpn=10008.00020"
        },
        darenTwo(){
            window.location.href="https://c.m.suning.com/bcdetail.htm?contentId=1282908748&type=tj&safp=f73ee1cf.20006.0.7a44c92392&safpn=10008.00020"
        },
        goodsItemOne(){
            this.$router.push({
                path:"/commodityTwo",
                query:{
                    name:"commodityTwo"
                    }
            });
        },
        // 商品详情点跳转第二页
        goodsItemTwo(){
            this.$router.push({
                path:"/commodityTwo",
                query:{
                    name:"commodityTwo"
                    }
            });
        },
        // 回到最顶部
        commodityTop(){
            document.documentElement.scrollTop = 0
        },
        // numbera(){
        //     for(let i = 0 ; i<this.$store.state.productDetails.length ; i++){
        //         that.nums += this.$store.state.productDetails[i].number
        //     }
        // }
    },
    mounted() {
        let that = this
        window.addEventListener('scroll', () => {
            that.commodityScroll =  window.pageYOffset
            // console.log(that.commodityScroll);
            if(that.commodityScroll >50){
                that.topImgStyle.background = "#fff";
                that.topImgStyle.position= "fixed";
                that.topImgStyle.top= 0;
                that.topTitleStyle.color="#222222"
            }else{
                that.topImgStyle.background = "";
                that.topImgStyle.position= "";
                that.topImgStyle.top= "";
                that.topTitleStyle.color="#fff"
            }
        });
    },
}
</script>

<style scoped>
    a{
        -webkit-tap-highlight-color:transparent;
        text-decoration: none;
    }
    .commodity-page{
        width: 100%;
        background-color: #f2f2f2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .commodity-details{
        width: 100%;
        /* overflow: auto; */
    }
    .commodity-details-list{
        /* background-color: blueviolet; */
        display: flex;
        flex-direction: column;
    }
    /* 顶部栏 */
    .commodity-details-list-top-img{
        background-image: url(../img/z40.jpg);
        background-size: 100%;
        display: flex;
        width: 100%;
        align-items: center;
        padding: 16.5px 7px;
    }
    .commodity-details-list-top-img img{
        width: 5%; 
    }
    .commodity-top-navigation{
        display: flex;
        justify-content: space-between;
        padding: 15px 20px;
    }
    .commodity-top-navigation img{
        width: 6%;
    }
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 55%;
    }
    .commodity-top-navigation-title{
        font-size: 17px;
    }
    .block {
        width: 95%;
        background-color: #fff;
        display: flex;
        font-size: 16px;
        padding: 10px 10px;
        color: #222222;
        flex-direction: column;
        border-radius: 15px;
    }
    .block-title{
        padding: 10px;
    }
    .block-allbox{
        width: 100%;
        background-color: #fff;
        display: flex;
        flex-wrap: wrap;
        font-size: 12.8px;
        padding: 10px 10px;
        color: #222222;
        align-items: center;
    }
    .block img{
        width: 75%;
    }
    .block-div{
        padding: 10px 15px 20px 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;
    }
    /* 轮播图 */
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        /* line-height: 150px; */
        text-align: center;
        background-color: rgb(250, 250, 250);
    }
    .van-swipe-item img{
        width: 100%;
    }
    .custom-indicator {
        position: absolute;
        right: 5px;
        bottom: 12px;
        padding: 2px 8px;
        border-radius: 3px;
        font-size: 11px;
        background-color: rgba(34,34,34,0.5);
        color: #fff;
    }
    /* 商品介绍*/
    .commodity-details-list-super-bigbox{
        padding: 0 10px;
        background: rgb(250, 250, 250);
    }
    .commodity-details-list-price{
        color: rgb(255,68,34);
        background-color: rgb(250, 250, 250);
        padding: 5px 10px 5px;
    }
    .commodity-details-list-super{
        display: flex;
        justify-content: space-between;
        padding: 10px;
        align-items: center;
        font-size: 13.8px;
        font-weight: bold;
        background-color: #f2f2f2;
    }   
    .commodity-details-list-super-item{
        display: flex;
        align-items: center;
    }
    .commodity-details-list-super-item div{
        padding: 0 10px;
        font-size: 13.8px;
    }
    .commodity-details-list-post{
        background-color: rgb(250, 250, 250) ;
        padding: 20px 15px;
    }
    .commodity-details-list-post{
        font-size: 12px;
    }
    .commodity-details-list-post span{
        border: 1px solid #fb0;
        padding: 2px 2px;
        border-radius: 3px;
        margin-right: 6px;
    }
    .commodity-details-list-kr{
        background-color: rgb(250, 250, 250);
        display: flex;
        align-items: center ;
        font-size: 13.8px;
        padding: 12px;
    }
    .commodity-details-list-kr span{
        padding: 0 8px;
    }
    .commodity-details-list-kr img{
        width: 4.5%;
    }
    /* 商品名称 */
    .commodity-details-list-name{
        background-color: rgb(250, 250, 250);
        display: flex;
        padding: 0px 12px;
        /* align-items: center; */
        flex-grow: 1;
    }
    .commodity-details-list-name-title-one{
        color: #fff;
        background-color: #6e56e8;
        font-size: 12px;
        border-radius:3px ;
        padding: 3px;
        margin-right: 15px;
    }
    .commodity-details-list-name-title-two{
        font-size: 17px;
        font-weight: bold;
    }
    .guanzhu{
        padding: 5px 5px 0 5px;
    }
    .guanzhu img{
        width: 120%;
        flex-grow: 1;
    }
    .baokuanzhijiang{
        padding: 12px;
        background-color: rgb(250, 250, 250);
        color: #999999;
        font-size: 15px;
    }
    .baokuanzhijiang div{
        padding: 12px;
        background-color: #f2f2f2;
    }
    .commodity-by-stages{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0px 12px ;
        padding-bottom: 15px;
        background: rgb(250, 250, 250);
    }
    .commodity-by-stages-span-one{
        font-size: 13.8px;
        color: #999999;
        padding-right: 15px;
    }
    .commodity-by-stages-span-two{
        font-size: 13.8px;
    }
    .commodity-by-stages-span-three{
        color: #ff4422;
        font-size: 12.8px;
    }
    
    .commodity-by-stages-box{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .commodity-by-stages img{
        width: 20%;
    }
    .commodity-sn-international{
        background-color: rgb(250, 250, 250);
        padding: 12px;
        margin-top: 10px;
        display: flex;
        align-items:center;
        justify-content: space-between;
    }
    .commodity-sn-international-box{
        display: flex;
        align-items: center;
    }
    .commodity-sn-international-imgOne{
        width: 21%;
    }
    .commodity-sn-international-imgTwo{
        width: 4.2%;
    }
    .commodity-sn-international span{
        font-size: 13.8px;
        padding: 0px 15px;
    }
    .commodity-sn-cell{
        display: flex;
        justify-content: space-between;
        background-color: rgb(250, 250, 250);
        margin-top: 5px;
        font-size: 13.8px;
        align-items: center;
        padding: 12px;
    }
    .commodity-sn-cell-boxOne{
        display: flex;
        align-items: center;
    }
    .commodity-sn-cell-boxOne img{
        width: 8%;
    }
    .commodity-sn-cell-boxTwo{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .commodity-sn-cell-boxTwo img{
        width: 29.1%;
    }
    .commodity-sn-cell-boxTwo span{
        padding-right: 5px;
    }
    .commodity-sn-cell-juan{
        display: flex;
        align-items: center;
        padding: 5px 12px;
        background: rgb(250, 250, 250);
    }
    .commodity-sn-cell-juan span{
        font-size: 13.8px;
        color: #999999;
        padding-right: 10px;
    }
    .commodity-sn-cell-cuxiao{
        display: flex;
        padding: 5px 12px;
        background-color: rgb(250, 250, 250);
    }
    .commodity-sn-cell-cuxiao-boxOne{
        color: #999999;
        font-size: 13.8px;
        padding-right: 12px;
    }
    .commodity-sn-cell-cuxiao-boxTwo div{
        padding-bottom: 7px ;
    }
    .commodity-sn-cell-cuxiao-spanOne{
        font-size: 12px;
        border: 1px solid #fb0;
        padding: 2px 7px;
        border-radius: 3px;
    }
    .commodity-sn-cell-cuxiao-spanTwo{
        font-size: 13.8px;
        padding-left: 7px;
    }
    .commodity-sn-cell-guajuan{
        justify-content: space-between;
        align-items: center;
        display: flex;
        padding: 0 12px;
        background: rgb(250, 250, 250);
    }
    .commodity-sn-cell-guajuan-item{
        display: flex;
    }
    .commodity-sn-cell-guajuan-item span{
        font-size: 13.8px;
        display: flex;
        align-items: center;
        padding-left: 5px;
    }
    .commodity-sn-cell-guajuan-item div{
        color: #999999;
        font-size: 13.8px;
        padding-right: 10px;
        display: flex;
        align-items: center;
    }
    .commodity-sn-cell-guajuan-item-img{
        width: 4.3%;
    }
    .commodity-sn-select{
        margin-top: 7px;
        display: flex;
        padding: 20px 12px;
        background-color: rgb(250, 250, 250);
        justify-content: space-between;
        align-items: center;
    }
    .commodity-sn-select-box{
        display: flex;
    }
    .commodity-sn-select-box div{
        color: #999999;
        font-size: 13.8px;
        padding-right: 10px;
    }
    .commodity-sn-select span{
        font-size: 13.8px;
        padding: 0 3px;
        font-weight: bold;
    }
    .commodity-sn-select img{
        width: 4.2%;
    }
    .commodity-sn-address{
        display: flex;
        justify-content: space-between;
        padding: 5px 12px;
        background: rgb(250, 250, 250);
    }
    .commodity-sn-address-list{
        display: flex;
    }
    .commodity-sn-address-list-songzhi{
        color: #999999;
        font-size: 13.8px;
        padding-right: 10px;
    }   
    .commodity-sn-address-list-item img{
        width: 3.5%;
    }
    .commodity-sn-address-list-spanOne{
        font-size: 13.8px;
    }
    .commodity-sn-address-list-spanTwo{
        padding-left: 10px;
        font-size: 12.8px;
    }
    .commodity-sn-address-list-img{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .commodity-sn-address-list-img img{
        width: 54%;
    }
    .commodity-sn-ship{
        display: flex;
        align-items: center;
        padding: 15px 12px;
        background-color: rgb(250, 250, 250);
        font-size: 13.8px;
    }
    .commodity-sn-ship div{
        color: #999999;
        padding-right: 15px;
    }
    .commodity-sn-service{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        background: rgb(250, 250, 250);
        padding: 10px 12px;
    }
    .commodity-sn-service-title{
        color: #999999;
        font-size: 13.8px;
    }
    .commodity-sn-service-list{
        display: flex;
        flex-direction: column;
        font-size:12.8px;
    }
    .commodity-sn-service-list-item{
        display: flex;
        padding-bottom: 5px;
    }
    .commodity-sn-service-list-item div{
        display: flex;
        padding-right: 5px;
        flex-shrink: 0;
    }
    .commodity-sn-service-list-item img{
        width: 15%;
        flex-shrink: 0;
    }
    .commodity-sn-service-list-item div span{
        padding-left: 3px;
    }
    .commodity-sn-service-right{
        display: flex;
        justify-content: flex-end;
        align-items:flex-start
    }
    .commodity-sn-service-right img{
        width: 55%;
    }
    /* 达人种草集 */
    .commodity-sn-daren{
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        padding: 15px 12px;
        background: rgb(250, 250, 250);
    }
    .commodity-sn-daren-title{
        font-size: 14px;
    }
    .commodity-sn-daren-list{
        display: flex;
        padding-top: 10px;
    }
    .commodity-sn-daren-item{
        display: flex;
        flex-direction: column;
        width: 37%;
        margin-right: 5px;
    }
    .commodity-sn-daren-item p{
        color: #666;
        font-size: 12px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .commodity-sn-daren-name{
        display: flex;
        padding: 10px 5px;
    }
    .commodity-sn-daren-name img{
        width: 14%;
        border-radius: 50%;
    }
    .commodity-sn-daren-name span{
        font-size: 12px;
        padding-left: 5px;
    }
    /* 评论 */
    .commodity-sn-comment{
        display: flex;
        flex-direction: column;
        padding: 15px 12px;
        margin-top: 8px;
        background: rgb(250, 250, 250);
    }
    .commodity-sn-comment-pjnum{
        display: flex;
        justify-content: space-between;
        align-items:center;
    }
    .commodity-sn-comment-pjnum-num{
        font-size: 14.9px;
        font-weight: bold   ;
    }
    .commodity-sn-comment-pjnum-item{
        display: flex;
        align-items:center;
        justify-content: flex-end;
    }
    .commodity-sn-comment-pjnum-item div{
        color: #999;
        font-size: 12.8px;
        padding-right: 5px;
    }
    .commodity-sn-comment-pjnum-item img{
        width: 17.2%;
    }
    .commodity-sn-comment-content-list{
        display: flex;
        justify-content: space-between;
        padding: 15px 0px 10px 0px;
    }
    .commodity-sn-comment-content-list div{
        display: flex;
        align-items: center;
    }
    .commodity-sn-comment-content-list span{
        font-size: 12.8px;
        padding: 0 8px;
    }
    .commodity-sn-comment-content-imgOne{
        width: 13.5%;
        border-radius: 50%;
    }
    .commodity-sn-comment-content-imgTwo{
        width: 28%;
        height: 51%;
    }
    .commodity-sn-comment-content-right{
        justify-content:flex-end;
    }
    .commodity-sn-comment-content-imgThree{
        width: 52.5%;
    }
    .commodity-sn-comment-context p{
        font-size: 14.9px;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
    }
    .commodity-sn-comment-imgs{
        display: flex;
        padding-top: 10px;
        border-radius: 3px;
    }
    .commodity-sn-comment-imgs img{
        width: 25%;
    }
    .all-comment{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 0px 0px 0px;
    }
    .all-comment a{
        font-size: 13.8px;
        color: #222222;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 5px 20px;
    }
    /* 问答 */
    .commodity-sn-QA{
        display: flex;
        padding: 10px 12px;
        align-items: center;
        justify-content: space-between;
        margin-top: 5px ;
        background: rgb(250, 250, 250);
    }
    .commodity-sn-QA div{
        font-size: 14.9px;
    }
    .commodity-sn-QA a{
        color: #999;
        font-size: 12.8px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }
    .commodity-sn-QA span{
        padding-right: 10px ;
    }
    .commodity-sn-QA img{
        width: 15%;
    }
    .commodity-sn-QA-list{
        display: flex;
        background: rgb(250, 250, 250);
        justify-content: space-between;
        align-items: center;
        padding: 10px 12px;
    }
    .commodity-sn-QA-list-one{
        background: #fad222;
        padding: 2px;
        border-radius: 3px;
        font-size: 12px;
    }
    .commodity-sn-QA-list-two{
        font-size: 12.8px;
        padding: 2px 0px 2px 15px;
    }
    .commodity-sn-QA-list-three{
        font-size: 12.8px;
        color: #999;
    }
    .commodity-sn-tips{
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
        padding: 15px 12px;
        background: rgb(250, 250, 250);
        align-items: center;
    }
    .commodity-sn-tips-title{
        font-size: 14.9px;
        font-weight: bold;
    }
    .commodity-sn-tips-list{
        display: flex;
        justify-content: flex-end;
        align-items: center;
        font-size: 12.8px;
        color: #999;
    }
    .commodity-sn-tips-list div{
        padding-right: 10px;
    }
    .commodity-sn-tips-list img{
        width: 18%;
    }
    .commodity-sn-tips-text{
        padding: 5px 12px;
        font-size: 13.8px;
        color: #222222;
        background: rgb(250, 250, 250);
    }
    .commodity-sn-shoping{
        margin-top: 8px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 12px;
        background: rgb(250, 250, 250);
    }
    .commodity-sn-shoping img{
        border-radius: 5px;
        width: 17%;
    }
    .commodity-sn-shoping span{
        font-size: 14.9px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        font-weight: bold;
    }
    .commodity-sn-shoping a{
        background: #6e56e8;
        color: #fff;
        font-size: 14.9px;
        padding: 5px 15px;
        border-radius: 5px;
    }
    .commodity-sn-shop-international{
        padding: 10px 12px;
        background: rgb(250, 250, 250);
        margin-top: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .commodity-sn-shop-international img{
        width: 63%;
    }
    .commodity-sn-shop-international a{
        color: #fff;
        background: #6e56e8;
        border-radius: 15px;
        padding: 5px 20px;
        font-size: 13.8px;
    }
    /* 商品详情切换 */
    .commodity-sn-tab-one img{
        width: 100%;
    }
    .commodity-sn-tab-one span{
        font-size: 14px;
        color: #222222;
        padding: 10px 12px;
        background: rgb(250, 250, 250);
    }
    .commodity-sn-tab-two{
        background-color: rgb(250, 250, 250);
        padding-top: 10px;
    }
    .commodity-sn-tab-one p{
        color: #909090;
        font-size: 14px;
        padding: 10px 10px;
        background: rgb(250, 250, 250);
    }
    .commodity-sn-look{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .commodity-sn-duang{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    /* 底部 */
    .commodity-bottom{
        flex-shrink: 0;
        display: flex;
        padding: 0px 5px;
    }
    .commodity-bottom-left{
        width: 45%;
        display: flex;
    }
    .commodity-bottom-left img{
        width: 30%;
    }
    .commodity-bottom-right{
        width: 55%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 1;
    }
    .commodity-bottom-right-one{
        background-color: #fc0;
        color: #000000;
        font-size: 14px;
        padding: 10px 13px;
        margin-right: 2px;
        width: 50%;
        flex-shrink: 1;
        text-align: center;
        border-top-left-radius:5px ;
        border-bottom-left-radius:5px ;
    }
    .commodity-bottom-right-two{
        background-color: #f60;
        font-size: 14px;
        width: 50%;
        color: #fff;
        padding: 10px 13px;
        margin-left: 2px;
        text-align: center;
        border-top-right-radius:5px ;
        border-bottom-right-radius:5px ;
    }
    .van-goods-action-list{
        display: flex;
        justify-content: space-around;
        padding: 5px 10px;
    }
    .van-goods-action-box{
        display: flex;
        justify-content: center;
        align-items: center ;
        width: 100%;
    }
    /* 看了又看 */
    .z-moddle-goods-list-all{
        width: 100%;
        display: flex;
        background-color: rgb(250, 250, 250);
    }
    .z-moddle-goods-list-one{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        overflow: auto;
        padding: 0 5px 10px 10px;
    }
    .z-moddle-goods-list-two{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        padding: 0 10px 10px 5px;
    }
    .z-moddle-goods-list-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        flex-shrink: 0;
        background-color: #fff;
        margin-top: 10px;
    }

    .z-moddle-goods-img{
        width: 90%;
        height: 90%;
        flex-shrink: 0;
    }
    .z-goods-content{
      font-size: 12px;
      padding: 5px 10px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      height: 40px;
      font-weight: bold;
    }
    .z-goods-price-item{
      width: 100%;
      padding: 10px 10px 10px 10px;
    }
    .z-goods-icon{
      font-size: 0.7em;
      font-weight: bold;
      color: #ff4422;
    }
    .z-goods-price{
      font-size: 0.9em;
      font-weight: bold;
      color: #ff4422;
    }
    .z-goods-evaluate{
      font-size: 0.6em;
      color: #999999;
      margin-left: 10px;
    }
    .shop-box{
      width: 100%;
      padding: 10px 140px 10px 8px;
    }
    .shop{
      font-size: 12px;
      background-color: #ffcc00;
      font-weight: bold;
      border-radius:3px ;
      padding: 1px 5px;
    }
    .lowestLevel{
      width: 100%;
    }
    .lowestLevelAdv img{
      width: 100%;
    }
    /* 加入购物车弹出框 */
    /* 上半部分 */
    .commodity-bottom-right-top-list{
        display: flex;
        padding-bottom: 8px;
        border-bottom: 1px solid rgb(250, 250, 250);
        
    }
    /* 大图片 */
    .commodity-bottom-right-imgBig{
        border: 1px solid rgb(250, 250, 250);
        width: 68%;
        border-radius: 8px;
        margin-top: 10px;
        margin-left: 10px;
        padding: 5px 5px;
    }
    .commodity-bottom-right-imgBig img{
        width: 100%;
    }
    /* 价格 */
    .commodity-bottom-right-top-middle-list{
        margin-top: 55px;
        margin-left: 15px;
        padding: 0px 15px;
    }
    .commodity-bottom-right-top-middle-parce{
        color: #ff4422;
        font-size: 17px;
        padding-bottom: 10px;
    }
    .commodity-bottom-right-top-middle-code{
        color: #999999;
        font-size: 12px;
        padding-bottom: 5px;
    }
    .commodity-bottom-right-top-middle-title{
        font-size: 13.8px;
        color: #222222;
    }
    /* 中间 */
    .commodity-bottom-right-middle-list{
        padding: 10px 15px;
    }
    .commodity-bottom-right-middle-list p{
        color: #222222;
        font-size: 13.86px;
    }
    .commodity-bottom-right-middle-list-content{
        display: flex;
        margin-top: 10px;
    }
    .commodity-bottom-right-middle-list-content div{
        display: flex;
        align-items: center;
        padding: 5px 5px;
        justify-content: center;
        border-radius: 6px ;
    }
    .commodity-bottom-right-middle-list-content-one{
        background: #ffeda2;
        border: 1px #fc0 solid;
    }
    .commodity-bottom-right-middle-list-content-two{
        margin-left: 10px;
        background-color: rgb(250, 250, 250);
    }
    .commodity-bottom-right-middle-list-content-one-else{
        background-color: rgb(250, 250, 250);
    }
    .commodity-bottom-right-middle-list-content-two-else{
        margin-left: 10px;
        background: #ffeda2;
        border: 1px #fc0 solid;
    }
    .commodity-bottom-right-middle-list-content img{
        margin-right: 5px;
        width: 29%;
    }
    .commodity-bottom-right-middle-list-content span{
        font-size: 14px;
        color: #222222;
        margin-left: 5px;
    }
    /* 数量加减 */
    .commodity-bottom-right-bottom-list{
        display: flex;
        justify-content: space-between;
        padding: 10px 18px 200px;
        align-items: center;
    }
    .commodity-bottom-right-bottom-list-title{
        font-size: 13.8px;
        font-size: #222222;
    }
    .commodity-page .van-stepper--round .van-stepper__plus{
        background-color: rgb(250, 250, 250);
    }
    .commodity-bottom-right-bottom-list-btn{
        border: 1px solid rgb(221, 221, 221);
        padding: 5px 8px;
        border-radius:20px ;
    }
    .commodity-bottom-right-bottom-item{
        display: flex;
        justify-content: center;
    }
    .commodity-bottom-right-bottom-item-one{
        font-size: 15px;
        color: #000000;
        background: #fc0;
        width: 50%;
        padding: 8px 0px;
        text-align: center;
        margin-left: 10px;
        margin-right: 2px;
        border-top-left-radius:5px ;
        border-bottom-left-radius:5px ;
    }
    .commodity-bottom-right-bottom-item-two{
        font-size: 15px;
        color: #fff;
        background: #f60;
        width: 50%;
        text-align: center;
        padding: 8px 0px;
        margin-left: 2px;
        margin-right: 10px;
        border-top-right-radius:5px ;
        border-bottom-right-radius:5px ;
    }
    /* 问卷 */
    .questionnaire{
        position: fixed;
        width: 10.5%;
        top: 400px;
        right: 12px;
    }
    .questionnaire img{
        width: 100%;
    }
    .commodity-top{
        position: fixed;
        top: 450px;
        right: 12px;
        width: 10.5%;
    }
    .commodity-top img{
        width: 100%;
    }
    .commodity-top-botton-adv{
        position: fixed;
        width: 13.5%;
        top: 510px;
        right: 12px;
    }
    .commodity-top-botton-adv img{
        width:100%
    }
</style>
    