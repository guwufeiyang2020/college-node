<template>
	<div class="train-ensure-wrapper">
		<div class="breadcrumb-wrap">
			<div class="breadcrumb">首页 > 培训保障</div>
		</div>
		<div class="college-banner-wrap">
			<div class="college-banner">
				<span class="title">培训保障</span
				>为学院配套的石油储运实训中心，内部设置工艺仿真区、设备操作区、模拟操作区、作业风险体验区、应急响应处置区、危险作业实训场地等配套设施。
			</div>
		</div>

		<div class="my-content-wrapper m-1200">
			<ul class="left-menu">
				<li class="left-menu-item" v-for="(item, index) in menuList" :key="index">
					<div class="menu-type" @click="toggleCourseList(item)">
						{{ item.menuType }}
						<i class="icon-arrow-down" :class="{ up: item.showMenuSubList }"></i>
					</div>
					<ul class="sub-menu-list" :class="{ show: item.showMenuSubList }">
						<li
							class="menu-item txt-ellipsis"
							:class="{ active: subItem.selected }"
							@click="selectCourse(subItem)"
							v-for="(subItem, subIndex) in item.menuSubList"
							:key="subIndex"
						>
							{{ subItem.subTitle }}
						</li>
					</ul>
				</li>
			</ul>
			<div class="right-content">
				<component :is="currentView" />
			</div>
		</div>
	</div>
</template>

<script>
import Hotel from './components/Hotel.vue';
import Meal from './components/Meal.vue';

export default {
  components: {
    Hotel,
    Meal,
  },
  data() {
    return {
      menuList: [
        {
          menuType: '培训保障',
          showMenuSubList: false,
          menuSubList: [
            {
              id: '1001',
              subTitle: '仿真实训中心',
            },
            {
              id: '1002',
              subTitle: '危险作业实训中心',
            },
            {
              id: '1003',
              subTitle: '专业设施',
            },
          ],
        },
        {
          menuType: '后勤保障',
          showMenuSubList: true,
          menuSubList: [
            {
              id: '2001',
              subTitle: '休闲娱乐设施',
            },
            {
              id: '2002',
              subTitle: '食堂',
            },
            {
              id: '2003',
              subTitle: '酒店',
            },
            {
              id: '2004',
              subTitle: '车辆',
            },
          ],
        },
      ],
      currentView: Hotel,
    };
  },
  methods: {
    toggleCourseList(item) {
      item.showMenuSubList = !item.showMenuSubList;
    },
    selectCourse(item) {
      this.menuList.forEach((itemMain) => {
        itemMain.menuSubList.forEach((subItem) => {
          this.$set(subItem, 'selected', false);
        });
      });
      this.$set(item, 'selected', true);
      if (item.id === '2003') {
        this.currentView = Hotel;
      } else if (item.id === '2002') {
        this.currentView = Meal;
      }
    },
    init() {
      this.menuList.forEach((item) => {
        item.menuSubList.forEach((subItem) => {
          this.$set(subItem, 'selected', false);
        });
      });
      if (this.$route.params.name === 'hotel') {
        this.currentView = Hotel;
        this.$set(this.menuList[1].menuSubList[2], 'selected', true);
      } else if (this.$route.params.name === 'meal') {
        this.currentView = Meal;
        this.$set(this.menuList[1].menuSubList[1], 'selected', true);
      }
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="scss" scoped>
.college-banner-wrap {
	height: 82px;
	background: #fff;
}
.my-content-wrapper {
	display: flex;
	justify-content: space-between;
	padding-top: 15px;
	.left-menu {
		width: 130px;
		.left-menu-item {
			margin-bottom: 10px;
		}
		.menu-type {
			position: relative;
			width: 130px;
			height: 44px;
			margin-bottom: 8px;
			cursor: pointer;
			background: linear-gradient(90deg, #4651c7 0%, #3e62d3 100%);
			padding: 0 10px;
			color: #fff;
			font-weight: bold;
			line-height: 44px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.icon-arrow-down {
				display: inline-block;
				width: 12px;
				height: 7px;
				background: url(../../assets/images/icon/arrow-down.png) no-repeat left top;
				transition: all 0.5s;
				&.up {
					transform: rotate(180deg);
				}
			}
		}
		.sub-menu-list {
			display: none;
			transition: all 0.5s;
			&.show {
				display: block;
			}
		}
		.menu-item {
			width: 130px;
			height: 36px;
			padding: 0 15px;
			line-height: 36px;
			margin-bottom: 6px;
			background: #fff;
			cursor: pointer;
			&.active {
				color: #15527f;
				border-left: 2px solid #15527f;
			}
		}
	}
	.right-content {
		width: 1050px;
		border-top: 1px solid #0060af;
		margin-bottom: 22px;
	}
}
</style>
