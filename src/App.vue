<template>
  <div id="app">
    <keep-alive>
      <div>
        <router-link to="/b">bbb</router-link>
        |
        <router-link to="/a">ccc</router-link>
        |
        <router-link to="/mine">mine</router-link>
      </div>
      
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="scss">

</style>
