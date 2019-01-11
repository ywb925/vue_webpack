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
// import {Header,Swipe,SwipeItem,Button,Lazyload} from 'mint-ui'
// Vue.component(Header.name,Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload);

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// 引入安装图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// 引入MUI样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import './css/global.css'

// 2.1引入vue-resource
import VueResource from 'vue-resource'
// 2.2 安装vue-resource
Vue.use(VueResource)
// 设置请求的根路径
Vue.http.options.root = 'http://vue.studyit.io'
//全局设置post提交请求时表单数据格式 application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true
// 导入格式化时间的插件
import moment from 'moment'
// 定义全局的过滤器
Vue.filter('dateFormat',function(dateStr,pattern = 'YYYY-MM-DD hh:mm:ss'){
	return moment(dateStr).format(pattern)
})

var vm = new Vue({
    el:'#app',
    render: c => c(App),
    router //4.挂载路由对象到Vm实例上
})
