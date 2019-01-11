<template>
	<div>
		<!-- 顶部滑动条区域 -->
		<!-- 使用MUI中的tab-top-webview-main.html -->
		<!-- 还需要引入MUI对应的js文件并初始化scroll组件,移除webpack打包的严格模式 babel-plugin-transform-remove-strict-mode -->
		<div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"> <!-- 去掉data-scroll="1" -->
				<div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px); transition-duration: 0ms;">
					<a :class="['mui-control-item',item.id==0?'mui-active':'']" v-for="item in imgCategory" :key="item.id" @click="getPicListByCateId(item.id)">
							{{item.title}}
					</a>

					<a class="mui-control-item mui-active" href="#item1mobile" @click="getPicListByCateId(0)">
						全部
					</a>
					<a class="mui-control-item" href="#item2mobile" @click="getPicListByCateId(0)">
						家居生活
					</a>
					<a class="mui-control-item" href="#item3mobile" @click="getPicListByCateId(0)">
						摄影设计
					</a>
					<a class="mui-control-item" href="#item4mobile" @click="getPicListByCateId(0)">
						明星美女
					</a>
					<a class="mui-control-item" href="#item5mobile" @click="getPicListByCateId(0)">
						娱乐
					</a>
					<a class="mui-control-item" href="#item6mobile" @click="getPicListByCateId(0)">
						财经
					</a>
					<a class="mui-control-item" href="#item7mobile" @click="getPicListByCateId(0)">
						生活
					</a>
					<a class="mui-control-item" href="#item8mobile" @click="getPicListByCateId(0)">
						新闻
					</a>
					<a class="mui-control-item" href="#item9mobile" @click="getPicListByCateId(0)">
						文学
					</a>
				</div>
			</div>
		</div>

		<!-- 图片列表区域 -->
		<ul class="pic-List">
		  <router-link :to="'/home/photoinfo/'+item.id" v-for="item in picList" :key="item.id" tag="li">
		    <img v-lazy="item.img_url">
		    <div class="info">
		    	<h3 class="infoTitle">{{item.title}}</h3>
		    	<div class="infoBody">{{item.zhaiyao}}</div>
		    </div>
		  </router-link>
		</ul>

		<ul class="pic-List">
		  <router-link to="/home/photoinfo/1" tag="li">
		    <img src="../../css/images/1.jpg">
		    <div class="info">
		    	<h3 class="infoTitle">好</h3>
		    	<div class="infoBody">好好学习,天天向上</div>
		    </div>
		  </router-link>
		  <router-link to="/home/photoinfo/2" tag="li">
		    <img src="../../css/images/2.jpg">
		    <div class="info">
		    	<h3 class="infoTitle">学</h3>
		    	<div class="infoBody">好好学习,天天向上</div>
		    </div>
		  </router-link>
		  <router-link to="/home/photoinfo/3" tag="li">
		    <img src="../../css/images/3.jpg">
		    <div class="info">
		    	<h3 class="infoTitle">习</h3>
		    	<div class="infoBody">好好学习,天天向上</div>
		    </div>
		  </router-link>
		  <router-link to="/home/photoinfo/4" tag="li">
		    <img src="../../css/images/shuijiao.jpg">
		    <div class="info">
		    	<h3 class="infoTitle">向</h3>
		    	<div class="infoBody">好好学习,天天向上</div>
		    </div>
		  </router-link>
		  <router-link to="/home/photoinfo/5" tag="li">
		    <img src="../../css/images/muwu.jpg">
		    <div class="info">
		    	<h3 class="infoTitle">上</h3>
		    	<div class="infoBody">好好学习,天天向上</div>
		    </div>
		  </router-link>
		</ul>
	</div>
</template>

<script>
	import mui from '../../lib/mui/js/mui.min.js'
	import {Toast} from 'mint-ui'

	export default {
		data() {
			return {
				imgCategory: [],  //所有图片分类数组
				picList: []  //图片列表数组
			}
		},
		created() {
			// this.getAllImgCategory()  //获取所有图片分类数据
			//this.getPicListByCateId(0)  //默认进入页面就请求"全部"(id:0)分类下的图片列表
		},
		mounted() {
			// 初始化scroll控件
			mui('.mui-scroll-wrapper').scroll({
				deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			});
		},
		methods: {
			getAllImgCategory() {   //获取所有图片分类
				this.$http.get('api/getimgcategory').then(result => {
					if(resule.body.status === 0){
						// 手动将"全部"追加到返回的分类数据里
						result.body.message.unshift({title:'全部',id:0})
						this.imgCategory = result.body.message
					}else{
						Toast('获取新闻列表失败!')
					}
				})
			},
			getPicListByCateId(cateId) {
				//根据分类id获取图片列表
				this.$http.get('api/getimages/'+cateId).then(result => {
					if(result.body.status === 0){
						this.picList = result.body.message
					}else{
						Toast('加载图片失败!')
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	* {
		touch-action: pan-y;
	}
	.pic-List{
		margin: 0;
		padding: 10px 10px 0 10px;
		li{
			list-style: none;
			text-align: center;
			background: #ccc;
			margin-bottom: 8px;
			box-shadow: 0 0 6px #666;
			position: relative;
			img{
				width: 100%;
				vertical-align: middle;
			}
			img[lazy=loading] {
			  	width: 40px;
			  	height: 300px;
			  	margin: auto;
			}
			.info{
				color: #fff;
				text-align: left;
				position: absolute;
				bottom: 0;
				background-color: rgba(0,0,0,0.4);
				width: 100%;
				padding: 4px;
				max-height: 84px;
				.infoTitle{
					font-size: 14px;
				}
				.infoBody{
					font-size: 12px;
				}
			}
		}
	}
	
</style>