<template>
  <a-collapse defaultActiveKey='1'>
    <a-collapse-panel header="基础组件" key="1">
      <div class="libWrapper">
        <draggable class="list-group"
          element="div"
          v-model="widgetLib"
          :options="dragOptions1"
          :move="onMove"
        >
          <div v-for="(item,index) of  widgetLib" :key="index" class="libItem" >
            <div><a-icon :type="item.icon" /></div>
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
  props:['onMove'],
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
            sort:false,
            group: {
                name: "description",
                pull: 'clone',
                put: false,
              
            },
            ghostClass: "ghost",
        };
    },
  },
  methods:{
  }
}
</script>

<style lang="scss" scoped>
  
  .libWrapper{
    .list-group{
       
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        
      .libItem{
        border: 1px solid #ddd;
        width: 60px;        
        height: 60px; 
        cursor: move;
        display: flex !important ; 
        align-items: center;
        justify-content: center;
        flex-direction: column;
        &:hover{
          border:#23A7F2 solid 1px;
        }
      }
    }
   }
</style>
