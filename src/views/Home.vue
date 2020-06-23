<template>
  <div class="z-home">
    <!-- 顶部栏有消失和出现,开始是消失的 -->
    <div class="z-top-bar" v-if="scroll > 900">
      <img src="../img/sort.png" alt="" @click="topBarImg">
      <div class="z-top-bar-item" @click="ZhomeSearch">
          <img src="../img/search.png" alt="">
          <div>爆款好货5折开抢</div>
      </div>
      <img src="../img/login.png" alt="" @click="topSignIn">
    </div>
    
    <!-- 中部 -->
    <div class="z-middle-bar" id="zyr-middle-bar">
      <!-- 中部的顶部搜索栏 -->
      <div class="z-moddle-bar-list">
        <div class="z-moddle-bar-list-bigBox">
          <div class="z-middle-bar-list-item">
            <img src="../img/sort.png" alt="" @click="topBarImg">
            <img src="../img/159237517720211281.gif" alt="" class="z-middle-bar-list-item-img-two">
            <img src="../img/login.png" alt="" @click="topSignIn">
          </div>
          <div class="z-middle-bar-list-item-one" @click="ZhomeSearch">
            <img src="../img/search.png" alt="">
            <div>爆款好货5折开抢</div>
          </div>
        </div>
      </div>
      <!-- 中部轮播图 -->
      <div class="z-middle-bar-bar-Carousel">
        <swiper ref="mySwiper" :options="swiperOptions" class="z-middle-bar-bar-Carousel-list">
          <swiper-slide class="z-middle-bar-bar-Carousel-item" v-for="(item,index) in swiperList" :key="index">
            <img :src="item.img" alt="">
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination">
          </div>
        </swiper>
      </div>
      <!-- 百亿补贴广告 -->
      <div class="z-middle-bar-bar-adv-red">
        <a href="https://cuxiao.m.suning.com/scms/bybthccopy13.html?adTypeCode=1137&adId=https%3A%2F%2Flib.suning.com%2Fweex%2Fbybthccopy13.js%3FpageCode%3Dbybthccopy13&safp=f73ee1cf.wapindex7.113458729906.2&safpn=10001"><img src="../img/z-advRed-one.png" alt=""></a>
        <a href="https://cuxiao.m.suning.com/scms/bybthccopy13.html?adTypeCode=1137&adId=https%3A%2F%2Flib.suning.com%2Fweex%2Fbybthccopy13.js%3FpageCode%3Dbybthccopy13&safp=f73ee1cf.wapindex7.113458729906.2&safpn=10001"><img src="../img/z-advRed-two.png" alt=""></a>
        <a href="https://cuxiao.m.suning.com/scms/bybthccopy13.html?adTypeCode=1137&adId=https%3A%2F%2Flib.suning.com%2Fweex%2Fbybthccopy13.js%3FpageCode%3Dbybthccopy13&safp=f73ee1cf.wapindex7.113458729906.2&safpn=10001"><img src="../img/z-advRed-three.png" alt=""></a>
      </div>
      <!-- 分类跳转部分 -->
      <div class="z-middle-bar-sort">
        <a :href="item.href" v-for="item in sortList" :key="item.title">
          <img :src="item.img" alt="">
          <div>{{item.title}}</div>
        </a>
      </div>
      <!-- 新人礼包广告 -->
      <div class="z-middle-bar-adv-people">
        <a href="https://c.m.suning.com/channelwap.htm?appid=1&packnversion=351&channelcode=17735&wap_source=199%E6%96%B0%E4%BA%BA%E7%A4%BC%E5%8C%85%E5%85%A8%E5%93%81%E7%B1%BB%E5%88%B8WAP2020&wap_medium=17735&wap_content=&wap_term=&wap_campaign=&downflag=0" class="z-middle-bar-adv-people-one"><img src="../img/ZNewPeople.png" alt=""></a>
        <a href="https://cuxiao.m.suning.com/scms/syxrl.html?safp=f73ee1cf.wapindex7.123114234597.2&safpn=10001" class="z-middle-bar-adv-people-two">
            <img src="../img/ZGift.gif" alt="">
        </a>
        <a href="https://cuxiao.m.suning.com/scms/syxrl.html?safp=f73ee1cf.wapindex7.123114234597.2&safpn=10001" class="z-middle-bar-adv-people-two">
          <img src="../img/Zgifts.gif" alt="">
        </a>
      </div>
      <!-- 苏宁秒杀 -->
      <div class="z-middle-setkill">
        <div class="z-middle-setkill-item">
          <p class="z-middle-setkill-span-one">天天低价</p>
          <p class="z-middle-setkill-span-two">人气好货限时抢</p>
          <div class="z-middle-setkill-item-content">
            <div>
              <img src="../img/setkillone.jpg" alt="">
              <div>
                ￥2689
              </div>
            </div>
            <div>
              <img src="../img/setkilltwo.jpg" alt="">
              <div>
                ￥109
              </div>
            </div>
          </div>
        </div>
        <div class="z-middle-setkill-item">
          <p class="z-middle-setkill-span-one">苏宁秒杀</p>
          <p class="z-middle-setkill-span-two">品质好货天天秒</p>
          <div class="z-middle-setkill-item-content">
            <div>
              <img src="../img/setkillthree.jpg" alt="">
              <div>
                华为
              </div>
            </div>
            <div>
              <img src="../img/setkillfour.jpg" alt="">
              <div>
                雕牌
              </div>
            </div>
          </div>
        </div>
        <div class="z-middle-setkill-item">
          <p class="z-middle-setkill-span-one">百亿补贴</p>
          <p class="z-middle-setkill-span-two">全民省钱</p>
          <div class="z-middle-setkill-item-content">
            <div>
              <img src="../img/setkillfive.jpg" alt="">
              <div>
                补贴87.1
              </div>
            </div>
            <div>
              <img src="../img/setkillsix.jpg" alt="">
              <div>
                补贴价1799
              </div>
            </div>
          </div>
        </div>
        <div class="z-middle-setkill-item">
          <p class="z-middle-setkill-span-one">苏宁拼购</p>
          <p class="z-middle-setkill-span-two">2人拼更实惠 全场包邮</p>
          <div class="z-middle-setkill-item-content">
            <div>
              <img src="../img/setkillseven.jpg" alt="" style="width:61%">
              <div>
                2人拼299
              </div>
            </div>
            <div>
              <img src="../img/setkilleight.jpg" alt="" style="width:76.5%">
              <div>
                2人拼39.9
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 为您推荐 -->
      <div class="z-middle-recommend" @click="zRecommend">
        <div class="z-middle-recommend-title">
          <div>为您推荐</div>
          <p>精选频道</p>
        </div>
        <div class="z-middle-recommend-item">
          <img src="../img/zrecommendOne.jpg" alt="">
          <div>苏宁国际</div>
        </div>
        <div class="z-middle-recommend-item">
          <img src="../img/zrecommendTwo.jpg" alt="">
          <p>苏宁Outlets</p>
        </div>
        <div class="z-middle-recommend-item">
          <img src="../img/zrecommendThree.jpg" alt="">
          <div>新品首发</div>
        </div>
        <div class="z-middle-recommend-item">
          <img src="../img/zrecommendFour.jpg" alt="">
          <div>0元试用</div>
        </div>
      </div>
      <!-- 免息广告 -->
      <a href="https://cuxiao.m.suning.com/scms/24qimianxi.html?adTypeCode=1137&adId=https%3A%2F%2Flib.suning.com%2Fweex%2F24qimianxi.js%3FpageCode%3D24qimianxi&safp=f73ee1cf.wapindex7.113457329912.1&safpn=10001" class="z-middle-InterestFree">
        <img src="../img/ZInterestFree.png" alt="">
      </a>
      <!-- 免息商品列表 -->
      <div class="z-middle-InterestFree-list">
        <a href="https://cuxiao.m.suning.com/scms/m0522phoneapp.html?adTypeCode=1137&adId=https%3A%2F%2Flib.suning.com%2Fweex%2Fm0522phoneapp.js%3FpageCode%3Dm0522phoneapp&productCode=000000011264323937&shopCode=0000000000&supplierCode=0000000000&productType=1&vendorId=&productName=&handwork=&contentId=&promotionId=&pictureUrl=%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2F2jZy3Ou4CoQQCRB6fENRPg.jpg&safp=f73ee1cf.wapindex7.122836234403.2&safc=0.1.rec_16-49_16-49_none_inpo:1,cpn:6,ab:B_cateid:142746&safpn=10001">
          <div class="z-middle-InterestFree-list-one">
            <img src="../img/ZMobileCommunication.jpg" alt="">
            <p class="z-middle-InterestFree-list-p">手机通讯</p>
            <div class="z-middle-InterestFree-list-p-box">
              <p class="z-middle-InterestFree-list-p-one">享24期免息</p>
            </div>
          </div>
        </a>
        <a href="https://cuxiao.m.suning.com/scms/618zpqj.html?adTypeCode=1137&adId=https%3A%2F%2Flib.suning.com%2Fweex%2F618zpqj.js%3FpageCode%3D618zpqj&productCode=000000000104053602&shopCode=0000000000&supplierCode=0000000000&productType=1&vendorId=&productName=&handwork=&contentId=&promotionId=&pictureUrl=%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2FE8i1OXoVgUPV-unp1NdBGQ.jpg&safp=f73ee1cf.wapindex7.122836234403.4&safc=0.1.rec_16-49_16-49_none_inpo:1,cpn:9,ab:B_cateid:188703&safpn=10001">
          <div class="z-middle-InterestFree-list-two">
            <img src="../img/ZPapercleaning.jpg" alt="">
            <p class="z-middle-InterestFree-list-p">纸品清洁</p>
            <div>
              <p class="z-middle-InterestFree-list-p-two">第二件半价</p>
            </div>
          </div>
        </a>
        <a href="https://cuxiao.m.suning.com/scms/618bhbfh.html?productCode=000000000782634450&shopCode=0000000000&supplierCode=0000000000&productType=1&vendorId=&productName=&handwork=&contentId=&promotionId=&pictureUrl=%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2FnNbwZJHiFgeknhfQqwoykA.jpg&safp=f73ee1cf.wapindex7.122836234403.6&safc=0.1.rec_16-49_16-49_none_inpo:1,cpn:9,ab:B_cateid:188881&safpn=10001">
          <div class="z-middle-InterestFree-list-three">
            <img src="../img/ZFashionclothing.jpg" alt="">
            <p class="z-middle-InterestFree-list-p">时尚服饰</p>
            <div>
              <p class="z-middle-InterestFree-list-p-three">满399减200</p>
            </div>
          </div>
        </a>
        <a href="https://cuxiao.m.suning.com/scms/jwtjkh.html?adTypeCode=1137&adId=https%3A%2F%2Flib.suning.com%2Fweex%2Fjwtjkh.js%3FpageCode%3Djwtjkh&productCode=000000010086453403&shopCode=0000000000&supplierCode=0000000000&productType=7&vendorId=&productName=&handwork=&contentId=&promotionId=&pictureUrl=%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2FZw3KZ-cbHZCjCHVThXf4aw.jpg">
          <div class="z-middle-InterestFree-list-four">
            <img src="../img/ZSpecialOffer.jpg" alt="">
            <p class="z-middle-InterestFree-list-p">极物特价狂欢</p>
            <div>
              <p class="z-middle-InterestFree-list-p-four">299减180</p>
            </div>
          </div>
        </a>
        <a href="https://cuxiao.m.suning.com/scms/qc0518.html?adTypeCode=1137&adId=https%3A%2F%2Flib.suning.com%2Fweex%2Fqc0518.js%3FpageCode%3Dqc0518&productCode=000000011166411679&shopCode=0000000000&supplierCode=0000000000&productType=1&vendorId=&productName=&handwork=&contentId=&promotionId=&pictureUrl=%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2FcDtUv66SuaPrq3th9hpHoA.jpg&safp=f73ee1cf.wapindex7.122836234403.10&safc=0.1.rec_16-49_16-49_none_inpo:1,cpn:6,ab:B_cateid:188756&safpn=10001">
          <div class="z-middle-InterestFree-list-five">
            <img src="../img/Zfresh.jpg" alt="">
            <p class="z-middle-InterestFree-list-p">美味生鲜</p>
            <div>
              <p class="z-middle-InterestFree-list-p-one">满199减100</p>
            </div>
          </div>
        </a>
        <a href="https://cuxiao.m.suning.com/scms/618xbjf.html?adTypeCode=1137&adId=https%3A%2F%2Flib.suning.com%2Fweex%2F618xbjf.js%3FpageCode%3D618xbjf&productCode=000000011135210654&shopCode=0070183728&supplierCode=0070183728&productType=2&vendorId=&productName=&handwork=&contentId=&promotionId=&pictureUrl=%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2FOBhhMZobdD6MrPE6HgMtoA.jpg&safp=f73ee1cf.wapindex7.122836234403.12&safc=0.1.rec_16-49_16-49_none_inpo:1,cpn:6,ab:B_cateid:196710&safpn=10001">
          <div class="z-middle-InterestFree-list-six">
            <img src="../img/ZAutomobile.jpg" alt="">
            <p class="z-middle-InterestFree-list-p">汽车用品</p>
            <div>
              <p class="z-middle-InterestFree-list-p-two">满180减30</p>
            </div>
          </div>
        </a>
        <a href="https://cuxiao.m.suning.com/scms/zyjcxianhuo0225.html?adTypeCode=1137&adId=https%3A%2F%2Flib.suning.com%2Fweex%2Fzyjcxianhuo0225.js%3FpageCode%3Dzyjcxianhuo0225&productCode=000000010261206859&shopCode=0000000000&supplierCode=0000000000&productType=1&vendorId=&productName=&handwork=&contentId=&promotionId=&pictureUrl=%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2FTn5Je81PnT2TTUYyi24xOA.jpg&safp=f73ee1cf.wapindex7.122836234403.14&safc=0.1.rec_16-49_16-49_none_inpo:3,cpn:9,ab:B_cateid:142787&safpn=10001">
          <div class="z-middle-InterestFree-list-seven">
            <img src="../img/ZHometextiles.jpg" alt="">
            <p class="z-middle-InterestFree-list-p">鞋包家纺</p>
            <div>
              <p class="z-middle-InterestFree-list-p-three">满99减50</p>
            </div>
          </div>
        </a>
        <a href="https://cuxiao.m.suning.com/scms/snjkrhdcopy2.html?adTypeCode=1137&adId=https%3A%2F%2Flib.suning.com%2Fweex%2Fsnjkrhdcopy2.js%3FpageCode%3Dsnjkrhdcopy2&productCode=000000000178526754&shopCode=0000000000&supplierCode=0000000000&productType=1&vendorId=&productName=&handwork=&contentId=&promotionId=&pictureUrl=%2F%2Fimgservice.suning.cn%2Fuimg1%2Fb2c%2Fimage%2FGWcgil5tFO2Vv2qZv_LPyg.jpg&safp=f73ee1cf.wapindex7.122836234403.16&safc=0.1.rec_16-49_16-49_none_inpo:3,cpn:9,ab:B_cateid:188698&safpn=10001">
          <div class="z-middle-InterestFree-list-eight">
            <img src="../img/ZMakeup.jpg" alt="">
            <p class="z-middle-InterestFree-list-p">靓丽美妆</p>
            <div>
              <p class="z-middle-InterestFree-list-p-four">满199减100</p>
            </div>
          </div>
        </a>
      </div>
      <!-- 推荐榜单 -->
      <div class="z-middle-recommended-list">
        <img src="../img/sRecommdedTitle.png" alt="" class="z-middle-recommended-title">
        <div class="z-middle-recommended-list-content">
          <div class="z-middle-recommended-list-item">
            <div class="z-middle-recommended-item-img-Bigbox">
              <div class="z-middle-recommended-item-img-box">
                <img src="../img/sRecommendedItemOne.jpg" alt="" class="z-middle-recommended-item-img">
              </div>
              <span>趋势榜</span>
              <p class="z-middle-recommended-item-pOne">时尚智能手环榜</p>
              <p class="z-middle-recommended-item-pTwo">本周趋势上升49%</p>
            </div>
          </div>
          <!-- 第二个轮播图 -->
          <swiper ref="mySwiper" :options="swiperOptionsTwo" class="z-middle-recommended-list-item">
            <swiper-slide class="z-middle-recommended-item-img-Bigbo-swiper">
              <div class="z-middle-recommended-item-img-box">
                <img src="../img/z1.jpg" alt="" class="z-middle-recommended-item-img">
              </div>
              <span>人气榜</span>
              <p class="z-middle-recommended-item-pOne">人气热销手机榜</p>
              <p class="z-middle-recommended-item-pTwo">卖爆71.4万件</p>
            </swiper-slide>
            <swiper-slide class="z-middle-recommended-item-img-Bigbo-swiper">
              <div class="z-middle-recommended-item-img-box">
                <img src="../img/z0.jpg" alt="" class="z-middle-recommended-item-img">
              </div>
              <span>人气榜</span>
              <p class="z-middle-recommended-item-pOne">人气热销手机榜</p>
              <p class="z-middle-recommended-item-pTwo">卖爆71.4万件</p>
            </swiper-slide>
            <swiper-slide class="z-middle-recommended-item-img-Bigbo-swiper">
              <div class="z-middle-recommended-item-img-box">
                <img src="../img/z2.jpg" alt="" class="z-middle-recommended-item-img">
              </div>
              <span>人气榜</span>
              <p class="z-middle-recommended-item-pOne">人气热销手机榜</p>
              <p class="z-middle-recommended-item-pTwo">卖爆71.4万件</p>
            </swiper-slide>
            <div class="swiper-paginationTwo" slot="pagination"></div>
          </swiper>
          <div class="z-middle-recommended-list-item">
            <div class="z-middle-recommended-item-img-Bigbox">
              <div class="z-middle-recommended-item-img-box">
                <img src="../img/sRecommendedItemThree.jpg" alt="" class="z-middle-recommended-item-img">
              </div>
              <span>人气榜</span>
              <p class="z-middle-recommended-item-pOne">瓶装洗衣液榜</p>
              <p class="z-middle-recommended-item-pTwo">卖爆9.8万件</p>
            </div>
          </div>
        </div>
      </div>
      <!-- 最后一栏项目 -->
      <div class="z-middle-setkill">
        <div class="z-middle-setkill-item">
          <p class="z-middle-setkill-span-one">精选游泳运动绑<span>趋势榜</span></p>
          <p class="z-middle-setkill-span-two">卖爆1283件</p>
          <div class="z-middle-setkill-item-content">
            <div>
              <img src="../img/z3.jpg" alt="">
            </div>
            <div>
              <img src="../img/z4.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="z-middle-setkill-item">
          <p class="z-middle-setkill-span-one">止痒祛痱粉<span>人气榜</span></p>
          <p class="z-middle-setkill-span-two">本周趋势上升161%</p>
          <div class="z-middle-setkill-item-content">
            <div>
              <img src="../img/z5.jpg" alt="">
            </div>
            <div>
              <img src="../img/z6.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="z-middle-setkill-item">
          <p class="z-middle-setkill-span-one">宝妈推荐洗护榜<span>趋势榜</span></p>
          <p class="z-middle-setkill-span-two">本周趋势上升72%</p>
          <div class="z-middle-setkill-item-content">
            <div>
              <img src="../img/z7.jpg" alt="">
            </div>
            <div>
              <img src="../img/z8.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="z-middle-setkill-item">
          <p class="z-middle-setkill-span-one">甜蜜清凉冰激凌榜<span>人气榜</span></p>
          <p class="z-middle-setkill-span-two">卖爆2.7万件</p>
          <div class="z-middle-setkill-item-content">
            <div>
              <img src="../img/z9.jpg" alt="" style="width:61%">
            </div>
            <div>
              <img src="../img/z10.jpg" alt="" style="width:76.5%">
            </div>
          </div>
        </div>
      </div>
      <!-- 中部的猜你喜欢标题 -->
      <div class="z-moddle-bar-list-box">
        <img src="../img/z11.png" alt="">
      </div>
      <!-- 中部的商品列表部分 -->
      <div class="z-moddle-goods-list-all">
        <div class="z-moddle-goods-list-one">
          <div class="z-moddle-goods-list-item" v-for="(item,index) in goodsListOne" :key="index"  @click="goodsItemOne">
            <img :src="item.img" class="z-moddle-goods-img">
            <p class="z-goods-content">{{item.name}}</p>
            <div class="shop-box">
              <P class="shop">自营</P>
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
              <P class="shop">自营</P>
            </div>
            <div class="z-goods-price-item">
              <span class="z-goods-icon">￥</span>
              <span class="z-goods-price">{{item.price}}</span>
              <span class="z-goods-evaluate">100+评价</span>
            </div>
          </div>
        </div>
      </div>
      <!-- 底部广告 -->
      <img src="../img/z30.png" alt="" class="lowestLevel">
      <a href="https://c.m.suning.com/channelwap.htm?appid=1&packnversion=182&channelcode=40156&wap_source=%E6%98%93%E8%B4%AD%E7%AB%99%E5%86%85wap%E9%A6%96%E9%A1%B5%E9%A1%B6%E9%83%A8%E4%B8%8B%E8%BD%BD%E5%A4%B4&wap_medium=40156&wap_content=&wap_term=&wap_campaign=&downflag=1" class="lowestLevelAdv">
        <img src="../img/z29.jpg" alt="">
      </a>
      <!-- 底部登录条 -->
      <img src="../img/zSignIn.png" alt="" class="z-sign-in" @click="SignInChange" v-if="scroll < 4000 && loginBool == false">
    </div>
    <!-- 右侧固定广告和回到顶部 -->
    <a href="https://cuxiao.m.suning.com/scms/wapshouyexuanfu.html?safp=f73ee1cf.wapindex7.126116038188.1&safpn=10001">
      <img src="../img/z31.png" alt="" class="RedEnvelopes">
    </a>
    <a href="https://c.m.suning.com/channelwap.htm?appid=1&packnversion=235&channelcode=40156&wap_source=%E6%98%93%E8%B4%AD%E7%AB%99%E5%86%85wap%E9%A6%96%E9%A1%B5%E9%A1%B6%E9%83%A8%E4%B8%8B%E8%BD%BD%E5%A4%B4&wap_medium=40156&wap_content=&wap_term=&wap_campaign=&downflag=1">
      <img src="../img/z32.png" alt="" class="SNapp">
    </a>
    <img src="../img/z33.png" alt="" class="returnTopImg" @click="returnTop" v-if="scroll > 1400">
    <!-- 底部 -->
    <div class="z-bottom-bar">
        <div class="z-bottom-item" @click="itemChangeLiveHeart()" v-if="scroll<=900 && LiveHeart == 'false'">
          <img src="../img/zLive.png" alt="">
          <div style="color:#000000;font-weight:bold">猜你喜欢</div>
        </div>
        <div class="z-bottom-item" @click="itemChange(0)" v-else>
          <img src="../img/house.png" alt="">
          <div style="color:#000000;font-weight:bold">首页</div>
        </div>
        <div class="z-bottom-item" @click="itemChange(1)">
          <img src="../img/fangdajing-w.png" alt="">
          <div>分类</div>
        </div>
        <div class="z-bottom-item" @click="itemChange(2)">
          <img src="../img/qingdan-w.png" alt="">
          <div>必抢清单</div>
        </div>
        <div class="z-bottom-item" @click="itemChange(3)">
          <img src="../img/gouwuche-w.png" alt="" >
          <div>购物车</div>
        </div>
        <div class="z-bottom-item" @click="itemChange(4)">
          <img src="../img/yigou-w.png" alt="">
          <div>我的易购</div>
        </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  // 轮播图
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data(){
    return {
      loginBool: this.$store.state.loginBool,
      itemIndex:0,
      LiveHeart:"false", //猜你喜欢图标的出现和消失
      scroll: '' ,    //滚动条高度
      // 轮播图第一次
      swiperOptions: {
        loop:true,
        autoplay:true,
        pagination: {
          el: '.swiper-pagination',
        },
      },
      // 轮播图第二次
      swiperOptionsTwo: {
        // direction: 'vertical',
        loop:true,
        autoplay:true,
        pagination: {
          el: '.swiper-paginationTwo',
          type : 'custom',
        },
      },
      //第一个轮播图数据
      swiperList:[
        { 
          img:require("../img/z-swiper-one.jpg")
        },
        { 
          img:require("../img/z-swiper-two.jpg")
        },
        { 
          img:require("../img/z-swiper-three.jpg")
        },
        { 
          img:require("../img/z-swiper-four.png")
        },
        { 
          img:require("../img/z-swiper-five.png")
        },
        { 
          img:require("../img/z-swiper-six.png")
        },
        { 
          img:require("../img/z-swiper-seven.jpg")
        },
        { 
          img:require("../img/z-swiper-eight.png")
        }
      ],
      //中部分类跳转列表
      sortList:[
        {
          img:require("../img/Zseckill.png"),
          title:"天天低价",
          href:"https://c.m.suning.com/channel/newZsq.html?safp=f73ee1cf.wapindex7.113456729859.1&safpn=10001"
        },
        {
          img:require("../img/Zsupermarket.png"),
          title:"苏宁超市",
          href:"https://c.m.suning.com/newcshome.html?safp=f73ee1cf.wapindex7.113456729859.2&safpn=10001"
        },
        {
          img:require("../img/ZBuytogether.png"),
          title:"苏宁拼购",
          href:"https://c.m.suning.com/group_index.html"
        },
        {
          img:require("../img/Zphone.png"),
          title:"5G手机",
          href:"https://c.m.suning.com/phone2019.html"
        },
        {
          img:require("../img/Zelectrical.png"),
          title:"苏宁家电",
          href:"https://c.m.suning.com/snjdyq.html?safp=f73ee1cf.wapindex7.113456729859.5&safpn=10001"
        },
        {
          img:require("../img/Zfruit.png"),
          title:"免费水果",
          href:"https://c.m.suning.com/newFarm.html?safp=f73ee1cf.wapindex7.113456729859.6&safpn=10001#/"
        },
        {
          img:require("../img/Zmake.png"),
          title:"赚钱消消乐",
          href:"https://jr.m.suning.com/sfmp/"
        },
        {
          img:require("../img/ZDaySignIn.png"),
          title:"签到有礼",
          href:"https://passport.suning.com/ids/login?service=https%3A%2F%2Fsign.suning.com%2Fsign-web%2Fauth%3FtargetUrl%3Dhttps%253A%252F%252Fsign.suning.com%252Fsign-web%252Fm%252Fsign%252Fwelcome.do%253FchannelType%253D5%2526safp%253Df73ee1cf.wapindex7.113456729859.8%2526safpn%253D10001&loginTheme=wap_new&multipleActive=false"
        },
        {
          img:require("../img/ZTakedelivery.png"),
          title:"领卷中心",
          href:"https://c.m.suning.com/channel/newZsq.html?safp=f73ee1cf.wapindex7.113456729859.1&safpn=10001"
        },
        {
          img:require("../img/Zmore.png"),
          title:"更多频道",
          href:"https://c.m.suning.com/channelNSQ.html?safp=f73ee1cf.wapindex7.113456729859.10&safpn=10001"
        },
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
    }
  },
  
  // 轮播图方法
  computed: {
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
  },

  methods:{
    //滚动条滚动到一定距离出现元素
    menu() {
        this.scroll = document.getElementById("zyr-middle-bar").scrollTop
        // console.log(this.scroll)
      },
    // 回到顶部
    returnTop(){
      document.getElementById("zyr-middle-bar").scrollTop = 0
    },
    //为您推荐频道跳转
    zRecommend(){
      window.location.href="https://c.m.suning.com/channelNSQ.html?safp=f73ee1cf.wapindex7.123114334595.1&safpn=10001"
    },
    //顶部两个分类和两个登录跳转
    topBarImg(){
      this.$router.push({
        path:"/sort",
        query:{
          name:1
        }
      });
    },
    topSignIn(){
      this.$router.push({
        path:"/myYg",
        query:{
          name:4
        }
      });
    },
    //底部路由切换
    itemChangeLiveHeart(){
      this.scroll = 900
      this.LiveHeart = "true"
      document.getElementById("zyr-middle-bar").scrollTop = 900
      // console.log(this.LiveHeart)
    },
    itemChange(index){
      this.itemIndex = index;
      if(this.itemIndex == 0){
        this.scroll = 0
        document.getElementById("zyr-middle-bar").scrollTop = 0
        this.LiveHeart = "false"
      };
      if(this.itemIndex == 1){
        this.$router.push({
          path:"/sort",
          query:{
                name:index
              }
        });
      };
      if(this.itemIndex == 2){
        window.location.href='https://c.m.suning.com/channel/higoubq11.html?safp=f73ee1cf.wapindex7.113464329889.3&safpn=10001';
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
      if(this.itemIndex == 4 && this.loginBool==true){
          this.$router.push({
            path:"/afterlogin",
            query:{
                  name:"afterlogin"
                }
          });
        }
    },
    SignInChange(){
      this.$router.push({
        path:"/myYg",
        query:{
          name:4
        }
      });
    },
    // 商品详情点跳转第一页
    goodsItemOne(){
      this.$router.push({
        path:"/commodityOne",
        query:{
              name:"commodityOne"
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
    // 搜索页面跳转
    ZhomeSearch(){
       this.$router.push({
        path:"/commodityTwo",
        query:{
              name:"commodityTwo"
            }
      });
    }
  },

  mounted() {
      document.getElementById("zyr-middle-bar").addEventListener('scroll', this.menu)
    },
}
</script>
<style scoped>
    a{
      -webkit-tap-highlight-color:transparent;
      text-decoration: none;
    }
    .z-home{
      width: 100%;
      height: 100%;
      background-color: rgb(250, 250, 250);
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
      background: rgb(255,219,71);
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
    /* 中部顶部 */
    .z-moddle-bar-list-bigBox{
      width: 100%;
      height: 100%;
      background-color: rgb(255,219,71);
      padding: 8px 15px;
    }
    .z-moddle-bar-list{
      width: 100%;
      /* padding: 8px 15px; */
    }
    .z-middle-bar-list-item{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding-bottom: 10px;
      z-index: 20;
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
    /* 中部轮播图 */
    .z-middle-bar-bar-Carousel{
      background: url(../img/z-yellow.png) no-repeat ;
      background-size:cover;
      width: 100%;
      height: 20%;
      padding: 2px 13px 0px;
    }
    .z-middle-bar-bar-Carousel-list{
      width: 100%;
      height: 100%;
      border-radius: 10px;
    }
    .z-middle-bar-bar-Carousel-item{
      height: 100%;
      width: 100%;
      overflow: hidden;
      position: relative;
    }
    .z-middle-bar-bar-Carousel-item img{
      width: 100%;
      height: 137%;
      position: absolute;
      border-radius: 10px;
      top: -40%;
    }
    .swiper-container{
      --swiper-theme-color: rgba(0,0,0,0.3);
      --swiper-pagination-color:#fff;
    }
    /* 百亿补贴广告 */
    .z-middle-bar-bar-adv-red{
      width: 100%;
      display: flex;
      height: 15%;
    }
    .z-middle-bar-bar-adv-red a{
      flex-grow: 1;
      height: 100%;
      width: 33.3%;
      text-decoration: none;
    }
    .z-middle-bar-bar-adv-red img{
      flex-grow: 1;
      height: 100%;
      width: 100%;
    }
    /* 分类跳转部分 */
    .z-middle-bar-sort{
      display: flex;
      flex-wrap: wrap;
      padding-top: 10px;
    }
    .z-middle-bar-sort a{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      height: 50%;
      width: 20%;
      color: #666666;
      font-size: 12px;
      padding-top: 12px;
      
      user-select: none;
    }
    .z-middle-bar-sort img{
      height: 60%;
      width: 60%;
    }
    /* 中部新人礼包广告 */
    .z-middle-bar-adv-people{
      display: flex;
      padding: 30px 5px 10px;
    }
    .z-middle-bar-adv-people-one{
      width: 50%;
      padding-right: 2px;
    }
    .z-middle-bar-adv-people-one img{
      width: 100%;
    }
    .z-middle-bar-adv-people-two{
      width: 25%;
      padding-right: 2px;
    }
    .z-middle-bar-adv-people-two img{
      width: 100%;
    }
    /* 苏宁秒杀 */
    .z-middle-setkill{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding: 0px 17px 0px;
    }
    .z-middle-setkill-item{
      width: 50%;
      background-color: #fff;
      padding: 10px 0px 5px;
      border: 1px solid rgb(250, 250, 250);
    }
    .z-middle-setkill-span-one{
      font-size: 14px;
      font-weight: bold;
      padding-left: 13px;
    }
    .z-middle-setkill-span-two{
      font-size: 12px;
      color:#999;
      padding-top: 2px;
      padding-left: 13px;
    }
    .z-middle-setkill-item-content{
      display: flex ;
      padding-top: 5px;
    }
    .z-middle-setkill-item-content img{
      width: 68%;
    }
    .z-middle-setkill-item-content div{
      font-size: 12px;
      color: #333333;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    /* 为您推荐 */
    .z-middle-recommend{
      display: flex;
      width: 100%;
      padding: 0px 17px 5px;
      border: 1px solid rgb(250, 250, 250);
    }
    .z-middle-recommend .z-middle-recommend-item{
      width: 18.75%;
      background-color: #fff;
      padding: 5px;
    }
    .z-middle-recommend-item img{
      width: 89%;
    }
    .z-middle-recommend-item div{
      font-size: 12px;
      color: #333333
    }
    .z-middle-recommend-item p{
      font-size: 12px;
      white-space:nowrap;
      text-overflow:ellipsis;
      color: #333333;
      overflow: hidden;
    }
    .z-middle-recommend .z-middle-recommend-title{
      padding-left: 13px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 25%;
      background-color: #fff;
    }
    .z-middle-recommend-title p{
      font-size: 12px;
      color: #999999;
      width: 100%;
    }
    .z-middle-recommend-title div{
      width: 100%;
      font-size: 16px;
      color: #444444;
    }
    /* 免息广告 */
    .z-middle-InterestFree img{
      width: 100%;
    }
    /* 免息商品列表 */
    .z-middle-InterestFree-list{
      display: flex;
      width: 100%;
      flex-wrap: wrap ;
      padding: 10px 17px;
    }
    .z-middle-InterestFree-list a{
      display: block;
      width: 25%;
      padding-left: 5px;
      margin-bottom: 6px;
    }
    .z-middle-InterestFree-list-p{
      color: #fffff0;
      font-size: 13.8px;
    }
    .z-middle-InterestFree-list-two{
      width: 100%;
      background-image: url(../img/156937739813037156.png);
      background-repeat:no-repeat;
      background-size:100% 100%;;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 8px;
    }
    .z-middle-InterestFree-list-two img{
      width: 86%;
      margin-bottom: 10px;
    }
    .z-middle-InterestFree-list-p-two{
      color: #a42ae0;
      font-size: 12px;
      background-color: #fff;
      border-radius: 10px;
      padding: 1px 5px;
    }
    .z-middle-InterestFree-list-one{
      width: 100%;
      background-image: url(../img/156937734114433686.png);
      background-repeat:no-repeat;
      background-size:100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 8px;
    }
    .z-middle-InterestFree-list-one img{
      width: 86%;
      margin-bottom: 10px;
    }
    .z-middle-InterestFree-list-p-one{
      color: #e244aa;
      font-size: 12px;
      display: block;
      background-color: #fff;
      border-radius: 10px;
      padding: 1px 5px;
    }
    .z-middle-InterestFree-list-three{
      width: 100%;
      background-image: url(../img/156937745215012117.png);
      background-repeat:no-repeat;
      background-size:100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 8px;
    }
    .z-middle-InterestFree-list-three img{
      width: 86%;
      margin-bottom: 10px;
    }
    .z-middle-InterestFree-list-p-three{
      color: #fba600;
      font-size: 12px;
      background-color: #fff;
      border-radius: 10px;
      padding: 1px 5px;
    }
    .z-middle-InterestFree-list-four{
      width: 100%;
      background-image: url(../img/156937751450457739.png);
      background-repeat:no-repeat;
      background-size:100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 8px;
    }
    .z-middle-InterestFree-list-four img{
      width: 86%;
      margin-bottom: 10px;
    }
    .z-middle-InterestFree-list-p-four{
      color: #4ba093;
      font-size: 12px;
      background-color: #fff;
      border-radius: 10px;
      padding: 1px 5px;
    }
    .z-middle-InterestFree-list-five{
      width: 100%;
      background-image: url(../img/156937734114433686.png);
      background-repeat:no-repeat;
      background-size:100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 8px;
    }
    .z-middle-InterestFree-list-five img{
      width: 86%;
      margin-bottom: 10px;
    }
    .z-middle-InterestFree-list-p-five{
      color: #e244aa;
      font-size: 12px;
    }
    .z-middle-InterestFree-list-six{
      width: 100%;
      background-image: url(../img/156937739813037156.png);
      background-repeat:no-repeat;
      background-size:100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 8px;
    }
    .z-middle-InterestFree-list-six img{
      width: 86%;
      margin-bottom: 10px;
    }
    .z-middle-InterestFree-list-seven{
      width: 100%;
      background-image: url(../img/156937745215012117.png);
      background-repeat:no-repeat;
      background-size:100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 8px;
    }
    .z-middle-InterestFree-list-seven img{
      width: 86%;
      margin-bottom: 10px;
    }
    .z-middle-InterestFree-list-eight{
      width: 100%;
      background-image: url(../img/156937751450457739.png);
      background-repeat:no-repeat;
      background-size:100% 100%;
      display: flex;
      flex-direction: column;
      align-items: center;  
      padding-bottom: 8px;
    }
    .z-middle-InterestFree-list-eight img{
      width: 86%;
      margin-bottom: 10px;
    }
    /* 中部推荐榜单 */
    .z-middle-recommended-title{
      width: 100%;
      height: 50%;
    }
    .z-middle-recommended-list-content{
      display: flex;
      padding-left: 10px;
      padding-right: 10px;
    }
    .z-middle-recommended-list-item{
      flex-grow: 1;
      width: 100%;
      display: flex;
      /* flex-direction: column; */
      align-items: center;
      justify-content: center;
      padding: 2px 1px;
    }
    .z-middle-recommended-item-img-Bigbox{
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #fff;
      background-image: url(../img/sRecommendedBackgroundOne.png);
      background-repeat: no-repeat;
      background-size: 100% 35%;
      background-position:bottom;
      padding: 2px 5px 5px;
    }
    .z-middle-recommended-item-img-Bigbo-swiper{
      display: flex;
      flex-direction: column;
      align-items: center;
      background: #fff;
      background-image: url(../img/sRecommendedBackgroundTwo.png);
      background-repeat: no-repeat;
      background-size: 100% 35%;
      background-position:bottom;
      padding: 2px 5px 5px;
      width: 100%;
    }
    .z-middle-recommended-item-img-Bigbo-swiper span{
      color: #d9a87a;
      font-size: 12.4px;
      display: block;
      border: 1px solid #d9a87a;
      border-radius: 10px;
      padding: 1px 10px;
      background-color: #fff;
    }
    .z-middle-recommended-item-img-box{
      width: 100%;
      background: #fff;
      display: flex;
      justify-content: center;
      padding-top: 8px;
    }
    .z-middle-recommended-item-img{
      width: 68%;
    }
    .z-middle-recommended-item-img-Bigbox span{
      color: #d9a87a;
      font-size: 12.4px;
      display: block;
      border: 1px solid #d9a87a;
      border-radius: 10px;
      padding: 1px 10px;
      background-color: #fff;
    }
    .z-middle-recommended-item-pOne{
      font-size: 13.8px;
      color: #fff;
    }
    .z-middle-recommended-item-pTwo{
      font-size: 12px;
      color: #fff;
    }
    .z-middle-recommended-item-BigboxImg{
      width: 100%;
    }
    .z-middle-recommended-list-item-swipe{
      flex-grow: 1;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 0px 5px;
    }
    /* 猜你喜欢最后一栏商品 */
    .z-middle-setkill-item span{
      color: #ab813a;
      font-size: 12px;
      padding-left: 8px;
    }
    /* 中部的猜你喜欢页面部分 */
    .z-moddle-bar-list-box{
      padding-top: 20px;
    }
    .z-moddle-bar-list-box img{
      width: 100%;
    }

    /* 中部的商品列表部分 */
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
      padding: 10px 143px 10px 8px;
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
    /* 底部登录条 */
    .z-sign-in{
      height: 6%;
      width: 100%;
      flex-shrink: 0;
      position: fixed;
      bottom: 60px;
      left: 0;
      z-index: 90;
    }
    /* 底部 */
    .z-bottom-bar{
      flex-shrink: 0;
      display: flex;
      padding: 5px 0;
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
      display: flex;
      color: #666666;
      flex-direction: column;
      justify-content: center;
    }
    /* 右侧固定广告和回到顶部 */
    .RedEnvelopes{
      position: fixed;
      height: 7%;
      width: 13%;
      top: 450px;
      right: 5px;
    }
    .SNapp{
      position: fixed;
      height: 9.8%;
      width: 13.5%;
      top: 540px;
      right: 5px;
    }
    .returnTop{
      /* position: fixed;
      height: 5%;
      width: 10%;
      top: 630px;
      right: 5px; */
      border-radius:15px;
      padding: 10px;
    }
    .returnTopImg{
      position: fixed;
      height: 5%;
      width: 10%;
      top: 640px;
      right: 10px;
      border-radius:50%;
      background-color: #fff;
      padding: 8px;
      box-shadow: 1px 1px 10px rgba(0,0,0,0.3)
    }
</style>
