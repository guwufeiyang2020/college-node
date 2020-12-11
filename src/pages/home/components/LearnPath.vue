<template>
	<!-- 图片列表 -->
	<div @mouseleave="mouseLeave" @mouseover="mouseOver">
		<swiper :options="swiperOption" ref="MySwiper" v-if="courseList.length > 1">
			<swiper-slide v-for="(item, index) in courseList" :key="index">
				<div @click="jumpObtainEvidence(item)">
					<img class="typeList-img" :src="item.kechengtupian_path" />
				</div>
			</swiper-slide>
			<div class="swiper-pagination"></div>
		</swiper>
	</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

export default {
  components: {
    swiper,
    swiperSlide
  },

  props: {
    type: {
      required: true
    }
  },
  data() {
    return {
      swiperOption: {
        // 环状轮播
        loop: true,
        autoplay: {
          delay: 3000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        slidesPerGroup: 1,
        slidesPerView: 5,
        grabCursor: true,
        freeMode: true
      },
      courseList: []
    };
  },
  methods: {
    jumpObtainEvidence(item) {
      let routeUrl = '';
      if (this.type === 1) {
        routeUrl = this.$router.resolve({
          path: `/skill/${item.id}`
        });
      } else if (this.type === 2) {
        routeUrl = this.$router.resolve({
          path: `/obtainEvidence/${item.id}`
        });
      }
      window.open(routeUrl.href, '_blank');
    },
    // 鼠标移入移出轮播
    mouseOver() {
      this.MySwiper.autoplay.stop();
    },
    mouseLeave() {
      this.MySwiper.autoplay.start();
    }
  },
  computed: {
    MySwiper() {
      return this.$refs.MySwiper.swiper;
    }
  },
  created() {},
  mounted() {
    if (this.type === 1) {
      this.courseList = [
        {
          id: '01',
          kechengtupian_path: require('../../../assets/images/temp/course1.png')
        },
        {
          id: '02',
          kechengtupian_path: require('../../../assets/images/temp/course2.png')
        },
        {
          id: '03',
          kechengtupian_path: require('../../../assets/images/temp/course3.png')
        },
        {
          id: '04',
          kechengtupian_path: require('../../../assets/images/temp/course4.png')
        },
        {
          id: '05',
          kechengtupian_path: require('../../../assets/images/temp/course5.png')
        }
      ];
    } else {
      this.courseList = [
        {
          id: '01',
          kechengtupian_path: require('../../../assets/images/temp/course6.png')
        },
        {
          id: '02',
          kechengtupian_path: require('../../../assets/images/temp/course7.png')
        },
        {
          id: '03',
          kechengtupian_path: require('../../../assets/images/temp/course8.png')
        },
        {
          id: '04',
          kechengtupian_path: require('../../../assets/images/temp/course9.png')
        },
        {
          id: '05',
          kechengtupian_path: require('../../../assets/images/temp/course10.png')
        }
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.typeList-img {
	width: 220px;
	height: 120px;
	border-radius: 6px;
}
.typeList-title {
	width: 90%;
	position: absolute;
	top: 0;
	margin-top: 40px;
	text-align: center;
	font-size: 20px;
	color: #fff;
	line-height: 20px;
}
</style>
