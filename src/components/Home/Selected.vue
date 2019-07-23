<template>
  <div class="selected">
   <h3>低价折扣</h3>
   <ul class="navBox">
       <li v-for="(im, key, index) in imgs" :key="index">
           <a href="">
               <span>{{key}}</span>
               <img :src="im">
           </a>
       </li>
   </ul>
  </div>
</template>

<script>
export default {
  name: 'selected',
  data () {
    return {
       imgs:{
        特价机票: "//fes.qyerstatic.com/FjhPw2CAsHhvxjAuUQvT0EjTfOTF?imageslim",
        机酒自由行:"//fes.qyerstatic.com/Fh9eg1ZGwLp8GHrTbKSfjwMgUqz8?imageslim",
        当地玩乐: "//fes.qyerstatic.com/FrnlnoQrQLokB6xx4mGmJhuz9eCf?imageslim",
        门票票券: "//fes.qyerstatic.com/Fv-WDaw3GtUH1_8rcId7Bny4bwYV?imageslim",
        日本高铁: "//fes.qyerstatic.com/FuFMfHPUrw-ms3echc2_SAd1EXoP?imageslim",
        WiFi电话卡:"//fes.qyerstatic.com/FgxEv9eVMgiTxXvVg4-h5GjE7muR?imageslim",
        欧铁频道: "//fes.qyerstatic.com/Fu9r87vH7j46Gtafrd8ohKHQEoBm?imageslim",
        保险频道: "//fes.qyerstatic.com/Fnf6W8mmlmHqGnzGvu-NnM_zK-1p?imageslim",
        接送机包车:"//fes.qyerstatic.com/FnI5stm2aLT-icX075jIpjXIjKT4?imageslim"
       }
    }
  }
}
</script>
    
<style scoped>
    .selected{
        margin-top: 20px;
        padding-top: 5px;
        height: 180px;
        background: #f0f0f0;
    }
    .selected h3{
        margin-left: 10px;
        font-weight: bold;
        color: black;
    }
    .navBox{
        margin-left: 5px;
        margin-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .navBox li{
        width: 100px;
        height: 30px;
        border: 1px solid #c1bfbf;
        border-radius: 5px;
        margin-bottom: 8px;
        position: relative;
    }
    .navBox span{
        font-size: 12px;
        color: #6f6161;
        margin-left: 5px;
    }
    .navBox img{
        width: 20px;
        position: absolute;
        right: 3px;
        top: 3px;
    }
</style>
