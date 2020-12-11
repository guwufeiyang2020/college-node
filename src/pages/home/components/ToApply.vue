<template>
	<div class="to-apply-wrapper">
		<router-link class="apply-entrance" to="/personOrder" target="_blank">
			<div class="apply-title">
				<img src="../../../assets/images/home/personal-img.png" class="apply-img" />
				个人入口
			</div>
			<div class="apply-desc">
				我要学习的个人学习模块，进入后您可以根据您的具体岗位选择您需要<br />
				的培训课程，进行学习包含初训、复训和换证。<br />
				个人课程
			</div>
		</router-link>
		<router-link class="apply-entrance" to="/teamOrder" target="_blank">
			<div class="apply-title">
				<img src="../../../assets/images/home/team-img.png" class="apply-img" />
				团队入口
			</div>
			<div class="apply-desc">
				我要学习的团体学习模块，进入后可查看所有的团体课程，也可以进行定<br />
				制课程，您选择课程后，可以得到一份培训手册。<br />
				团队课程
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.to-apply-wrapper {
	padding: 33px 0 30px 24px;
	display: flex;
	justify-content: space-between;
	.apply-entrance {
		position: relative;
		display: block;
		width: 567px;
		height: 111px;
		background: #fff;
		border: 1px solid #d7e4f4;
		&:first-of-type {
			.apply-img {
				width: 31px;
				height: 38px;
				margin: 13px 0 4px 0;
			}
		}
		&:last-of-type {
			.apply-img {
				width: 61px;
				height: 38px;
				margin: 13px 0 4px 0;
			}
		}
		.apply-title {
			position: absolute;
			left: -24px;
			top: -8px;
			width: 90px;
			height: 90px;
			background: #4272d7;
			color: #fff;
			font-weight: bold;
			font-size: 18px;
			display: flex;
			flex-direction: column;
			align-items: center;
		}
		&:last-of-type {
			.apply-title {
				background: #e98c38;
			}
		}
	}

	.apply-desc {
		padding: 18px 0 0 80px;
		color: #868d9e;
		line-height: 24px;
	}
}
</style>
