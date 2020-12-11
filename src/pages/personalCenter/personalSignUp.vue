<template>
	<!-- 个人中心 -->
	<div id="PersonalCenterBox">
		<div class="PersonalCenter-header">
			<div class="margin"><i class="el-icon-s-home"></i> 首页 > 取证类 > 课程详情</div>
		</div>
		<div class="PersonalCenter-main">
			<div class="margin">
				<div class="PersonalCenter-main-title">
					<span>
						学员报名
						<i class="border"></i>
					</span>
				</div>
				<div class="PersonalCenter-main-body">
					<div class="PersonalCenter-main-left">
						<div class="left-head">
							<div class="left-headImg"></div>
							<div class="left-headText">
								请上传近期免冠照片一张
								<br />支持jpg、gif、或者bmp格式的图片 <br />建议图片小于1M
							</div>
						</div>
					</div>
					<div class="PersonalCenter-main-right">
						<!-- 证件类型 -->
						<div class="line">
							<div class="line-name">
								证件类型:
								<i class="inporant-icon">*</i>
							</div>
							<el-input
								v-model="info.zjType"
								placeholder="请输入内容"
								class="line-input"
							></el-input>
						</div>
						<!-- 证件号码 -->
						<div class="line">
							<div class="line-name">
								证件号码:
								<i class="inporant-icon">*</i>
							</div>
							<el-input v-model="info.zjNum" placeholder="请输入内容" class="line-input"></el-input>
						</div>
						<!-- 培训考核类别 -->
						<div class="line">
							<div class="line-name">
								培训考核类别:
								<i class="inporant-icon">*</i>
							</div>
							<el-select
								v-model="selectVal.value1"
								placeholder="请选择"
								multiple
								collapse-tags
								style="width: 171px; float: left; margin: 0 8px; margin-left: 16px;"
							>
								<el-option
									v-for="item in options"
									:key="item.value"
									:label="item.label"
									:value="item.value"
								></el-option>
							</el-select>
							<el-select
								v-model="selectVal.value2"
								placeholder="请选择"
								multiple
								collapse-tags
								style="width: 171px; float: left; margin: 0 8px;"
							>
								<el-option
									v-for="item in options"
									:key="item.value"
									:label="item.label"
									:value="item.value"
								></el-option>
							</el-select>
							<el-select
								v-model="selectVal.value3"
								placeholder="请选择"
								multiple
								collapse-tags
								style="width: 171px; float: left; margin: 0 8px;"
							>
								<el-option
									v-for="item in options"
									:key="item.value"
									:label="item.label"
									:value="item.value"
								></el-option>
							</el-select>
						</div>
						<!-- 姓名 -->
						<div class="line">
							<div class="line-name">
								姓名:
								<i class="inporant-icon">*</i>
							</div>
							<el-input
								v-model="info.zjName"
								placeholder="请输入内容"
								class="line-input"
							></el-input>
						</div>
						<!-- 性别 -->
						<div class="line">
							<div class="line-name">
								性别:
								<i class="inporant-icon">*</i>
							</div>
							<el-input v-model="info.zjSex" placeholder="请输入内容" class="line-input"></el-input>
						</div>
						<!-- 健康状况 -->
						<div class="line">
							<div class="line-name">
								健康状况:
								<i class="inporant-icon">*</i>
							</div>
							<div class="line-select-te">
								<el-select
									v-model="selectVal.value3"
									placeholder="请选择"
									multiple
									collapse-tags
									style="width: 550px; float: left; margin: 0 8px;"
								>
									<el-option
										v-for="item in options"
										:key="item.value"
										:label="item.label"
										:value="item.value"
									></el-option>
								</el-select>
							</div>
						</div>
						<!-- 工作单位 -->
						<div class="line">
							<div class="line-name">工作单位:</div>
							<el-input
								v-model="info.zjWork"
								placeholder="请输入内容"
								class="line-input"
							></el-input>
						</div>
						<!-- 备注信息 -->
						<div class="line">
							<div class="line-name">备注信息:</div>
							<el-input
								v-model="info.zjNote"
								placeholder="请输入内容"
								class="line-input"
							></el-input>
						</div>
						<!-- 附件 -->
						<div class="line">
							<div class="line-name">附件:</div>
							<div class="submitUp">上传</div>
							<br />
							<!-- <div class ="prompt">请上传学历证,健康状况个人承诺(JPG格式),各文件格式以身份证件号命名，打包压缩成zip格式后上传。</div> -->
						</div>
					</div>
				</div>

				<div class="PersonalCenter-main-btn">
					<div class="cancel" style="background: rgb(150, 141, 141);">取消</div>
					<div class="continue" style="background: rgb(247, 169, 53);">继续报名</div>
					<div class="submit" style="background: #0061ae;">提交报名</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        zjType: '', // 证件类型
        zjNum: '', // 证件号码
        traningType: '', // 培训考核类别
        zjName: '', // 姓名
        zjSex: '', // 性别
        zjhealth: '', // 健康
        zjWork: '', // 工作单位
        zjNote: '', // 备注信息
      },
      selectVal: {
        value1: '',
        value2: '',
        value3: '',
      },
      options: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
    };
  },
  methods: {},
  components: {},
};
</script>

