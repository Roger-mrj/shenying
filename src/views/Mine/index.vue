<template>
 <div id="main">
   <Header title="我的神影"></Header>
   <Login/>
   <tab-bar/>
 </div>
</template>

<script>
  import Login from '../../components/Login'
  import Header from '../../components/Header'
  import TabBar from '../../components/TabBar'

  export default {
    name: "Mine",
    components: {Login,Header,TabBar}
  }
</script>

<style scoped>

</style>