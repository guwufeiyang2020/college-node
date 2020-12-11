<template>
	<div id="loginRegBox">
		<div class="new_portal_login" v-show="IsLoginShow">
			<div class="login-header">
				<div
					class="login-header-item"
					:class="{ active: loginWay.current === item.id }"
					@click="loginWay.current = item.id"
					v-for="(item, index) in loginWay.list"
					:key="index"
				>
					{{ item.name }}
				</div>
			</div>
			<div class="login-body account" v-show="loginWay.current === 1">
				<section class="login-username">
					<input type="text" placeholder="请输入手机号或邮箱" v-model="loginInfo.username" />
					<span>
						<i></i>
					</span>
				</section>
				<section class="login-password">
					<input type="password" placeholder="请输入密码" v-model="loginInfo.password" />
					<span>
						<i></i>
					</span>
				</section>
				<!-- 输入验证码 -->
				<!-- <section class="login-verify-code">
        <input type="text" placeholder="请输入验证码" v-model="loginInfo.verCode" />
        <div id="verify-container"></div>
        </section>-->
				<section class="login-about-password">
					<div class="about-left">
						<label>
							<el-checkbox v-model="loginInfo.rememberPassword"></el-checkbox>
							<span class="about-password-content">10天内保存密码</span>
						</label>
					</div>
					<div class="about-right">
						<!-- <span title="点击重置密码" class="about-password-content" @click="forgetPassword">忘记密码?</span> -->
					</div>
				</section>
				<section class="login-button-container">
					<div class="login-button" @click="loginClick">登录</div>
				</section>
				<section class="login-about-regster">
					<div class="go-regster" @click="openRegster">还没有账号？去注册!</div>
				</section>
			</div>
			<div class="login-body qr-code" v-show="loginWay.current === 2">
				<div style="font-siae: 16px; text-align: center; margin: 50px 0;">功能暂未开发</div>
				<!-- <vue-qr qid :text="qrUrl" qid="testid"></vue-qr> -->
				<!-- <div class="noDevelopment">打开学院APP，扫描二维码直接登录</div> -->
				<div class="appDow" @click="openDowload">App下载地址>>></div>
			</div>
			<!-- <div class="shade-weak-password" v-if="weak_password_visible">
        <i></i>
        <span>您的密码强度较弱，为了您的账号安全， 请重新设置密码！</span>
        <div @click="redirect">去设置</div>
        <div @click="weak_password_visible = false">暂时忽略</div>
      </div>-->
		</div>
		<div class="appCodeImg" v-show="isAppCodeImg">
			<div class="app-header">APP下载</div>
			<div class="login-body qr-code">
				<div style="font-siae: 16px; text-align: center; margin: 50px 0; color: #46494c;">
					功能暂未开发
				</div>
				<!-- <vue-qr :logoSrc="logoImg" :text="qrUrl" qid="testid"></vue-qr> -->
				<div class="appDowImg">扫一扫,下载岙山学院APP</div>
			</div>
		</div>

		<i class="el-icon-close" @click="closeLogin()"></i>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import Cookies from 'js-cookie';
import { cloneDeep } from 'lodash';
// import VueQr from 'vue-qr';
import logoImg from '../../../assets/images/AS.jpg';
// import Notice from './Notice.vue';
// import pwdUtil from '../../../../../assets/js/utils/password.js';
// import pwdUtil from '../../../assets/js/utils/password';
import { encryptDes } from '../../../assets/js/utils/des'; // 登录加密