<style lang="scss" scoped>
#PersonalCenterBox {
	background-color: #f2f5f8;
	.PersonalCenter-header {
		width: 100%;
		height: 40px;
		color: rgba(81, 88, 94, 1);
		line-height: 40px;
	}
	.PersonalCenter-main {
		width: 100%;
		height: 710px;
		background: #fff;
		.PersonalCenter-main-title {
			width: 100%;
			height: 50px;
			text-align: center;
			font-size: 16px;
			color: rgba(81, 88, 94, 1);
			line-height: 48px;
			border-bottom: 1px solid #eee;
			box-sizing: border-box;
			span {
				display: inline-block;
				border-bottom: 3px solid #0061ae;
			}
		}
		.PersonalCenter-main-body {
			width: 100%;
			height: 550px;
			border-bottom: 1px solid #eee;
			.PersonalCenter-main-left {
				width: 350px;
				height: 550px;
				float: left;
				.left-head {
					width: 100%;
					height: 450px;
					margin-top: 50px;
					overflow: hidden;
					border-right: 1px solid #eee;
					.left-headImg {
						width: 120px;
						height: 150px;
						margin: 0 auto;
						margin-top: 100px;
						background: #eee;
					}
					.left-headText {
						width: 90%;
						height: 80px;
						color: #989ea2;
						margin-top: 20px;
						text-align: center;
						font-size: 14px;
						line-height: 28px;
					}
				}
			}
			.PersonalCenter-main-right {
				width: 840px;
				height: 550px;
				float: left;
				margin-top: 30px;
				.line {
					width: 800px;
					height: 40px;
					margin: 10px 0;
					.line-name {
						width: 180px;
						height: 40px;
						float: left;
						text-align: right;
						font-size: 16px;
						color: rgba(81, 88, 94, 1);
						line-height: 40px;
						.inporant-icon {
							width: 5px;
							height: 5px;
							color: red;
							font-size: 16px;
							line-height: 40px;
						}
					}
					.line-input {
						width: 500px;
						height: 40px;
						float: left;
						margin-left: 15px;
					}
					.line-select-te {
						float: left;
					}
					.submitUp {
						width: 60px;
						height: 30px;
						float: left;
						margin-left: 15px;
						text-align: center;
						color: #fff;
						line-height: 30px;
						border-radius: 3px;
						background: #0061ae;
					}
					.prompt {
						width: 800px;
						text-align: right;
						color: #000;
						line-height: 20px;
					}
				}
			}
		}
		.PersonalCenter-main-btn {
			width: 500px;
			margin: 0 auto;
			display: flex;
			font-size: 14px;
			line-height: 30px;
			.cancel,
			.continue,
			.submit {
				width: 100px;
				height: 30px;
				color: #fff;
				text-align: center;
				margin: 0 10px;
				border-radius: 3px;
				cursor: pointer;
			}
		}
	}
	/deep/ .PersonalCenter-main-right .el-input .el-input__inner {
		width: 550px;
		height: 40px;
	}
	/deep/ .PersonalCenter-main-right .el-select .el-input__inner {
		width: 175px;
	}
	/deep/ .PersonalCenter-main-right .line-select-te .el-select .el-input__inner {
		width: 550px;
		margin-left: 8px;
	}
}
</style>
