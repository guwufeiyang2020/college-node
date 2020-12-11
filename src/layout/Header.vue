<template>
	<!-- 头部 -->
	<div class="header-wrapper">
		<div class="common-title">
			<img src="../assets/images/layout/logo.png" class="logo" />

			<div class="nav_search">
				<el-select v-model="value" placeholder="课程">
					<el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value"
					></el-option>
				</el-select>
				<el-input
					type="text"
					style="margin: auto; border: none;"
					suffix-icon="el-icon-search"
					size="small"
					v-model="serchVal"
				></el-input>
			</div>

			<div class="menu-list clearfix">
				<router-link class="menu-item" to="/index" target="_blank">首页</router-link>
				<router-link class="menu-item" to="/onlineLearn" target="_blank">在线学习</router-link>
				<router-link class="menu-item" to target="_blank">消息</router-link>
			</div>

			<div class="login-area">
				<el-dropdown v-if="user && user.userInfo">
					<div class="el-dropdown-link">
						{{ user.userInfo.realName }}
						<i class="ad" ref="guanliyuan"></i>
					</div>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item @click.native="jumpUserInfo">个人中心</el-dropdown-item>
						<el-dropdown-item @click.native="layout">退出</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
				<div v-else @click="goLogin" class="login-btn">登录</div>
			</div>
		</div>

		<div class="LoginBox" v-show="dialogIShow">
			<login class="loginMain" v-show="dialogIShow"></login>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import Login from '../pages/login/index.vue';

export default {
  name: 'Sidebar',
  components: { Login },

  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '讲师'
        },
        {
          value: '选项2',
          label: '课程'
        },
        {
          value: '选项3',
          label: '动态'
        },
        {
          value: '选项4',
          label: '设备'
        }
      ],
      value: '',
      serchVal: ''
    };
  },
  computed: {
    ...mapGetters(['user']),
    dialogIShow() {
      return this.$store.state.loginDialog;
    }
  },
  methods: {
    // 个人信息
    jumpUserInfo() {
      this.$router.push({
        path: '/personalCenter'
      });
    },
    // 退出登录
    layout() {
      this.$store.dispatch('layout');
    },
    // 登陆
    goLogin() {
      this.$store.commit('changeLoginDialog', true);
    }
  }
};
</script>

<style lang="scss" scoped>
.header-wrapper {
	height: 92px;
	display: flex;
}
.login-btn {
	cursor: pointer;
}
.common-title {
	width: 1200px;
	height: 100%;
	margin: 0 auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.logo {
		width: 335px;
		height: 57px;
	}
	.nav_search {
		width: 260px;
		height: 38px;
		border-radius: 4px;
		border: 1px solid #d2d2d2;
		display: flex;
		align-items: center;
	}
	.menu-list {
		width: 300px;
		.menu-item {
			float: left;
			margin: 0 20px;
			color: #333;
			cursor: pointer;
		}
		.Navbar_redTxt {
			width: 16px;
			height: 16px;
			line-height: 16px;
			color: #fff;
			font-size: 12px;
			text-align: center;
			border-radius: 8px;
			background: red;
			position: absolute;
			top: 10px;
			right: 10px;
		}

		.navbar-box {
			z-index: 10;
			width: 146px;
			text-align: center;
			background: rgba(255, 255, 255, 1);
			border: 1px solid #c7c7c9;
			font-size: 14px;
			color: #51585e;
			line-height: 40px;
			padding: 12px 0 0 0;
			position: absolute;
			top: 50px;
			left: 0;
			.arrow-up {
				position: absolute;
				top: -12px;
				left: 50%;
				display: inline-block;
				width: 15px;
				height: 12px;
				transform: translateX(-50%);
				background: url(../assets/images/icon/arrow-up.png) no-repeat left 0;
			}
			.out {
				height: 52px;
				line-height: 52px;
				border-top: 1px solid #c7c7c9;
			}
			.collageTe,
			.yigouTe {
				color: #ff0000;
			}
		}
	}
	.login-area {
		width: 100px;
		font-size: 14px;
		color: #51585e;
		.el-dropdown-link {
			display: flex;
			align-items: center;
			cursor: pointer;
		}
		.ad {
			display: inline-block;
			width: 30px;
			height: 30px;
			background: url('../assets/images/layout/touxiang.png') no-repeat;
			background-size: 100% 100%;
			border-radius: 50%;
			margin-left: 10px;
		}
	}
}

/deep/ .nav_search .el-input .el-input__inner {
	border: none;
	height: 35px;
}
/deep/ .nav_search .el-select {
	border: none;
	width: 80px;
	.el-input__inner {
		width: 80px;
	}
}

//登录弹框
.LoginBox {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	right: 0;
	left: 0;
	background: rgba(0, 0, 0, 0.5);
	z-index: 100;
	.loginMain {
		width: 100%;
		height: 500px;
		position: fixed;
		z-index: 101;
	}
}
</style>
