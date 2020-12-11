<template>
	<div class="wrapper">
		<h3 class="title">课程安排</h3>
		<div class="Coursearrangement_center">
			<div class="course-top">
				<span class="label">培训时间</span>
				<span class="val">2020年1月6日-1月12日</span>
				<span class="label">培训地点</span>
				<span class="val">岙山学院</span>
			</div>
			<div class="training_infotable">
				<el-table
					:data="tableData"
					:span-method="objectSpanMethod"
					@cell-mouse-leave="cellMouseLeave"
					@cell-mouse-enter="cellMouseEnter"
					:cell-class-name="tableRowClassName"
					border
				>
					<el-table-column prop="date" label="日期" width="80"></el-table-column>
					<el-table-column prop="time" label="日期" width="80"></el-table-column>
					<el-table-column prop="classinfo" label="时间"></el-table-column>
					<el-table-column prop="classstyle" label="学习内容" width="260"></el-table-column>
					<el-table-column prop="classstyle1" label="授课形式" width="130"></el-table-column>
					<el-table-column label="主讲师" width="180">
						<template slot-scope="scope">
							<p v-for="(item, index) in scope.row.teacher" :key="index">{{ item }}</p>
						</template>
					</el-table-column>
					<el-table-column prop="assistant" label="助教"></el-table-column>
					<el-table-column prop="emergency" label="应急员"></el-table-column>
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
          date: '7月14日',
          time: '',
          value: null,
          classinfo: '16：00之前',
          classstyle: '报到入住，熟悉环境',
          classstyle1: '/',
          teacher: [],
          assistant: '/',
          emergency: ''
        },
        {
          date: '7月15日',
          time: '上午',
          classinfo: '8.40-11.40',
          classstyle: '开班动员/如何成为安全储运人',
          classstyle1: '理论+案例',
          teacher: ['1.舟山市安全专家吴学新', '2.中化岙山讲师张浩'],
          assistant: '/',
          emergency: ''
        },
        {
          date: '7月15日',
          time: '下午',
          classinfo: '13.30-16.30',
          classstyle: '安全及应急法律法规体系解读',
          classstyle1: '理论+案例',
          teacher: ['1.舟山市安全专家吴学新', '2.中化岙山讲师张浩'],
          assistant: '/',
          emergency: ''
        },
        {
          date: '7月16日',
          time: '上午',
          classinfo: '8.40-11.30',
          classstyle: '行业安全生产形势分析及典型事故案例',
          classstyle1: '理论+案例',
          teacher: ['1.舟山市安全专家吴学新', '2.中化岙山讲师张浩'],
          assistant: '/',
          emergency: ''
        },
        {
          date: '7月16日',
          time: '下午',
          classinfo: '13.30-16.30',
          classstyle: '油品基本特性分析以及汽柴油SDS',
          classstyle1: '理论+案例',
          teacher: ['1.舟山市安全专家吴学新', '2.中化岙山讲师张浩'],
          assistant: '/',
          emergency: ''
        },
        {
          date: '7月17日',
          time: '上午',
          classinfo: '8.40-11.30',
          classstyle: '风险管理基础与风险工具应用（上）',
          classstyle1: '理论+案例',
          teacher: ['1.舟山市安全专家吴学新', '2.中化岙山讲师张浩'],
          assistant: '/',
          emergency: ''
        },
        {
          date: '7月17日',
          time: '下午',
          classinfo: '13.30-16.30',
          classstyle: '风险管理基础与风险工具应用（下）',
          classstyle1: '理论+案例+实操',
          teacher: ['1.舟山市安全专家吴学新', '2.中化岙山讲师张浩'],
          assistant: '张浩',
          emergency: ''
        },
        {
          date: '7月17日',
          time: '晚上',
          classinfo: '18.00-20.00',
          classstyle: '第一阶段考试',
          classstyle1: '笔试',
          teacher: [],
          assistant: '/',
          emergency: ''
        },
        {
          date: '7月18日',
          time: '上午',
          classinfo: '8.40-11.30',
          classstyle: '储运设备：泵、阀',
          classstyle1: '理论+案例',
          teacher: ['1.舟山市安全专家吴学新', '2.中化岙山讲师张浩'],
          assistant: '/',
          emergency: ''
        },
        {
          date: '7月18日',
          time: '下午',
          classinfo: '13.30-16.30',
          classstyle: '储运设备：储罐及其附件',
          classstyle1: '理论+案例',
          teacher: ['1.舟山市安全专家吴学新', '2.中化岙山讲师张浩'],
          assistant: '/',
          emergency: ''
        }
      ],
      rowIndex: '-1',
      orderIndexArr: [],
      hoverOrderArr: []
    };
  },
  methods: {
    // 获取相同编号的数组
    getOrderNumber() {
      const orderObj = {};
      this.tableData.forEach((item, index) => {
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
      if (columnIndex === 0) {
        for (let i = 0; i < this.orderIndexArr.length; i += 1) {
          let element = this.orderIndexArr[i];
          for (let j = 0; j < element.length; j += 1) {
            let item = element[j];
            if (rowIndex === item) {
              if (j === 0) {
                return {
                  rowspan: element.length,
                  colspan: 1
                };
              }
              if (j !== 0) {
                return {
                  rowspan: 0,
                  colspan: 0
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
    }
  },
  mounted() {
    this.getOrderNumber();
  }
};
</script>

<style lang="scss" scoped>
.el-table {
	/deep/ .hovered-row {
		background: #f5f7fa;
	}
}
.wrapper {
	margin-bottom: 20px;
}
.title {
	height: 34px;
	line-height: 34px;
	background: #f2f6f9;
	border-left: 1px solid #fff;
	border-right: 1px solid #fff;
	padding-left: 16px;
	color: #51585e;
}
.Coursearrangement_center {
	width: 100%;
	background: #fff;
	padding: 20px;
	.course-top {
		width: 100%;
		height: 50px;
		padding-left: 28px;
		background: rgba(242, 246, 249, 1);
		font-size: 16px;
		line-height: 50px;
		.label {
			color: #0060b0;
			margin-right: 30px;
		}
		.val {
			color: #51585e;
			margin-right: 88px;
		}
	}
	.training_infotable {
		margin-top: 20px;
	}
}
</style>
<style lang="scss">
.training_infotable {
	th {
		background: #eeeeee !important;
	}
}
</style>
