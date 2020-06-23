import Vue from 'vue'
import Vuex from 'vuex'
// import { cosh } from 'core-js/fn/number'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 商品列表
    productDetails:[],

    // 账号密码
    loginData:
    [
      {
        phone:"123",
        code:"456"
      }
    ],
    loginBool:false
  },
  mutations: {
    // // 商品添加
    addOne(state,item){
      let index = -1;
      for(let i = 0; i <state.productDetails.length; i++){
        if(item.code == state.productDetails[i].code){
          index = i
        }
      }
      if(index >-1){
        state.productDetails[index].number = state.productDetails[index].number+item.number
      }else{
        state.productDetails.push({
          imgBig:item.imgBig,
          price:item.parce,
          code:item.code,
          title:item.title,
          number:item.number,
          checked:item.checked,
          color:item.color,
          name:item.name
        })
      }
    },
    addTwo(state,item){
      let index = -1;
      for(let i = 0; i <state.productDetails.length; i++){
        if(item.code == state.productDetails[i].code){
          index = i
        }
      }
      if(index >-1){
        state.productDetails[index].number = state.productDetails[index].number+item.number
      }else{
        state.productDetails.push({
          imgBig:item.imgBig,
          price:item.parce,
          code:item.code,
          title:item.title,
          number:item.number,
          checked:item.checked,
          color:item.color,
          name:item.name
        })
      }
    },


    changeLogin(state)
    {
      state.loginBool=!state.loginBool;
    }
  },

  actions: {
  },
  modules: {
  }
})
