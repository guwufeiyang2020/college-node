<template>
	<div class="login-footer">
		<span>技术支持：中化安元应急管理技术（舟山）有限公司</span>
		<span @click="jumpGov"> <i></i>京公网安备32010602010331号 </span>
	</div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    jumpGov() {
      window.open('http://www.beian.miit.gov.cn/');
    },
  },
};
</script>

<style scoped lang="scss">
.login-footer {
	user-select: none;
	height: 100%;
	background-color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	span {
		&:nth-child(2) {
			cursor: pointer;
		}
		line-height: 35px;
		color: rgba(50, 55, 65, 1);
		display: flex;
		align-items: center;
		i {
			display: inline-block;
			width: 14px;
			height: 14px;
			background-image: url('../../../assets/images/login/badge.png');
			background-size: 100% 100%;
			margin-right: 10px;
		}
	}
}
</style>
