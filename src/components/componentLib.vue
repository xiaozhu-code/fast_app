<template>
  <a-collapse>
    <a-collapse-panel header="基础组件" key="1">
      <div class="libWrapper">
        <draggable class="list-group"
          element="div"
          v-model="widgetLib"
          :options="dragOptions1"
          :move="onMove"
          @start="isDragging=true"
          @end="isDragging=false">

          <div v-for="(item,index) of  widgetLib" :key="index" class="libItem" >
              <a-icon :type="item.icon" />
              <div><span>{{item.title}}</span></div>
          </div>

        </draggable>
      </div>
    </a-collapse-panel>
  </a-collapse>
</template>

<script>
import widgetLib from "@/widgetLib.js"
import draggable from "vuedraggable"
export default {
  components:{
    draggable
  },
  data(){
    return{
      widgetLib,
    }
  },
  computed:{
    dragOptions1() {
        return {
            animation: 0,
            group: {
                name: "description",
                pull: 'clone',
                put: false
            },
            ghostClass: "ghost",
        };
    },
  },
  methods:{
    onMove({relatedContext, draggedContext}) {
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
  .libItem{
    width: 20%;
    text-align: center;
    border:#3333 solid 1px;
    cursor: move;
    display: inline-block;
    &:hover{
      border:#23A7F2 solid 1px;
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
