<template>
	<div class="PersonalMain">
		<div class="margin">
			<!-- 个人信息 -->
			<div class="PersonalMain_body">
				<!-- 个人信息标题 -->
				<div class="PersonalMain_title">
					<div class="PersonalMain_title-item">个人基本信息</div>
					<div class="PersonalMain_title-itemFu">
						其中带有
						<i>*</i>的为必填项，请您认真填写!
					</div>
				</div>
				<div class="PersonalMain_body-line">
					<div class="PersonalMain_body-line-name">
						姓名
						<i>*</i>
					</div>
					<el-input v-model="inputP.nameP" placeholder="请输入姓名"></el-input>
				</div>
				<div class="PersonalMain_body-line">
					<div class="PersonalMain_body-line-name">
						性别
						<i>*</i>
					</div>
					<el-select v-model="value" placeholder="请选择" style="width: 680px; margin: 0 20px;">
						<el-option
							v-for="item in options"
							:key="item.value"
							:label="item.label"
							:value="item.value"
						></el-option>
					</el-select>
					<!-- <el-input v-model="inputP.sexP" placeholder="请输入性别"></el-input> -->
				</div>
				<div class="PersonalMain_body-line">
					<div class="PersonalMain_body-line-name">
						身份证号码
						<i>*</i>
					</div>
					<el-input v-model="inputP.cardP" placeholder="请输入身份证号码"></el-input>
				</div>
				<div class="PersonalMain_body-line">
					<div class="PersonalMain_body-line-name">
						年龄
						<i>*</i>
					</div>
					<el-input v-model="inputP.ageP" placeholder="请输入年龄"></el-input>
				</div>
				<div class="PersonalMain_body-line">
					<div class="PersonalMain_body-line-name">
						出生年月
						<i>*</i>
					</div>

					<el-input v-model="inputP.birthdayP" placeholder="请输入出生年月"></el-input>
				</div>
				<div class="PersonalMain_body-line">
					<div class="PersonalMain_body-line-name">学历</div>
					<el-input v-model="inputP.schoolingP" placeholder="请输入学历"></el-input>
				</div>
				<div class="PersonalMain_body-line">
					<div class="PersonalMain_body-line-name">毕业院校</div>
					<el-input v-model="inputP.collegeP" placeholder="请输入学校"></el-input>
				</div>
				<div class="PersonalMain_body-line">
					<div class="PersonalMain_body-line-name">
						所属公司
						<i>*</i>
					</div>
					<el-input v-model="inputP.companyP" placeholder="请输入公司名称"></el-input>
				</div>
				<div class="PersonalMain_body-line">
					<div class="PersonalMain_body-line-name">
						工作岗位
						<i>*</i>
					</div>
					<el-input v-model="inputP.jobP" placeholder="请输入岗位名称"></el-input>
				</div>
				<div class="PersonalMain_body-line">
					<div class="PersonalMain_body-line-name">所在领域</div>
					<el-input v-model="inputP.fieldP" placeholder="请输入内容"></el-input>
				</div>
			</div>
			<!-- 登记信息 -->
			<div class="PersonalMain_body">
				<div class="PersonalMain_title">
					<div class="PersonalMain_title-item">登记信息</div>
					<div class="PersonalMain_title-itemFu">
						其中带有
						<i>*</i>的为必填项，请您认真填写!
					</div>
				</div>
				<div class="PersonalMain_body-line">
					<div class="PersonalMain_body-line-name">
						密码
						<i>*</i>
					</div>
					<el-input v-model="inputP.psdP" type="password" placeholder="请输入密码"></el-input>
				</div>
				<div class="PersonalMain_body-line">
					<div class="PersonalMain_body-line-name">
						确认密码
						<i>*</i>
					</div>
					<el-input
						v-model="inputP.psdTwoP"
						type="password"
						placeholder="请再次确认密码"
					></el-input>
				</div>
				<div class="PersonalMain_body-line">
					<div class="PersonalMain_body-line-name">邮箱</div>
					<el-input
						v-model="inputP.emailP"
						type="email"
						placeholder="请输入正确邮箱格式"
					></el-input>
				</div>
				<div class="PersonalMain_body-line">
					<div class="PersonalMain_body-line-name">
						手机号码
						<i>*</i>
					</div>
					<el-input v-model="inputP.telP" type="tel" placeholder="请输入手机号码"></el-input>
				</div>
				<div class="PersonalMain_body-line">
					<div class="PersonalMain_body-line-name" style="width: 135px; margin-right: 15px;">
						短信验证
						<i>*</i>
					</div>
					<div class="PersonalMain_body-line-right">
						<el-input v-model="inputP.codeP" type="text" placeholder="请输入验证码"></el-input>
						<div class="code">30秒后重新发送</div>
					</div>
				</div>
			</div>
			<div class="PersonalMain_btn">
				<div class="margin1">
					<div class="cancelBtn">取消</div>
					<div class="submitBtn">提交</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      value: '',
      inputP: {
        nameP: '',
        // sexP: '',
        cardP: '',
        ageP: '',
        birthdayP: '',
        schoolingP: '',
        collegeP: '',
        companyP: '',
        jobP: '',
        fieldP: '',
        psdP: '',
        psdTwoP: '',
        emailP: '',
        telP: '',
        codeP: '',
      },
      options: [
        {
          value: '1',
          label: '男',
        },
        {
          value: '2',
          label: '女',
        },
      ],
    };
  },
  created() {},
  mounted() {},
  activited() {},
  update() {},
  beforeRouteUpdate() {},
  methods: {},
  filter: {},
  computed: {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.PersonalMain {
	width: 100%;
	height: 100%;
	font-family: Microsoft YaHei;
	font-weight: 400;
	.PersonalMain_body {
		width: 100%;
		height: 100%;
		.PersonalMain_title {
			width: 100%;
			height: 80px;
			text-align: center;
			margin-top: 0.2rem;
			&-item {
				padding: 0.05rem 0;
				font-size: 16px;
				color: rgba(57, 62, 73, 1);
				line-height: 28px;
			}
			&-itemFu {
				padding: 0.02rem 0;
				font-size: 14px;
				color: rgba(153, 153, 153, 1);
				line-height: 28px;
			}
		}
		&-line {
			width: 850px;
			height: 40px;
			margin: 10px auto;
			display: flex;
			justify-items: center;
			text-align: right;
			&-name {
				width: 150px;
				// margin-right: 10px;
				font-size: 18px;
				color: rgba(151, 157, 162, 1);
				line-height: 40px;
				> i {
					color: red;
					margin-left: 5px;
				}
			}
			&-right {
				width: 720px;
				height: 40px;
				display: flex;
				justify-items: center;
				.code {
					width: 150px;
					height: 40px;
					margin-left: 15px;
					border: 1px solid #dcdfe6;
					color: #000;
					opacity: 0.7;
					font-size: 14px;
					line-height: 40px;
					text-align: center;
				}
			}
		}
	}
	.PersonalMain_btn {
		width: 100%;
		height: 30px;
		margin: 30px 0;
		// display:flex;
		// justify-items: center;
		text-align: center;
		.margin1 {
			width: 400px;
			margin: 0 auto;
			.cancelBtn,
			.submitBtn {
				width: 100px;
				height: 30px;
				color: #fff;
				float: left;
				margin: 0 20px;
				border-radius: 3px;
				font-size: 14px;
				line-height: 30px;
			}
			.cancelBtn {
				background: #b2b2b2;
			}
			.submitBtn {
				background: #0060af;
			}
		}
	}
	/deep/ .PersonalMain_body-line .el-input .el-input__inner {
		width: 700px;
		height: 40px;
		line-height: 40px;
	}
	/deep/ .PersonalMain_body-line .PersonalMain_body-line-right .el-input {
		width: 300px;
		height: 40px;
	}
	/deep/ .PersonalMain_body-line .PersonalMain_body-line-right .el-input .el-input__inner {
		width: 300px;
		height: 40px;
	}
	.margin {
		width: 1200px;
		margin: 0 auto;
	}
}
</style>
