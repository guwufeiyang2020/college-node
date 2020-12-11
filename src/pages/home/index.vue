<template>
	<div class="home-wrapper">
		<!-- banner -->
		<banner></banner>

		<div class="home-section-wrapper">
			<h2 class="home-title">
				<div class="m-1200 title-bg1">系统化学习路径</div>
			</h2>
			<h3 class="home-title-sub">
				<div class="m-1200">
					<span class="type">技能类</span>
					从客户培训需求出发，“理论+实操”右击结合，为客户提供定制化培训产品
				</div>
			</h3>
			<div class="m-1200">
				<learn-path :type="1"></learn-path>
			</div>
			<h3 class="home-title-sub">
				<div class="m-1200">
					<a class="more">更多>></a>
					<span class="type">取证类</span>
					危化品企业准入类培训取证，国家应急管理部、人力资源与社会保障部等要求持证
				</div>
			</h3>
			<div class="m-1200">
				<learn-path :type="2"></learn-path>
			</div>
		</div>

		<div class="home-section-wrapper">
			<h2 class="home-title">
				<div class="m-1200 title-bg2">课程体系</div>
			</h2>
			<div class="m-1200">
				<course-system></course-system>
			</div>
		</div>
		<!-- 开班信息 -->
		<class-info></class-info>

		<h2 class="home-title">
			<div class="m-1200 title-bg4">我要报名</div>
		</h2>
		<div class="m-1200">
			<to-apply></to-apply>
		</div>

		<right-box></right-box>
	</div>
</template>

<script>
import Banner from './components/Banner.vue';
import LearnPath from './components/LearnPath.vue';
import CourseSystem from './components/CourseSystem.vue';
import ClassInfo from './components/ClassInfo.vue';
import ToApply from './components/ToApply.vue';
import RightBox from '../../layout/RightBox.vue';

export default {
  /* metaInfo: {
    title: '岙山学院',
    meta: [
      {
        name: '中化',
        content: '中化安全与应急学院'
      },
      {
        name: '应急学院',
        content: '中化安全与应急学院'
      }
    ]
  }, */
  components: {
    Banner,
    LearnPath,
    CourseSystem,
    ClassInfo,
    ToApply,
    RightBox,
  },
};
</script>

<style lang="scss" scoped>
.home-wrapper {
	background: $colorBg;
}
// 块区域
.home-section-wrapper {
	margin-bottom: 30px;
}
.home-title {
	height: 64px;
	font-size: 26px;
	line-height: 64px;
	color: $colorMainText;
	background: #fff;
	font-weight: normal;
	.title-bg1 {
		background: url('../../assets/images/home/home-bg1.png') no-repeat right top;
	}
	.title-bg2 {
		background: url('../../assets/images/home/home-bg2.png') no-repeat right top;
	}
	.title-bg4 {
		background: url('../../assets/images/home/home-bg4.png') no-repeat right top;
	}
}
.home-title-sub {
	height: 70px;
	line-height: 70px;
	color: $colorMainText;
	.type {
		font-size: 16px;
		font-weight: bold;
		color: $colorBlue;
	}
	.more {
		color: $colorBlue;
		float: right;
		font-size: 14px;
		padding-right: 20px;
	}
}
</style>
