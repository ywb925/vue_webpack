<template>
	<div class="goodsList">
		<div class="goodsItem" v-for="item in goodslist" :key="item.id" @click="getDetail(item.id)">
			<img :src="item.img_url">
			<h1 class="title">{{item.title}}</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥{{item.sell_price}}</span>
					<span class="old">￥{{item.market_price}}</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩{{item.stock_quantity}}件</span>
				</p>
			</div>
		</div>
		<!-- <router-link class="goodsItem" :to="'/home/goodsinfo/'+item.id" v-for="item in goodslist" :key="item.id" tag="div">
			<img :src="item.img_url">
			<h1 class="title">{{item.title}}</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥{{item.sell_price}}</span>
					<span class="old">￥{{item.market_price}}</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩{{item.stock_quantity}}件</span>
				</p>
			</div>
		</router-link> -->
		
		<router-link class="goodsItem" to="/home/goodsinfo/1" tag="div">
			<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547118183255&di=b77240c5b1771f13573863e733ebfe74&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F6%2F59cb10e50dfd1.jpg">
			<h1 class="title">Apple iPhone X (A1865) 64GB 银色 移动联通电信4G手机</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥6299</span>
					<span class="old">￥6699</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩60件</span>
				</p>
			</div>
		</router-link>
		<div class="goodsItem" @click="getDetail(2)">
			<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547118124734&di=1dea63ea1476214eebee9ca2b25d38c1&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2Fshaitu%2F20130314%2F1409%2F51416986a3a4f.jpg">
			<h1 class="title">Apple iPhone X (A1865) 64GB 银色 移动联通电信4G手机</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥6299</span>
					<span class="old">￥6699</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩60件</span>
				</p>
			</div>
		</div>
		<router-link class="goodsItem" to="/home/goodsinfo/3" tag="div">
			<img src="https://img14.360buyimg.com/n0/jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg">
			<h1 class="title">Apple iPhone X (A1865) 64GB 银色 移动联通电信4G手机</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥6299</span>
					<span class="old">￥6699</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩60件</span>
				</p>
			</div>
		</router-link>
		<router-link class="goodsItem" to="/home/goodsinfo/4" tag="div">
			<img src="https://img14.360buyimg.com/n0/jfs/t7222/292/3682845077/52849/5acad28d/59e42823N6ab33bf2.jpg">
			<h1 class="title">Apple iPhone X (A1865) 64GB 银色 移动联通电信4G手机</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥6299</span>
					<span class="old">￥6699</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩60件</span>
				</p>
			</div>
		</router-link>
		<router-link class="goodsItem" to="/home/goodsinfo/5" tag="div">
			<img src="https://img14.360buyimg.com/n0/jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg">
			<h1 class="title">Apple iPhone X (A1865) 64GB 银色 移动联通电信4G手机</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥6299</span>
					<span class="old">￥6699</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩60件</span>
				</p>
			</div>
		</router-link>
		<router-link class="goodsItem" to="/home/goodsinfo/6" tag="div">
			<img src="https://img14.360buyimg.com/n0/jfs/t7297/154/3413903491/65679/45ae4902/59e42830N9da56c41.jpg">
			<h1 class="title">Apple iPhone X (A1865) 64GB 银色 移动联通电信4G手机</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥6299</span>
					<span class="old">￥6699</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩60件</span>
				</p>
			</div>
		</router-link>
		<router-link class="goodsItem" to="/home/goodsinfo/7" tag="div">
			<img src="https://img14.360buyimg.com/n0/jfs/t7222/292/3682845077/52849/5acad28d/59e42823N6ab33bf2.jpg">
			<h1 class="title">Apple iPhone X (A1865) 64GB 银色 移动联通电信4G手机</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥6299</span>
					<span class="old">￥6699</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩60件</span>
				</p>
			</div>
		</router-link>
		<router-link class="goodsItem" to="/home/goodsinfo/8" tag="div">
			<img src="https://img14.360buyimg.com/n0/jfs/t10675/253/1344769770/66891/92d54ca4/59df2e7fN86c99a27.jpg">
			<h1 class="title">Apple iPhone X (A1865) 64GB 银色 移动联通电信4G手机</h1>
			<div class="info">
				<p class="price">
					<span class="now">￥6299</span>
					<span class="old">￥6699</span>
				</p>
				<p class="sell">
					<span>热卖中</span>
					<span>剩60件</span>
				</p>
			</div>
		</router-link>
		<!-- 加载更多按钮 -->
		<mt-button type="danger" size="large" @click="getMore">加载更多</mt-button>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	export default {
		data() {
			return {
				pageIndex: 1,
				goodslist: []
			}
		},
		created() {
			// this.getGoodsList()
		},
		methods: {
			getGoodsList() {
				this.$http.get('api/getgoods?pageIndex='+this.pageIndex).then(result => {
					if(result.body.status === 0){
						this.goodslist = this.goodslist.concat(result.body.message)
					}else{
						Toast('获取商品列表失败！')
					}
				})
			},
			getMore() {
				this.pageIndex++
				this.getGoodsList()
				console.log("当前pageIndex="+this.pageIndex)
			},
			//编程式导航跳转 $router路由导航对象
			getDetail(id) {
				this.$router.push('/home/goodsinfo/'+id)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.goodsList{
		display: flex;
		flex-wrap: wrap;
		padding: 6px;
		justify-content: space-between;
		.goodsItem{
			width: 49%;
			border: 1px solid #ccc;
			box-shadow: 0 0 8px #ccc;
			margin: 4px 0;
			padding: 2px;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			min-height: 292px;
			img{
				width: 100%;
			}
			.title{
				font-size: 14px;
			}
			.info{
				background: #eee;
				p{
					margin: 0;
					padding: 4px;
				}
				.price{
					.now{
						color: red;
						font-weight: bold;
						font-size: 16px;
					}
					.old{
						font-size: 12px;
						text-decoration: line-through;
						margin-left: 10px;
					}
				}
				.sell{
					display: flex;
					justify-content: space-between;
					font-size: 13px;
				}
			}
		}
	}
</style>