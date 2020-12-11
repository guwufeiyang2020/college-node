<template>
	<!-- banner -->
	<div class="banner-wrapper">
		<el-carousel height="361px">
			<el-carousel-item v-for="(item, index) in imgList" :key="index">
				<img v-lazy="item.dongtaitupian_path" />
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        {
          dongtaitupian_path: require('../../../assets/images/home/home-banner.jpg'),
        },
        {
          dongtaitupian_path: require('../../../assets/images/home/home-banner.jpg'),
        },
      ],
    };
  },
  mounted() {
    // this.getBannerData();
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.banner-wrapper {
	height: 361px;
	margin-bottom: 24px;
	img {
		width: 100%;
		height: 100%;
		font-size: 14px;
	}
}
</style>
