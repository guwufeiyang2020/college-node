<template>
	<section class="section-wrapper">
		<div class="section-header">请认真填写以下信息，方便我们根据您的需求推荐最佳培训方案！</div>
		<div class="section-body">
			<h3 class="sub-title">以下信息带有 ”*“ 的为必填信息！</h3>
			<div class="select-box">
				<el-form
					:model="ruleForm"
					:rules="rules"
					ref="ruleForm"
					label-width="180px"
					class="demo-ruleForm"
				>
					<el-form-item label="参训公司" prop="participationCompany">
						<el-input v-model="ruleForm.participationCompany"></el-input>
					</el-form-item>
					<el-form-item label="参训人数" prop="participationPersonNum">
						<el-input v-model="ruleForm.participationPersonNum"></el-input>
					</el-form-item>
					<el-form-item label="课程时间" required class="select-date">
						<el-form-item prop="startDate">
							<el-date-picker
								type="date"
								placeholder="选择开始日期"
								v-model="ruleForm.startDate"
							></el-date-picker>
						</el-form-item>
						<span class="line">—</span>
						<el-form-item prop="endDate">
							<el-date-picker
								type="date"
								placeholder="选择结束日期"
								v-model="ruleForm.endDate"
							></el-date-picker>
						</el-form-item>
					</el-form-item>
					<el-form-item label="参训学员专业" prop="studentsProfessional" required>
						<el-input v-model="ruleForm.studentsProfessional"></el-input>
					</el-form-item>
					<el-form-item label="岗位责任" prop="postDuty" required>
						<el-select v-model="ruleForm.postDuty" placeholder="请选择岗位责任">
							<el-option label="安全职责" value="01"></el-option>
							<el-option label="安全职责二" value="02"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="是否需要组织考试、发证" prop="needExam" required>
						<el-select v-model="ruleForm.needExam">
							<el-option label="需要" value="01"></el-option>
							<el-option label="不需要" value="02"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="是否需要提供住宿" prop="needStay" required>
						<el-select v-model="ruleForm.needStay">
							<el-option label="需要" value="01"></el-option>
							<el-option label="不需要" value="02"></el-option>
						</el-select>
					</el-form-item>

					<div class="hotel-info" v-show="showHotelInfo">
						<el-form-item label="选择酒店">
							<el-select v-model="ruleForm.hotelName">
								<el-option label="如家" value="01"></el-option>
								<el-option label="喜来登" value="02"></el-option>
								<el-option label="七天连锁" value="03"></el-option>
							</el-select>
							<router-link to="/trainEnsure/hotel" target="_blank">查看酒店详情</router-link>
						</el-form-item>
						<el-form-item label="入住时间">
							<el-date-picker
								v-model="ruleForm.checkInDate"
								type="daterange"
								align="right"
								unlink-panels
								range-separator="至"
								start-placeholder="开始日期"
								end-placeholder="结束日期"
								:picker-options="pickerOptions"
							></el-date-picker>
						</el-form-item>
						<el-form-item label="酒店标准" class="hotel-standard">
							<el-checkbox-group v-model="ruleForm.hotelStandard">
								<el-checkbox label="标准间(120元/间)" border></el-checkbox>
								<template v-if="ruleForm.hotelStandard.includes('标准间(120元/间)')">
									<el-input v-model="ruleForm.hotel1"></el-input>
									<span class="unit">间</span>
								</template>

								<el-checkbox label="单间(150元/间)" border></el-checkbox>
								<template v-if="ruleForm.hotelStandard.includes('单间(150元/间)')">
									<el-input v-model="ruleForm.hotel2"></el-input>
									<span class="unit">间</span>
								</template>
								<el-checkbox label="宿舍(60元/间)" border></el-checkbox>
								<template v-if="ruleForm.hotelStandard.includes('宿舍(60元/间)')">
									<el-input v-model="ruleForm.hotel3"></el-input>
									<span class="unit">间</span>
								</template>
							</el-checkbox-group>
						</el-form-item>
						<el-form-item label="酒店备注">
							<el-input type="textarea" v-model="ruleForm.hotelRemark"></el-input>
						</el-form-item>
					</div>

					<el-form-item label="是否需要提供就餐" prop="needProvideMeal" required>
						<el-select v-model="ruleForm.needProvideMeal">
							<el-option label="需要" value="01"></el-option>
							<el-option label="不需要" value="02"></el-option>
						</el-select>
					</el-form-item>

					<div class="meal-info" v-show="showMealInfo">
						<el-form-item label="就餐选择">
							<el-checkbox-group v-model="ruleForm.mealSelect" class="hotel-standard meal-select">
								<el-checkbox label="自助餐(15元/人)" border></el-checkbox>
								<template v-if="ruleForm.mealSelect.includes('自助餐(15元/人)')">
									<el-input v-model="ruleForm.meal1"></el-input>
									<span class="unit">份</span>
								</template>
								<el-checkbox label="套餐(30元/人)" border></el-checkbox>
								<template v-if="ruleForm.mealSelect.includes('套餐(30元/人)')">
									<el-input v-model="ruleForm.meal2"></el-input>
									<span class="unit">份</span>
								</template>
							</el-checkbox-group>
							<router-link to="/trainEnsure/meal" target="_blank">查看就餐详情</router-link>
						</el-form-item>
						<el-form-item label="就餐备注">
							<el-input type="textarea" v-model="ruleForm.mealRemark"></el-input>
						</el-form-item>
					</div>

					<el-form-item label="是否需要接送站" prop="needProvidePickUp" required>
						<el-select v-model="ruleForm.needProvidePickUp">
							<el-option label="需要" value="01"></el-option>
							<el-option label="不需要" value="02"></el-option>
						</el-select>
					</el-form-item>

					<el-form-item label="是否需要提供茶歇" prop="needProvideTeaBreak" required>
						<el-select v-model="ruleForm.needProvideTeaBreak">
							<el-option label="需要" value="01"></el-option>
							<el-option label="不需要" value="02"></el-option>
						</el-select>
					</el-form-item>

					<el-form-item label="其他需求">
						<tinymce-editor v-model="ruleForm.otherRequire" @input="tinymceChange"></tinymce-editor>
					</el-form-item>

					<el-form-item>
						<el-button @click="resetForm('ruleForm')" class="btn-reset">重置</el-button>
						<el-button type="primary" @click="submitForm('ruleForm')" class="btn-submit"
							>提交需求</el-button
						>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</section>
