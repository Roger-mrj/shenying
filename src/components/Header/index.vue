<template>
  <div id="header">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
  export default {
    name: "header",
    props: {
      title: String,
      default: '神影电影'
    }
  }
</script>

<style scoped>
  #header {
    width: 100%;
    height: 50px;
    color: #e54847;
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