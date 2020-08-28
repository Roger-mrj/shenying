<template>
  <div>
    <Header title="神影影院"></Header>
    <div class="cinema_menu">
      <div class="city_switch">全城 <i class="fa fa-caret-down"></i></div>
      <div class="city_switch">品牌 <i class="fa fa-caret-down"></i></div>
      <div class="city_switch">特色 <i class="fa fa-caret-down"></i></div>
    </div>
    <ci-list/>
    <TabBar></TabBar>
  </div>
</template>

<script>
  import CiList from '../../components/CiList';
  import Header from '../../components/Header';
  import TabBar from '../../components/TabBar'

  export default {
    name: "Cinema",
    components: {CiList, Header, TabBar}
  }
</script>

<style scoped>
#content .cinema_menu{
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background:white;
}
  .city_switch{

    width: 80px;
  }
</style>