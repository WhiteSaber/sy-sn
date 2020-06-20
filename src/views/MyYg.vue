<template>
    
    <div id="c-app">
        <!-- 头部 -->
        <div class="c-app-head">
            <div class="c-head-title">
              <a href="https://talk8.suning.com/yunxin-web/wap/index.html?productPosition=SNYG&businessCode=snzy&terminalType=3&pageSource=37&enterCode=01&appCode=SNYGG&custNo=22995f0cbe4474b3&chatModel=guest&channelId=486744">联系客服</a>
              <div></div>
              <a href="">企业注册</a>
            </div>  
        </div>
        <!-- 内容 -->
        <div class="c-app-content">
            <!-- 内容 - 上段 -->
            <div class="c-content-one">
                <img src="../img/c-login-icon.png" alt="#" class="c-content-icon">
                <span class="c-content-title">欢迎登录苏宁易购</span>
            </div>
            <!-- 账号密码登录版 -->
            <div v-if="flag=='true'">
                <!-- 内容 - 中段 -->
                <div class="c-content-two">
                    <label for="c-input-name"></label>
                    <input type="text" id="c-input-name" class="c-content-input-name" placeholder="请输入手机号/用户名/邮箱" >
                    <img src="../img/c-cha1.png" alt="#" class="c-content-two-icon1">
                    <label for="c-input-pwd"></label>
                    <input type="password" id="c-input-pwd" class="c-content-input-pwd" placeholder="请输入密码" >
                    <img src="../img/c-cha1.png" alt="#" class="c-content-two-icon2" >
                    <img src="../img/c-close.png" alt="#" class="c-content-two-eye">
                    <a href="#" >忘记密码</a>
                </div>
                <!-- 内容 - 下段 -->
                <div class="c-content-three">
                    <button class="c-content-but" @click="login">登录</button>
                    <p @click="CSignIn">验证码登录</p>
                </div>
            </div>
            <!-- 验证码登录版 -->
            <div v-else>
                <!-- 内容 - 中段 -->
                <div class="c-content-two" >
                    <label for="c-input-name"></label>
                    <input type="text" id="c-input-name" class="c-content-input-name" placeholder="请输入手机号" >
                    <img src="../img/c-cha1.png" alt="#" class="c-content-two-icon3">
                    <div>
                        <label for="c-input-pwd"></label>
                        <input type="password" id="c-input-pwd" class="c-content-input-pwd2" placeholder="请输入密码" >
                        <a href="#"  class="c-but"><p>获取验证码</p></a>
                    </div>
                    <div class="c-prompt">未注册的手机号验证后自动注册</div>
                </div>
                <!-- 内容 - 下段 -->
                <div class="c-content-three">
                    <button class="c-content-but" @click="login">登录</button>
                    <p @click="CSignIns">账号密码登录</p>
                </div>
            </div>  
        </div>
        <!-- 底部 -->
        <div class="c-app-footer">
            <!-- 底部 - 上 -->
            <div class="c-footer-top">
                <div class="c-footer-div"></div>
                <p class="c-footer-p">
                    其他登录方式
                </p>
                <div class="c-footer-div"></div>
            </div>
            <!-- 底部 - 中 -->
            <div class="c-footer-content">
                <div>
                    <a href="https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=716027609&pt_3rd_aid=101224012&daid=383&pt_skey_valid=0&style=35&s_url=http%3A%2F%2Fconnect.qq.com&refer_cgi=authorize&which=&response_type=code&client_id=101224012&redirect_uri=https%3A%2F%2Fpassport.suning.com%2Fids%2Flogin%3Foauth_provider%3DWapQQProvider%26loginTheme%3Dwap_new%26rememberMe%3Dtrue&state=https%3A%2F%2Fmsinode.suning.com%2Fm%2Fhome.do"><img src="../img/c-icon_qq.png" alt=""></a>
                    <a href="https://paypassport.suning.com/ids/login?oauth_redirect=http%3A%2F%2Fpaypassport.suning.com%2Fids%2Foauth20%2FcallbackAuthorize%3FsnapshotId%3D0%252Asid_09C391518CAE47E875C12B1F92D125AF&loginTheme=wap"><img src="../img/c-icon_epp.png" alt=""></a>
                    <a href="https://reg.suning.com/wap/offlinecardlogin.do"><img src="../img/c-icon_k.png" alt=""></a>
                </div>
            </div>
            <!-- 底部 - 下 -->
            <div class="c-footer-buttom">
                <p class="c-footer-buttom-p">我同意<a href="https://sale.suning.com/all/regProtocol/snyghyzc.html?safp=f73ee1cf.afupz9eaab.0.b2c44844b6&safpn=10009">《苏宁易购会员章程》</a> <a href="https://sale.suning.com/all/regProtocol/yfbxy.html?safp=f73ee1cf.afupz9eaab.0.454d78943e&safpn=10009">《易付宝协议》</a></p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            flag:"false",
           
        }
    },
    methods:{
        CSignIn(){
            this.flag = "false"
        },
        CSignIns(){
            this.flag = "true"
        },
        login()
        {
            this.$router.push({
            path:"/afterlogin",
            query:{
              name:"afterlogin"
            }
      });
        }
        
    }
}
</script>

