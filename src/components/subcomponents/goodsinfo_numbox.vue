<template>
	<div class="mui-numbox" data-numbox-min='1'>
		<button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
		<input id="test" class="mui-input-numbox" type="number" value="1" @change="numChanged" ref="numbox"/>
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
				// 每当文本框的数值被修改时，立即把最新的数据通过事件调用的方法传递给父组件
				this.$emit("getCount",parseInt(this.$refs.numbox.value))
			}
		},
		props: ["max"],
		watch: {
			max: function(newVal,oldVal) {
				mui('.mui-numbox').numbox().setOption('max',newVal)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.mui-numbox{
		height: 28px;
	}
</style>