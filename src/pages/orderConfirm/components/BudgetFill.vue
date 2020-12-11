/* eslint-disable consistent-return */ /* eslint-disable consistent-return */
<template>
	<div>
		<section class="section-wrapper">
			<div class="section-header">预算填报</div>
			<div class="section-body">
				<h2 class="main-title">公司HSE管理培训策划方案</h2>
				<ul class="content-area">
					<li class="content-item">
						<h3 class="sub-title">一、培训对象</h3>
						<div class="sub-content">
							公司旗下研究院所、矿山企业、贸易企业的HSE总监/HSE部门经理、分厂或装置主要负责人，约40人。
							<br />另有中国化工其它版块安全管理人员5-6人观摩。
						</div>
					</li>
					<li class="content-item">
						<h3 class="sub-title">二、培训时间</h3>
						<div class="sub-content">10月21日-25日，共计5天。(21日报到)</div>
					</li>
					<li class="content-item">
						<h3 class="sub-title">三、培训地点</h3>
						<div class="sub-content">中化.岙山应急管理学院</div>
					</li>
					<li class="content-item">
						<h3 class="sub-title">四、内容设计</h3>
						<div class="sub-content">
							<h4>(一)重点要解决的问题</h4>
							1.交流企业综合预案、专项预案及现场处置方案编制过程中遇到的问题及需要关注的重点事项；通过数字预案系统验证企业预案及现场处置方案的有效性；
							<br />2.提升管理人员针对火灾、泄漏、中毒窒息、触电等事故的现场处置能力；
							<br />3.提升管理人员对危险作业（特殊作业）风险管控能力；
							<br />4.通过学习借鉴其他危化品企业安全管理实践，促进管理提升
							<h4>(二)课程内容</h4>
							<h4>1.企业生产安全应急预案数字化推演及复盘 （1天）</h4>
							<div class="content-text">
								结合《生产经营单位生产安全事故应急预案编制导则》（GB/T
								29639-2013）中对应急预案编制程序及各级预案编制要求，着重讲解企业综合预案、专项预案、现场处置方
								案编制流程及注意事项，解决日常所遇到的问题；
							</div>
							<div class="content-text">
								以中国昊华旗下某家企业专项应急预案为例，通过数字化推演系统构建场景，学员以小组为单位对企业应急预案进行实战推演。在推演过程中，发现问题、提出问题、分析
								原因，并提出预案完善方案。总结推演所发现的问题，学员仍以组为单位，对其他应急预案进行复盘推演练习，使学员充分掌握推演方案与预案编制要点。
							</div>
							<div class="content-text">
								课程设计：标准化应急预案编制流程及编制要点（2学时）、分组预案推演（3学时）、小组分组推演检验预案、复盘总结（2学时）
							</div>
							<h4>2.常见事故现场处置实践培训（2天）</h4>
							<el-table :data="tableData1" border style="width: 100%;">
								<el-table-column prop="accidentType" label="事故类型" width="180"></el-table-column>
								<el-table-column prop="coursesContent" label="主要教学内容"></el-table-column>
								<el-table-column prop="teachMode" label="教学形式" width="140"></el-table-column>
								<el-table-column prop="teachPlan" label="课时安排" width="140"></el-table-column>
							</el-table>
							<div>
								特色：理论培训结束后，模拟对应的事故案例，分组现场处置，通过情景教学，帮助学员在复杂的环境下，灵活运用当天所学的技能。
							</div>
							<h4>3.危险作业监管实践培训（1天）</h4>
							<div class="project-info-box">
								<dl>
									<dt>事故类型</dt>
									<dd>临时用电管理 高出作业管理 受限空间作业管理 动火作业管理</dd>
								</dl>
								<dl>
									<dt>主要教学内容</dt>
									<dd>
										课程主要包括：危化品生产安全基础知识--6课时 危化品事故处理方式--3课时
										危化品事故后续调查报告--1课时 危化品生产知识--2课时 危化品事故处理方式--1课时
									</dd>
								</dl>
								<dl>
									<dt>教学形式</dt>
									<dd>案例 + 实操教学 + 角色扮演</dd>
								</dl>
								<dl>
									<dt>课时安排</dt>
									<dd>7课时</dd>
								</dl>
							</div>
						</div>
					</li>
					<li>
						<h3 class="sub-title">五、日程安排</h3>
						<!-- 日程安排表格 -->
						<el-table
							:data="scheduleList"
							:span-method="objectSpanMethod"
							@cell-mouse-leave="cellMouseLeave"
							@cell-mouse-enter="cellMouseEnter"
							:cell-class-name="tableRowClassName"
							border
						>
							<el-table-column prop="date" label="时间" width="120"></el-table-column>
							<el-table-column prop="journey" label="行程" width="600"></el-table-column>
							<el-table-column prop="lecturer" label="讲师"></el-table-column>
						</el-table>
						<!-- 日程安排表格结束 -->
					</li>
					<li>
						<h3 class="sub-title">六、培训费用</h3>
						<div class="sub-content">
							本培训项目相关费用构成如下。费用由中化应急公司统一开具增值税专用发票，开票内容为培训费。
						</div>
						<el-table :data="tableData2" border style="width: 100%;">
							<el-table-column prop="projectName" label="项目" width="180"></el-table-column>
							<el-table-column prop="rates" label="收费标准（元）" width="140"></el-table-column>
							<el-table-column prop="unit" label="单位" width="120"></el-table-column>
							<el-table-column prop="quantity" label="数量" width="120"></el-table-column>
							<el-table-column prop="totalMoney" label="总金额（元）" width="140"></el-table-column>
							<el-table-column prop="remark" label="备注"></el-table-column>
						</el-table>
					</li>
				</ul>
			</div>
		</section>

		<section class="section-wrapper footer-area">
			<div class="footer-left">
				<label>请输入您的预算</label>
				<el-input v-model="budgetFill" placeholder="3000"></el-input>元
			</div>
			<button @click="submit">确认提交</button>
		</section>
	</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      tableData1: [
        {
          accidentType: '火灾',
          coursesContent:
						'实验室火灾、装置火灾、建筑物火灾的应急处置流程、PPE正确佩戴、灭火器材选择与实际操作',
          teachMode: '案例+实操教学',
          teachPlan: '14课时',
        },
        {
          accidentType: '中毒窒息',
          coursesContent:
						'有害气体检测仪器操作、个人防护要求、如何正确使用空呼、人员急救措施、事故预防',
          teachMode: '案例+实操教学',
          teachPlan: '14课时',
        },
        {
          accidentType: '触电事故处置',
          coursesContent: '触电事故的处置流程、个人防护要求、人员急救措施、如何预防触电事故',
          teachMode: '案例+实操教学',
          teachPlan: '14课时',
        },
        {
          accidentType: ' 泄露处置',
          coursesContent:
						'危化品、有毒有害气体泄漏的应急处置流程、个人防护要点、注意事项、人员急救',
          teachMode: '案例+实操教学',
          teachPlan: '14课时',
        },
      ],
      scheduleList: [
        {
          date: '第一天',
          journey: '报道',
          lecturer: '',
        },
        {
          date: '第二天',
          journey: '企业生产安全应急预案数字化推演及复盘',
          lecturer: '国家危化品应急救援基地--林俊',
        },
        {
          date: '第三天',
          journey: '火灾应急处置',
          lecturer: '国家危化品应急救援基地—张学军',
        },
        {
          date: '第三天',
          journey: '中毒窒息事故应急处置',
          lecturer: '中化岙山事故应急处置师资',
        },
        {
          date: '第四天',
          journey: '人员触电事故应急处置',
          lecturer: '中化岙山事故应急处置师资',
        },
        {
          date: '第四天',
          journey: '泄漏事故应急处置',
          lecturer: '中化岙山事故应急处置师资',
        },
        {
          date: '第四天',
          journey: '问题交流',
          lecturer: '中化岙山事故应急处置师资',
        },
        {
          date: '第五天',
          journey: '受限空间作业管理',
          lecturer: '中化岙山危险作业内训师',
        },
        {
          date: '第五天',
          journey: '高处作业管理',
          lecturer: '中化岙山危险作业内训师',
        },
        {
          date: '第五天',
          journey: '动火作业管理',
          lecturer: '中化岙山危险作业内训师',
        },
        {
          date: '第五天',
          journey: '临时用电作业管理',
          lecturer: '中化岙山危险作业内训师',
        },
        {
          date: '第五天',
          journey: '问题交流与讨论',
          lecturer: '中化岙山危险作业内训师',
        },
        {
          date: '第六天',
          journey: '回城',
          lecturer: '',
        },
      ],
      rowIndex: '-1',
      orderIndexArr: [],
      hoverOrderArr: [],

      tableData2: [
        {
          projectName: '培训费',
          rates: '/',
          unit: '元/场',
          quantity: 9,
          totalMoney: '/',
          remark: '等商务接洽完后，会统一价格',
        },
        {
          projectName: '交通费',
          rates: '1200',
          unit: '元/天',
          quantity: 4,
          totalMoney: '4800',
          remark: '酒店-培训中心往返费用',
        },
        {
          projectName: '餐费',
          rates: '140',
          unit: '人/天',
          quantity: 46,
          totalMoney: '30360',
          remark: '包含酒店自助、培训基地午餐',
        },
      ],
      budgetFill: '',
    };
  },
  methods: {
    submit() {
      if (!this.budgetFill) {
        this.$message({
          type: 'warning',
          message: '请输入您的预算',
        });
      } else {
        this.$emit('nextStep', 3);
      }
    },
    // 获取相同编号的数组
    getOrderNumber() {
      const orderObj = {};
      this.scheduleList.forEach((item, index) => {
        item.rowIndex = index;
        if (orderObj[item.date]) {
          orderObj[item.date].push(index);
        } else {
          orderObj[item.date] = [];
          orderObj[item.date].push(index);
        }
      });
      // 将数组长度大于1的值 存储到this.orderIndexArr（也就是需要合并的项）
      Object.keys(orderObj).forEach((key) => {
        if (orderObj[key].length > 1) {
          this.orderIndexArr.push(orderObj[key]);
        }
      });
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0 || columnIndex === 2) {
        for (let i = 0; i < this.orderIndexArr.length; i += 1) {
          let element = this.orderIndexArr[i];
          for (let j = 0; j < element.length; j += 1) {
            let item = element[j];
            if (rowIndex === item) {
              if (j === 0) {
                return {
                  rowspan: element.length,
                  colspan: 1,
                };
              }
              if (j !== 0) {
                return {
                  rowspan: 0,
                  colspan: 0,
                };
              }
            }
          }
        }
      }
    },
    tableRowClassName({ row, rowIndex }) {
      let arr = this.hoverOrderArr;
      for (let i = 0; i < arr.length; i += 1) {
        if (rowIndex === arr[i]) {
          return 'hovered-row';
        }
      }
    },
    cellMouseEnter(row, column, cell, event) {
      this.rowIndex = row.rowIndex;
      this.hoverOrderArr = [];
      this.orderIndexArr.forEach((element) => {
        if (element.indexOf(this.rowIndex) >= 0) {
          this.hoverOrderArr = element;
        }
      });
    },
    cellMouseLeave(row, column, cell, event) {
      this.rowIndex = '-1';
      this.hoverOrderArr = [];
    },
  },
  mounted() {
    this.getOrderNumber();
  },
};
</script>

<style lang="scss" scoped>
h2 {
	height: 60px;
	line-height: 60px;
	text-align: center;
	font-size: 24px;
	color: #0060af;
}
.content-item {
	margin-bottom: 20px;
}
.sub-title {
	line-height: 36px;
}
.sub-content {
	color: #646a70;
	padding-left: 30px;
	line-height: 30px;
}
h4 {
	color: #26292b;
	font-weight: normal;
}
.content-text {
	text-indent: 2em;
}
.project-info-box {
	padding: 5px 0;
}
.footer-area {
	height: 93px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 28px;
	.footer-left {
		display: flex;
		align-items: center;
		label {
			width: 200px;
			color: #51585e;
			font-size: 16px;
			margin-right: 10px;
		}
		.el-input {
			margin-right: 10px;
		}
	}
	button {
		width: 130px;
		height: 40px;
		background: #0060af;
		color: #fff;
		text-align: center;
		line-height: 40px;
	}
}
.el-table {
	/deep/ .hovered-row {
		background: #f5f7fa;
	}
}
</style>
