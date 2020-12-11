<template>
	<div class="my-wrapper">
		<div class="my-banner-wrapper">
			<div class="clearfix m-1200">
				<div class="banner-left">
					<h2 class="title">我的</h2>
					<div class="info-list">
						<div class="info-item user-img">
							<img src="../../assets/images/PersonalCenter/user.png" />
							<span>李晓</span>
						</div>
						<div class="info-item zhiweiImg">
							<img src="../../assets/images/PersonalCenter/zhiwei.png" />
							<span>商务经理</span>
						</div>
						<div class="info-item gongsiImg">
							<img src="../../assets/images/PersonalCenter/company.png" />
							<span>南京安元科技有限公司</span>
						</div>
					</div>
				</div>
				<div class="banner-right">
					<div class="user-img"></div>
				</div>
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
import IntentCourse from './components/IntentCourse.vue';
import ProjectInfo from './components/ProjectInfo.vue';
import SafetyInstruction from './components/SafetyInstruction.vue';
import MeetMessage from './components/MeetMessage.vue';
import CourseArrange from './components/CourseArrange.vue';
import ElectionList from './components/ElectionList.vue';

export default {
  components: {
    IntentCourse,
    ProjectInfo,
    SafetyInstruction,
    MeetMessage,
    CourseArrange,
    ElectionList
  },
  data() {
    return {
      menuList: [
        {
          menuType: '意向课程',
          showMenuSubList: true,
          menuSubList: [
            {
              id: '1001',
              subTitle: '意向课程'
            }
          ]
        },
        {
          menuType: '培训手册',
          showMenuSubList: false,
          menuSubList: [
            {
              id: '2001',
              subTitle: '安全须知'
            },
            {
              id: '2002',
              subTitle: '会务信息'
            },
            {
              id: '2003',
              subTitle: '课程安排'
            },
            {
              id: '2004',
              subTitle: '参选名单'
            }
          ]
        },
        {
          menuType: '订单中心',
          showMenuSubList: false,
          menuSubList: [
            {
              id: '3001',
              subTitle: '未完成订单'
            },
            {
              id: '3002',
              subTitle: '已完成订单'
            }
          ]
        },
        {
          menuType: '我的收藏',
          showMenuSubList: false,
          menuSubList: [
            {
              id: '4001',
              subTitle: '收藏课程'
            },
            {
              id: '4002',
              subTitle: '收藏讲师'
            }
          ]
        },
        {
          menuType: '我的项目',
          showMenuSubList: false,
          menuSubList: [
            {
              id: '5001',
              subTitle: '项目信息'
            },
            {
              id: '5002',
              subTitle: '我的合同'
            },
            {
              id: '5003',
              subTitle: '我的方案'
            }
          ]
        },
        {
          menuType: '我的评价',
          showMenuSubList: false,
          menuSubList: [
            {
              id: '6001',
              subTitle: '课程评价'
            },
            {
              id: '6002',
              subTitle: '讲师评价'
            }
          ]
        },
        {
          menuType: '消息中心',
          showMenuSubList: false,
          menuSubList: [
            {
              id: '7001',
              subTitle: '消息提醒'
            },
            {
              id: '7002',
              subTitle: '待办提醒'
            }
          ]
        },
        {
          menuType: '个人设置',
          showMenuSubList: false,
          menuSubList: [
            {
              id: '8001',
              subTitle: '个人信息'
            },
            {
              id: '8002',
              subTitle: '消息设置'
            }
          ]
        }
      ],
      currentView: IntentCourse
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
      if (item.id === '5001') {
        this.currentView = ProjectInfo;
      } else if (item.id === '1001') {
        this.currentView = IntentCourse;
      } else if (item.id === '2001') {
        this.currentView = SafetyInstruction;
      } else if (item.id === '2002') {
        this.currentView = MeetMessage;
      } else if (item.id === '2003') {
        this.currentView = CourseArrange;
      } else if (item.id === '2004') {
        this.currentView = ElectionList;
      }
    },
    init() {
      this.menuList.forEach((item) => {
        item.menuSubList.forEach((subItem) => {
          this.$set(subItem, 'selected', false);
        });
      });
      this.$set(this.menuList[0].menuSubList[0], 'selected', true);
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.my-wrapper {
	background: #eee;
	.banner-left {
		float: left;
		height: 74px;
		.title {
			height: 70px;
			line-height: 62px;
			padding-top: 8px;
			font-size: 30px;
			color: #fff;
		}
		.info-list {
			width: 420px;
			height: 30px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 15px 0 10px;
			color: #fff;
			background: rgba(0, 0, 0, 0.3);
		}
		.info-item {
			display: flex;
			align-items: center;
			height: 30px;
			img {
				width: 18px;
				height: 18px;
				margin-right: 5px;
			}
		}
	}
	.banner-right {
		float: right;
		.user-img {
			width: 80px;
			height: 80px;
			margin-top: 20px;
			border-radius: 50%;
			background: url('../../assets/images/layout/touxiang.png') no-repeat center;
			background-size: 100%;
			border: 4px solid #88bbfc;
		}
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
			// background: #ccc;
		}
	}
}
</style>
