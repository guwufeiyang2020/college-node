<template>
	<div class="course-system-wrapper">
		<ul class="course-menu-list">
			<li class="course-menu-item" v-for="(item, index) in courseMenuList" :key="index">
				<div class="course-type" @click="toggleCourseList(item)">
					<img class="course-type-bg" v-lazy="item.bg" />
					<p class="course-type-text">
						{{ item.courseMenuType }}
						<i class="icon-arrow-down" :class="{ up: item.showCourseMenuSubList }"></i>
					</p>
				</div>
				<ul class="course-item-list" :class="{ show: item.showCourseMenuSubList }">
					<li
						class="course-item txt-ellipsis"
						:class="{ active: subItem.selected }"
						@click="selectCourse(subItem)"
						v-for="(subItem, subIndex) in item.courseMenuSubList"
						:key="subIndex"
					>
						{{ subItem.subTitle }}
					</li>
				</ul>
			</li>
		</ul>
		<div class="course-list-wrapper">
			<ul class="course-content-list clearfix">
				<router-link
					tag="li"
					:to="`/safeClass/${item.id}`"
					class="course-content-item clearfix"
					v-for="(item, index) in courseContentList"
					:key="index"
				>
					<img v-lazy="item.img" class="course-img fl" />
					<div class="course-content fl">
						<p class="course-content-title txt-ellipsis">{{ item.title }}</p>
						<p class="course-content-desc two-line">{{ item.desc }}</p>
						<div class="course-content-author">
							<div>{{ item.teachType }}</div>
							<div class="author">
								<img v-lazy="item.teacherImg" class="author-img" />
								{{ item.teacher }}
							</div>
						</div>
					</div>
				</router-link>
			</ul>
			<div class="pagination-wrapper">
				<div class="course-total">
					该分类共
					<span class="num">{{ courseContentList.length }}</span
					>门课程
				</div>
				<el-pagination layout="prev, pager, next" :total="50"></el-pagination>
			</div>
		</div>
	</div>
</template>

<script>
import util from '../../../utils/util';

