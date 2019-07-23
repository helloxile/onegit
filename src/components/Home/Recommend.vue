<template>
  <div class="recommend">
      <div class="title">
          <h3>热门推荐</h3>
          <a href="#">更多</a>
      </div>
      <div class="rollBox">
          <div class="rollImg one">
              <img src="/static/images/navl1.jpg" alt="">
              <p>[暑期][甩尾]天津往返大阪/冲绳/北海道/名古屋4-7天</p>
              <p><span>999</span>元起</p>
          </div>
         <div class="rollImg">
              <img src="/static/images/navl2.jpg" alt="">
              <p>[暑期][甩尾]天津往返大阪/冲绳/北海道/名古屋4-7天</p>
              <p><span>1299</span>元起</p>
          </div>
         <div class="rollImg">
              <img src="/static/images/navl3.jpg" alt="">
              <p>[暑期][甩尾]天津往返大阪/冲绳/北海道/名古屋4-7天</p>
              <p><span>899</span>元起</p>
          </div>
         <div class="rollImg">
              <img src="/static/images/navl4.jpg" alt="">
              <p>[暑期][甩尾]天津往返大阪/冲绳/北海道/名古屋4-7天</p>
              <p><span>998</span>元起</p>
          </div>
      </div>
  </div>
</template>

<script>


export default {
  name: 'recommend',
  data () {
    return {
       
    }
  }
}
</script>
    
<style scoped>
    .title{
        display: flex;
        justify-content: space-between;
    }
    .title a{
        margin-right: 10px;
        margin-top: 15px;
        color: red;
    }
    .recommend h3{
        font-weight:bold;
        margin: 10px 10px;
    }
    .rollBox{
        display: flex;
        overflow-x: auto;
        margin: 0 10px;
    }
    .rollImg{
        width: 152px;
        margin-left: 10px;
    }
    .one{
        margin-left: 0;
    }
    .rollImg img{
        width: 150px;
        height: 100px;
    }
    .rollImg P{
        font-size: 12px;
        color: black;
    }
    .rollImg span{
        color: red;
        margin-right: 2px;
    }
</style>
