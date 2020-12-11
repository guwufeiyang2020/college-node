<!-- 意向学习课程 -->
<template>
	<div class="project-info-wrapper">
		<section class="section">
			<div class="section-header">项目基本信息</div>
			<div class="project-info-box">
				<h2 class="project-name">中化安元HSE业务人员培训</h2>
				<dl>
					<dt>项目名称</dt>
					<dd>中化安元HSE业务人员培训</dd>
				</dl>
				<dl>
					<dt>课程内容</dt>
					<dd>
						1、企业生产安全应急预案数字化推演及复盘；<br />
						2、常见事故现场处置实践培训；<br />
						3、危险作业监管实践培训；
					</dd>
				</dl>
				<dl>
					<dt>培训人数</dt>
					<dd>20人</dd>
				</dl>
				<dl>
					<dt>培训时长</dt>
					<dd>4天</dd>
				</dl>
				<dl>
					<dt>培训地点</dt>
					<dd>中化安全与应急学院</dd>
				</dl>
			</div>
		</section>
		<section class="section">
			<div class="section-header">学员信息</div>
			<div class="section-body">
				<div class="table-wrapper">
					<div class="btn-area">
						<button class="btn-default fr btn-qrcode"><i class="icon-qrcode"></i>二维码填报</button>
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
						<el-table-column prop="name" label="姓名" width="80"></el-table-column>
						<el-table-column prop="cardId" label="身份证号" width="180"></el-table-column>
						<el-table-column prop="sex" label="性别" width="70"></el-table-column>
						<el-table-column prop="phone" label="手机号码" width="120"></el-table-column>
						<el-table-column prop="tripMode" label="出行方式" width="110"></el-table-column>
						<el-table-column prop="needPickUp" label="是否需要接送站" width="120"></el-table-column>
						<el-table-column prop="returnDate" label="返程日期" width="120"></el-table-column>
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
			</div>
		</section>
	</div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: '王小虎',
          cardId: '320830198606241579',
          sex: '女',
          phone: '13913008707',
          tripMode: '自驾',
          needPickUp: '否',
          returnDate: '2020/4/12',
        },
        {
          name: '王小虎',
          cardId: '320830198606241579',
          sex: '男',
          phone: '13913008707',
          tripMode: '自驾',
          needPickUp: '否',
          returnDate: '2020/4/12',
        },
        {
          name: '王小虎',
          cardId: '320830198606241579',
          sex: '女',
          phone: '13913008707',
          tripMode: '班车',
          needPickUp: '否',
          returnDate: '2020/4/12',
        },
        {
          name: '王小虎',
          cardId: '320830198606241579',
          sex: '女',
          phone: '13913008707',
          tripMode: '自驾',
          needPickUp: '否',
          returnDate: '2020/4/12',
        },
        {
          name: '王小虎',
          cardId: '320830198606241579',
          sex: '女',
          phone: '13913008707',
          tripMode: '自驾',
          needPickUp: '否',
          returnDate: '2020/4/12',
        },
        {
          name: '王小虎',
          cardId: '320830198606241579',
          sex: '女',
          phone: '13913008707',
          tripMode: '自驾',
          needPickUp: '否',
          returnDate: '2020/4/12',
        },
        {
          name: '王小虎',
          cardId: '320830198606241579',
          sex: '女',
          phone: '13913008707',
          tripMode: '自驾',
          needPickUp: '否',
          returnDate: '2020/4/12',
        },
      ],
      multipleSelection: [],
    };
  },
  mounted() {
    // this.getCourseList();
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleClick(item, type) {
      console.log(item, type);
    },
  },
};
</script>

<style lang="scss" scoped>
.section {
	border: 1px solid #caccd0;
	background: #fff;
	margin-bottom: 12px;
}
.section-header {
	height: 34px;
	background: #f3f5f9;
	line-height: 34px;
	padding-left: 20px;
	color: #b1b8bd;
}
.project-name {
	height: 40px;
	font-size: 16px;
	color: #4d5155;
}
.section-body {
	padding: 22px;
}

.btn-qrcode {
	display: flex;
	align-items: center;
}
</style>
