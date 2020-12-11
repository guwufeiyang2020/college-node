<template>
	<div>
		<h3 class="title">酒店信息</h3>
		<div class="content">
			<div class="Traininglist_top">
				<div>本期培训共15人参与</div>
			</div>
			<div class="Traininglist_table">
				<el-table
					border
					:data="tableData"
					style="width: 100%"
					:default-sort="{ prop: 'date', order: 'descending' }"
				>
					<el-table-column prop="number" label="序号" sortable width="180"></el-table-column>
					<el-table-column prop="name" label=" 姓名" sortable width="180"></el-table-column>
					<el-table-column prop="job" label="岗位"></el-table-column>
					<el-table-column prop="male" label="性别"></el-table-column>
					<el-table-column prop="age" label="年龄"></el-table-column>
					<el-table-column prop="Education" label="学历"></el-table-column>
					<el-table-column prop="Remarks" label="备注"></el-table-column>
				</el-table>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          number: 1,
          name: ' 姚赟',
          job: '生产副总',
          male: '男',
          age: '40',
          Education: '大学',
          Remarks: ' 负责人'
        },
        {
          number: 2,
          name: '洪希君',
          job: '经营副总',
          male: '女',
          age: '43',
          Education: '大学',
          Remarks: '15-19日'
        },
        {
          number: 3,
          name: '海柏林',
          job: '专工',
          male: '男',
          age: '52',
          Education: '大学',
          Remarks: '22-26日'
        },
        {
          number: 4,
          name: '何学航',
          job: '专工',
          male: '男',
          age: '58',
          Education: '大专',
          Remarks: '15-19日'
        },
        {
          number: 5,
          name: '郑肖康',
          job: '专工',
          male: '男',
          age: '58',
          Education: '大专',
          Remarks: '油库实践'
        },
        {
          number: 6,
          name: '何国晨',
          job: '综合主管',
          male: '男',
          age: '52',
          Education: '大专',
          Remarks: '15-19日'
        },
        {
          number: 7,
          name: '周海明',
          job: '综合主管',
          male: '男',
          age: '49',
          Education: '大专',
          Remarks: '22-26日'
        },
        {
          number: 8,
          name: '李志民',
          job: '专工',
          male: '男',
          age: '47',
          Education: '大学',
          Remarks: ''
        },
        {
          number: 9,
          name: '张勇刚',
          job: '操作工',
          male: '男',
          age: '53',
          Education: '中技',
          Remarks: ''
        },
        {
          number: 10,
          name: '王海江',
          job: '操作工',
          male: '男',
          age: '46',
          Education: '大专',
          Remarks: ''
        },
        {
          number: 11,
          name: '杜林建',
          job: '操作工',
          male: '男',
          age: '54',
          Education: '中技',
          Remarks: ''
        },
        {
          number: 12,
          name: '陈建军',
          job: '操作工',
          male: '男',
          age: '52',
          Education: '大专',
          Remarks: ''
        },
        {
          number: 13,
          name: '陈建军',
          job: '操作工',
          male: '女',
          age: '46',
          Education: '大专',
          Remarks: ''
        },
        {
          number: 14,
          name: '徐军国',
          job: '操作工',
          male: '男',
          age: '51',
          Education: '大专',
          Remarks: ''
        },
        {
          number: 15,
          name: '何恩明',
          job: '操作工',
          male: '男',
          age: '49',
          Education: '大专',
          Remarks: ''
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.title {
	height: 34px;
	line-height: 34px;
	background: #f2f6f9;
	border-left: 1px solid #fff;
	border-right: 1px solid #fff;
	padding-left: 16px;
	color: #51585e;
}
.content {
	padding: 10px 20px 20px;
	margin-bottom: 20px;
	background: #fff;
}
.Traininglist_top {
	font-size: 16px;
	color: #0060af;
	line-height: 40px;
}
</style>
<style lang="scss">
.Traininglist_center {
	.el-table--border td:first-child .cell,
	.el-table--border th:first-child .cell,
	.el-table .cell,
	.el-table th div {
		text-align: center;
	}
}
</style>
