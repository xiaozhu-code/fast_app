<template>
  <div>
    <van-grid :column-num="3">
      <van-grid-item
        v-for="value in 6"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
  </div>
</template>
<style lang="scss" scoped>

</style>

<script>
export default {
  
}
</script>
