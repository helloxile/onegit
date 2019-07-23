<template>
  <div class="reg">
    <mt-header title="注册">
        <router-link to="/" slot="left">
            <mt-button icon="back">首页</mt-button>
        </router-link>
    </mt-header>
  </div>
</template>

<script>
import Vue from 'vue'
import { Header } from 'mint-ui'
import { Field } from 'vant'

Vue.use(Field)
Vue.component(Header.name, Header)

export default {
  name: 'reg',
  data () {
    return {
        
    }
  },

}
</script>

<style scoped>

</style>