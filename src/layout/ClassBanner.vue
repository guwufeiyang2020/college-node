<template>
	<div class="class-banner">
		<div class="class-banner-con">
			<div class="banner-left">
				<div class="title">培训手册</div>
				<div class="context">您购买的“关于HSE管理”的培训课程即将开课，请准时参加！</div>
			</div>
			<div class="banner-right">
				<div class="icon-word"></div>
				<div class="icon-right">
					<div class="icon-name">我的学员手册.docx</div>
					<div class="icon-method">
						<span>预览</span>
						<span>下载</span>
						<span>打印</span>
					</div>
					<div></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Layout',
  data() {
    return {};
  },
  components: {},
  created() {},
  watch: {},
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.class-banner {
	width: 100%;
	height: 126px;
	background: url('../assets/images/classBanner.png') no-repeat top center;
	background-size: 100% 100%;
	.class-banner-con {
		width: 1200px;
		margin: 0 auto;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-top: 24px;
		.banner-left {
			height: 78px;
			.title {
				font-size: 30px;
				font-weight: bold;
				color: #fff;
				line-height: 48px;
				margin-bottom: 6px;
			}
			.context {
				width: 447px;
				height: 30px;
				line-height: 30px;
				font-size: 14px;
				border-radius: 3px;
				color: #fff;
				padding-left: 30px;
				background: rgba(0, 0, 0, 0.3) url('../assets/images/man.png') no-repeat;
				background-position: 6px center;
				background-size: 20px 20px;
			}
		}
		.banner-right {
			width: 200px;
			height: 70px;
			background: #72a1cb;
			display: flex;
			align-items: center;
			padding-left: 6px;
			.icon-word {
				display: inline-block;
				width: 46px;
				height: 50px;
				background: url('../assets/images/2.png') no-repeat;
				background-size: 100% 100%;
				margin-right: 12px;
			}
			.icon-right {
				flex: 1;
				font-size: 14px;
				color: #fff;
				.icon-name {
					font-size: 14px;
					line-height: 20px;
				}
				.icon-method {
					margin-top: 6px;
					font-size: 12px;
					height: 16px;
					span {
						margin-right: 3px;
						padding: 3px;
						background: rgba(0, 104, 183, 1);
						cursor: pointer;
						&:nth-child(2) {
							background: rgba(0, 153, 68, 1);
						}
						&:nth-child(3) {
							background: rgba(236, 105, 65, 1);
						}
					}
				}
			}
		}
	}
	.conTab {
		width: 1200px;
		height: 0.8rem;
		background: #f00;
		margin: auto;
	}
}
</style>