export default {
  name: 'Login',
  data() {
    return {
      isAppCodeImg: false,
      logoImg,
      qrUrl: '',
      IsLoginShow: true,
      loginWay: {
        current: 1,
        list: [
          {
            id: 1,
            name: '账号登录',
          } /* , {            id: 2,            name: '二维码登录',          } */,
        ],
      },
      loginInfo: {
        username: '', // 用户登录信息
        password: '',
        verCode: '', // 验证码
        rememberPassword: false, // 记住密码
      },
      qrCode: {
        value: 'https://www.baidu.com',
        size: 200,
      },
      notice_visible: true, // 登录内公告是否显示
      weak_password_visible: false, // 弱密码遮罩层
      zVerify: null, // 生成验证码对象
    };
  },
  components: {
    // VueQr,
  },
  watch: {
    'loginInfo.rememberPassword': {
      handler(val) {
        if (val) {
          Cookies.set('loginInfo', this.loginInfo, { expires: 7 }); // 默认cookie保存一周
        } else {
          Cookies.remove('loginInfo');
        }
      },
    },
  },
  computed: {
    ...mapState(['user']),
  },
  created() {
    this.cookieHandler();
    this.getAppUrl();
  },
  mounted() {
    // this.calcQrCodeSize();
    // this.generateVerify();
  },
  methods: {
    // 打开app下载
    openDowload() {
      this.isAppCodeImg = true;
      this.IsLoginShow = false;
    },
    getAppUrl() {
      this.$http.get('/api/apk/getapk').then((res) => {
        if (res.status === 200) {
          this.qrUrl = window.globalConfig.server.fileio + res.data.apkurl;
        } else {
          console.log('接口异常');
        }
      });
    },
    cookieHandler() {
      // 处理保存密码相关
      const loginInfo = Cookies.get('loginInfo');
      if (loginInfo) {
        this.loginInfo = JSON.parse(loginInfo);
      }
    },
    checkIsNull() {
      // 检查用户是否输入为空
      let msg = '';
      if (!this.loginInfo.username) {
        msg = '请输入用户名';
      } else if (!this.loginInfo.password) {
        msg = '请输入密码';
      }
      if (msg) {
        this.$notify({
          title: '提示',
          message: msg,
          position: 'top-right',
        });
      }
      return !msg;
    },
    loginHandler() {
      // 调用登录接口
      const loginForm = {
        loginUserId: this.loginInfo.username,
        password: encryptDes(this.loginInfo.password),
      };
      this.$store.dispatch('loginUserInfo', loginForm).then((res) => {
        if (res.status === 200) {
          this.$store.commit('changeLoginDialog', false);
        }
      });
    },
    saveLoginInfoCookie() {
      // 保存登陆信息到Cookie中
      if (this.loginInfo.rememberPassword) {
        const info = cloneDeep(this.loginInfo);
        delete info.verCode;
        Cookies.set('loginInfo', info, { expires: 10 }); // 默认cookie保存一周
      } else {
        Cookies.remove('loginInfo');
      }
    },
    loginClick() {
      // 登录逻辑
      // 检查是否输入为空  检查验证码 检查密码强弱
      // if (this.checkIsNull() && this.checkVerify() && this.checkPasswordStrength()) {
      if (this.checkIsNull()) {
        this.loginHandler(); // 岙山登陆
      }
    },
    // checkVerify() {
    //   // 检查验证码是否输入正确
    //   const result = this.zVerify.options.code.toLowerCase()
    //     === this.loginInfo.verCode.toLocaleLowerCase();
    //   if (!result) {
    //     this.$notify({
    //       title: '提示',
    //       message: '请输入正确的验证码',
    //       position: 'top-right',
    //     });
    //   }
    //   return result;
    // },

    // checkPasswordStrength() {
    //   // 检查密码强弱
    //   const strength = pwdUtil.checkStrength(this.loginInfo.password);
    //   if (strength <= 1) {
    //     this.weak_password_visible = true;
    //     return false;
    //   }
    //   return true;
    // },
    redirect() {
      // 跳转到忘记密码页面
      this.$router.push({
        path: '/',
      });
    },
    forgetPassword() {
      // 忘记密码路由跳转
      this.$router.push({
        path: '/',
      });
    },
    // generateVerify() {
    //   // 生成验证码
    //   this.zVerify = new window.ZVerify('verify-container');
    // },
    // calcQrCodeSize() {
    //   // 计算二维码大小
    //   const docElementWidth = document.documentElement.clientWidth;
    //   if (docElementWidth <= 1280) {
    //     this.qrCode.size = 160;
    //   } else if (docElementWidth <= 1366) {
    //     this.qrCode.size = 180;
    //   } else if (docElementWidth <= 1600) {
    //     this.qrCode.size = 200;
    //   } else {
    //     this.qrCode.size = 220;
    //   }
    // },
    // 跳转注册页面
    openRegster() {
      window.open('/register', '_blank');
    },
    closeLogin() {
      this.$store.commit('changeLoginDialog', false);
    },
  },
};
</script>

