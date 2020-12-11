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
					<img v-lazy="item.kechengtupian_path" class="class-img" />
					<div class="sub-details">
						<p class="course-name">{{ item.courseName }}</p>
						<div class="course-time">
							{{ item.classType }}
							<span class="line"></span>
							{{ item.classHour }}
						</div>
						<div class="course-type-teacher">
							<span class="course-type">{{ item.courseTypes.join('+') }}</span>
							<span class="teacher-name">
								<i></i>
								{{ item.courseTeacher }}
							</span>
						</div>
					</div>
					<div class="course-operate">
						<p class="course-price">￥{{ item.coursePrice }}</p>
					</div>
				</div>
			</div>
		</section>

		<section class="section-wrapper">
			<div class="section-header">请确认以下信息，方便我们的后期给您提供更舒适的服务！</div>
			<div class="section-body fill-info">
				<div class="fill-left">
					<el-upload
						action
						class="avatar-uploader"
						:show-file-list="false"
						:on-success="handleAvatarSuccess"
						:before-upload="beforeAvatarUpload"
					>
						<img v-if="imageUrl" :src="imageUrl" class="avatar" />
						<i v-else class="el-icon-plus avatar-uploader-icon">点击上传头像</i>
					</el-upload>
					<div class="upload-tip">
						请上传近期免冠照片一张
						<br />支持jpg、gif、png或bmp格式的图片 <br />建议文件小于1M
					</div>
				</div>
				<div class="fill-right">
					<el-form
						:model="personalDataForm"
						:rules="personalDataRules"
						ref="personalDataForm"
						label-width="140px"
						class="demo-ruleForm"
					>
						<el-form-item label="证件类型" prop="certificateType" required>
							<el-select v-model="personalDataForm.certificateType" placeholder="请选择证件类型">
								<el-option label="身份证" value="01"></el-option>
								<el-option label="护照" value="02"></el-option>
								<el-option label="社会保障卡" value="03"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="证件号码" prop="cardNumber" required>
							<el-input v-model="personalDataForm.cardNumber"></el-input>
						</el-form-item>
						<el-form-item label="考核类别" required class="assess-type">
							<el-select v-model="personalDataForm.certificationType" placeholder="请选择资格类型">
								<el-option
									v-for="item in certificationTypeList"
									:key="item.value"
									:label="item.label"
									:value="item.value"
								></el-option>
							</el-select>
							<el-select v-model="personalDataForm.operationType" placeholder="请选择作业类别">
								<el-option
									v-for="item in operationTypeList"
									:key="item.value"
									:label="item.label"
									:value="item.value"
								></el-option>
							</el-select>
							<el-select v-model="personalDataForm.operateTask" placeholder="请选择操作项目">
								<el-option
									v-for="item in operateTaskList"
									:key="item.value"
									:label="item.label"
									:value="item.value"
								></el-option>
							</el-select>
						</el-form-item>

						<el-form-item label="姓名" prop="name" required>
							<el-input v-model="personalDataForm.name"></el-input>
						</el-form-item>
						<el-form-item label="姓别" prop="sex" required>
							<el-select v-model="personalDataForm.sex">
								<el-option label="男" value="01"></el-option>
								<el-option label="女" value="02"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item label="学历" prop="education" required>
							<el-select v-model="personalDataForm.education" placeholder="请选择学历">
								<el-option label="高中以下" value="01"></el-option>
								<el-option label="高中" value="02"></el-option>
								<el-option label="大专" value="03"></el-option>
								<el-option label="本科" value="04"></el-option>
								<el-option label="硕士" value="05"></el-option>
								<el-option label="博士" value="06"></el-option>
							</el-select>
						</el-form-item>

						<el-form-item label="是否延长复审" prop="needProlongRecheck" required>
							<el-select
								v-model="personalDataForm.needProlongRecheck"
								placeholder="请选择是否延长复审"
							>
								<el-option label="是" value="01"></el-option>
								<el-option label="否" value="02"></el-option>
							</el-select>
						</el-form-item>

						<el-form-item label="手机" prop="phone" required>
							<el-input v-model="personalDataForm.phone"></el-input>
						</el-form-item>

						<el-form-item label="健康状况" prop="physicalStatus" required>
							<el-select v-model="personalDataForm.physicalStatus" placeholder="请选择是否延长复审">
								<el-option label="一般" value="01"></el-option>
								<el-option label="良好" value="02"></el-option>
								<el-option label="健康" value="03"></el-option>
							</el-select>
						</el-form-item>

						<el-form-item label="工作单位" prop="workUnit" required>
							<el-input v-model="personalDataForm.workUnit"></el-input>
						</el-form-item>

						<el-form-item label="备注">
							<el-input type="textarea" v-model="personalDataForm.remark"></el-input>
						</el-form-item>
						<el-form-item label="附件上传">
							<el-upload
								class="upload-demo"
								action="https://jsonplaceholder.typicode.com/posts/"
								:on-remove="handleRemove"
								:before-remove="beforeRemove"
								:on-exceed="handleExceed"
								:file-list="fileList"
							>
								<el-button size="small" type="primary">上传附件</el-button>
								<div slot="tip" class="el-upload__tip">
									请上传学历证、健康状况个人承诺（JPG格式），各文件格式以身份证件号命名，打包成ZIP压缩后上传。
								</div>
							</el-upload>
						</el-form-item>
					</el-form>
				</div>
			</div>
		</section>

		<section class="section-wrapper">
			<div class="page-footer">
				<span class="footer-left">
					共
					<em class="red-txt">2</em>门课程
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
export default {
  components: {},
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
          kechengtupian_path: require('../../assets/images/temp/list2.png'),
          classType: '石油储运类技能培训',
          parentType: '生产类',
          courseTypes: ['理论', '实操'],
          mychecked: false,
        },
        {
          courseId: 'KC-2',
          user: 'AS',
          owner: 'AS',
          id: '1f792fe742fb4dbba4af7b899c962567',
          courseName: '油品基本特性分析以及汽柴油SDS',
          classHour: '2',
          coursePrice: '100',
          courseType: '8',
          courseDescribe: '',
          courseTeacher: '张学军',
          kechengtupian_path: require('../../assets/images/temp/list3.png'),
          classType: '石油储运类技能培训',
          parentType: '生产类',
          courseTypes: ['实操'],
          mychecked: false,
        },
      ],
      imageUrl: '',

      personalDataForm: {
        certificateType: '01',
        cardNumber: '',
        // assessType: '',
        certificationType: '02',
        operationType: '03',
        operateTask: '01',

        name: '',
        sex: '01',
        education: '04',
        needProlongRecheck: '02',
        phone: '',
        physicalStatus: '03',
        workUnit: '',
        remark: '',
        fileList: [],
      },

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
      personalDataRules: {
        cardNumber: [{ required: true, message: '请输入证件号码', trigger: 'blur' }],
        assessType: [{ required: true, message: '请输入考核类别', trigger: 'blur' }],
        name: [{ required: true, message: '请输入姓名', trigger: 'blur' }],
        phone: [{ required: true, message: '请输入手机号码', trigger: 'blur' }],
        workUnit: [{ required: true, message: '请输入工作单位', trigger: 'blur' }],
      },
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },

    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    beforeRemove(file, fileList) {
      console.log(file, fileList);
      return this.$confirm(`确定移除 ${file.name}？`);
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
		.course-type-teacher,
		.course-type {
			height: 30px;
			line-height: 30px;
			font-size: 12px;
			color: $colorHelpText;
		}
	}
	.teacher-name {
		padding-left: 20px;
		font-size: 14px;
		line-height: 28px;
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

.fill-info {
	display: flex;
}
.fill-left {
	width: 380px;
	border-right: 1px solid #e2e2e2;
	text-align: center;
	/deep/ .avatar-uploader {
		width: 178px;
		height: 178px;
		margin: 30px auto 0;
		.el-upload {
			background: #eee;
			cursor: pointer;
			position: relative;
			overflow: hidden;
		}
	}
	.avatar-uploader-icon {
		width: 178px;
		height: 178px;
		padding-top: 100px;
		line-height: 40px;
		text-align: center;
		font-size: 18px;
		color: #9fa3a6;
	}
	.el-icon-plus {
		position: relative;
		&:before {
			position: absolute;
			left: 50%;
			top: 40%;
			margin: -24px 0 0 -24px;
			content: '';
			display: block;
			width: 48px;
			height: 48px;
			background: url('../../assets/images/icon/icon-portrait.png');
		}
	}
	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
	.upload-tip {
		padding-top: 33px;
		line-height: 30px;
		color: #51585e;
	}
}
.fill-right {
	flex: 1;
	padding-top: 30px;
}
.el-form {
	/deep/ .assess-type {
		.el-select {
			&:nth-of-type(1) {
				width: 179px;
				.el-input {
					width: 170px;
				}
			}
			&:nth-of-type(2) {
				width: 219px;
				.el-input {
					width: 210px;
				}
			}
			&:nth-of-type(3) {
				width: 80px;
				.el-input {
					width: 80px;
				}
			}
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
