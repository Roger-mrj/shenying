<template>
  <div id="header">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
  export default {
    name: "Header",
    //props是子组件访问父组件数据的唯一接口，默认是神影电影
    props: {
      title: {
        type: String,
        default: '神影电影'
      }
    }
  }
</script>

<style scoped>
  #header {
    width: 100%;
    height: 50px;
    color: #ffffff;
    background: #e54847;
    border-bottom: 1px solid #e54847;
    position: relative;
  }
  
  #header h1 {
    font-size: 18px;
    text-align: center;
    line-height: 50px;
    font-weight: normal;
  }
</style>