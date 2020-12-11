<template>
	<div class="regBox">
		<div class="reg_header">
			<div class="reg_header_logo"></div>
			<div class="reg_header_login">
				已有账号,去
				<i @click="loginChange()">登录</i>
			</div>
		</div>
		<div class="reg_top">
			<div class="margin">
				<div class="reg_tabChange">
					<div
						class="reg_tabBtn"
						v-for="(item, index) in tabBtnList"
						:key="index"
						@click="tabBtn(index)"
						:class="activeClass === index ? 'active_menu' : ''"
					>
						{{ item }}
					</div>
				</div>
			</div>
		</div>
		<div class="reg_main">
			<div class="margin">
				<PersonalMain v-show="isPersonalShow" class="reg_main-item"></PersonalMain>
				<EnterpriseMain v-show="isEnterpriseShow" class="reg_main-item"></EnterpriseMain>
			</div>
		</div>
	</div>
</template>

<script>
import PersonalMain from './components/PersonalMain.vue'; // 个人
import EnterpriseMain from './components/EnterpriseMain.vue'; // 企业

export default {
  components: { PersonalMain, EnterpriseMain },
  props: {},
  data() {
    return {
      activeClass: 0,
      tabBtnList: ['个人账户注册', '企业账户注册'],
      isPersonalShow: true,
      isEnterpriseShow: false,
    };
  },
  methods: {
    // 个人和企业按钮切换
    tabBtn(index) {
      this.activeClass = index;
      if (index === 0) {
        this.isPersonalShow = true;
        this.isEnterpriseShow = false;
      } else if (index === 1) {
        this.isPersonalShow = false;
        this.isEnterpriseShow = true;
      }
    },
    // 跳转登录页
    loginChange() {
      this.$router.push('/');
    },
  },
};
</script>

<style lang="scss" scoped>
.regBox {
	.reg_header {
		width: 100%;
		height: 107px;
		background: #0060af;
		.reg_header_logo {
			width: 343px;
			height: 62px;
			float: left;
		}
		.reg_header_login {
			width: 200px;
			height: 40px;
			float: right;
			padding: 20px;
			font-size: 16px;
			color: rgba(255, 255, 255, 1);
			line-height: 47px;
			> i {
				color: #ffff00;
				cursor: pointer;
			}
		}
	}
	.reg_top {
		width: 100%;
		height: 60px;
		border-bottom: 1px solid #d0dce4;
		.reg_tabChange {
			width: 650px;
			height: 60px;
			margin: 0 auto;
			display: flex;
			text-align: center;
			.reg_tabBtn {
				text-align: center;
				font-size: 18px;
				padding: 20px 0;
				margin: 0 100px;
				color: #393e49;
				cursor: pointer;
			}
			.active_menu {
				color: #0060af;
				border-bottom: 2px solid #0060af;
			}
		}
	}
	.reg_main {
		&-item {
			width: 100%;
			height: 100%;
		}
	}
}
</style>