</template>

<script>
import TinymceEditor from '../../../components/TinymceEditor.vue';

export default {
  components: {
    TinymceEditor
  },
  data() {
    return {
      ruleForm: {
        participationCompany: '',
        participationPersonNum: '',
        startDate: '',
        endDate: '',
        studentsProfessional: '',
        needExam: '01',
        needStay: '01',

        hotelName: '',
        checkInDate: '',
        hotelStandard: [],
        hotel1: '',
        hotel2: '',
        hotel3: '',
        hotelRemark: '',

        needProvideMeal: '01', // 01需要 02不需要
        mealSelect: [],
        meal1: '',
        meal2: '',
        mealRemark: '',

        needProvidePickUp: '01',
        needProvideTeaBreak: '01',

        otherRequire: ''
      },
      rules: {
        participationCompany: [{ required: true, message: '请输入参训公司', trigger: 'blur' }],
        participationPersonNum: [{ required: true, message: '请输入参训人数', trigger: 'blur' }],
        startDate: [
          {
            type: 'date',
            required: true,
            message: '请选择开始日期',
            trigger: 'change'
          }
        ],
        endDate: [
          {
            type: 'date',
            required: true,
            message: '请选择结束时间',
            trigger: 'change'
          }
        ],
        studentsProfessional: [{ required: true, message: '请输入参训学员专业', trigger: 'blur' }],
        postDuty: [{ required: true, message: '请选择岗位职责', trigger: 'change' }],
        needExam: [
          {
            required: true,
            message: '请选择是否需要组织考试、发证',
            trigger: 'change'
          }
        ],
        needStay: [
          {
            required: true,
            message: '请选择是否需要提供住宿',
            trigger: 'change'
          }
        ],
        needProvideMeal: [
          {
            required: true,
            message: '请选择是否需要提供就餐',
            trigger: 'change'
          }
        ],
        needProvidePickUp: [
          {
            required: true,
            message: '请选择是否需要提供接送',
            trigger: 'change'
          }
        ],
        needProvideTeaBreak: [
          {
            required: true,
            message: '请选择是否需要提供茶歇',
            trigger: 'change'
          }
        ]
      },

      pickerOptions: {
        shortcuts: [
          {
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          },
          {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }
        ]
      }
    };
  },
  computed: {
    showHotelInfo() {
      return this.ruleForm.needStay === '01';
    },
    showMealInfo() {
      return this.ruleForm.needProvideMeal === '01';
    }
  },
  methods: {
    tinymceChange(val) {
      // console.log(this.ruleForm.otherRequire);
      console.log(val);
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit('nextStep', 1);
        } else {
          console.log('error submit!!');
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  },
  mounted() {}
};
</script>

<style lang="scss" scoped>
.sub-title {
	height: 40px;
	color: #91999e;
	font-weight: normal;
}
.select-box {
	display: flex;
	justify-content: space-between;
}
.select-item {
	.label {
		line-height: 30px;
		color: #979da2;
	}
}
.btn-reset,
.btn-submit {
	width: 130px;
	height: 40px;
	text-align: center;
	border-radius: 0;
	background: #c8c8c8;
	color: #303c46;
	outline: none;
	border: none;
	margin-right: 10px;
}
.btn-submit {
	background: #0060af;
	color: #fff;
}
.hotel-standard {
	.el-checkbox {
		margin-right: 5px;
	}
	.el-input {
		width: 60px;
	}
	.unit {
		display: inline-block;
		margin: 0 30px 0 5px;
		font-size: 14px;
		color: #606266;
	}
}
</style>
