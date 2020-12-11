<template>
	<div class="obtain-evidence-wrapper">
		<div class="breadcrumb-wrap">
			<div class="breadcrumb">
				首页 > 系统化学习路径 > 技能类课程 > 生产经营企业安全管理人员培训课程
			</div>
		</div>
		<div class="title-wrapper" :class="{ is_fixed: isFixed }">
			<div class="clearfix m-1200">
				<h3 class="fl">生产经营企业安全管理人员</h3>
				<div class="btn-area fr">
					<button class="btn-enjoy" @click="addIntendedCourse">
						<i class="icon"></i>加入意向课程
					</button>
					<button class="btn-apply" @click="toApply"><i class="icon"></i>立即报名</button>
				</div>
			</div>
		</div>

		<div class="EntTake_main_box">
			<div class="EntTake_main">
				<div class="EntTake_main_left_box">
					<ul class="EntTake_main_left" :class="{ 'fixed-menu': fixedMenu }">
						<li
							class="forensics-main-item nav1"
							v-for="(val, index) in menuList"
							:key="index"
							:class="menuClickIndex === index ? 'clickStyle' : ''"
							@click="clickMenu(index)"
						>
							{{ val }}
						</li>
					</ul>
				</div>
				<div class="EntTake_main_right">
					<div class="section">
						<div class="section-title">培训信息</div>
						<div class="section-box">
							<div class="class-info-list clearfix">
								<dl class="class-info-item">
									<dt>培训类型</dt>
									<dd>面授型</dd>
								</dl>
								<dl class="class-info-item">
									<dt>培训课时</dt>
									<dd>5天（可灵活调整）</dd>
								</dl>
								<dl class="class-info-item">
									<dt>授课形式</dt>
									<dd>理论教学+实操教学+VR</dd>
								</dl>
								<dl class="class-info-item">
									<dt>培训讲师</dt>
									<dd>
										<a href="javascript:;">林俊</a>
									</dd>
								</dl>

								<dl class="class-info-item">
									<dt>咨询联系方式</dt>
									<dd>028-10009696</dd>
								</dl>
								<dl class="class-info-item">
									<dt>培训地点</dt>
									<dd>岙山应急管理学员105培训室</dd>
								</dl>
							</div>
						</div>
					</div>
					<div class="section section2">
						<div class="section-title">培训内容</div>
						<div class="section-box">
							<ul>
								<li v-for="(item, index) in trainContents" :key="index">
									<div class="title-box">{{ item.title }}</div>
									<div class="content-wrapper">
										<span
											class="content-item"
											v-for="(subItem, subIndex) in item.lists"
											:key="subIndex"
											>{{ subItem }}</span
										>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div class="section section3">
						<div class="section-title">教学特色</div>
						<div class="section-box">
							<ul>
								<li v-for="(item, index) in teachFeatures" :key="index">
									<div class="title-box">
										<span>{{ item.title }}</span>
									</div>
									<div class="content-wrapper">
										<p
											class="content-item"
											v-for="(subItem, subIndex) in item.lists"
											:key="subIndex"
										>
											{{ subItem }}
										</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      isFixed: false,
      fixedMenu: false,
      menuList: ['培训信息', '培训内容', '教学特色'],
      menuClickIndex: 0,
      scrollTop: 0,
      trainContents: [
        {
          title: '法律法规与标准体系',
          lists: ['安全生产法律法规体系', '最新法律法规条款重点解读', '行业标准解读']
        },
        {
          title: '安全基础知识和技能',
          lists: ['安全理念与行为安全', '安全基础知识', '个人防护用品使用', '职业危害防控']
        },
        {
          title: '安全管理务实',
          lists: [
            '安全领导力',
            '基于风险的过程安全管理',
            '危险源辨识、评估与控制',
            '企业常见隐患及排查治理',
            '八大危险作业HSE管理标准',
            '企业安全生产标准化体系建设务实',
            '安全基础知识',
            '个人防护用品使用',
            '职业危害防控'
          ]
        },
        {
          title: '应急处置与急救技能',
          lists: [
            '企业标准化应急预案编制',
            '消防基础知识（火灾原理、消防)',
            '岗位应急处置技能（火灾、泄露)',
            '紧急救助',
            '媒介素养与冲突事件新闻发言'
          ]
        }
      ],
      teachFeatures: [
        {
          title: '仿真实训，践行知行合一',
          lists: [
            '1、危化品仿真实训中心及危险作业实训中心，集工艺仿真、设备展示、模拟操作、风险体验、应急响应五大功能',
            '2、涵盖危化品储存、销售、运输等专业领域',
            '3、案例式理论教学、仿真式实操教学、VR/AR技术体验式现场教学相结合'
          ]
        },
        {
          title: '线上学习平台，助力新工持续学习',
          lists: [
            '1、实现电脑、移动多端实现电脑、移动多端连接，随时随地学习',
            '2、基于员工岗位胜任力素质模型设置学习地图，可实现在线学习、考试、调研评估、直播、简课制作等功能'
          ]
        },
        {
          title: '以客户需求为中心，定制化服务',
          lists: ['1、后勤保障力量充足', '2、安排讲师到客户生产现场进行回炉指导，现场答疑解惑']
        }
      ]
    };
  },

  methods: {
    addIntendedCourse() {
      this.$message({
        message: '加入意向课程成功，请在“我的”中查看',
        type: 'success'
      });
    },
    toApply() {
      let routeUrl = this.$router.resolve({
        path: '/personConfirmOrder'
      });
      window.open(routeUrl.href, '_blank');
    },
    // 点击左侧菜单
    clickMenu(index) {
      this.menuClickIndex = index;
      const jump = document.querySelectorAll('.section');
      const total = jump[index].offsetTop - 76;
      document.body.scrollTop = total;
      document.documentElement.scrollTop = total;
    },
    dataScroll() {
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const menu = document.querySelector('.EntTake_main_left_box'); // 222
      const titleWrapper = document.querySelector('.title-wrapper'); // 136
      if (this.scrollTop && this.scrollTop > menu.offsetTop - 50) {
        this.fixedMenu = true;
      } else {
        this.fixedMenu = false;
      }
      this.isFixed = this.scrollTop > titleWrapper.offsetTop;
    },
    loadScroll() {
      const sections = document.querySelectorAll('.section');
      const menu = document.querySelector('.EntTake_main_left_box');
      sections.forEach((item, index) => {
        if (this.scrollTop >= item.offsetTop - menu.offsetTop) {
          this.menuClickIndex = index;
        }
      });
    }
  },
  mounted() {
    window.addEventListener('scroll', this.dataScroll);
  },
  watch: {
    scrollTop() {
      this.loadScroll();
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.dataScroll, false);
  }
};
</script>

