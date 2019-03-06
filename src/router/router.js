import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
import Classfiy from "../components/classfiy";
import Shopcart from "../components/shopcart";
import My from "../components/my";
import Index from "../components/index";


var router = new VueRouter({
    mode:"history",
    routes: [
      // 动态路径参数 以冒号开头
      { name:"classfiy",path: '/classfiy', component: Classfiy },
      { name:"my",path: '/my', component: My },
      { name:"index",path: '/', component: Index },
      { name:"shopcart",path: '/shopcart', component: Shopcart }
    ]
  })

  export default router