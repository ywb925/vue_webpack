<template>
	<div class="commentContainer">
		<h3>发表评论</h3>
		<hr>
		<textarea placeholder="请输入要评论的内容(最多不超过120字)" maxlength="120" v-model="cmtContent"></textarea>
		<mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
		<div class="cmtList">
			<div class="cmtItem" v-for="(item,i) in comments" :key="item.add_time">
				<div class="cmtTitle">
					第{{i+1}}楼&nbsp;&nbsp;用户:{{item.user_name}}&nbsp;&nbsp;发表时间:{{item.add_time | dateFormat}}
				</div>
				<div class="cmtBody">
					{{item.content === 'undefined'?'此用户很懒,什么也没留下~':item.content}}
				</div>
			</div>

			<div class="cmtItem">
				<div class="cmtTitle">
					第1楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2019-01-09 10:10:10
				</div>
				<div class="cmtBody">
					好好学习 天天向上
				</div>
			</div>
			<div class="cmtItem">
				<div class="cmtTitle">
					第2楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2019-01-09 10:10:10
				</div>
				<div class="cmtBody">
					Vue棒呆了!!!
				</div>
			</div>
			<div class="cmtItem">
				<div class="cmtTitle">
					第3楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2019-01-09 10:10:10
				</div>
				<div class="cmtBody">
					心想事成~~~
				</div>
			</div>
			<div class="cmtItem">
				<div class="cmtTitle">
					第4楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2019-01-09 10:10:10
				</div>
				<div class="cmtBody">
					火钳刘明
				</div>
			</div>
			<div class="cmtItem">
				<div class="cmtTitle">
					第5楼&nbsp;&nbsp;用户:匿名用户&nbsp;&nbsp;发表时间:2019-01-09 10:10:10
				</div>
				<div class="cmtBody">
					自古二楼出人才
				</div>
			</div>
		</div>
		<mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
	</div>
</template>

<script>
	import {Toast} from 'mint-ui'
	export default {
		data() {
			return {
				pageIndex: 1,  //默认展示第一页评论数据
				comments: [],
				cmtContent: ''
			}
		},
		props: ['newsId'],
		created() {
			// this.getcomments()
		},
		methods: {
			getcomments() { //获取评论数据
				this.$http.get("api/getcomments/"+ this.newsId + "?pageindex=" + this.pageIndex).then(result => {
					if(result.body.status === 0){
						// this.comments = result.body.message
						//每当获取新评论数据时,不应该清空覆盖旧的数据,而是应该在原有数据基础上拼接上新数据
						this.comments = this.comments.concat(result.body.message)
					}else{
						Toast("加载评论失败!")
					}
				})
			},
			getMore() {
				this.pageIndex++
				// this.getcomments()
				console.log("加载下一页数据...每次pageIndex都加1然后请求数据---当前pageIndex="+this.pageIndex)
			},
			// 发表评论方法:
			// 1.发表内容后,通过vue-resource发送请求把评论内容提交给服务器
			//2.当评论成功后,手动拼接一个最新的评论数据对象,调用数组的unshift方法,把最新的评论追加到data中comments的首项
			postComment() {
				// 校验输入评论内容是否为空
				if(this.cmtContent.trim().length === 0){
					return Toast('评论内容不能为空!')
				}
				//参数:1.url地址 2.提交给服务器的数据对象
				//3.定义提交时表单中数据的格式{emulateJSON: true}
				this.$http.post('api/postcomment/'+this.$route.params.id, {content: this.cmtContent.trim()}).then(result => {
					if(result.body.status === 0){
						var cmt = {
							user_name: '匿名用户',
							add_time: Date.now(),
							content: this.cmtContent.trim()
						}
						this.comments.unshift(cmt)
						this.cmtContent = ''
					}else{
						Toast('评论发表失败!')
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.commentContainer{
		h3{
			font-size: 18px;
		}
		textarea{
			font-size: 14px;
			height: 85px;
			margin: 0;
		}
		.cmtList{
			margin: 5px 0;
			.cmtItem{
				font-size: 12px;
				.cmtTitle{
					background: #eee;
					line-height: 36px;
				}
				.cmtBody{
					line-height: 36px;
					text-indent: 2em;
				}
			}
		}

	}
</style>