<template>
	<div class="PersonalCenter">
		<div class="PersonalCenter_banner">
			<div class="margin">
				<div class="PersonalCenter_banner-left">
					<div class="left-title">个人中心</div>
					<div class="left_info">
						<div class="userImg">
							<i class="userIcon"></i>
							<span>李晓</span>
						</div>
						<div class="zhiweiImg">
							<i class="zhiweiIcon"></i>
							<span>商务经理</span>
						</div>
						<div class="gongsiImg">
							<i class="gongsiIcon"></i>
							<span>南京安元科技有限公司</span>
						</div>
					</div>
				</div>
				<div class="PersonalCenter_banner-right">
					<div class="user-img"></div>
				</div>
			</div>
		</div>
		<div class="margin">
			<div class="PersonalCenter_main">
				<div
					class="PersonalCenter_main-title"
					v-for="(item, index) in tabList"
					:key="index"
					:class="activeClass === index ? 'active_menu' : ''"
					@click="tabChange(index)"
				>
					{{ item }}
				</div>
			</div>
			<!-- 个人信息 -->
			<div class="PersonalCenter_body" v-show="isPersonalShow">
				<div class="main-bottom">
					<div class="tishi">
						<div class="tishiText">完善个人资料是让别人认识你的第一步</div>
						<div class="tishiEdit" @click="editChange()"><i class="editIcon"></i>修改</div>
					</div>
					<div class="line_title">
						<span>基本信息</span>
						<span>姓名:</span>
						<span>李晓</span>
					</div>
					<div class="line">
						<span>性别:</span>
						<span>男</span>
					</div>
					<div class="line">
						<span>职务:</span>
						<span>商务经理</span>
					</div>
					<div class="line">
						<span>手机号:</span>
						<span>11111111</span>
					</div>
					<div class="line">
						<span>邮箱:</span>
						<span>1111111@qq.com</span>
					</div>
					<div class="line_title">
						<span>扩展信息</span>
						<span>身份证号:</span>
						<span>333333333333333</span>
					</div>
					<div class="line">
						<span>生日:</span>
						<span>83-10-21</span>
					</div>
					<div class="line">
						<span>备注:</span>
						<span>无</span>
					</div>
					<div class="headInfo">
						<span>头像信息:</span>
						<div class="headImg">
							<el-upload action="#" list-type="picture-card" :auto-upload="false">
								<i slot="default" class="el-icon-plus"></i>
								<div slot="file" slot-scope="{ file }">
									<img class="el-upload-list__item-thumbnail" :src="file.url" alt />
									<span class="el-upload-list__item-actions">
										<span
											class="el-upload-list__item-preview"
											@click="handlePictureCardPreview(file)"
										>
											<i class="el-icon-zoom-in"></i>
										</span>
										<span
											v-if="!disabled"
											class="el-upload-list__item-delete"
											@click="handleDownload(file)"
										>
											<i class="el-icon-download"></i>
										</span>
										<span
											v-if="!disabled"
											class="el-upload-list__item-delete"
											@click="handleRemove(file)"
										>
											<i class="el-icon-delete"></i>
										</span>
									</span>
								</div>
							</el-upload>
							<el-dialog :visible.sync="dialogVisible">
								<img width="100%" :src="dialogImageUrl" alt />
							</el-dialog>
						</div>
					</div>
					<div class="text">支持jpg、gif、png或bmp格式的图片，建议文件小于1M</div>
				</div>
			</div>
			<!-- 账户安全 -->
			<div class="AccountSecurity_body" v-show="isAccountShow">
				<!-- 安全等级 -->
				<div class="line1">
					<div class="line_left">
						<div class="line_left-title">安全等级</div>
						<div class="line_left-describe">建议开启全部安全设置，保护您的账户安全！</div>
					</div>
					<div class="line_right">
						<el-progress :percentage="70" :format="format"></el-progress>
					</div>
				</div>
				<div class="line2">
					<div class="line_left">
						<div class="line_left-title">密码管理</div>
						<div class="line_left-describe">登录密码管理，用户保护账户安全！</div>
					</div>
					<div class="line_right">修改</div>
				</div>
				<div class="line3">
					<div class="line_left">
						<div class="line_left-title">手机</div>
						<div class="line_left-describe">用于密码修改、安全设置、管理APP通行安全验证</div>
					</div>
					<div class="line_right">
						<span style="color: #009944;">已绑定:158...425</span>|
						<span style="color: #0060b0;">修改</span>
					</div>
				</div>
				<div class="line4">
					<div class="line_left">
						<div class="line_left-title">邮箱</div>
						<div class="line_left-describe">用于接收课程推送、订单跟踪管理等消息</div>
					</div>
					<div class="line_right">
						<span style="color: #009944;">未绑定</span>|
						<span style="color: #0060b0;">去绑定</span>
					</div>
				</div>
			</div>
			<!-- 消费记录 -->
			<div class="RecordsConsumption" v-show="isConsumptionShow">暂无数据</div>
			<!-- 账号履历 -->
			<div class="AccountRecord" v-show="isRecordsShow">暂无数据</div>
		</div>
	</div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      isPersonalShow: true,
      isAccountShow: false,
      isConsumptionShow: false,
      isRecordsShow: false,
      activeClass: 0,
      tabList: ['我的信息', '账号安全', '消费记录', '账号履历'],
      dialogImageUrl: '',
      dialogVisible: false,
      disabled: false,
    };
  },
  methods: {
    editChange() {
      this.$alert('该功能暂未开发');
    },
    format(percentage) {
      return percentage === 70 ? '满' : `${percentage}%`;
    },
    tabChange(index) {
      this.activeClass = index;
      this.isPersonalShow = false;
      this.isAccountShow = false;
      this.isConsumptionShow = false;
      this.isRecordsShow = false;
      if (index === 0) {
        this.isPersonalShow = true;
      } else if (index === 1) {
        this.isAccountShow = true;
      } else if (index === 2) {
        this.isConsumptionShow = true;
      } else if (index === 3) {
        this.isRecordsShow = true;
      }
    },
    handleRemove(file) {
      console.log(file);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    },
  },
};
</script>

