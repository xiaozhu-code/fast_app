<template>
  <div class="p-page">
      <div class="item">
          <span class="label">小程序名称</span>
          <div>
            <a-input class="input" :value="values.appName" />
            <p class="floor">页面名称仅用于后台查找</p>
          </div>
      </div>
      <div class="item">
          <span class="label">页面标题</span>
          <div>
            <a-input class="input" :value="values.pageName" />
            <p class="floor">小程序端顶部显示的标题</p>
          </div>
      </div>
      <div class="item">
          <span class="label">分享标题</span>
          <div>
            <a-input class="input" :value="values.shareName" />
            <p class="floor">小程序端转发时显示的标题</p>
          </div>
      </div>
      <div class="item">
          <span class="label">标题栏文字</span>
          <div>
            <PColorPick/>
          </div>
      </div>
      <div class="item">
          <span class="label">标题栏背景</span>
          <div>
            <PColorPick/>
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
  props:{
    values:{
      required:true
    }
  },
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
  },
  mounted() {
    console.log(this.values)
  },
}
</script>
<style lang="scss" scoped>
  .p-page{
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
          margin-top: 8px;
        }
      .floor{
        margin-top: 10px;
        color: #838fa1;
        font-size: 12px;
      }
    }
  }
</style>
