<template>
	<div class="goodsdescContainer">
		<!-- <h3>{{desc.title}}</h3>
		<hr>
		<div class="content" v-html="desc.content"></div> -->

		<h3>Apple iPhone X 银色4G手机</h3>
		<hr>
		<div class="content">
			一群嗜血的蚂蚁被腐肉所吸引

		我面无表情看孤独的风景

		失去你爱恨开始分明

		失去你还有什么事好关心

		当鸽子不再象征和平

		我终于被提醒 广场上喂食的是秃鹰

		我用漂亮的押韵形容被掠夺一空的爱情
			<img src="https://img20.360buyimg.com/vc/jfs/t1/2989/1/11532/3806781/5bcfd0ceE9cb3575c/c7a5b12aada8552b.jpg">
			啊 乌云开始遮蔽 夜色不干净

		公园里葬礼的回音 在漫天飞行

		送你的白色玫瑰在纯黑的环境凋零

		乌鸦在树枝上诡异的很安静

		静静听我黑色的大衣想温暖你

		日渐冰冷的回忆 走过的走过的生命

		啊四周弥漫雾气

		我在空旷的墓地

		老去后还爱你
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				desc: {}
			}
		},
		created() {
			//this.getGoodsDesc()
		},
		methods: {
			getGoodsDesc() {
				this.$http.get('api/goods/getdesc/'+this.$route.params.id).then(result => {
					if(result.body.status === 0){
						this.desc = result.body.message[0]
					}
				})
			}
		}
	}
</script>


<style lang="scss">
	.goodsdescContainer{
		padding: 4px;
		h3{
			font-size: 16px;
			color: #226aff;
			text-align: center;
			margin: 15px 0;
		}
		.content{
			font-size: 14px;
			img{
				width: 100%
			}
		}
	}
</style>