export default {
  data() {
    return {
      courseMenuList: [
        {
          courseMenuType: '安全生产类',
          bg: require('../../../assets/images/home/course-system-img1.jpg'),
          showCourseMenuSubList: true,
          courseMenuSubList: [
            {
              id: '1001',
              subTitle: '石油储运类技能培训'
            },
            {
              id: '1002',
              subTitle: '危化品企业应急处置类培训'
            },
            {
              id: '1003',
              subTitle: '危化品企业HSE管理类培训'
            },
            {
              id: '1004',
              subTitle: '危险作业HSE管理类'
            },
            {
              id: '1005',
              subTitle: '危险化学品消防救援培训'
            }
          ]
        },
        {
          courseMenuType: '工程施工类',
          bg: require('../../../assets/images/home/course-system-img2.jpg'),
          showCourseMenuSubList: false,
          courseMenuSubList: [
            {
              id: '2001',
              subTitle: '石油储运类技能培训'
            },
            {
              id: '2002',
              subTitle: '危化品企业应急处置类培训'
            },
            {
              id: '2003',
              subTitle: '危化品企业HSE管理类培训'
            },
            {
              id: '2004',
              subTitle: '危险作业HSE管理类'
            },
            {
              id: '2005',
              subTitle: '危险化学品消防救援培训'
            }
          ]
        },
        {
          courseMenuType: '应急救援类',
          bg: require('../../../assets/images/home/course-system-img3.jpg'),
          showCourseMenuSubList: false,
          courseMenuSubList: [
            {
              id: '3001',
              subTitle: '石油储运类技能培训'
            },
            {
              id: '3002',
              subTitle: '危化品企业应急处置类培训'
            },
            {
              id: '3003',
              subTitle: '危化品企业HSE管理类培训'
            }
          ]
        }
      ],
      courseContentList: [
        {
          id: '001',
          img: require('../../../assets/images/temp/course-content-img1.jpg'),
          title: '油品基本特性分析以及汽柴油SDS',
          desc:
						'油品基本特性油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油',
          teachType: '理论教学',
          teacherImg: require('../../../assets/images/temp/author-img1.jpg'),
          teacher: '宋超'
        },
        {
          id: '002',
          img: require('../../../assets/images/temp/course-content-img5.png'),
          title: '码头船岸延伸',
          desc:
						'油品基本特性油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油',
          teachType: '理论教学',
          teacherImg: require('../../../assets/images/temp/author-img1.jpg'),
          teacher: '宋超'
        },
        {
          id: '003',
          img: require('../../../assets/images/temp/course-content-img3.jpg'),
          title: '泵：常用泵（卧式/立式离心泵、螺杆泵、滑',
          desc:
						'油品基本特性油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油',
          teachType: '理论教学',
          teacherImg: require('../../../assets/images/temp/author-img1.jpg'),
          teacher: '宋超'
        },
        {
          id: '004',
          img: require('../../../assets/images/temp/course-content-img4.jpg'),
          title: '泵：常用泵（卧式/立式离心泵、螺杆泵、滑',
          desc:
						'油品基本特性油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油',
          teachType: '理论教学',
          teacherImg: require('../../../assets/images/temp/author-img1.jpg'),
          teacher: '宋超'
        },
        {
          id: '005',
          img: require('../../../assets/images/temp/course-content-img1.jpg'),
          title: '油品基本特性分析以及汽柴油SDS',
          desc:
						'油品基本特性油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油',
          teachType: '理论教学',
          teacherImg: require('../../../assets/images/temp/author-img1.jpg'),
          teacher: '宋超'
        },
        {
          id: '006',
          img: require('../../../assets/images/temp/course-content-img2.jpg'),
          title: '泵：常用泵（卧式/立式离心泵、螺杆泵、滑',
          desc:
						'油品基本特性油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油',
          teachType: '理论教学',
          teacherImg: require('../../../assets/images/temp/author-img1.jpg'),
          teacher: '宋超'
        },
        {
          id: '007',
          img: require('../../../assets/images/temp/course-content-img3.jpg'),
          title: '泵：常用泵（卧式/立式离心泵、螺杆泵、滑',
          desc:
						'油品基本特性油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油',
          teachType: '理论教学',
          teacherImg: require('../../../assets/images/temp/author-img1.jpg'),
          teacher: '宋超'
        },
        {
          id: '008',
          img: require('../../../assets/images/temp/course-content-img4.jpg'),
          title: '泵：常用泵（卧式/立式离心泵、螺杆泵、滑',
          desc:
						'油品基本特性油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油',
          teachType: '理论教学',
          teacherImg: require('../../../assets/images/temp/author-img1.jpg'),
          teacher: '宋超'
        },
        {
          id: '009',
          img: require('../../../assets/images/temp/course-content-img1.jpg'),
          title: '泵：常用泵（卧式/立式离心泵、螺杆泵、滑',
          desc:
						'油品基本特性油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油',
          teachType: '理论教学',
          teacherImg: require('../../../assets/images/temp/author-img1.jpg'),
          teacher: '宋超'
        },
        {
          id: '010',
          img: require('../../../assets/images/temp/course-content-img2.jpg'),
          title: '泵：常用泵（卧式/立式离心泵、螺杆泵、滑',
          desc:
						'油品基本特性油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油',
          teachType: '理论教学',
          teacherImg: require('../../../assets/images/temp/author-img1.jpg'),
          teacher: '宋超'
        },
        {
          id: '011',
          img: require('../../../assets/images/temp/course-content-img3.jpg'),
          title: '泵：常用泵（卧式/立式离心泵、螺杆泵、滑',
          desc:
						'油品基本特性油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油',
          teachType: '理论教学',
          teacherImg: require('../../../assets/images/temp/author-img1.jpg'),
          teacher: '宋超'
        },
        {
          id: '012',
          img: require('../../../assets/images/temp/course-content-img4.jpg'),
          title: '泵：常用泵（卧式/立式离心泵、螺杆泵、滑',
          desc:
						'油品基本特性油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油品基本特性分析以及汽柴油SDS油',
          teachType: '理论教学',
          teacherImg: require('../../../assets/images/temp/author-img1.jpg'),
          teacher: '宋超'
        }
      ]
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.courseMenuList.forEach((item) => {
        item.courseMenuSubList.forEach((subItem) => {
          this.$set(subItem, 'selected', false);
        });
      });
      this.$set(this.courseMenuList[0].courseMenuSubList[0], 'selected', true);
    },
    toggleCourseList(item) {
      item.showCourseMenuSubList = !item.showCourseMenuSubList;
    },
    selectCourse(item) {
      this.courseMenuList.forEach((mainItem) => {
        mainItem.courseMenuSubList.forEach((subItem) => {
          this.$set(subItem, 'selected', false);
        });
      });
      this.$set(item, 'selected', true);
      this.courseContentList = util.getRandomArrayElements(this.courseContentList, 8);
    }
  }
};
</script>

