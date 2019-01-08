// 入口文件
import Vue from 'vue' 
// 1.引入vue-router
import VueRouter from 'vue-router'
// 2.安装路由
Vue.use(VueRouter)
// 3.导入router.js路由模块
import router from './router.js'
// 导入App根组件
import App from "./App.vue"

// 按需引入Mint-UI中的组件
import {Header,Swipe,SwipeItem} from 'mint-ui'
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 引入MUI样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 2.1引入vue-resource
import VueResource from 'vue-resource'
// 2.2 安装vue-resource
Vue.use(VueResource)

var vm = new Vue({
    el:'#app',
    render: c => c(App),
    router //4.挂载路由对象到Vm实例上
})
