<template>
	<div>
		<!-- 轮播图 -->
		<mt-swipe :auto="4000">
		  <mt-swipe-item v-for="item in swipeDataList" :key="item.url">
		  	<img :src="item.img">
		  </mt-swipe-item>
		  <!-- 无法请求轮播图数据,此处手动添加图片数据 -->
		  <mt-swipe-item></mt-swipe-item>
		  <mt-swipe-item></mt-swipe-item>
		  <mt-swipe-item></mt-swipe-item>
		</mt-swipe>
		<!-- 九宫格 -->
		<ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
            	<img src="../../css/images/menu1.png">
            	<div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../css/images/menu2.png">
                <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../css/images/menu3.png">
                <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../css/images/menu4.png">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../css/images/menu5.png">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <img src="../../css/images/menu6.png">
                <div class="mui-media-body">联系我们</div></a></li>
        </ul>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	export default {
		data: function() {
			return {
				swipeDataList: []  //保存轮播图数据
			}
		},
		created() {
			// this.getSwipeData()
		},
		methods: {
			getSwipeData() { //获取轮播图数据的方法
				this.$http.get('http://vue.studyit.io/api/getlunbo').then(result => {
					if(result.body.status === 0){
						this.swipeDataList = result.body.message
					}else{
						Toast('加载轮播图失败!')
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mint-swipe {
		height: 200px;

		.mint-swipe-item {
			&:nth-child(1) {
				background: url(../../css/images/1.jpg);
			}
			&:nth-child(2) {
				background: url(../../css/images/2.jpg);
			}
			&:nth-child(3) {
				background: url(../../css/images/3.jpg);
			}
		}

		img {
			width: 100%;
			height: 100%;
		}
	}
	.mui-grid-view.mui-grid-9{
		background: #fff;
		border: none;
		img {
			width: 60px;
			height: 60px;
		}
		.mui-media-body {
			font-size: 12px !important;
		}
	}
	.mui-grid-view.mui-grid-9 .mui-table-view-cell {
		border: none;
	}
</style>