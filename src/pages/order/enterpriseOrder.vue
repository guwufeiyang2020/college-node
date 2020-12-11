<template>
	<section class="person-order-wrapper">
		<div class="my-banner-wrapper">
			<div class="person-order-banner clearfix m-1200">
				<h2 class="title">订单信息</h2>
				<div class="step-process">
					<el-steps :active="0">
						<el-step title="订单确认"></el-step>
						<el-step title="提交成功"></el-step>
					</el-steps>
				</div>
			</div>
		</div>

		<section class="section-wrapper">
			<div class="section-header">课程</div>
			<div class="section-body">
				<div class="class-details" v-for="(item, index) in classData" :key="index">
					<img v-lazy="item.kechengtupian_path" class="class-img" v-if="!item.isCustom" />
					<div class="class-img is-custom-class" v-if="item.isCustom">自定义课程</div>
					<div class="sub-details">
						<p class="course-name">{{ item.courseName }}</p>
						<div class="course-time">
							{{ item.classType }}
							<span class="line"></span>
							{{ item.classHour }}
						</div>
						<div class="course-type-teacher">
							<template v-if="!item.isCustom">
								<span class="course-type">{{ item.courseTypes.join('+') }}</span>
								<span class="teacher-name">
									<i></i>
									{{ item.courseTeacher }}
								</span>
							</template>
							<template v-else>
								外请师资：
								{{ item.courseTeacher }}
							</template>
						</div>
					</div>
					<div class="course-operate" v-if="item.coursePrice">
						<p class="course-price">￥{{ item.coursePrice }}</p>
					</div>
				</div>
				<div class="add-class-box">
					<button class="add-class-btn">添加外请师资或课程</button>
					<p class="add-class-tip"><i class="icon-tip"></i>此处可自行添加外请的师资和课程。</p>
				</div>
			</div>
		</section>

		<section class="section-wrapper">
			<div class="section-header">请确认以下信息，方便我们的后期给您提供更舒适的服务！</div>
			<div class="section-body fill-info">
				<el-form
					:model="enterpriseDataForm"
					:rules="enterpriseDataRules"
					ref="enterpriseDataForm"
					label-width="80px"
					class="demo-ruleForm"
				>
					<el-form-item label="课程要求">
						<tinymce-editor
							v-model="enterpriseDataForm.require"
							@input="tinymceChange"
						></tinymce-editor>
					</el-form-item>
					<el-form-item label="人数" prop="personNum">
						<el-select v-model="enterpriseDataForm.personNum" @change="changePersonNum">
							<el-option label="10" value="01"></el-option>
							<el-option label="20" value="02"></el-option>
							<el-option label="30" value="03"></el-option>
							<el-option label="40" value="04"></el-option>
							<el-option label="50" value="05"></el-option>
							<el-option label="自定义" value="06"></el-option>
						</el-select>
						<span class="person-input" v-if="showPersonInput">
							<el-input v-model="enterpriseDataForm.customPersonNum"></el-input>人
						</span>
					</el-form-item>
					<el-form-item label="服务" prop="services">
						<el-checkbox-group v-model="enterpriseDataForm.services">
							<el-checkbox label="01" border>住宿服务</el-checkbox>
							<el-checkbox label="02" border>就餐服务</el-checkbox>
							<el-checkbox label="03" border>交通服务</el-checkbox>
						</el-checkbox-group>
					</el-form-item>
					<!-- 酒店信息 -->
					<div class="hotel-info" v-show="enterpriseDataForm.services.includes('01')">
						<el-form-item label="选择酒店">
							<el-select v-model="enterpriseDataForm.hotelName">
								<el-option label="如家" value="01"></el-option>
								<el-option label="喜来登" value="02"></el-option>
								<el-option label="七天连锁" value="03"></el-option>
							</el-select>
							<a>查看酒店详情</a>
						</el-form-item>
						<el-form-item label="入住时间">
							<el-date-picker
								v-model="enterpriseDataForm.checkInDate"
								type="daterange"
								align="right"
								unlink-panels
								range-separator="至"
								start-placeholder="开始日期"
								end-placeholder="结束日期"
								:picker-options="pickerOptions"
							></el-date-picker>
						</el-form-item>
						<el-form-item label="酒店标准">
							<el-checkbox-group v-model="enterpriseDataForm.hotelStandard">
								<el-checkbox label="标准间" border></el-checkbox>
								<el-checkbox label="单间" border></el-checkbox>
								<el-checkbox label="宿舍" border></el-checkbox>
							</el-checkbox-group>
						</el-form-item>
						<el-form-item label="酒店备注">
							<el-input type="textarea" v-model="enterpriseDataForm.hotelRemark"></el-input>
						</el-form-item>
					</div>
					<!-- 酒店信息结束 -->
					<!-- 就餐信息 -->
					<div class="meal-info" v-show="enterpriseDataForm.services.includes('02')">
						<el-form-item label="就餐选择">
							<el-checkbox-group v-model="enterpriseDataForm.mealSelect" class="meal-select">
								<el-checkbox label="自助餐" border></el-checkbox>
								<el-checkbox label="套餐" border></el-checkbox>
							</el-checkbox-group>
							<a>查看就餐详情</a>
						</el-form-item>
						<el-form-item label="就餐备注">
							<el-input type="textarea" v-model="enterpriseDataForm.mealRemark"></el-input>
						</el-form-item>
					</div>
					<!-- 就餐信息结束 -->
					<!-- 出行信息 -->
					<div class="trip-info" v-show="enterpriseDataForm.services.includes('03')">
						<el-form-item label="出行标准">
							<el-checkbox-group v-model="enterpriseDataForm.tripSelect">
								<el-checkbox label="接站" border></el-checkbox>
								<el-checkbox label="送站" border></el-checkbox>
								<el-checkbox label="日常出行" border></el-checkbox>
							</el-checkbox-group>
						</el-form-item>
					</div>
					<!-- 出行信息结束 -->
				</el-form>
			</div>
		</section>

		<section class="section-wrapper">
			<div class="page-footer">
				<span class="footer-left">
					共
					<em class="red-txt">4</em>门课程
				</span>
				<div class="footer-right">
					<button class="order-cancel">取消订单</button>
					<button class="order-submit">提交订单</button>
				</div>
			</div>
		</section>
	</section>