<style scoped lang="scss">
#loginRegBox {
	width: 410px;
	height: 400px;
	background: #fff;
	border-radius: 3px;
	display: flex;
	flex-direction: column;
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	.new_portal_login,
	.appCodeImg {
		width: 100%;
		height: 100%;
		.login-header {
			height: 60px;
			// display: flex;
			border-bottom: 1px solid #dcdcdc;
			&-item {
				/* flex: 1;
        display: flex;
        justify-content: center;
        align-items: center; */
				padding: 0 30px;
				height: 60px;
				line-height: 60px;
				cursor: pointer;
				font-size: 18px;
				font-weight: bold;
				color: #404e67;
				&.active {
					color: #005bac;
					border-bottom: 3px solid #1769b3;
					transform: translateY(0.01rem);
				}
			}
		}
		.login-body {
			// 账户登录
			user-select: none;
			flex: 1;
			display: flex;
			flex-direction: column;
			padding: 30px 40px;
			> section {
				margin: 10px 0;
			}
			.login-username,
			.login-password,
			.login-verify-code {
				input {
					-webkit-appearance: none;
					background-color: #fff;
					background-image: none;
					border-radius: 4px;
					border: 1px solid #dcdfe6;
					box-sizing: border-box;
					color: #606266;
					display: inline-block;
					font-size: 14px;
					height: 40px;
					line-height: 40px;
					outline: none;
					padding: 5px 5px 5px 38px;
					transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
					width: 100%;
				}
				input::-webkit-input-placeholder {
					color: #c9c9c9;
				}
				input::-moz-placeholder {
					/* Mozilla Firefox 19+ */
					color: #c9c9c9;
				}
				input:-moz-placeholder {
					/* Mozilla Firefox 4 to 18 */
					color: #c9c9c9;
				}
				input:-ms-input-placeholder {
					/* Internet Explorer 10-11 */
					color: #c9c9c9;
				}
			}
			.login-username,
			.login-password {
				position: relative;
				span {
					display: flex;
					align-items: center;
					position: absolute;
					left: 12px;
					top: 0;
					height: 100%;
					i {
						display: inline-block;
						width: 18px;
						height: 18px;
						background-image: url('../../../assets/images/login/avator.png');
						background-size: 100% 100%;
					}
				}
			}
			.login-password {
				span {
					i {
						background-image: url('../../../assets/images/login/key.png');
					}
				}
			}
			.login-verify-code {
				display: flex;
				height: 50px;
				input {
					flex: 1;
					padding-left: 15px;
					height: 100%;
				}
				#verify-container {
					height: 100%;
					margin-left: 10px;
					width: 100px;
				}
			}
			.login-about-password {
				height: 20px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.about-left {
					display: flex;
					align-items: center;
					/deep/ .el-checkbox {
						margin-right: 10px;
					}
				}
				.about-password-content {
					font-size: 14px;
					color: #333;
					cursor: pointer;
				}
			}
			.login-button-container {
				width: 100%;
				display: flex;
				justify-content: center;
				.login-button {
					width: 100%;
					text-align: center;
					height: 46px;
					line-height: 46px;
					background-color: #0068b7;
					border-radius: 3px;
					font-size: 16px;
					color: #fff;
					cursor: pointer;
				}
			}
			.login-about-regster {
				width: 100%;
				height: 30px;
				text-align: center;
				color: rgba(60, 153, 232, 1);
				line-height: 30px;
				cursor: pointer;
			}
		}
		.login-body.qr-code {
			align-items: center;
			height: 100%;
			.noDevelopment {
				width: 100%;
				height: 30px;
				text-align: center;
				font-size: 18px;
				color: rgb(79, 80, 82);
				line-height: 30px;
			}
			.appDow {
				color: #3c99e8;
				text-align: center;
				font-size: 16px;
				line-height: 32px;
				cursor: pointer;
			}
		}
		.shade-weak-password {
			width: 100%;
			height: 100%;
			position: absolute;
			z-index: 1000;
			background: rgba(0, 0, 0, 0.7);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			i {
				width: 53px;
				height: 47px;
				display: inline-block;
				background-image: url('../../../assets/images/login/warning.png');
				background-size: 100% 100%;
				margin-bottom: 20px;
			}
			span {
				color: #fff;
				font-size: 16px;
				line-height: 36px;
				width: 277px;
				text-align: center;
			}
			div {
				margin: 10px 0;
				border-radius: 10px;
				width: 150px;
				height: 33px;
				font-size: 16px;
				background: rgba(255, 255, 0, 0.45);
				color: white;
				line-height: 33px;
				text-align: center;
				cursor: pointer;
				&:nth-of-type(2) {
					background: rgba(68, 138, 202, 0.45);
				}
			}
		}
		.appImg {
			img {
				margin: 0 auto;
				display: inline-block;
			}
		}
		.app-header {
			text-align: center;
			height: 70px;
			font-size: 20px;
			line-height: 70px;
			font-weight: 700;
			color: #404e67;
			border-bottom: 1px solid #dcdcdc;
		}
		.appDowImg {
			font-size: 16px;
			line-height: 32px;
			text-align: center;
			color: #46494c;
		}
	}
	.el-icon-close {
		position: absolute;
		top: 12px;
		right: 7px;
		color: #000;
		font-size: 20px;
		padding: 10px;
		cursor: pointer;
		transition: all 0.2s;
		&:hover {
			transform: scale(1.2);
		}
	}
}
</style>

<style lang="scss">
#new_portal_login {
	.login-body .qr-code {
		div {
			canvas {
				border: 0.05rem solid #ccc;
			}
		}
	}
}
</style>
