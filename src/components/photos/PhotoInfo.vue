<template>
	<div class="photoinfoContainer">
		<!-- <h3 class="title">{{photoinfo.title}}</h3>
		<p>
			<span>发表时间:{{photoinfo.add_time | dateFormat}}</span>
			<span>点击:{{photoinfo.click}}次</span>
		</p>
		<hr> -->
		<!-- 缩略图区域 -->
		<!-- <div class="thumbs">
			<img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index,list)" :key="item.src">
			<vue-preview :slides="list"></vue-preview>
		</div>
		<div class="content" v-html="photoinfo.content"></div> -->
		<!-- 评论子组件 -->
		<!-- <comment :id="id"></comment> -->

		<h3 class="title">图片详情标题</h3>
		<p>
			<span>发表时间:2019-01-10 10:00:00</span>
			<span>点击:2次</span>
		</p>
		<hr>
		<!-- 缩略图区域 -->
		<div class="thumbs">
			<!-- <img class="preview-img" v-for="(item, index) in list" :src="item.src" height="100" @click="$preview.open(index, list)" :key="item.src"> -->
			<!-- vue-preview插件更新后的写法 -->
			<vue-preview :slides="list"></vue-preview>
		</div>
		<!-- 图片内容区域 -->
		<div class="content">
			大家好！"岁月不居，时节如流。"

			新年的钟声已敲响，让我们满怀信心和期待，携手2019。
			祝福中国！祝福世界！
			祝福自己！祝福亲戚和朋友！祝福身边所有的人！
		</div>
		<!-- 评论子组件 -->
		<comment :id="id"></comment>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	import comment from '../subcomponents/comment.vue'
	export default {
		data() {
			return {
				id: this.$route.params.id, //将url地址中传递过来的img的id值保存到data里
				photoinfo: {},
				//list: []   //缩略图数组
				list: [
					{src: '../../css/images/1.jpg',msrc: '../../css/images/1.jpg',w: 600, h: 400},
					{src: '../../css/images/2.jpg',msrc: '../../css/images/2.jpg',w: 600, h: 400},
					{src: '../../css/images/3.jpg',msrc: '../../css/images/3.jpg',w: 600, h: 400},
					{src: '../../css/images/shuijiao.jpg',msrc: '../../css/images/shuijiao.jpg',w: 600, h: 400}
				]
			}
		},
		created() {
			//this.getPhotoInfo()  //获取图片详情
			//this.getThumbs()  //获取缩略图
		},
		methods: {
			getPhotoInfo() {
				this.$http.get('api/getphoto/'+this.id).then(result => {
					if(result.body.status === 0){
						this.photoinfo = result.body.message[0] 
					}else{
						Toast('获取图片详情失败!')
					}
				})
			},
			getThumbs() { //获取缩略图
				this.$http.get('api/getthumimages'+this.id).then(result => {
					if(result.body.status === 0){
						//循环每个缩略图数据,补全图片的宽和高
						result.body.message.forEach(item => {
							item.msrc = item.src
							item.w = 600
							item.h = 400
						})
						// 将完整数据保存到list中
						this.list = result.body.message
					}else{
						Toast('获取缩略图失败!')
					}
				})
			}
		},
		components: { //注册子组件
			comment
		}
	}
</script>

<style lang="scss" scoped>
	.photoinfoContainer{
		padding: 4px;
		.title{
			font-size: 16px;
			text-align: center;
			margin: 15px 0;
			color: #26a2ff;
		}
		p{
			font-size: 14px;
			display: flex;
			justify-content: space-between;
		}
		.content{
			width: 100%;
			font-size: 14px;
			line-height: 24px;
		}
	}
</style>