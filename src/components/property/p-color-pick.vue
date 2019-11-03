<template>
  <div class="colorPick">
    <a-input class="input" type="color" />
    <a-button >重置</a-button>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.colorPick{
  .input{
    width: 100px;
    margin-right: 10px;
  }
  display: flex;
  flex-direction: row;
}
</style>