
<template>
<div class="shopcart">
    <!-- 头部 -->
    <van-nav-bar
        title="购物车"
        style="position:fixed;top:0;width:100%;"
        @click-left="onClickLeft"
        @click-right="onClickRight"
        /> 
    <div class="main">
        <!-- 复选框单元组使用 -->
        <van-checkbox-group v-model="result">
            <!-- 购物车商品 -->
            <van-swipe-cell :right-width="65" v-for="item in cargoods" :key="item.id">
                <van-cell-group>
                        <van-card
                            :price="item.price"
                            :desc="item.desc"  
                            :title="item.title"
                            :thumb="item.imageURL"
                            >
                            <div slot="tags">
                                <van-stepper v-model="item.value" />
                            </div>
                            <div slot="num">
                                <van-checkbox  checked-color="red"  :key="item.id" :name="item.id" ></van-checkbox>
                            </div>
                        </van-card>                   
                </van-cell-group>
                <div slot="right" class="delate" @click="del(item.id)"><p>删除</p></div>
            </van-swipe-cell>
        </van-checkbox-group>
    </div>
    <!-- 提交订单 -->
    <van-submit-bar
        :price="totalPrice"
        button-text="提交订单"
        @submit="onSubmit"
        style="bottom:50px;"
        >
        <van-checkbox v-model="Checked" style="margin-left:20px;" checked-color="red" @change="allselect">全选</van-checkbox>
    </van-submit-bar>
</div>

</template>

<script>

export default {
    name:"shopcart",
    data(){
        return {
            Checked:true,//全选框的状态
            cargoods:[],//从分类传过来的数据
            result: [],//真实起作用的
            result1: []//直接拿来全部数据
        }
    },
    created(){
        // 初始化将store里的商品信息传过来
        // 并且将所有checked的默认true
        this.cargoods = this.$store.getters.getGoodsList;
                this.cargoods.forEach(item => {
                        this.result.push(item.id)
                        this.result1.push(item.id)
                });        
    },
    computed:{
    //    计算总价
      totalPrice(){
          let price = 0;
          if(this.Checked==true){
                this.cargoods.forEach(item => {
                        price += item.value * item.price;
                });
                return price*100
          }else{
                if(this.result.length>=1){
                    this.result.forEach(item=>{
                        var that = item;
                        this.cargoods.forEach(item=>{
                            if(that==item.id){
                                price+=item.value * item.price
                            }
                        })
                    })
                    return price*100
                }else{
                    return price
                }
          }

      }
    },
    watch:{
        // 监听每个小checked数据变化
        result(newval){
                    if(newval.length==this.result1.length){
                            this.Checked=true
                        }else{
                            this.Checked=false
                        }
        }

    },
    methods:{
        // 点击提交订单要触发的事件
        onSubmit(){
            
        },
        // 全选域不选
        allselect(){
            if(this.Checked==true){
                this.result=this.result1  
            }else{
                if(this.result>=1){
                    this.result=this.result
                }else{
                    this.result=[]
                }
            }
        },
        // 标题左右就事件
        onClickLeft() {
        
        },
        onClickRight() {
        
        },
        // 删除事件
        del(Id){
            this.$store.getters.getGoodsList.forEach((item,index)=>{
                if(Id==item.id){
                   this.$store.getters.getGoodsList.splice(index,1) 
                }
            })
                
        }
    },
    components:{

    }
}
</script>

<style scoped>
.main{
    margin-top:46px;
    width: 100%;
}
/* 每件商品的删除按钮 */
.delate{
    background-color: red;
    color: #fff;
    height: 100%;
    width: 65px;
    display: flex;
    align-items: center
}
.delate p{
    width: 100%;
    text-align: center;
}
</style>
