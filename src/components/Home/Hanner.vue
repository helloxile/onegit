<template>
  <div class="hanner">
    <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
            <img src="/static/images/banner01.jpeg" alt="" class="imgs">
        </van-swipe-item>
        <van-swipe-item>
            <img src="/static/images/banner02.jpeg" alt="" class="imgs">
        </van-swipe-item>
        <van-swipe-item>
            <img src="/static/images/banner03.jpeg" alt="" class="imgs">
        </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from "vue"
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);

export default {
  name: 'hanner',
  data () {
    return {
       
    }
  }
}
</script>
    
<style scoped>
  .hanner{
    text-align: center;
    margin-top: 5px;
  }
  .imgs{
    width: 370px;
    height: 180px;
  }
</style>
