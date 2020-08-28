import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './store'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

//引用完成后在实例中进行注册
new Vue({
  router,
  store,
  //使用render函数进行渲染App，将App挂载到index.html中id为app的位置
  render: h => h(App)
}).$mount('#app')