<style lang="scss" scoped>
.PersonalCenter {
	background: #eee;
	.PersonalCenter_banner {
		width: 100%;
		height: 126px;
		background: url('../../assets/images/classBanner.png') no-repeat center;
		background-size: 100% 100%;
		&-left {
			width: 1000px;
			height: 126px;
			float: left;
			.left-title {
				margin: 10px 0;
				font-size: 30px;
				font-weight: bold;
				color: rgba(255, 255, 255, 1);
				line-height: 47px;
			}
			.left_info {
				width: 400px;
				height: 30px;
				display: flex;
				justify-items: center;
				background: rgba(0, 0, 0, 0.3);
				opacity: 0.8;
				font-size: 14px;
				color: #fff;
				line-height: 30px;
				.userImg {
					width: 90px;
					display: flex;
					.userIcon {
						display: block;
						width: 15px;
						height: 15px;
						margin: 8px 5px 0 3px;
						background: url('../../assets/images/PersonalCenter/user.png') no-repeat center;
						background-size: 100% 100%;
					}
				}
				.zhiweiImg {
					width: 130px;
					display: flex;
					.zhiweiIcon {
						display: block;
						width: 15px;
						height: 15px;
						margin: 8px 5px 0 3px;
						background: url('../../assets/images/PersonalCenter/zhiwei.png') no-repeat center;
						background-size: 100% 100%;
					}
				}
				.gongsiImg {
					width: 190px;
					display: flex;
					.gongsiIcon {
						display: block;
						width: 15px;
						height: 15px;
						margin: 8px 5px 0 3px;
						background: url('../../assets/images/PersonalCenter/company.png') no-repeat center;
						background-size: 100% 100%;
					}
				}
			}
		}
		&-right {
			width: 200px;
			height: 126px;
			float: left;
			.user-img {
				width: 80px;
				height: 80px;
				margin-top: 20px;
				border-radius: 50%;
				background: url('../../assets/images/layout/touxiang.png') no-repeat center;
				background-size: cover;
			}
		}
	}
	.PersonalCenter_main {
		width: 100%;
		height: 50px;
		display: flex;
		background: #f2f5f8;
		margin-top: 10px;
		&-title {
			width: 130px;
			text-align: center;
			font-size: 16px;
			color: #51585e;
			cursor: pointer;
			line-height: 47px;
		}
		.active_menu {
			background: #0060b0;
			color: #fff;
		}
	}
	.PersonalCenter_body {
		width: 100%;
		height: 900px;
		box-sizing: content-box;
		background: #fff;
		border: 1px solid #eee;
		.main-bottom {
			width: 100%;
			height: 700px;
			background: #fff;
			.tishi {
				width: 100%;
				height: 50px;
				.tishiText {
					width: 600px;
					float: left;
					margin-left: 20px;
					font-size: 14px;
					color: rgba(159, 170, 180, 1);
					line-height: 47px;
				}
				.tishiEdit {
					width: 100px;
					// height: 20px;
					float: right;
					margin-right: 20px;
					font-size: 14px;
					line-height: 47px;
					color: #0060b0;
					display: flex;
					.editIcon {
						display: block;
						width: 20px;
						height: 20px;
						margin-top: 12px;
						background: url('../../assets/images/PersonalCenter/edit.png') no-repeat left;
						background-size: 100% 100%;
					}
				}
			}
			.line_title {
				width: 96%;
				height: 50px;
				margin: 10px auto;
				font-size: 18px;
				color: rgba(81, 88, 94, 1);
				line-height: 47px;
				> span {
					margin: 0 10px;
				}
			}
			.line {
				width: 96%;
				height: 50px;
				margin: 5px 0 5px 115px;
				font-size: 18px;
				color: rgba(81, 88, 94, 1);
				line-height: 47px;
				> span {
					margin: 0 10px;
				}
			}
			.headInfo {
				width: 96%;
				height: 200px;
				margin: 0 auto;
				margin-top: 20px;
				display: flex;
				> span {
					//  display:block;
					font-size: 18px;
					color: rgba(81, 88, 94, 1);
					line-height: 100px;
				}
				.headImg {
					width: 200px;
					height: 200px;
					margin: 20px;

					// // display: inline-block;
					// width: 100px;
					// height: 100px;
					// margin-left: 20px;
					// background: #eee;
				}
			}
			.text {
				margin-left: 100px;
				font-size: 14px;
				color: rgba(81, 88, 94, 1);
				line-height: 28px;
				opacity: 0.7;
			}
		}
	}
	.AccountSecurity_body {
		width: 100%;
		height: 800px;
		box-sizing: content-box;
		background: #fff;
		border: 1px solid #eee;
		.line1,
		.line2,
		.line3,
		.line4 {
			width: 94%;
			height: 60px;
			padding: 0.1rem 0;
			margin: 0 auto;
			display: flex;
			border-bottom: 1px solid #eee;
			.line_left {
				width: 700px;
				height: 80px;
				&-title {
					font-size: 18px;
					color: rgba(81, 88, 94, 1);
					line-height: 32px;
				}
				&-describe {
					font-size: 14px;
					color: rgba(81, 88, 94, 1);
					line-height: 28px;
					opacity: 0.7;
				}
			}
			.line_right {
				width: 500px;
				height: 80px;
				text-align: right;
				color: #0060b0;
				font-size: 16px;
				line-height: 80px;
				> span {
					display: inline-block;
					margin: 0 15px;
				}
			}
		}
	}
	.RecordsConsumption {
		width: 100%;
		height: 800px;
		font-size: 20px;
		text-align: center;
		line-height: 500px;
		box-sizing: content-box;
		background: #fff;
		border: 1px solid #eee;
	}
	.AccountRecord {
		width: 100%;
		height: 800px;
		font-size: 20px;
		text-align: center;
		line-height: 500px;
		box-sizing: content-box;
		background: #fff;
		border: 1px solid #eee;
	}
	.margin {
		width: 1200px;
		margin: 0 auto;
	}
	// /deep/ .line1_right .el-progress{
	//   height:30px;
	// }
}
</style>
