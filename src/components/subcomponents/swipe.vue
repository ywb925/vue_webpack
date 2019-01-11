<template>
	<div>
		<mt-swipe :auto="4000">
		  	<mt-swipe-item v-for="item in swipeDataList" :key="item.url">
		  		<img :src="item.img" :class="{'full': isFull}">
		  	</mt-swipe-item>
		  	<!-- 无法请求轮播图数据,此处手动添加图片数据 -->
		  	<mt-swipe-item></mt-swipe-item>
		  	<mt-swipe-item></mt-swipe-item>
		  	<mt-swipe-item></mt-swipe-item>
		</mt-swipe>
		
	</div>
</template>

<script>
	export default {
		props: ["swipeDataList","isFull"]
	}
</script>

<style lang="scss" scoped>
	.mint-swipe {
		height: 200px;

		.mint-swipe-item {
			text-align:  center;
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
			height: 100%;
		}
	}
	.full {
		width: 100%;
	}
</style>