<template>
	<div>
		<section class="section-wrapper">
			<div class="section-header">课程</div>
			<div class="section-body">
				<h3 class="sub-title">请选择您要报名的课程</h3>
				<div class="select-box">
					<div class="select-item">
						<p class="label">请选择资格类别</p>
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
						<p class="label">请选择作业类别</p>
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
						<p class="label">请选择操作项目</p>
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

				<h3 class="sub-title">课程详情</h3>
				<div class="project-info-box">
					<dl>
						<dt>课程名称</dt>
						<dd>安全生产管理人员危险化学品经营单位</dd>
					</dl>
					<dl>
						<dt>课程内容</dt>
						<dd>
							课程主要包括：危化品生产安全基础知识--6课时 危化品事故处理方式--3课时
							危化品事故后续调查报告--1课时 危化品生产知识--2课时 危化品事故处理方式--1课时
						</dd>
					</dl>
					<dl>
						<dt>课程讲师</dt>
						<dd>
							<a href="javascript:;">林俊</a>
						</dd>
					</dl>
					<dl>
						<dt>授课对象</dt>
						<dd>主要负责人，安全生产管理人员，特种作业人员</dd>
					</dl>
					<dl>
						<dt>教学方式</dt>
						<dd>实操教学，理论教学</dd>
					</dl>
					<dl>
						<dt>课程学时</dt>
						<dd>28</dd>
					</dl>
					<dl>
						<dt>培训费用</dt>
						<dd>320元</dd>
					</dl>
				</div>
			</div>
		</section>

		<section class="section-wrapper">
			<div class="section-header">参与培训人员</div>
			<div class="section-body table-wrapper">
				<div class="btn-area">
					<button class="btn-blue">添加</button>
					<button class="btn-default">删除</button>
					<button class="btn-default">导出</button>
					<button class="btn-default">批量导入</button>
					<a href="javascript:;" class="doc-download">学员信息导入模板下载.doc</a>
				</div>
				<el-table
					ref="multipleTable"
					:data="tableData"
					border
					style="width: 100%;"
					@selection-change="handleSelectionChange"
				>
					<el-table-column type="selection" width="60"></el-table-column>
					<el-table-column prop="cardId" label="身份证号" width="260">
						<template slot-scope="scope">
							<a href="javascript:;">{{ scope.row.cardId }}</a>
						</template>
					</el-table-column>
					<el-table-column prop="name" label="姓名" width="110"></el-table-column>
					<el-table-column prop="sex" label="性别" width="100"></el-table-column>
					<el-table-column prop="education" label="学历" width="140"></el-table-column>
					<el-table-column prop="phone" label="手机号码" width="160"></el-table-column>
					<el-table-column prop="healthState" label="健康状况" width="140"></el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-tooltip content="查看" placement="top">
								<i class="icon-view" @click="handleClick(scope.row, '1')"></i>
							</el-tooltip>
							<el-tooltip content="编辑" placement="top">
								<i class="icon-edit" @click="handleClick(scope.row, '2')"></i>
							</el-tooltip>
							<el-tooltip content="删除" placement="top">
								<i class="icon-delete" @click="handleClick(scope.row, '3')"></i>
							</el-tooltip>
						</template>
					</el-table-column>
				</el-table>
			</div>
		</section>

		<section class="section-wrapper">
			<div class="page-footer">
				<span class="footer-left">
					共
					<em class="red-txt">1</em>门课程 参与人数 <em class="red-txt">8</em>人 费用：
					<em class="red-txt">￥3840</em>
				</span>
				<div class="footer-right">
					<button class="order-cancel">取消订单</button>
					<button class="order-submit" @click="submitOrder">提交订单</button>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
export default {
  data() {
    return {
      certificationTypeList: [
        {
          value: '01',
          label: '主要负责人',
        },
        {
          value: '02',
          label: '安全生产管理人员',
        },
        {
          value: '03',
          label: '特种作业人员',
        },
        {
          value: '04',
          label: '安全生产监管监察员',
        },
        {
          value: '05',
          label: '其他',
        },
      ],
      certificationType: '02',

      operationTypeList: [
        {
          value: '01',
          label: '烟花爆竹经营单位',
        },
        {
          value: '02',
          label: '金属非金属矿山（地下矿山）',
        },
        {
          value: '03',
          label: '危险化学品使用单位',
        },
        {
          value: '04',
          label: '金属非金属矿山（小型露天采石场)',
        },
        {
          value: '05',
          label: '危险化学品经营单位',
        },
      ],
      operationType: '03',

      operateTaskList: [
        {
          value: '01',
          label: '初训',
        },
        {
          value: '02',
          label: '复训',
        },
      ],
      operateTask: '01',

      tableData: [
        {
          name: '王小虎',
          cardId: '320830198606241579',
          sex: '女',
          education: '本科',
          phone: '13913008707',
          healthState: '健康',
        },
        {
          name: '王小虎',
          cardId: '320830198606241579',
          sex: '女',
          education: '本科',
          phone: '13913008707',
          healthState: '健康',
        },
        {
          name: '王小虎',
          cardId: '320830198606241579',
          sex: '女',
          education: '本科',
          phone: '13913008707',
          healthState: '健康',
        },
        {
          name: '王小虎',
          cardId: '320830198606241579',
          sex: '女',
          education: '本科',
          phone: '13913008707',
          healthState: '健康',
        },
        {
          name: '王小虎',
          cardId: '320830198606241579',
          sex: '女',
          education: '本科',
          phone: '13913008707',
          healthState: '健康',
        },
        {
          name: '王小虎',
          cardId: '320830198606241579',
          sex: '女',
          education: '本科',
          phone: '13913008707',
          healthState: '健康',
        },
        {
          name: '王小虎',
          cardId: '320830198606241579',
          sex: '女',
          education: '本科',
          phone: '13913008707',
          healthState: '健康',
        },
      ],
      multipleSelection: [],
    };
  },
  mounted() {},
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(item, type) {
      console.log(item, type);
    },
    submitOrder() {
      this.$emit('nextStep', 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.section-body {
	padding: 28px;
}
.sub-title {
	height: 40px;
	font-size: 16px;
	color: #4d5155;
	font-weight: normal;
}
.select-box {
	display: flex;
	justify-content: space-between;
	margin-bottom: 40px;
}
.select-item {
	.label {
		line-height: 30px;
		color: #979da2;
	}
}
.project-info-box {
	padding: 0;
}

.page-footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 58px;
	background: #fff;
	padding-left: 24px;
	.footer-left {
		color: #51585e;
	}
	.red-txt {
		font-style: normal;
		color: #f00;
		margin: 0 4px;
	}
	.order-cancel,
	.order-submit {
		width: 130px;
		height: 58px;
		line-height: 58px;
		text-align: center;
		background: #c8c8c8;
	}
	.order-cancel {
		margin-right: 10px;
	}
	.order-submit {
		background: #0060af;
		color: #fff;
	}
}
</style>
