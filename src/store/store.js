import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
    state: {
        goodsList:JSON.parse(localStorage.getItem('shopcartList') || '[]')// 商品列表，刚开始为空
    },
    getters:{
        getTotalCount(state){
            let totalCount = 0
            state.goodsList.forEach(item=>{
                totalCount += item.value
            })
            return totalCount
        },
        getGoodsList(state){
            return state.goodsList
        }
    },
    mutations: {
        addGoods(state,goods){
            // oldGoods以前本地有没有商品
            const oldGoods = state.goodsList.find(item=>item.id == goods.id)
            if (oldGoods) { //找到了，之前存在过
                 oldGoods.value += goods.value
            } else { // 没找到，直接新增
                state.goodsList.push(goods)
            }
        }
    },
    actions:{

    }
  })
window.onbeforeunload = function(){
    // 保存到本地
    window.localStorage.setItem('shopcartList',JSON.stringify(store.getters.getGoodsList))
}
  export default store