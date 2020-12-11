<template>
	<div class="obtain-evidence-wrapper">
		<div class="my-banner-wrapper">
			<div class="clearfix m-1200">
				<h2 class="title">取证课程中心</h2>
				<div class="select-box">
					<div class="select-item">
						资格类型
						<el-select v-model="certificationType" placeholder="请选择">
							<el-option
								v-for="item in certificationTypeList"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							></el-option>
						</el-select>
					</div>
					<div class="select-item">
						作业类别
						<el-select v-model="operationType" placeholder="请选择">
							<el-option
								v-for="item in operationTypeList"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							></el-option>
						</el-select>
					</div>
					<div class="select-item">
						操作项目
						<el-select v-model="operateTask" placeholder="请选择">
							<el-option
								v-for="item in operateTaskList"
								:key="item.value"
								:label="item.label"
								:value="item.value"
							></el-option>
						</el-select>
					</div>
				</div>
			</div>
		</div>
		<div class="title-wrapper" :class="{ is_fixed: isFixed }">
			<div class="clearfix m-1200">
				<h3 class="fl">危险化学品使用单位安全生产管理人员初训</h3>
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
						<div class="section-title">课程信息</div>
						<div class="section-box">
							<div class="class-info-list clearfix">
								<dl class="class-info-item">
									<dt>培训类型</dt>
									<dd>面授型</dd>
								</dl>
								<dl class="class-info-item">
									<dt>培训课时</dt>
									<dd>面授型</dd>
								</dl>
								<dl class="class-info-item">
									<dt>资格类型</dt>
									<dd>安全生产管理人员</dd>
								</dl>
								<dl class="class-info-item">
									<dt>作业类型</dt>
									<dd>危险化学品使用单位</dd>
								</dl>
								<dl class="class-info-item">
									<dt>操作项目</dt>
									<dd>初训</dd>
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
									<dt>线上视频</dt>
									<dd>
										<i class="icon-video"></i>
										<a href="javascript:;">线上视频学习</a>
										（报名前，您可以试看5分钟）
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
						<div class="section-title">课程及收费信息</div>
						<div class="section-box">
							<dl class="clearfix">
								<dt>课程：</dt>
								<dd>
									<span>危化品生产安全基础知识--6课时</span>
									<span>危化品事故处理方式--3课时</span>
									<span>危化品事故后续调查报告--1课时</span>
									<span>危化品生产知识--2课时</span>
									<span>危化品事故处理方式--1课时</span>
								</dd>
							</dl>
							<dl class="clearfix">
								<dt>费用：</dt>
								<dd>
									<span>培训费：320元</span>
									<span>实操考证费：0</span>
									<span>理论考证费：0</span>
									<span>合计：320元</span>
								</dd>
							</dl>
						</div>
					</div>
					<div class="section section3">
						<div class="section-title">报名政策</div>
						<div class="section-box">
							1、职业道德良好、身体健康、年龄不超过60周岁(除法定代表人)；
							<br />2、建筑施工企业的在职人员；
							<br />3、学历要求：企业负责人应为大专以上学历(企业法人外)；
							<br />4、经企业年度安全生产教育培训考核合格。
							<br />
						</div>
					</div>

					<div class="section section4">
						<div class="section-title">所需材料信息(需提供3种材料)</div>
						<div class="section-box">
							<el-table :data="tableData" border style="width: 100%;">
								<el-table-column prop="trainName" label="培训名称" width="260"></el-table-column>
								<el-table-column prop="needOriginalCopy" label="原件" width="100"></el-table-column>
								<el-table-column prop="copies" label="份数" width="100"></el-table-column>
								<el-table-column
									prop="needSpotOperate"
									label="现场提交"
									width="100"
								></el-table-column>
								<el-table-column
									prop="needElecMaterials"
									label="电子材料"
									width="100"
								></el-table-column>
								<el-table-column prop="fillInfo" label="填报须知"></el-table-column>
								<el-table-column prop="sampleMaterial" label="材料范本" width="120">
									<template slot-scope="scope">
										<el-button @click="viewMaterial(scope.row)" type="text" size="small"
											>查看</el-button
										>
									</template>
								</el-table-column>
							</el-table>
						</div>
					</div>

					<div class="section section5">
						<div class="section-title">培训流程</div>
						<div class="section-box">
							<img src="../../assets/images/workFlower.png" />
						</div>
					</div>

					<div class="section section6">
						<div class="section-title">证书样本</div>
						<div class="section-box">
							<img src="../../assets/images/certificate-sample.jpg" />
						</div>
					</div>

					<div class="section section7">
						<div class="section-title">常见问题</div>
						<div class="section-box">
							<ul class="question-list">
								<li class="question-item">
									Q：特种作业培训完成后，什么时候发证？
									<br />A：实操及理论考试成绩会在当天完成公布，全部通过的学员可以现场领取特种作业证。
								</li>
								<li class="question-item">
									Q：考试是哪种类型？
									<br />A：学员考试由上机考试和实际操作考试组成。
								</li>
								<li class="question-item">
									Q：考试包过吗？
									<br />A：本学院培训质量可以保障，通过率高；但不保证一定通过。
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
      certificationTypeList: [
        {
          value: '01',
          label: '主要负责人'
        },
        {
          value: '02',
          label: '安全生产管理人员'
        },
        {
          value: '03',
          label: '特种作业人员'
        },
        {
          value: '04',
          label: '安全生产监管监察员'
        },
        {
          value: '05',
          label: '其他'
        }
      ],
      certificationType: '02',
      operationTypeList: [
        {
          value: '01',
          label: '烟花爆竹经营单位'
        },
        {
          value: '02',
          label: '金属非金属矿山（地下矿山）'
        },
        {
          value: '03',
          label: '危险化学品使用单位'
        },
        {
          value: '04',
          label: '金属非金属矿山（小型露天采石场)'
        },
        {
          value: '05',
          label: '危险化学品经营单位'
        }
      ],
      operationType: '03',
      operateTaskList: [
        {
          value: '01',
          label: '初训'
        },
        {
          value: '02',
          label: '复训'
        }
      ],
      operateTask: '01',
      isFixed: false,
      fixedMenu: false,
      menuList: [
        '课程信息',
        '课程及收费依据',
        '报名政策',
        '所需材料信息',
        '培训流程',
        '证书样本',
        '常见问题'
      ],
      menuClickIndex: 0,
      tableData: [
        {
          trainName: '浙江省特种作业操作证申请表',
          needOriginalCopy: '需要',
          copies: '1',
          needSpotOperate: '是',
          needElecMaterials: '需要',
          fillInfo: '必须如实填报'
        },
        {
          trainName: '身份证正反面复印件',
          needOriginalCopy: '需要',
          copies: '1',
          needSpotOperate: '是',
          needElecMaterials: '需要',
          fillInfo: '必须如实填报'
        },
        {
          trainName: '初中及以上学历证书复印件或学历证明',
          needOriginalCopy: '需要',
          copies: '1',
          needSpotOperate: '是',
          needElecMaterials: '需要',
          fillInfo: '必须如实填报'
        }
      ],
      scrollTop: 0
    };
  },

  methods: {
    viewMaterial(row) {
      console.log(row);
    },
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
      if (this.scrollTop && this.scrollTop > 260) {
        this.fixedMenu = true;
      } else {
        this.fixedMenu = false;
      }
      this.isFixed = this.scrollTop > 258;
    },
    loadScroll() {
      const sections = document.querySelectorAll('.section');
      sections.forEach((item, index) => {
        if (this.scrollTop >= item.offsetTop - 200) {
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
.my-banner-wrapper {
	height: 166px;
	color: #fff;
	.title {
		height: 94px;
		font-size: 30px;
		line-height: 94px;
	}
	.select-box {
		height: 40px;
		display: flex;
		justify-content: space-between;
	}
	.select-item {
		width: 302px;
	}
	.el-select {
		margin-left: 20px;
	}
}
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
	dl {
		display: flex;
		color: #51585e;
		line-height: 26px;
		margin-bottom: 10px;
		dt {
			width: 56px;
			font-weight: bold;
		}
		dd {
			flex: 1;
			span {
				margin-right: 60px;
			}
		}
	}
}
.section3 {
	.section-box {
		line-height: 40px;
	}
}
.section5,
.section6 {
	.section-box {
		text-align: center;
	}
}
.section7 {
	.section-box {
		padding: 10px 20px;
	}
	.question-item {
		padding: 10px 0 10px 10px;
		color: #51585e;
		line-height: 30px;
		border-bottom: 1px solid #c9cbcd;
		&:last-of-type {
			border-bottom: none;
		}
	}
}
.icon-video {
	display: inline-block;
	width: 22px;
	height: 26px;
	background: url('../../assets/images/icon/icon-video.png') no-repeat left top;
	vertical-align: -11px;
	margin-right: 6px;
}
</style>
