<template>
	<div class="newsinfoContainer">
		<!-- <h3 class="title">{{newsinfo.title}}</h3>
		<p>
			<span>发表时间:{{newsinfo.add_time | dateFormat}}</span>
			<span>点击:{{newsinfo.click}}次</span>
		</p>
		<hr>
		<div class="content" v-html="newsinfo.content"></div> -->

		<h3 class="title">新闻标题</h3>
		<p>
			<span>发表时间:2019-01-10 08:30</span>
			<span>点击:0次</span>
		</p>
		<hr>
		<div class="content" style="font-size: 12px;line-height: 20px;">
			一群嗜血的蚂蚁被腐肉所吸引

			我面无表情看孤独的风景

			失去你爱恨开始分明

			失去你还有什么事好关心

			当鸽子不再象征和平

			我终于被提醒 广场上喂食的是秃鹰

			我用漂亮的押韵形容被掠夺一空的爱情

			啊 乌云开始遮蔽 夜色不干净

			公园里葬礼的回音 在漫天飞行

			送你的白色玫瑰在纯黑的环境凋零

			乌鸦在树枝上诡异的很安静

			静静听我黑色的大衣想温暖你

			日渐冰冷的回忆 走过的走过的生命

			啊四周弥漫雾气

			我在空旷的墓地

			老去后还爱你

			<img src="../../css/images/3.jpg" height="1280" width="960">

			为你弹奏肖邦的夜曲

			纪念我死去的爱情

			跟夜风一样的声音

			心碎的很好听

			手在键盘敲很轻

			我给的思念很小心

			你埋葬的地方叫幽冥

			为你弹奏肖邦的夜曲

			纪念我死去的爱情

			而我为你隐姓埋名

			在月光下弹琴

			对你心跳的感应

			还是如此温热亲近

			怀念你那鲜红的唇印

			那些断翅的蜻蜓散落在这森林

			而我的眼睛没有丝毫同情

			失去你泪水混浊不清

			失去你我连笑容都有阴影

			风在长满青苔的屋顶

			嘲笑我的伤心

			像一口没有水的枯井

			我用凄美的字型

			描绘后悔莫及的那爱情

			为你弹奏肖邦的夜曲

			纪念我死去的爱情

			跟夜风一样的声音

			心碎的很好听

			手在键盘敲很轻

			我给的思念很小心

			你埋葬的地方叫幽冥

			为你弹奏肖邦的夜曲

			纪念我死去的爱情

			而我为你隐姓埋名

			在月光下弹琴

			对你心跳的感应

			还是如此温热亲近

			怀念你那鲜红的唇印

			一群嗜血的蚂蚁被腐肉所吸引

			我面无表情看孤独的风景

			失去你爱恨开始分明

			失去你还有什么事好关心

			当鸽子不再象征和平

			我终于被提醒 广场上喂食的是秃鹰

			我用漂亮的押韵 形容被掠夺一空的爱情
		</div>
		<!-- 评论区域 -->
		<comment :id="id"></comment>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	import comment from '../subcomponents/comment.vue'
	export default {
		data() {
			return {
				id: this.$route.params.id, //将url地址中传递过来的id值保存到data里
				newsinfo: {}
			}
		},
		created() {
			// this.getNewsInfo()  //获取新闻详情
		},
		methods: {
			getNewsInfo() {
				this.$http.get('api/getnew/'+this.id).then(result => {
					if(result.body.status === 0){
						this.newsinfo = result.body.message[0] 
					}else{
						Toast('获取新闻失败!')
					}
				})
			}
		},
		components: { //注册子组件
			comment
		}
	}
</script>

<style lang="scss">
	.newsinfoContainer{
		padding: 0 4px;
		.title{
			font-size: 16px;
			text-align: center;
			margin: 15px 0;
			color: red;
		}
		p{
			font-size: 14px;
			color: #226aff;
			display: flex;
			justify-content: space-between;
		}
		.content{
			width: 100%;
		}
	}
</style>