<style scoped>
    *{
        margin: 0;
        padding: 0;
    }
    #c-app{
        width: 100%;
        height: 100%;
        
    }
    /* 头部 */
    .c-app-head{
        width: 100%;
        font-size: 0.48rem;
        display: flex;
        justify-content:flex-end;
        padding: 6.24px 11.52px;
    }
    .c-head-title{
        display: flex;
    }
    .c-head-title > a{
        text-decoration:none;
        color: #222222;
    }
    .c-head-title > div{
        border-left: 1px solid rgb(230, 227, 227);
        margin: 0 5px;
    }
    /* 内容 */
    .c-app-content{
         width: 100%;
        margin-top: 26.88px;
        padding: 0 36px;
    }
    /* 内容 - 上段 */
    .c-content-one{
        display: flex;
        align-items:center;
    }
    .c-content-icon{
        width: 43.19px;
        height: 43.19px;
        margin-right: 14.4px;
    }
    .c-content-title{
        display: inline-block;
        color: #222;
        font-size: 0.72rem;
    }
    /* 内容 - 中段 */
    .c-content-two{
        position: relative;
    }
    /* 账号密码登录 */
    .c-content-input-name{
        width: 100%;
        height: 43px;
        margin-top: 29px;
        padding-left: 12px;
        font-size: 12px;
        border: none;
        outline:none;
        caret-color:#ffcc00;
        border-bottom: 1px solid rgb(129, 128, 128);
        box-shadow: 0px 0px 0px 0px;
    }
    .c-content-input-name::-webkit-input-placeholder{
        color:#999;
    }
    .c-content-two-icon1{
        position: absolute;
        right: 1px;
        bottom: 65px;
        /* display: none; */
    }
    .c-content-input-pwd{
        width: 100%;
        height: 43px;
        margin-top: 11.52px;
        padding-left: 12px;
        font-size: 12px;
        border: none;
        outline:none;
        caret-color:#ffcc00;
        border-bottom: 1px solid rgb(129, 128, 128);
        box-shadow: 0px 0px 0px 0px;
    }
    .c-content-input-pwd::-webkit-input-placeholder{
        color:#999;
    }
    .c-content-two > a{
        position: absolute;
        right: 1px;
        bottom: 13px;
        font-size: 12px;
        text-decoration:none;
        color: #333333;
    }
    .c-content-two-eye{
        position: absolute;
        right: 57px;
        bottom: 10px;
    }
    .c-content-two-icon2{
        position: absolute;
        right: 79px;
        bottom: 10px;
        /* display: none; */
    }
    /* 验证码登录 */
    .c-content-two-icon3{
        position: absolute;
        right: 1px;
        bottom: 85px;
        margin-top: 12px;
        display: inline-block;
        font-size: 12px;
        /* display: none; */
    }
    .c-content-input-pwd2{
        width: 63%;
        height: 43px;
        margin-top: 11.52px;
        padding-left: 12px;
        font-size: 12px;
        border: none;
        outline:none;
        caret-color:#ffcc00;
        border-bottom: 1px solid rgb(129, 128, 128);
        box-shadow: 0px 0px 0px 0px;
    }
    .c-content-input-pwd2::-webkit-input-placeholder{
        color:#999;
    }
    .c-but{
        position: absolute;
        right: 1px;
        bottom: 21px;
        font-size: 12px;
        width: 35%;
        height: 27%;
        border: 1px solid #cccccc;
        border-radius: 5px;
        text-decoration:none;
        color: #222222;
        font-weight: 900;
        text-align: center;
        line-height: 38px;
    }
    .c-prompt{
        font-size: 12px;
        color: #999;
        margin-top: 5px;
    }
    /* 内容 - 下段 */
    .c-content-three{
        height: 84.34px;
        margin-top: 28.8px;
        text-align: center;
    }
    .c-content-but{
        width: 100%;
        height: 43px;
        font-weight: 700;
        background-color:#ffcc00;
        border-radius: 10px;
        border: none;
        outline:none;
    }
    .c-content-three > p{
        display: inline-block;
        margin-top: 20.16px;
        text-decoration:none;
        font-size: 14.4px;
        color: #333;
    }
    /* 底部 */
    .c-app-footer{
         width: 100%;
        position: fixed;
        bottom: 25px;
        
    }
     /* 底部 - 上*/
    .c-footer-top{
        display: flex;
        justify-content:center;
        margin-bottom: 9.5px;
    }
    .c-footer-p{
        font-size: 12px;
        color: #999999
    }
    .c-footer-div{
        margin: 7px 5px 0 5px;
        width: 75px;
        border-top: 1px solid #ddd;
    }
     /* 底部 - 中*/
    .c-footer-content{
        display: flex;
        justify-content:center;
        margin-bottom: 17.5px;
        /* border: 1px solid rgb(0, 255, 34); */
    }
    .c-footer-content > div{
        width: 240px;
        display: flex;
        justify-content:space-between;
    }
    .c-footer-content > div >  a >img{
        width: 33px;
        height: 33px;
    }
    /* 底部 - 下 */
    .c-footer-buttom{
        display: flex;
        justify-content:center;
    }
    .c-footer-buttom-p{
        font-size: 12px;
        color: #999999;
    }
    .c-footer-buttom-p > a{
        text-decoration:none;
        color: #101010;
        font-weight: 900;
    }
</style>