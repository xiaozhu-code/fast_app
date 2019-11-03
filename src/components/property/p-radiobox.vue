<template>
 <div>
    <a-radio-group :options="options" defaultValue="1"   />
  </div>
</template>
<script>
export default {
  data(){
    return{
      options:[
        { label: '单行', value: '1' },
        { label: '多行', value: '2' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
  
</style>