<style lang="scss" scoped>
.title-wrapper {
	height: 70px;
	background: #fff;
	&.is_fixed {
		position: fixed;
		top: 0;
		z-index: 10;
		width: 100%;
		box-shadow: 0 5px 5px #ccc;
	}
	h3 {
		font-size: 22px;
		font-weight: bold;
		color: #51585e;
		line-height: 70px;
	}
	.btn-area {
		display: flex;
		height: 70px;
		align-items: center;
	}
	.btn-enjoy {
		margin-right: 14px;
	}
}
.EntTake_main {
	width: 1200px;
	margin: 0 auto;
	display: flex;
	padding: 16px 0 16px 0;
}
.EntTake_main_left_box {
	width: 130px;
	.EntTake_main_left {
		width: 130px;
		&.fixed-menu {
			position: fixed;
			top: 90px;
		}
		li {
			height: 42px;
			color: #51585e;
			font-size: 14px;
			line-height: 42px;
			text-indent: 20px;
			background: #fff;
			margin-bottom: 10px;
			cursor: pointer;
		}
		.clickStyle {
			color: #0060af;
			border-left: 2px solid #0060af;
		}
	}
}
.EntTake_main_right {
	width: calc(100% - 140px);
	margin-left: 20px;
	margin-top: 1px;
	float: left;
}

.section {
	margin-bottom: 16px;
}
.section-title {
	height: 42px;
	line-height: 42px;
	text-indent: 10px;
	color: #51585e;
	font-size: 16px;
	font-weight: bold;
	border-top: 1px solid #0060af;
}
.section-box {
	background: #fff;
	padding: 20px;
}
.class-info-list {
	border: 1px solid #ebedee;
	.class-info-item {
		float: left;
		width: 50%;
		height: 50px;
		line-height: 50px;
		border-bottom: 1px solid #ebedee;
		border-right: 1px solid #ebedee;
		display: flex;
		&:nth-of-type(2n) {
			border-right: none;
		}
		&:nth-last-child() {
			border-bottom: none;
			width: 100%;
		}
		dt {
			width: 130px;
			padding-left: 18px;
			color: #898b8d;
			border-right: 1px solid #ebedee;
		}
		dd {
			padding-left: 18px;
			color: #525456;
		}
		a {
			text-decoration: underline;
			color: #085997;
		}
	}
}

.section2 {
	.title-box {
		height: 34px;
		line-height: 34px;
		padding-left: 20px;
		margin-bottom: 18px;
		color: #0060af;
		font-weight: bold;
		background: url('../../assets/images/icon/title-icon.png') no-repeat left center;
	}
	.content-item {
		display: inline-block;
		margin: 0 20px 20px 0;
		color: #51585e;
		padding: 9px 20px;
		border: 1px solid #ccc;
	}
}
.section3 {
	li {
		margin-bottom: 30px;
	}
	.title-box {
		height: 26px;
		margin-bottom: 10px;
		span {
			line-height: 20px;
			padding: 4px 10px;
			color: #fff;
			background: #0060af;
			font-weight: bold;
		}
	}
	.content-item {
		margin: 0 0 10px 0;
		color: #51585e;
	}
}

/* .icon-video {
	display: inline-block;
	width: 22px;
	height: 26px;
	background: url('../../assets/images/icon/icon-video.png') no-repeat left top;
	vertical-align: -11px;
	margin-right: 6px;
} */
</style>
