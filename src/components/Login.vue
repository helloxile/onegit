<template>
  <div class="login">
    <mt-header title="登录">
        <router-link to="/" slot="left">
            <mt-button icon="back">首页</mt-button>
        </router-link>
    </mt-header>
    <div class="login-box">
        <h1>Login</h1>
        <form action="">
            <div class="textbox">
                <input type="text" placeholder="Username" name="" value="">
            </div>
            <div class="textbox">
                <input type="password" placeholder="Password" name="" value="">
            </div>
            <input class="btn" type="submit" name="" value="登录">
            <span>没有账号？<router-link to="/reg">立即注册</router-link></span>
        </form>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui'
import { Field } from 'vant'

Vue.use(Field)
Vue.component(Header.name, Header)

export default {
  name: 'login',
  data () {
    return {
        
    }
  },

}
</script>

<style scoped>
.login-box{
    width: 280px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: black;
}
.login-box h1{
    float: left;
    font-size: 40px;
    border-bottom: 6px solid #4caf50;
    margin-bottom: 50px;
    padding: 13px 0;
}
.textbox{
    width: 100%;
    overflow: hidden;
    font-size: 20px;
    padding: 8px 0;
    margin: 8px 0;
    border-bottom: 1px solid #4caf50;
}
.textbox i{
    width: 26px;
    float: left;
    text-align: center;
}
.textbox input{
    border: none;
    outline:none;
    background: none;
    color: black;
    font-size: 18px;
    width: 80%;
    float: left;
    margin: 0 10px;

}
.btn{
    width: 100%;
    background: #26a2ff;
    color: white;
    padding: 5px;
    font-size: 18px;
    cursor:pointer;
    margin: 12px 0;
}
.login-box a{
    color: #26a2ff;
}
</style>