<style lang="scss" scoped>
.course-system-wrapper {
	display: flex;
	justify-content: space-between;
	padding-top: 24px;
	.course-menu {
		width: 165px;
	}
	.course-menu-item {
		margin-bottom: 10px;
	}
	.course-type {
		position: relative;
		width: 165px;
		height: 44px;
		margin-bottom: 10px;
		cursor: pointer;
		.course-type-bg {
			position: absolute;
			left: 0;
			top: 0;
			width: 165px;
			height: 44px;
		}
		.course-type-text {
			position: absolute;
			left: 0;
			top: 0;
			width: 165px;
			height: 44px;
			padding: 0 10px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #fff;
			font-weight: bold;
			line-height: 44px;
		}
		.icon-arrow-down {
			display: inline-block;
			width: 12px;
			height: 7px;
			background: url(../../../assets/images/icon/arrow-down.png) no-repeat left top;
			transition: all 0.5s;
			&.up {
				transform: rotate(180deg);
			}
		}
	}
	.course-item-list {
		display: none;
		transition: all 0.5s;
		&.show {
			display: block;
		}
	}
	.course-item {
		width: 164px;
		height: 36px;
		padding: 0 15px;
		line-height: 36px;
		margin-bottom: 14px;
		background: #d4d4d4;
		cursor: pointer;
		&.active {
			background: #fff;
			color: $colorBlue;
			box-shadow: 0px 2px 2px rgba(180, 180, 180, 0.4);
		}
	}
	.course-list-wrapper {
		width: 1006px;
		.course-content-item {
			float: left;
			width: 490px;
			height: 120px;
			background: #fff;
			margin-bottom: 12px;
			padding: 13px;
			cursor: pointer;
			&:nth-child(2n + 1) {
				margin-right: 20px;
			}
			.course-img {
				margin-right: 15px;
			}
			.course-content {
				width: 345px;
				font-size: 14px;
			}
			.course-content-title {
				font-size: 16px;
				margin-bottom: 8px;
			}
			.course-content-desc {
				color: #969fa8;
				margin-bottom: 2px;
			}
			.course-content-author {
				height: 30px;
				display: flex;
				align-items: center;
				justify-content: space-between;
			}
			.author {
				display: flex;
				align-items: center;
			}
			.author-img {
				width: 17px;
				height: 17px;
				border-radius: 50%;
				margin-right: 5px;
				overflow: hidden;
			}
		}
		.pagination-wrapper {
			display: flex;
			justify-content: space-between;
			// height: 44px;
			// line-height: 44px;
		}
		.course-total {
			color: #969fa8;
		}
		.num {
			color: $colorBlue;
			font-size: 16px;
			font-weight: bold;
			padding: 0 5px;
		}
	}
	.el-pagination {
		button {
			background: transparent !important;
		}
	}
	.el-pager {
		.number {
			background: transparent !important;
		}
	}
}
</style>
