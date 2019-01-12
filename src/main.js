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

import Vuex from 'vuex'
Vue.use(Vuex)

// 预先读取本地存储中的购物车数据
var shopcart = JSON.parse(localStorage.getItem('shopcart') || '[]')
var store = new Vuex.Store({
	state: {
		shopcart: shopcart //存储购物车中的商品数据
	},
	mutations: {
		//点击加入购物车将商品信息保存到shopcart中
		addToCart(state,goods){
			var flag = false
			state.shopcart.some(item => {
				if(item.id == goods.id){
					item.count += parseInt(goods.count)
					flag = true
					return true
				}
			})
			if(!flag) {
				state.shopcart.push(goods)
			}
			//当更新shopcart之后，把shopcart数组存储到本地的localStorage中
			localStorage.setItem('shopcart',JSON.stringify(state.shopcart))
		},
		//修改购物车中商品的数量值
		updateGoodsInfo(state,goods) {
			state.shopcart.some(item => {
				if(item.id == goods.id) {
					item.count = parseInt(goods.count)
					return true
				}
			})
			localStorage.setItem('shopcart',JSON.stringify(state.shopcart))
		},
		removeFormCart(state,id){
			state.shopcart.some((item,i) => {
				if(item.id == id){
					state.shopcart.splice(i,1)
					return true
				}
			})
			localStorage.setItem('shopcart',JSON.stringify(state.shopcart))
		},
		updateGoodsSelected(state,goods) {
			state.shopcart.some(item => {
				if(item.id == goods.id){
					item.selected = goods.selected
					return true
				}
			})
			localStorage.setItem('shopcart',JSON.stringify(state.shopcart))
		}
	},
	getters: {
		getAllCounts(state) {
			var c = 0
			state.shopcart.forEach(item => {
				c += item.count
			})
			return c
		},
		getGoodsCount(state) {
			var obj = {}
			state.shopcart.forEach(item => {
				obj[item.id] = item.count
			})
			return obj
		},
		getGoodsSelected(state) {
			var obj = {}
			state.shopcart.forEach(item => {
				obj[item.id] = item.selected
			})
			return obj
		},
		getGoodsCountAndAmount(state) {
			var obj = {
				count: 0,  //勾选商品的数量
				amount: 0 //勾选商品的总价
			}
			state.shopcart.forEach(item => {
				if(item.selected) {
					obj.count += item.count
					obj.amount += item.price * item.count
				}
			})
			return obj
		}
	}
})

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
    router, //4.挂载路由对象到Vm实例上
    store
})