</template>

<script>
import TinymceEditor from '../../components/TinymceEditor.vue';

export default {
  components: {
    TinymceEditor,
  },
  data() {
    return {
      classData: [
        {
          courseId: 'KC-2',
          user: 'AS',
          owner: 'AS',
          id: '1f792fe742fb4dbba4af7b899c962567',
          courseName: '金属非金属矿山爆破作业',
          classHour: '2',
          coursePrice: '100',
          courseType: '8',
          courseDescribe: '',
          courseTeacher: '张学军',
          kechengtupian_path: require('../../assets/images/temp/list1.png'),
          classType: '石油储运类技能培训',
          parentType: '生产类',
          courseTypes: ['理论', '实操'],
          mychecked: false,
          isCustom: false,
        },
        {
          courseId: 'KC-2',
          user: 'AS',
          owner: 'AS',
          id: '1f792fe742fb4dbba4af7b899c962567',
          courseName: '金属非金属矿山爆破作业',
          classHour: '2',
          coursePrice: '100',
          courseType: '8',
          courseDescribe: '',
          courseTeacher: '张学军',
          kechengtupian_path: require('../../assets/images/temp/list2.png'),
          classType: '石油储运类技能培训',
          parentType: '生产类',
          courseTypes: ['理论', '实操'],
          mychecked: false,
          isCustom: false,
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
          kechengtupian_path: require('../../assets/images/temp/list3.png'),
          classType: '石油储运类技能培训',
          parentType: '生产类',
          courseTypes: ['实操'],
          mychecked: false,
          isCustom: false,
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
          kechengtupian_path: require('../../assets/images/temp/list3.png'),
          classType: '石油储运类技能培训',
          parentType: '生产类',
          courseTypes: ['实操'],
          mychecked: false,
          isCustom: true,
        },
      ],
      enterpriseDataForm: {
        require: '',
        personNum: '',
        customPersonNum: '',
        services: ['01', '02', '03'],

        hotelName: '',
        checkInDate: '',
        hotelStandard: [],
        hotelRemark: '',

        mealSelect: [],
        mealRemark: '',
        tripSelect: [],
      },
      enterpriseDataRules: {},
      showPersonInput: false,
      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            },
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            },
          },
        ],
      },
    };
  },
  methods: {
    tinymceChange(val) {
      console.log(val);
    },
    changePersonNum() {
      if (this.enterpriseDataForm.personNum === '06') {
        this.showPersonInput = true;
      } else {
        this.showPersonInput = false;
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.person-order-wrapper {
	overflow: hidden;
}
.person-order-banner {
	height: 126px;
	display: flex;
	align-items: center;
	font-size: 16px;
	.title {
		margin-right: 110px;
		font-size: 30px;
		color: #fff;
	}
}
.section-body {
	padding: 0;
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
.class-details {
	height: 140px;
	display: flex;
	align-items: center;
	position: relative;
	padding: 0 22px;
	background: #fff;
	border-bottom: 1px solid #dbdadd;
	&:last-of-type {
		border-bottom: 0 none;
	}
	.class-img {
		width: 180px;
		height: 100px;
		margin: 0 20px 0 0;
		border-radius: 4px;
	}
	.is-custom-class {
		background: #dce1ed;
		font-size: 18px;
		text-align: center;
		line-height: 100px;
	}
	.sub-details {
		flex: 1;
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
	.course-type-teacher {
		color: $colorHelpText;
	}
	.teacher-name {
		padding-left: 20px;
		font-size: 14px;
		line-height: 28px;
		// color: #51585e;
		i {
			display: inline-block;
			width: 16px;
			height: 15px;
			background: url('../../assets/images/icon/51.png') no-repeat;
			background-size: 100% 100%;
			vertical-align: -2px;
		}
	}
	.course-operate {
		width: 100px;
		text-align: right;
		.course-price {
			margin-bottom: 5px;
			line-height: 30px;
			font-size: 18px;
			color: #ff4b5a;
		}
	}
}

.add-class-box {
	height: 76px;
	display: flex;
	align-items: center;
	.add-class-btn {
		width: 180px;
		height: 44px;
		background: #0062ae;
		color: #fff;
		line-height: 44px;
		text-align: center;
		margin: 0 22px 0 25px;
	}
	.icon-tip {
		display: inline-block;
		width: 15px;
		height: 15px;
		background: url('../../assets/images/icon/icon-tip.png');
		vertical-align: -3px;
		margin-right: 6px;
	}
	.add-class-tip {
		color: #848485;
	}
}
.fill-info {
	display: flex;
	padding: 22px 30px;
}
.el-form {
	/deep/ .ql-container {
		height: 140px;
	}
	.person-input {
		display: inline-block;
		.el-input {
			width: 120px;
			margin: 0 10px 0 16px;
		}
	}
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
