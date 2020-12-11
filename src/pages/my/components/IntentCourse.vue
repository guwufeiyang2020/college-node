<!-- 意向学习课程 -->
<template>
	<div class="intent-course-wrapper">
		<div class="class-category" v-for="(firItem, firIndex) in tabledata" :key="firIndex">
			<div class="intent-course-header">
				<el-checkbox v-model="firItem.mychecked" @change="firstChanged(firIndex)"></el-checkbox>
				{{ firItem.jiedianmingcheng }}
			</div>

			<div class="class-details" v-for="(subItem, subIndex) in firItem.classData" :key="subIndex">
				<el-checkbox v-model="subItem.mychecked" @change="secondChanged(firIndex)"></el-checkbox>
				<img v-lazy="subItem.kechengtupian_path" class="class-img" />
				<div class="sub-details">
					<p class="course-name">{{ subItem.courseName }}</p>
					<div class="course-time">
						{{ subItem.classType }}
						<span class="line"></span>
						{{ subItem.classHour }}
					</div>
					<p class="course-type">{{ subItem.courseTypes.join('+') }}</p>
				</div>
				<div class="teacher-wrapper">
					<div class="TeacherName">
						<i></i>
						{{ subItem.courseTeacher }}
					</div>
				</div>
				<div class="course-operate">
					<p class="course-price" v-if="subItem.coursePrice">￥{{ subItem.coursePrice }}</p>
					<p class="combine-class" v-if="subItem.isCombineClass">
						<i class="icon-combinate"></i>
						{{ subItem.combineClassName }}
					</p>
					<button class="btn-delete" @click="deleteCourse(subItem.kechengbianhao)">删除课程</button>
				</div>
			</div>
		</div>

		<div class="purchase-course">
			<el-checkbox v-model="allChecked" @change="handleSelectAllClassfiy">全选</el-checkbox>
			<span class="choose-class">
				已选择
				<span class="num">{{ totalNum }}</span> 门课程
			</span>
			<span class="delete-class">删除选中的课程</span>

			<router-link :to="{ path: '/teamOrder' }" target="_blank" class="btn-intelligent">
				<i class="icon-intelligent"></i>智能推荐
			</router-link>
			<!-- <button >
        智能推荐
      </button>-->
			<button class="buy-class" @click="buyCourse">购买课程</button>
		</div>

		<div class="tip-box">
			<i class="icon-tip-blue"></i
			>智能推荐：点击智能推荐，填写您的个人需求，我们可以根据您的需求，为您推荐最佳课程组合。
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      tabledata: [
        {
          jiediandengji: '1',
          fujiedianbianhao: '0',
          jiedianmingcheng: '取证类课程',
          mychecked: false,
          classData: [
            {
              courseId: 'KC-2',
              user: 'AS',
              owner: 'AS',
              id: '1f792fe742fb4dbba4af7b899c962567',
              courseName: '金属非金属矿山排水作业',
              classHour: '2',
              coursePrice: '100',
              courseType: '8',
              courseDescribe: '',
              courseTeacher: '张学军',
              kechengtupian_path: require('../../../assets/images/temp/list1.png'),
              classType: '石油储运类技能培训',
              parentType: '生产类',
              courseTypes: ['理论', '实操'],
              mychecked: false
            }
          ]
        },
        {
          jiediandengji: '2',
          fujiedianbianhao: '0',
          jiedianmingcheng: '安全生产类课程',
          mychecked: false,
          classData: [
            {
              courseId: 'KC-2',
              user: 'AS',
              owner: 'AS',
              id: '1f792fe742fb4dbba4af7b899c962567',
              courseName: '金属非金属矿山爆破作业',
              classHour: '2',
              coursePrice: '300',
              courseType: '8',
              courseDescribe: '',
              courseTeacher: '张学军',
              kechengtupian_path: require('../../../assets/images/temp/list2.png'),
              classType: '石油储运类技能培训',
              parentType: '生产类',
              courseTypes: ['理论'],
              mychecked: false,
              isCombineClass: false
            },
            {
              courseId: 'KC-2',
              user: 'AS',
              owner: 'AS',
              id: '1f792fe742fb4dbba4af7b899c962567',
              courseName: '油品基本特性分析以及汽柴油SDS',
              classHour: '2',
              coursePrice: '',
              courseType: '8',
              courseDescribe: '',
              courseTeacher: '张学军',
              kechengtupian_path: require('../../../assets/images/temp/list3.png'),
              classType: '石油储运类技能培训',
              parentType: '生产类',
              courseTypes: ['实操'],
              mychecked: false,
              isCombineClass: false
            },
            {
              courseId: 'KC-2',
              user: 'AS',
              owner: 'AS',
              id: '1f792fe742fb4dbba4af7b899c962567',
              courseName: '汽柴油化验检测基础',
              classHour: '2',
              coursePrice: '',
              courseType: '8',
              courseDescribe: '',
              courseTeacher: '张学军',
              kechengtupian_path: require('../../../assets/images/temp/list4.png'),
              classType: '石油储运类技能培训',
              parentType: '生产类',
              courseTypes: ['实操'],
              mychecked: false,
              isCombineClass: true,
              combineClassName: '组合课程一'
            }
          ]
        }
      ],
      courseIdList: [],
      selectIds: []
    };
  },
  computed: {
    totalNum() {
      let tatol = 0;
      this.tabledata.forEach((item) => {
        item.classData.forEach((subItem) => {
          if (subItem.mychecked === true) {
            tatol += 1;
          }
        });
      });
      return tatol;
    },
    allChecked: {
      get() {
        let count = 0;
        for (let i = 0; i < this.tabledata.length; i += 1) {
          if (this.tabledata[i].mychecked === true) {
            count += 1;
          } else {
            count -= 1;
          }
        }
        if (count === this.tabledata.length) {
          return true;
        }
        return false;
      },
      set(val) {
        return val;
      }
    }
  },
  mounted() {},
  methods: {
    // 一级change事件
    firstChanged(index) {
      const { classData } = this.tabledata[index];
      if (this.tabledata[index].mychecked === false) {
        classData.forEach((item) => {
          this.$set(item, 'mychecked', false);
        });
      } else {
        classData.forEach((item) => {
          this.$set(item, 'mychecked', true);
        });
      }
    },
    // 二级change事件
    secondChanged(index) {
      const subData = this.tabledata[index].classData;
      let tickCount = 0;
      const len = subData.length;
      for (let i = 0; i < len; i += 1) {
        if (subData[i].mychecked === true) {
          tickCount += 1;
        } else {
          tickCount -= 1;
        }
      }
      if (tickCount === len) {
        // 二级全勾选  一级勾选
        this.$set(this.tabledata[index], 'mychecked', true);
      } else {
        // 二级未全选  一级不勾选
        this.$set(this.tabledata[index], 'mychecked', false);
      }
    },
    // 总的全选
    handleSelectAllClassfiy(val) {
      if (val) {
        for (let i = 0; i < this.tabledata.length; i += 1) {
          this.tabledata[i].mychecked = true;
          this.firstChanged(i); // 调用一级change事件
        }
      } else {
        for (let i = 0; i < this.tabledata.length; i += 1) {
          this.tabledata[i].mychecked = false;
          this.firstChanged(i); // 调用一级change事件
        }
      }
    },
    // 删除课程
    deleteCourse(val) {
      const params = {
        courseIdList: this.courseIdList.push(JSON.stringify(val))
      };
      this.$http.post('/sdkcollege/shoppingCarty/delMyCourse', params).then((res) => {
        if (res.data && res.data.status === 200) {
          if (res.data.data.count !== 0) {
            this.getCourseList();
          }
        } else {
          this.$message.error('系统错误');
        }
      });
    },
    buyCourse() {
      this.$router.push({
        path: '/enterpriseConfirmOrder'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.class-category {
	margin-bottom: 16px;
}
.intent-course-header {
	height: 34px;
	display: flex;
	align-items: center;
	padding-left: 22px;
	border-top: 1px solid #c7c9ca;
	border-left: 1px solid #c7c9ca;
	background: #f3f5f9;
	.el-checkbox {
		margin-right: 15px;
	}
}
.class-details {
	height: 140px;
	display: flex;
	align-items: center;
	position: relative;
	padding: 0 22px;
	background: #fff;
	border-left: 1px solid #c7c9ca;
	border-right: 1px solid #c7c9ca;
	border-bottom: 1px solid #dbdadd;
	.class-img {
		width: 180px;
		height: 100px;
		margin: 0 20px;
		border-radius: 4px;
	}
	.sub-details {
		width: 325px;
		.course-name {
			height: 30px;
			line-height: 30px;
			font-size: 16px;
		}
		.course-time {
			height: 34px;
			display: flex;
			align-items: center;
			color: $colorHelpText;
			line-height: 28px;
			.line {
				display: inline-block;
				width: 1px;
				height: 15px;
				margin: 0 10px;
				background: $colorHelpText;
			}
		}
		.course-type {
			height: 30px;
			line-height: 30px;
			font-size: 12px;
			color: $colorHelpText;
		}
	}
	.teacher-wrapper {
		width: 330px;
		position: relative;
		.TeacherName {
			width: 70px;
			height: 30px;
			padding-left: 20px;
			font-size: 14px;
			line-height: 28px;
		}
		i {
			position: absolute;
			width: 16px;
			height: 15px;
			top: 6px;
			left: 0;
			background: url('../../../assets/images/icon/51.png') no-repeat;
			background-size: 100% 100%;
		}
	}
	.course-operate {
		flex: 1;
		text-align: right;
		.course-price {
			margin-bottom: 5px;
			line-height: 30px;
			font-size: 18px;
			color: #ff4b5a;
		}
		.combine-class {
			height: 30px;
			color: #2c6ed5;
		}
		.btn-delete {
			color: #899097;
			line-height: 28px;
			cursor: pointer;
		}
	}
}
.purchase-course {
	position: relative;
	height: 60px;
	background: #fff;
	border: 1px solid #c6c8c9;
	color: #535557;
	margin-top: 16px;
	display: flex;
	align-items: center;
	padding: 0 22px;
	.choose-class {
		margin: 0 28px;
	}
	.num {
		margin: 0 5px;
		color: #ff0000;
	}
	.delete-class {
		margin-left: 20px;
		cursor: pointer;
	}
	.buy-class {
		position: absolute;
		right: -1px;
		top: -1px;
		width: 130px;
		height: 60px;
		background: #0062ae;
		line-height: 60px;
		text-align: center;
		color: #fff;
		cursor: pointer;
	}
	.btn-intelligent {
		position: absolute;
		right: 150px;
		top: 14px;
		height: 30px;
		color: #0062ae;
		display: flex;
		align-items: center;
		.icon-intelligent {
			display: inline-block;
			width: 22px;
			height: 26px;
			background: url('../../../assets/images/icon/icon-intelligent.png');
			margin-right: 6px;
		}
	}
}
.tip-box {
	height: 56px;
	line-height: 56px;
	color: #51585e;
	padding-left: 20px;
}
.icon-intelligent {
	display: inline-block;
	width: 22px;
	height: 26px;
	background: url('../../../assets/images/icon/icon-intelligent.png');
	margin-right: 6px;
}
.icon-tip-blue {
	display: inline-block;
	width: 16px;
	height: 16px;
	background: url('../../../assets/images/icon/icon-tip-blue.png');
	vertical-align: -3px;
	margin-right: 6px;
}
.icon-combinate {
	display: inline-block;
	width: 16px;
	height: 16px;
	background: url('../../../assets/images/icon/icon-combinate.png');
	vertical-align: -3px;
	margin-right: 6px;
}
</style>
