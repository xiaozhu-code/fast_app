<template>
  <div class="">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) of bannerList" :key="index">
        <img :src="item" alt="" width="100%">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<style lang="scss" scope>
  
</style>
<script>
import bannerImg from "@/assets/img1.jpg"
  export default {
    data(){
      return{
        bannerList:[
          bannerImg,
          bannerImg,
          bannerImg,
          bannerImg
        ]
      }
    }
  }
</script>