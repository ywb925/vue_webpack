// 入口文件
import Vue from 'vue' 
// 导入App根组件
import App from "./App.vue"

// 按需引入Mint-UI中的组件
import {Header} from 'mint-ui'
Vue.component(Header.name,Header)

// 引入MUI样式
import './lib/mui/css/mui.min.css'


let vm = new Vue({
    el:'#app',
    render: c => c(App)
})
