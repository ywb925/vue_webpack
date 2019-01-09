<template>
	<div>
	<!-- 使用MUI中的media list代码片段 -->
		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
				<router-link :to="'/home/newsinfo/'+item.id">
					<img class="mui-media-object mui-pull-left" :src="item.img_url">
					<div class="mui-media-body">
						<h1>{{item.title}}</h1>
						<p class="mui-ellipsis">
							<span>发表时间:{{item.add_time | dateFormat}}</span>
							<span>点击:{{item.click}}次</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>

		<ul class="mui-table-view">
			<li class="mui-table-view-cell mui-media">
				<router-link to="/home/newsinfo/1">
					<img class="mui-media-object mui-pull-left" src="../../css/images/shuijiao.jpg">
					<div class="mui-media-body">
						<h1>幸福</h1>
						<p class="mui-ellipsis">
							<span>发表时间:2019-01-09 09:00</span>
							<span>点击:0次</span>
						</p>
					</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media">
				<router-link to="/home/newsinfo/2">
					<img class="mui-media-object mui-pull-left" src="../../css/images/muwu.jpg">
					<div class="mui-media-body">
						<h1>木屋</h1>
						<p class="mui-ellipsis">
							<span>发表时间:2019-01-09 09:00</span>
							<span>点击:0次</span>
						</p>
					</div>
				</router-link>
			</li>
			<li class="mui-table-view-cell mui-media">
				<router-link to="/home/newsinfo/3">
					<img class="mui-media-object mui-pull-left" src="../../css/images/cbd.jpg">
					<div class="mui-media-body">
						<h1>CBD</h1>
						<p class="mui-ellipsis">
							<span>发表时间:2019-01-09 09:00</span>
							<span>点击:0次</span>
						</p>
					</div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	export default {
		data() {
			return {
				newsList: []  //保存新闻列表数据
			}
		},
		created() {
			// this.getNewsList()  //获取新闻列表数据
		},
		methods: {
			getNewsList() {
				this.$http.get('api/getnewslist').then(result => {
					if(resule.body.status === 0){
						// 将获取到的数据保存到newsList
						this.newsList = result.body.message
					}else{
						Toast('获取新闻列表失败!')
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mui-table-view {
		li{
			h1{
				font-size: 14px;
			}
			.mui-ellipsis{
				font-size: 12px;
				color: #226aff;
				display: flex;
				justify-content: space-between;
			}
		}
	}
</style>