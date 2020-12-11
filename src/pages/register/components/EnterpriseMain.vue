<template>
	<div class="EnterpriseMain">
		<div class="margin">
			<!-- 个人信息 -->
			<div class="EnterpriseMain_body">
				<!-- 个人信息标题 -->
				<div class="EnterpriseMain_title">
					<div class="EnterpriseMain_title-item">企业基本信息</div>
					<div class="EnterpriseMain_title-itemFu">
						其中带有
						<i>*</i>的为必填项，请您认真填写!
					</div>
				</div>
				<div class="EnterpriseMain_body-line">
					<div class="EnterpriseMain_body-line-name">
						企业名称
						<i>*</i>
					</div>
					<el-input v-model="inputE.nameE" placeholder="请输入企业名称"></el-input>
				</div>
				<div class="EnterpriseMain_body-line">
					<div class="EnterpriseMain_body-line-name">
						统一社会信用代码
						<i>*</i>
					</div>
					<el-input v-model="inputE.cardE" placeholder="请输入唯一代码"></el-input>
				</div>
				<div class="EnterpriseMain_body-line">
					<div class="EnterpriseMain_body-line-name">
						注册号类型
						<i>*</i>
					</div>
					<el-input v-model="inputE.typeE" type="text" placeholder="请输入类型"></el-input>
				</div>
				<div class="EnterpriseMain_body-line">
					<div class="EnterpriseMain_body-line-name">
						法定代表人
						<i>*</i>
					</div>
					<el-input v-model="inputE.personalE" type="date" placeholder="请输入内容"></el-input>
				</div>
				<div class="EnterpriseMain_body-line">
					<div class="EnterpriseMain_body-line-name">国民经济分类</div>
					<el-input v-model="inputE.nationalE" placeholder="请输入类别"></el-input>
				</div>
				<div class="EnterpriseMain_body-line">
					<div class="EnterpriseMain_body-line-name">所在地区</div>
					<el-input v-model="inputE.regionE" placeholder="请输入地区"></el-input>
				</div>
			</div>
			<!-- 登记信息 -->
			<div class="EnterpriseMain_body">
				<div class="EnterpriseMain_title">
					<div class="EnterpriseMain_title-item">登记信息</div>
					<div class="EnterpriseMain_title-itemFu">
						其中带有
						<i>*</i>的为必填项，请您认真填写!
					</div>
				</div>
				<div class="EnterpriseMain_body-line">
					<div class="EnterpriseMain_body-line-name">
						密码
						<i>*</i>
					</div>
					<el-input v-model="inputE.psdE" type="password" placeholder="请输入密码"></el-input>
				</div>
				<div class="EnterpriseMain_body-line">
					<div class="EnterpriseMain_body-line-name">
						确认密码
						<i>*</i>
					</div>
					<el-input
						v-model="inputE.psdTwoE"
						type="password"
						placeholder="请再次确认密码"
					></el-input>
				</div>
				<div class="EnterpriseMain_body-line">
					<div class="EnterpriseMain_body-line-name">邮箱</div>
					<el-input
						v-model="inputE.emailE"
						type="email"
						placeholder="请输入正确邮箱格式"
					></el-input>
				</div>
				<div class="EnterpriseMain_body-line">
					<div class="EnterpriseMain_body-line-name">
						手机号码
						<i>*</i>
					</div>
					<el-input v-model="inputE.telE" type="tel" placeholder="请输入手机号码"></el-input>
				</div>
				<div class="EnterpriseMain_body-line">
					<div class="EnterpriseMain_body-line-name" style="width: 205px; margin-right: 15px;">
						短信验证<i>*</i>
					</div>
					<div class="EnterpriseMain_body-line-right">
						<el-input v-model="inputE.codeE" type="text" placeholder="请输入验证码"></el-input>
						<div class="code">30秒后重新发送</div>
					</div>
				</div>
			</div>
			<div class="EnterpriseMain_btn">
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
      inputE: {
        nameE: '',
        sexE: '',
        cardE: '',
        typeE: '',
        personalE: '',
        regionE: '',
        psdE: '',
        psdTwoE: '',
        emailE: '',
        telE: '',
        codeE: '',
      },
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
.EnterpriseMain {
	width: 100%;
	height: 100%;
	.EnterpriseMain_body {
		width: 100%;
		height: 100%;
		.EnterpriseMain_title {
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
				width: 250px;
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
	.EnterpriseMain_btn {
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
	/deep/ .EnterpriseMain_body-line .el-input .el-input__inner {
		width: 650px;
		height: 40px;
		line-height: 40px;
	}
	/deep/ .EnterpriseMain_body-line .EnterpriseMain_body-line-right .el-input {
		width: 300px;
		height: 40px;
	}
	/deep/ .EnterpriseMain_body-line .EnterpriseMain_body-line-right .el-input .el-input__inner {
		width: 300px;
		height: 40px;
	}
	.margin {
		width: 1200px;
		margin: 0 auto;
	}
}
</style>
