<template>
  <div class="propertyPanne">
    <div class="title">{{attribute.page.title}}</div>
    <div class="main">
      <div class="item" v-for="(item,index) of attribute.page.attribute" :key="index">
          <span class="label">{{item[0].title}}</span>
          <div>
            <component :is="item[0].widget"></component>
            <p class="floor" v-if="item[0].message!='none'">{{item[0].message}}</p>
          </div>
      </div>






    </div>
  </div>
</template>
<script>
import pInput from "@/components/property/p-input"
import PColorPick from "@/components/property/p-color-pick"
import pImgUpload from "@/components/property/p-img-upload"
import pRadiobox from "@/components/property/p-radiobox"
import pSlide from "@/components/property/p-slide"
import attribute from "@/attribute.js"
export default {
  components:{
    pInput,
    PColorPick,
    pImgUpload,
    pRadiobox,
    pSlide
  },
  data(){
    return{
      attribute
    }
  }
}
</script>
<style lang="scss" scoped>
  .propertyPanne{
    width: 300px;
    border: solid 1px #3333;
    height:100%;
    padding: 10px;
    .title{
      padding-left: 20px;
      border-left: solid 5px blue;
    }
    .main{
      margin-top: 20px;
    }
    .item{
        display: flex;
        flex-direction: row;
        padding: 10px 0;
        .label{
          margin-right: 10px;
          color: #656565; 
          font-size: 12px;
          text-align: right;
          width: 80px;
        }
      .floor{
        margin-top: 10px;
        color: #838fa1;
        font-size: 12px;
      }
    }
  }
</style>
