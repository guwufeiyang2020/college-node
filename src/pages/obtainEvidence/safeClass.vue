<template>
	<div class="obtain-evidence-wrapper">
		<div class="breadcrumb-wrap">
			<div class="breadcrumb">
				首页 > 课程体系 > 安全生产类课程 > 码头船岸延伸
			</div>
		</div>
		<div class="title-wrapper" :class="{ is_fixed: isFixed }">
			<div class="clearfix m-1200">
				<h3 class="fl">码头船岸延伸</h3>
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
									<dt>培训对象</dt>
									<dd>油气化工码头相关操作人员、码头船长，政府相关监管人员</dd>
								</dl>

								<dl class="class-info-item">
									<dt>授课形式</dt>
									<dd>理论教学+实操教学+VR</dd>
								</dl>
								<dl class="class-info-item">
									<dt>培训课时</dt>
									<dd>5天（可灵活调整）</dd>
								</dl>
								<dl class="class-info-item">
									<dt>咨询联系方式</dt>
									<dd>028-10009696</dd>
								</dl>
								<dl class="class-info-item">
									<dt>培训讲师</dt>
									<dd>
										<a href="javascript:;">林俊</a>
									</dd>
								</dl>
								<dl class="class-info-item">
									<dt>培训地点</dt>
									<dd>岙山应急管理学员105培训室</dd>
								</dl>
							</div>
						</div>
					</div>
					<div class="section section2">
						<div class="section-title">线上视频</div>
						<div class="section-box">
							<div class="vedio-wrapper">
								<img src="../../assets/images/vedio-cover.png" class="vedio-cover" />
								<div class="vedio-content">
									<p class="name">码头船岸延伸</p>
									<p class="time">2 学时 | 58分钟</p>
									<p class="tip">报名前，您可以试看5分钟</p>
									<button class="btn-learn" @click="showSlide = 'slideDown'">学习</button>
									<div class="video-box" v-show="showSlide">
										<div class="overlay"></div>
										<div class="video" v-bind:class="showSlide">
											<span class="icon-close" @click="closeVideo"></span>
											<video muted autoplay controls="controls">
												<source src="../../assets/video.webm" type="video/webm" />
												您的浏览器不支持Video标签。
											</video>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="section section3">
						<div class="section-title">
							课程大纲<span class="tip">（课程不断开发中，可根据客户要求策划）</span>
						</div>
						<div class="section-box">
							<ul class="course-outline-list">
								<li
									class="course-outline-item"
									v-for="(item, index) in courseOutlineList"
									:key="index"
								>
									<div class="title-box">{{ item.title }}</div>
									<div class="content-wrapper">
										<p class="label">教学方式：</p>
										<p class="content-item txt-ellipsis" :title="item.teachMode">
											{{ item.teachMode }}
										</p>
										<p class="label">教学目标：</p>
										<p class="content-item">{{ item.teachTarget }}</p>
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
      menuList: ['培训信息', '线上视频', '课程大纲'],
      menuClickIndex: 0,
      scrollTop: 0,
      showSlide: '', // 控制动画效果
      courseOutlineList: [
        {
          title: '1、课程介绍和安全一刻',
          teachMode: '课前热身，引入“调查问卷”环节',
          teachTarget: '了解学员知识结构以及对本次课程安排的关注点；'
        },
        {
          title: '2、油轮认知',
          teachMode: '视频情景教学',
          teachTarget: '加强对油轮布局、舱室结构、系泊设备以及运行系统等方面的认知；'
        },
        {
          title: '3、船岸安全事故案例讨论',
          teachMode: '案例教学（采用视频资料、文本资料等形式',
          teachTarget: '发动学员积极思考船岸延伸管理关注问题，并给予案例分析结果进行展示；'
        },
        {
          title: '4、船舶到港前通讯和码头检查',
          teachMode: '视频和现场教学船舶到港前通讯和码头检查（以油轮作业时间轴开展）',
          teachTarget: '到港前船岸信息交换内容，码头为应对接靠油轮应该进行的准备工作；'
        },
        {
          title: '5、系泊作业',
          teachMode: '视频和现场教学（以油轮作业时间轴开展）',
          teachTarget: '系泊安全操作要求，系泊作业要点，缆绳各部位作用认知以及系缆方案的确定'
        },
        {
          title: '6、货物作业前会议',
          teachMode: '视频和现场教学（以油轮作业时间轴开展）',
          teachTarget: '货物作业前会议内容，作业单证签署等（视频+现场教学，后续需要上船补拍视频）'
        },
        {
          title: '7、货管联接',
          teachMode: '视频和现场教学（以油轮作业时间轴开展）',
          teachTarget: '输油臂连接，输油臂连接工作流程及检查要点'
        },
        {
          title: '8、静电和杂散电流(视频)',
          teachMode: '视频教学',
          teachTarget: '关联知识点教学'
        },
        {
          title: '9、船岸安全检查表(SSSCL)',
          teachMode: '现场教学+要点讲解',
          teachTarget: '以SSSCL表的完整内容讲解开展，包含填表说明，代码认知，60项各项检查要点分析等'
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
    },
    closeVideo() {
      this.showSlide = 'slideUp';
      setTimeout(() => {
        this.showSlide = '';
      }, 600);
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
	.tip {
		font-size: 14px;
		margin-left: 10px;
		color: #929da5;
		font-weight: normal;
	}
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
		&:first-of-type,
		&:last-of-type {
			width: 100%;
			border-right: none;
		}
		&:nth-of-type(3),
		&:nth-of-type(5) {
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
	.vedio-wrapper {
		display: flex;
		.vedio-cover {
			width: 207px;
			height: 115px;
			margin-right: 30px;
		}
		.name {
			font-size: 18px;
			line-height: 30px;
		}
		.time {
			line-height: 26px;
			font-size: 14px;
			color: #989ea2;
		}
		.tip {
			line-height: 26px;
			font-size: 14px;
			color: #cf0a2f;
			margin-bottom: 6px;
		}
		.btn-learn {
			width: 72px;
			height: 26px;
			background: #005bac;
			color: #fff;
			text-align: center;
			line-height: 26px;
			border-radius: 10px;
		}
		.video-box {
			.overlay {
				position: fixed;
				left: 0;
				top: 0;
				right: 0;
				bottom: 0;
				background: #333;
				opacity: 0.4;
				z-index: 10;
			}
			@keyframes slideDown {
				from {
					top: -50%;
					opacity: 0;
				}
				to {
					top: 50%;
					opacity: 1;
				}
			}
			@keyframes slideUp {
				from {
					top: 50%;
					opacity: 1;
				}
				to {
					top: -50%;
					opacity: 0;
				}
			}
			.video {
				position: fixed;
				top: -50%;
				left: 50%;
				transform: translate(-50%, -50%);
				z-index: 11;
				width: 1000px;
				height: 536px;
				opacity: 1;
				&.slideDown {
					animation: slideDown 0.6s linear;
					top: 50%;
				}
				&.slideUp {
					animation: slideUp 0.6s linear;
				}
				.icon-close {
					position: absolute;
					top: 20px;
					right: 20px;
					width: 36px;
					height: 36px;
					background: url('../../assets/images/icon/icon-close-video.png') no-repeat;
					background-size: 100%;
					cursor: pointer;
					z-index: 11;
				}
				video {
					width: 100%;
					height: 100%;
					object-fit: cover;
					outline: none;
				}
			}
		}
	}
}
.section3 {
	.course-outline-list {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.course-outline-item {
		width: 320px;
		border: 1px solid #eee;
		margin-bottom: 20px;
	}
	.title-box {
		width: 320px;
		height: 40px;
		background: #f2f6f9;
		text-align: center;
		line-height: 40px;
		font-weight: bold;
		color: #0060af;
	}
	.content-wrapper {
		padding: 10px;
	}
	.label {
		color: #8d98a1;
		height: 18px;
		line-height: 18px;
	}
	.content-item {
		padding: 6px 0;
		line-height: 20px;
	}
}

// 调整播放器样式
.video-js .vjs-icon-placeholder {
	width: 100%;
	height: 100%;
	display: block;
}
</style>
