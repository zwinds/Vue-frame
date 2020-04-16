<template>
    <div id="home">
        <button @click="getData">获取数据</button>
        <ul>
            <li v-for="item in items">{{item.title}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                items:{}
            }
        },
        methods: {
            // 需要注意的问题是 this的指向
            // this不是指代vue实例 var _this = this ;  bind方式 bind(this)
            getData(){
              // 发送请求
              this.$axios.get('./api/getnewslist',{
                  params:{}
              }).then(function(response){
                console.log(response);
              })
            }
        }
    }
</script>
<style>

</style>
