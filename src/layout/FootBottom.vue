<template>
	<div class="footer-wrap">
		<div class="footer-con">
			<div class="footer-left">
				<img src="../assets/images/layout/bottomImg.png" class="logo" />
				<div class="footer-text">
					<p>Copyright © 2019 Sinochem. All Rights Reserved.</p>
					<p>
						岙山应急管理学院 版权所有 | 站点地图 | 联系我们 | 网站使用帮助 | 版权所有 | 法律声明1
					</p>
				</div>
			</div>
			<div class="footer-kehuduan">
				<img src="../assets/images/layout/anzhuoIcon.png" />
				<img src="../assets/images/layout/iosIcon.png" />
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Sidebar',
  computed: {
    ...mapGetters(['user']),
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.footer-wrap {
	height: 100px;
	background: #434343;
	box-sizing: border-box;
	.footer-con {
		width: 1200px;
		height: 100%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.footer-left {
			display: flex;
			align-items: center;
			.logo {
				display: block;
				width: 64px;
				height: 64px;
				margin-right: 20px;
			}
			.footer-text {
				width: 580px;
				font-size: 14px;
				color: #a3a7ac;
				line-height: 24px;
			}
		}
		.footer-kehuduan {
			width: 176px;
			img {
				display: block;
				width: 100%;
				margin-bottom: 5px;
				&:last-child {
					margin-bottom: 0;
				}
			}
		}
	}
}
</style>
