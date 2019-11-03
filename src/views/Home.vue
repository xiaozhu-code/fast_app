<template>
  <div class="home">
    <div class="header">

    </div>
    <div class="content">
      <!-- 左边组件库 -->
      <div class="componentLib">
        <componentLib :onMove="onMove"/>
      </div>

      <!-- 工作区 -->
      <div class="center">
          <div class="phone">
            <div class="operationView" id="operationView">
              <van-nav-bar
                title="标题"
                left-text="返回"
                left-arrow
              />
              <draggable
                element="div"
                v-model="widgets"
                :options="dragOptions2"
                :move="onMove"
                @start="isDragging=true"
                @end="isDragging=false"
                style="height:543px;background:blue"
              >
                <div  v-for="(item,index) in widgets" :key="index" class="widget" :widgetIndex="index" >
                  <component :is="item.widget" ></component>
                </div>
              </draggable>
            </div>
          </div>
      </div>
    <propertyPanne/>
     

    </div>
  </div>
</template>
<script>
  import componentLib from "@/components/componentLib.vue"
  import propertyPanne from "@/components/propertyPanne"
  import draggable from "vuedraggable"
  import widgets from "@/widgets/widgets.js"
  import { Button } from 'vant'
  import {mapActions,mapState} from "vuex"
  export default {
    components:{
       ...widgets,
      componentLib,
      draggable,
      propertyPanne
    },
    data(){
     return{
       isDragging:false,
        receive:false,
        widgets:[],
     }
    },
    computed:{
      ...mapState(['pages','pageIndex']),
      dragOptions2(){
          return {
              animation: 0,
              group: "description",
          };
      }
    },
    methods:{
      ...mapActions(['add_widget']),
       onMove({relatedContext, draggedContext}) {
          console.log(relatedContext)
          console.log(draggedContext)
            const relatedElement = relatedContext.element;
            const draggedElement = draggedContext.element;
            return (
                (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
            );
        },
    }
  }  
</script>
<style lang="scss" scoped>
  .home{
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display: flex;
    flex-direction: column;
    .header{
      height: 50px;
      border-bottom: solid #3333 1px;
    }
    .content{
      display: flex;
      flex-direction: row;
      flex: 1;
      .componentLib{
        width:300px;
        border-right:  solid #3333 1px;
      }
      .center{
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 2;
        .phone{
          background:url('./../assets/phone.png') no-repeat;
          width: 385px;
          height:786px; 
          background-size: 100%;
          position: relative;
          .operationView{
            position: absolute;
            top:101px;
            left:27px;
            width: 332px;
            height: 589px;
          }
        }
      }
    }
  }

  .dragDemo{
       margin-top:50px;
       display: flex;
       justify-content: center;
       color: #555;
       .list-group{
           width: 300px;
           border: 1px solid #ddd;
           text-align: center;
           margin-right: 50px;
           >div{
               padding:10px;
               border-bottom:1px dashed #ddd;
               img{
                   width:25px;
                   height:25px;
                   vertical-align: middle;
                   padding-right:10px;
               }
           }
       }
   }
</style>
