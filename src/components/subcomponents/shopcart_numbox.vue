<template>
	<div class="mui-numbox" data-numbox-min='1'>
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" :value="initCount" @change="numChanged" ref="numbox"/>
		<button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
	</div>
</template>
<script>
	import mui from '../../lib/mui/js/mui.min.js'
	export default {
		mounted() {
			// 初始化num-box
			mui('.mui-numbox').numbox()
		},
		methods: {
			numChanged() {
				this.$store.commit('updateGoodsInfo',{id: this.goodsId,count: this.$refs.numbox.value})
			}
		},
		props: ["initCount","goodsId"],
		watch: {
			// max: function(newVal,oldVal) {
			// 	mui('.mui-numbox').numbox().setOption('max',newVal)
			// }
		}
	}
</script>

<style lang="scss" scoped>
	.mui-numbox{
		height: 28px;
	}
</style>