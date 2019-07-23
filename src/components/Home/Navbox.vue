<template>
  <div class="navBox">
    <ul class="imgs">
        <li class="img one">  
          <img src="/static/images/nav.png" alt="">
          <p>推荐</p>
        </li>
        <li class="img">  
          <img src="/static/images/nav.png" alt="">
          <p>推荐</p>
        </li>
        <li class="img">  
          <img src="/static/images/nav.png" alt="">
          <p>推荐</p>
        </li>
        <li class="img">  
          <img src="/static/images/nav.png" alt="">
          <p>推荐</p>
        </li>
        <li class="img">  
          <img src="/static/images/nav.png" alt="">
          <p>推荐</p>
        </li>
        <li class="img one">  
          <img src="/static/images/nav.png" alt="">
          <p>推荐</p>
        </li>
        <li class="img">  
          <img src="/static/images/nav.png" alt="">
          <p>推荐</p>
        </li>
        <li class="img">  
          <img src="/static/images/nav.png" alt="">
          <p>推荐</p>
        </li>
        <li class="img">  
          <img src="/static/images/nav.png" alt="">
          <p>推荐</p>
        </li>
        <li class="img">  
          <img src="/static/images/nav.png" alt="">
          <p>推荐</p>
        </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'navBox',
  data () {
    return {
     
    }
  }
}
</script>
    
<style scoped>
.navBox{
  margin: 0;
  background: #f0f0f0;
}
.imgs{
  display: flex;
  flex-wrap:wrap;
  padding: 20px 10px;
}
.img{
  margin-left: 22px;
  margin-bottom: 15px;
  text-align: center;
}
.one{
  margin-left: 13px;
}
</style>
