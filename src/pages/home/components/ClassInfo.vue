<template>
	<div class="class-info">
		<h2 class="home-title">
			<div class="m-1200 title-bg3">
				开班信息
				<span class="class-type" :class="{ checked: classType === 1 }" @click="selectedClassType(1)"
					>技能类开班</span
				>
				<span class="class-type" :class="{ checked: classType === 2 }" @click="selectedClassType(2)"
					>取证类开班</span
				>
			</div>
		</h2>
		<div class="m-1200">
			<ul class="class-info-list">
				<li class="class-info-item" v-for="item in classInfoList" :key="item.id">
					<span class="info-title">【{{ item.title }}】</span>
					{{ item.desc }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import util from '../../../utils/util';

export default {
  data() {
    return {
      classType: 1,
      classInfoList: [
        {
          id: '001',
          title: '储运设备及仪表',
          desc: '即将开班！快来围观报名吧！预计开班时间：2020-06-02至2020-06-06',
        },
        {
          id: '002',
          title: '安全生产责任制实践',
          desc: '即将开班！快来围观报名吧！预计开班时间：2020-06-02至2020-06-06',
        },
        {
          id: '003',
          title: '事故与应急',
          desc: '即将开班！快来围观报名吧！预计开班时间：2020-06-02至2020-06-06',
        },
        {
          id: '004',
          title: '防护装备操作、维保与故障分析排查',
          desc: '即将开班！快来围观报名吧！预计开班时间：2020-06-02至2020-06-06',
        },
      ],
    };
  },
  created() {},
  methods: {
    selectedClassType(type) {
      this.classType = type;
      this.classInfoList = util.getRandomArrayElements(this.classInfoList, 4);
    },
  },
};
</script>

<style lang="scss" scoped>
.class-info {
	padding-bottom: 30px;
}
.home-title {
	height: 64px;
	font-size: 26px;
	line-height: 64px;
	color: $colorMainText;
	background: #fff;
	.title-bg3 {
		background: url('../../../assets/images/home/home-bg3.png') no-repeat right top;
	}
}
.class-type {
	font-size: 18px;
	margin-left: 36px;
	cursor: pointer;
	padding: 8px 11px;
	&:first-of-type {
		margin-left: 64px;
	}
	&.checked {
		background: $colorBlue;
		color: #fff;
	}
}
.class-info-list {
	padding-top: 22px;
}
.class-info-item {
	height: 60px;
	line-height: 60px;
	background: #fff url(../../../assets/images/home/icon-class.jpg) no-repeat 16px center;
	margin-bottom: 10px;
	padding: 0 16px 0 45px;
	cursor: pointer;
	.info-title {
		color: $colorBlue;
	}
}
</style>
