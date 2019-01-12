<template>
	<div class="shopcartContainer">
		<!-- <div class="goodslist" v-for="(item,i) in goodslist" :key="item.id">
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="selectedChange(item.id,$store.getters.getGoodsSelected[item.id])"></mt-switch>
						<img :src="item.thumb_path">
						<div class="info">
							<h1>{{item.title}}</h1>
							<p>
								<span class="price">￥{{item.sell_price}}</span>
								<numbox :initCount="$store.getters.getGoodsCount[item.id]" :googsId="item.id"></numbox>
								<a href="#" @click.prevent="remove(item.id,i)">删除</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div> -->

		<div class="goodslist">
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch></mt-switch>
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547118124734&di=1dea63ea1476214eebee9ca2b25d38c1&imgtype=0&src=http%3A%2F%2Fp3.gexing.com%2Fshaitu%2F20130314%2F1409%2F51416986a3a4f.jpg">
						<div class="info">
							<h1>Apple iPhone X (A1865) 64GB 银色 移动联通电信4G手机</h1>
							<p>
								<span class="price">￥1299</span>
								<numbox></numbox>
								<a href="#" @click.prevent="remove(1,1)">删除</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch></mt-switch>
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547118183255&di=b77240c5b1771f13573863e733ebfe74&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F6%2F59cb10e50dfd1.jpg">
						<div class="info">
							<h1>Apple iPhone X (A1865) 64GB 银色 移动联通电信4G手机</h1>
							<p>
								<span class="price">￥3699</span>
								<numbox></numbox>
								<a href="#" @click.prevent="remove(1,2)">删除</a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch></mt-switch>
						<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1547118183255&di=b77240c5b1771f13573863e733ebfe74&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F6%2F59cb10e50dfd1.jpg">
						<div class="info">
							<h1>Apple iPhone X (A1865) 64GB 银色 移动联通电信4G手机</h1>
							<p>
								<span class="price">￥1299</span>
								<numbox></numbox>
								<a href="#" @click.prevent="remove(1,3)">删除</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div class="mui-card">
			<div class="mui-card-content">
				<div class="mui-card-content-inner settle">
					<div class="left">
						<p>总计（不含运费）</p>
						<p>已勾选商品<span>{{$store.getters.getGoodsCountAndAmount.count}}</span>件，总价<span>￥{{$store.getters.getGoodsCountAndAmount.amount}}</span></p>
					</div>
					<mt-button type="danger">去结算</mt-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import numbox from '../subcomponents/shopcart_numbox.vue'
	export default {
		data() {
			return {
				goodslist: []
			}
		},
		created() {
			// this.getGoodsList()
		},
		methods: {
			getGoodsList() {
				var idArr = []
				this.$store.state.shopcart.forEach(item => idArr.push(item.id))
				if(idArr.length <= 0) {
					return
				}
				this.$http.get('api/goods/getshopcarlist/'+idArr.join(',')).then(result => {
					if(result.body.status === 0){
						this.goodslist = result.body.message
					}
				})
			},
			remove(id,index) {
				//根据传递的id值将商品从store中删除，同时根据index将当前组件中goodslist对应的商品删除
				this.goodslist.splice(index,1)
				this.$store.commit('removeFormCart',id)
			},
			selectedChange(id,val){
				// 点击开关后，将最新的开关状态值同步到store中
				this.$store.commit('updateGoodsSelected',{id,selected: val})
			}
		},
		components: {
			numbox
		}
	}
</script>

<style lang="scss" scoped>
	.shopcartContainer{
		background: #eee;
		overflow: hidden;
		.mui-card-content-inner{
			display: flex;
			align-items: center;
		}
		.mui-card{
			img{
				width: 60px;
				height: 60px;
				margin-left: 4px;
			}
		}
		.info{
			margin-left: 4px;
			.price{
				color: red;
				font-weight: bold;
			}
			h1{
				font-size: 14px;
				padding-bottom: 4px;
			}
			.mui-numbox{
				height: 28px;
			}
		}
		.settle {
			display: flex;
			justify-content: space-between;
			align-items: center;
			p{
				span{
					color: red;
					font-weight: bold;
					font-size: 16px;
				}
			}
		}
	}
</style>