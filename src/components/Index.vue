<template>
  <div class="index">
      <app-top></app-top>
      <app-hanner></app-hanner>
      <app-nav></app-nav>
      <app-rec></app-rec>
      <app-sele></app-sele>
      <app-intr></app-intr>
  </div>
</template>

<script>
import Top from './Home/Top'
import Hanner from './Home/Hanner'
import Navbox from './Home/Navbox'
import Recommend from './Home/Recommend'
import Selected from './Home/Selected'
import Introdu from './Home/Introdu'


export default {
  name: 'index',
  data () {
    return {
        
    }
  },
  components: {
      "app-top":Top,
      "app-hanner":Hanner,
      "app-nav":Navbox,
      "app-rec":Recommend,
      "app-sele":Selected,
      "app-intr":Introdu,
  }
}
</script>

<style scoped>

</style>