<template>
  <div>
    <h4>count组件</h4>
    <p>count 的值是{{ count }}</p>
    <button @click="add">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: this.init,
    }
  },
  methods: {
    add() {
      this.count += 1;
    }
  },
  //props是‘自定义属性’，允许使用者通过自定义属性，为当前组件指定初始值
  //自定义属性的名字，是封装者自定义的（只要名字合法即可）
  //props中的数据，可以直接在模板结构中被使用
  //props是只读的，不能直接在程序中去修改值，否则直接报错
  // props:['init'],
  props: {
    // 自定义属性A:{配置选项},
    // 自定义属性B:{配置选项},
    // 自定义属性C:{配置选项},
    init: {
      //如果未传入值，则默认为零
      default: 0,
      //init 的值类型必须是number类型 数字
      type: Number,
      //init为必填项，不填终端报错
      required: true,
    }
  },
}
</script>

<style lang="less">

</style>