<template>
    <div id="c-app">
        <!-- 头部 -->
        <div class="c-app-head">
            <div class="c-head-title">
              <a href="#">联系客服</a>
              <span>|</span>
              <a href="#">企业注册</a>
            </div>  
        </div>
        <!-- 内容 -->
        <div class="c-app-content">
            <!-- 内容 - 上段 -->
            <div class="c-content-one">
                <img src="../img/c-login-icon.png" alt="#" class="c-content-icon">
                <span class="c-content-title">欢迎登陆苏宁易购</span>
            </div>
            <!-- 内容 - 中段 -->
            <div class="c-content-two">
                <label for="c-input-name"></label>
                <input type="text" id="c-input-name" class="c-content-input-name" placeholder="请输入手机号/用户名/邮箱" >
                <input type="password" id="c-input-name" class="c-content-input-pwd" placeholder="请输入密码" >
            </div>
            <!-- 内容 - 下段 -->
            <div class="c-content-three">
                <button class="c-content-but">登录</button>
                <a href="#">验证码登录</a>
            </div>
        </div>
        <!-- 底部 -->
        <div class="c-app-footer"></div>
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
    .c-head-title > a{
        text-decoration:none;
        color: #222222;
    }
    .c-head-title > span{
        display: inline-block;
        margin: 0 5px;
    }
    /* 内容 */
    .c-app-content{
        margin-top: 26.88px;
        padding: 0 36px;
        /* border: 1px solid rgb(0, 255, 34); */
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
        padding-left: 16px;
        font-size: 12px;
        border: none;
        outline:none;
        border-bottom: 1px solid rgb(129, 128, 128);
        box-shadow: 0px 0px 0px 0px;
    }
    .c-content-input-pwd{
        width: 100%;
        height: 43px;
        margin-top: 11.52px;
        padding-left: 16px;
        font-size: 12px;
        border: none;
        outline:none;
        border-bottom: 1px solid rgb(129, 128, 128);
        box-shadow: 0px 0px 0px 0px;
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
</style>