<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr>
    <MyCount :init="6"></MyCount>
  </div>
</template>
  
<script>
export default {}
</script>
  
<style lang="less" scoped>
// scoped 属性会自动为组件生成 data-v-编号 属性，同一个组件中，共用同一个data-v
// 好处：可以防止组件中的样式污染
.left-container {
  padding: 0 20px 20px;
  background-color: orange;
  min-height: 250px;
  flex: 1;
}

h3 {
  color: aqua;
}

// /deep/ 深覆盖，可以将父组件下的子组件的样式进行修改 
// 当使用第三方组件库的时候，如果要修改第三方组件的默认样式，需要用到 /deep/
/deep/ h4 {
  color: aquamarine;
}
</style>
  