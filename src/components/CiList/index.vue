<template>
  <div class="cinema_body">
    <ul>
      <li>
        <div>
          <span>大地影院延庆金锣湾店</span>
          <span class="q"><span class="price">38.5</span>元起</span>
        </div>
        <div class="address">
          <span>延庆区北街39号H座首层</span>
          <span>>100km</span>
        </div>
        <div class="card">
          <div class="snack">小吃</div>
          <div class="discount">折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>燕山影剧院</span>
          <span class="q"><span class="price">37.5</span>元起</span>
        </div>
        <div class="address">
          <span>房山区燕山岗南路3号</span>
          <span>>120km</span>
        </div>
        <div class="card">
          <div class="snack">小吃</div>
          <div class="discount">折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>万达影城</span>
          <span class="q"><span class="price">37.9</span>元起</span>
        </div>
        <div class="address">
          <span>昌平区鼓楼南街佳莲时代广场四层</span>
          <span>>80km</span>
        </div>
        <div class="card">
          <div class="snack">小吃</div>
          <div class="discount">折扣卡</div>
        </div>
      </li>
      <li>
        <div>
          <span>门头沟影剧院</span>
          <span class="q"><span class="price">30.9</span>元起</span>
        </div>
        <div class="address">
          <span>门头沟区新桥大姐12号</span>
          <span>>110km</span>
        </div>
        <div class="card">
          <div class="snack">小吃</div>
          <div class="discount">折扣卡</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "CiList"
  }
</script>

<style scoped>
  .cinema_body {
    flex: 1;
    overflow: auto;
  }
  
  .cinema_body ul {
    padding: 20px;
  }
  
  .cinema_body li {
    border-bottom: 1px solid #e6e6e6;
    margin-bottom: 20px;
  }
  
  .cinema_body div {
    margin-bottom: 10px;
  }
  
  .cinema_body .q {
    font-size: 11px;
    margin-left: 20px;
    color: #f03d37;
  }
  
  .cinema_body .q .price {
    font-size: 18px;
  }
  
  .cinema_body .address {
    font-size: 13px;
    color: #666;
    display: flex;
    justify-content: space-between;
  }
  .cinema_body .card{
    display: flex;
    flex-direction: row;
  }
  .cinema_body .card div{
    border: 1px solid #f90;
    color: #f90;
    font-size: 15px;
    border-radius: 2px;
  }
  
</style>