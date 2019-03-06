<template>
        <div class="classfiy">
            <van-nav-bar
            title="分类"
            style="position:fixed;top:0;width:100%;"
            @click-left="onClickLeft"
            @click-right="onClickRight"
            /> 
            <div class="c_main">
                <div class="c_left">
                    <van-badge-group :active-key="activeKey" @change="onChange">
                        <van-badge :title="item" v-for="item in biglist" :key="item.id"/>
                    </van-badge-group>
                </div>
                <div class="c_right">
                    <van-tabs v-model="active" animated>
                        <van-tab :title="item" v-for="item in smalllist" :key="item.id">
                            <!-- van-card这里也行看需求，也许有bug-->
                        </van-tab>
                    </van-tabs>
                            <van-card
                                tag="标签"
                                :price="item.price"
                                :desc="item.desc"  
                                :title="item.title"
                                :thumb="item.imageURL"
                                origin-price="10.00"
                                v-for="item in classgoods" :key="item.id"
                                >
                                <div slot="footer">
                                    <van-icon name="cart-circle-o" color="red" size="20px" @click="add2Cart(item)"/>
                                </div>
                            </van-card>
                </div>
            </div>

        </div>    

</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name:"classfiy",
      data() {
            return {
            activeKey: 0,//一级列表下的选中状态值
            active: 0,//二级列表下的选中状态
            // 一级列表数据
            biglist:["热卖","水果","零食","数码","水果","零食","数码","水果","零食","数码","水果","零食","数码"],
            // 二级列表的数据
            smalllist:["热卖1","热卖2","热卖3","热卖4","热卖5"],
            // 实际项目中交互过来的商品数据
            classgoods:[
                {id:1,price:12.01,desc:"十分好吃的坚果",title:"三只松鼠",imageURL:"https://gss2.bdstatic.com/-fo3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=4ad42080aecc7cd9fa2d33df013a4602/42a98226cffc1e176cf9b75c4790f603738de91d.jpg",value:1},
                {id:2,price:13.2,desc:"十分好吃的水果",title:"苹果",imageURL:"https://gss3.bdstatic.com/7Po3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=607b103081d6277fe912353e1003780d/5d6034a85edf8db12c69f8ef0f23dd54574e74f2.jpg",value:1}                
            ]
            };
        },

        methods: {
            ...mapMutations({
                add2Cart:'addGoods'
                }),
            //异步方法
            // ...mapActions({
            //     add2Cart:'asyncAddGoods'
            // }),

            // 一级列表状态变化
            onChange(key) {
            this.activeKey = key;
            },
            // 标题左右就事件
            onClickLeft() {
            
            },
            onClickRight() {
            
            }
        },
    components: {
          
    }
}
</script>

<style scoped>
.c_main{
    width:100%;
    margin-top:46px;
}
.c_left{
    width:20%;
    float: left;
}
.c_right{
    width: 80%;
    float:right;
}
</style>
