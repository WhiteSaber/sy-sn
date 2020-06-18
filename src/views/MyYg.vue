<template>
    <div id="c-app">
        <!-- 头部 -->
        <div class="c-app-head">
            <div class="c-head-title">
              <a href="#">联系客服</a>
              <div></div>
              <a href="#">企业注册</a>
            </div>  
        </div>
        <!-- 内容 -->
        <div class="c-app-content">
            <!-- 内容 - 上段 -->
            <div class="c-content-one">
                <img src="../img/c-login-icon.png" alt="#" class="c-content-icon">
                <span class="c-content-title">欢迎登录苏宁易购</span>
            </div>
            <!-- 内容 - 中段 -->
            <div class="c-content-two">
                <label for="c-input-name"></label>
                <input type="text" id="c-input-name" class="c-content-input-name" placeholder="请输入手机号/用户名/邮箱" >
                <i><img src="../img/c-cha1.png" alt="#" class="c-content-two-icon1"></i>
                <label for="c-input-pwd"></label>
                <input type="password" id="c-input-pwd" class="c-content-input-pwd" placeholder="请输入密码" >
                <i><img src="../img/c-cha1.png" alt="#" class="c-content-two-icon2"></i>
                <i><img src="../img/c-close.png" alt="#" class="c-content-two-eye"></i>
                <a href="#" >忘记密码</a>
            </div>
            <!-- 内容 - 下段 -->
            <div class="c-content-three">
                <button class="c-content-but">登录</button>
                <a href="#">验证码登录</a>
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
                    <img src="../img/c-icon_qq.png" alt="">
                    <img src="../img/c-icon_epp.png" alt="">
                    <img src="../img/c-icon_k.png" alt="">
                </div>
            </div>
            <!-- 底部 - 下 -->
            <div class="c-footer-buttom">
                <p class="c-footer-buttom-p">我同意<a href="">《苏宁易购会员章程》</a> <a href="">《易付宝协议》</a></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

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
        font-size: 12px;
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
        font-size: 17.28px;
    }
    /* 内容 - 中段 */
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
        right: 35px;
        bottom: 409px;
        font-size: 12px;
        display: none;
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
        position: relative;
    }
    .c-content-input-pwd::-webkit-input-placeholder{
        color:#999;
    }
    .c-content-two > a{
        position: absolute;
        right: 35px;
        bottom: 357px;
        font-size: 12px;
        text-decoration:none;
        color: #333333;
    }
    .c-content-two-eye{
        position: absolute;
        right: 90px;
        bottom: 353px;
    }
    .c-content-two-icon2{
        position: absolute;
        right: 117px;
        bottom: 354px;
        display: none;
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
    .c-content-three > a{
        display: inline-block;
        margin-top: 20.16px;
        text-decoration:none;
        font-size: 14.4px;
        color: #333;
    }
    /* 底部 */
    .c-app-footer{
        margin-top: 100px;
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
    .c-footer-content > div > img{
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