<template>
	<div class="pay-wrapper">
		<div class="title">
			付款
			<a href="javascript:;" class="fr">取消付款</a>
		</div>
		<div class="content">
			<img src="../../../assets/images/pay-img.png" />
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.pay-wrapper {
	width: 1200px;
	height: 630px;
	margin: 40px auto;
	background: #fff;
}
.title {
	height: 60px;
	border-bottom: 1px solid #d0dce4;
	color: #393e49;
	font-size: 18px;
	text-align: center;
	line-height: 60px;
	a {
		color: #4767d4;
		margin-right: 30px;
	}
}
.content {
	padding-top: 70px;
	text-align: center;
	img {
		width: 458px;
		height: 458px;
	}
}</style
>;
