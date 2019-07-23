<template>
  <div class="introdu">
    <h3>{{title}}</h3>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
      class="ulBox">
            <ul>
                <li 
                v-for="(item,index) in imgsBox"
                :key="index"
                :title="item"
                class="liBox"
                >
                    <img :src="item.cover" alt="">
                    <p class="title">{{item.title}}</p>
                    <p class="userHeat">
                        <span class="one">{{item.username}}</span>
                        <span class="two">{{item.id}}</span>
                    </p>
                </li>
            </ul>
    </van-list>


  </div>
</template>

<script>
import Vue from 'vue'
import { List } from 'vant'
Vue.use(List)

export default {
  name: 'introdu',
  data () {
    return {
        title:"主题攻略",
        imgsBox:[],
        loading:false,
        finished:false,
    }
  },
  methods: {
      onLoad(){
          this.gengduo = "加载中...";
          this.axios.get(
              "https://www.easy-mock.com/mock/5d109ad4d2f7c32907262335/example/PUBU"
              ).then(response =>{
                  for(const key in response.data.data){
                      if(key <= 10){
                        const img =  response.data.data[key]
                        this.imgsBox.push(img)
                    }
                  }
                  console.log(this.imgsBox)   
                  this.loading = false;
                  if(this.imgsBox.length >= 20){
                      this.finished = true
                  }
              }).catch(function(error){
                  console.log(error)
              })
          
      }
  }
}
</script>
    
<style scoped>
    .introdu{
        margin: 10px 10px;
    }
    .introdu h3{
        font-weight: bold;
        color: black;
        margin-bottom: 10px;
    }
    .introdu .ulBox ul{
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        align-items: flex-start;
    }
    .introdu .liBox{
        width: 160px;
        height: auto;
        margin-left: 10px;
        margin-bottom: 10px;
        padding: 2px;
    }
    .introdu img{
        width: 158px;
        height: auto;
        border-radius: 10px;
    }
    .title{
        color: #6f6161;
        font-size: 13px;
        width: 158px;
    }
    .userHeat{
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        width: 158px;
    }
    .one{
        color: black;
    }
    .two{
        color: #bf86a7;
    }
</style>
