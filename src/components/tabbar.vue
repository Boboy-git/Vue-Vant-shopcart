<template>
    <div>
        <van-tabbar v-model="active" active-color="red">
            <van-tabbar-item icon="home-o" to="/index">首页</van-tabbar-item>
            <van-tabbar-item icon="apps-o" to="/classfiy">分类</van-tabbar-item>
            <van-tabbar-item icon="shopping-cart-o" :info="myCount" to="/shopcart">购物车</van-tabbar-item>
            <van-tabbar-item icon="friends-o" to="/my">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
 import { mapGetters } from 'vuex'  

export default {
  name: 'Tabbar',
    data() {
    return {
      active: 0
    }
  },
  components: {

  },
  computed:{
    // 得到选购商品的数目赋值tabbar购物车的角标数字
    ...mapGetters({
      myCount:'getTotalCount'
    })
  },
  methods:{

  }
}
</script>

<style>

</style>