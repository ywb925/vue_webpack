<template>
	<div class="goodsinfoContainer">
		<transition 
			@before-enter="beforeEnter" 
			@enter="enter"
			@after-enter="afterEnter">
			<div class="ball"  ref="ball" v-show="flag"></div>
		</transition>
		<!-- 轮播图区域 -->
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<swipe :swipeDataList="swipePics" :isFull="false"></swipe>
				</div>
			</div>
		</div>
		<!-- 商品购买区域 -->
		<div class="mui-card">
			<div class="mui-card-header">Apple iPhone X (A1865) 64GB 银色 移动联通电信4G手机</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price">
						市场价：<span class="market_price">￥2399</span>&nbsp;&nbsp;&nbsp;销售价：<span class="sell_price">￥2199</span>
					</p>
					<p>购买数量：<numbox @getCount="getSelectedCount" :max="60"></numbox></p>
					<p>
						<mt-button type="primary" size="small">立即购买</mt-button>
						<mt-button type="danger" size="small" @click="addToShopcart">加入购物车</mt-button>
					</p>
				</div>
			</div>
		</div>

		<!-- <div class="mui-card">
			<div class="mui-card-header">{{goodsinfo.title}}</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p class="price">
						市场价：<span class="market_price">￥{{goodsinfo.market_price}}</span>&nbsp;&nbsp;&nbsp;销售价：<span class="sell_price">￥{{goodsinfo.sell_pricce}}</span>
					</p>
					<p>购买数量：<numbox @getCount="getSelectedCount" :max="goodsinfo.stock_quantity"></numbox></p>
					<p>
						<mt-button type="primary" size="small">立即购买</mt-button>
						<mt-button type="danger" size="small" @click="addToShopcart">加入购物车</mt-button>
					</p>
				</div>
			</div>
		</div> -->
		<!-- 商品详情区域 -->
		<div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品货号：SD215698415</p>
					<p>库存情况：60件</p>
					<p>上架时间：2019-01-01 00:00:00</p>
				</div>
			</div>
			<div class="mui-card-footer">
				<mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
				<mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
			</div>
		</div>

		<!-- <div class="mui-card">
			<div class="mui-card-header">商品参数</div>
			<div class="mui-card-content">
				<div class="mui-card-content-inner">
					<p>商品货号：{{goodsinfo.goods_no}}</p>
					<p>库存情况：{{goodsinfo.stock_quantity}}件</p>
					<p>上架时间：{{goodsinfo.add_time | dateFormat}}</p>
				</div>
			</div>
			<div class="mui-card-footer">
				<mt-button type="primary" size="large" plain>图文介绍</mt-button>
				<mt-button type="danger" size="large" plain>商品评论</mt-button>
			</div>
		</div> -->
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	import swipe from '../subcomponents/swipe.vue'
	import numbox from '../subcomponents/goodsinfo_numbox.vue'
	export default {
		data() {
			return {
				id: this.$route.params.id, 
				swipePics: [],
				goodsinfo: {},
				flag: false, //控制小球的显示和隐藏的标识符
				selectedCount: 1  //保存用户选中的商品数量
			}
		},
		created() {
			// this.getSwipePics()
			//this.getGoodsInfo()  
		},
		methods: {
			getSwipePics() {
				this.$http.get('api/getthumimages/'+this.id).then(result => {
					if(result.body.status === 0){
						// 循环遍历轮播图数组的每一项，为其增加img属性，使其等于item.src,swipe轮播图组件中指定的是item.img
						result.body.message.forEach(item => {
							item.img = item.src
						})
						this.swipePics = result.body.message
					}else{
						Toast('获取图片失败!')
					}
				})
			},
			getGoodsInfo() {
				this.$http.get('api/goods/getinfo/'+this.id).then(result => {
					if(result.body.status === 0){
						this.goodsinfo = result.body.message[0]
					}else{
						Toast('获取商品详情信息失败！')
					}
				})
			},
			goDesc(id) {
				// 使用编程式导航进入组件页面
				this.$router.push({name: 'goodsdesc', params: {id}})
			},
			goComment(id) {
				this.$router.push({name: 'goodscomment',params: {id}})
			},
			addToShopcart() {
				this.flag = !this.flag
			},
			beforeEnter(el) {
				el.style.transform = "translate(0,0)"
			},
			enter(el,done) {
				el.offsetWidth
				// 获取小球和购物车徽标在页面中距离左侧和顶部的距离，二者距离之差分别就是translate的横纵坐标  domObject.getBoundingClientRect()
				const ballPosition = this.$refs.ball.getBoundingClientRect()
				const badgePosition = document.getElementById('badge').getBoundingClientRect()
				const disX = badgePosition.left - ballPosition.left 
				const disY = badgePosition.top - ballPosition.top
				el.style.transform = `translate(${disX}px, ${disY}px)`
				el.style.transition = 'all 0.5s cubic-bezier(.4,-0.3,1,.68)'
				done()
			},
			afterEnter(el) {
				this.flag = !this.flag
			},
			getSelectedCount(count) {
				//当子组件将选中的数量值传递给父组件时，将此值保存到data中
				this.selectedCount = count
			}
		},
		components: { //注册子组件
			swipe,
			numbox
		}
	}
</script>

<style lang="scss">
	.goodsinfoContainer{
		background: #eee;
		overflow: hidden;
		.mui-card{
			.price{
				.market_price{
					text-decoration: line-through;
				}
				.sell_price{
					color: red;
					font-weight: bold;
					font-size: 16px;
				}
			}
			.mui-card-footer{
				display: block;
				.mint-button{
					margin: 15px 0;
				}
			}
		}
		.ball{
			width: 15px;
			height: 15px;
			border-radius: 50%;
			background: red;
			position: absolute;
			left: 148px;
			top: 404px;
			z-index: 99;
		}
	}
</style>