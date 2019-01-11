<template>
	<div class="goodscommentContainer">
		<comment :id="$route.params.is"></comment>
	</div>
</template>

<script>
	import comment from '../subcomponents/comment.vue'
	export default {
		components: {
			comment
		}
	}
</script>


<style lang="scss" scoped>
	.goodscommentContainer{
		padding: 4px;
	}
</style>