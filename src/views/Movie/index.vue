<template>
  <div>
    <Header title="神影电影"></Header>
    <div id="content">
      <div class="movie_menu">
        <router-link tag="div" to="/movie/city" class="city_name">
          <span>北京 </span><i class="fa fa-caret-down"></i>
        </router-link>
        <div class="hot_switch">
          <router-link tag="div" to="/movie/nowPlaying" class="hot_item" active>正在热映</router-link>
          <router-link tag="div" to="/movie/comingSoon" class="hot_item">即将上映</router-link>
        </div>
        <router-link tag="div" to="/movie/search" class="search_entry"><i class="fa fa-search"></i></router-link>
      </div>
      <router-view></router-view>
    </div>
    <TabBar/>
  </div>

</template>

<script>
  import Header from '../../components/Header'
  import TabBar from '../../components/TabBar'

  export default {
    name: "Movie",
    components: {
      Header,
      TabBar
    }
  }
</script>

<style scoped>
  #content .movie_menu {
    width: 100%;
    height: 45px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
  }
  
  .movie_menu .city_name {
    margin-left: 20px;
    height: 100%;
    line-height: 45px;
  }
  
  .movie_menu .city_name.router-link-active {
    color: #ef4238;
    border-bottom: 2px solid #ef4238;
    box-sizing: border-box;
  }
  
  .movie_menu .hot_switch {
    display: flex;
    height: 100%;
    line-height: 45px;
  }
  
  .movie_menu .hot_item {
    font-size: 15px;
    color: #666666;
    width: 80px;
    text-align: center;
    margin: 0 12px;
    font-weight: 700;
  }
  
  .movie_menu .hot_item.router-link-active {
    color: #ef4238;
    border-bottom: 2px solid #ef4238;
  }
  
  .movie_menu .search_entry {
    margin-right: 20px;
    height: 100%;
    line-height: 45px;
  }
  
  .movie_menu .search_entry.router-link-active {
    color: #ef4238;
    border-bottom: 2px solid #ef4238;
    box-sizing: border-box;
  }
  
  .movie_menu .search_entry i {
    font-size: 24px;
    color: red;
  }
</style>