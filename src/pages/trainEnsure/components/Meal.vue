<!-- 就餐信息 -->
<template>
	<div class="meal-wrapper">
		<h3 class="title">就餐信息</h3>
		<div class="content">
			<img src="../../../assets/images/meal-img.png" />
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.title {
	height: 34px;
	line-height: 34px;
	background: #f2f6f9;
	border-left: 1px solid #fff;
	border-right: 1px solid #fff;
	padding-left: 16px;
	color: #51585e;
}
.content {
	padding: 33px 0 0 30px;
	background: #fff;
	img {
		width: 798px;
		height: 596px;
		margin: 10px auto;
	}
}
</style>
