<template>
	<div id="new_portal_homepage">
		<div class="login-container">
			<div class="login-body">
				<div class="login-body-main">
					<div class="aside-img"></div>
					<login></login>
					<!-- <div class="login-body-footer" v-if="showTip">
            <div class="footer-left">
              <i></i>
              <span>您目前使用的浏览器不是基于Chrome内核的浏览器，为了保证最好的浏览效果，请您更换为谷歌浏览器！</span>
            </div>
            <div class="footer-center">
              <div class="footer-item" @click="showTip = false">不更换浏览器</div>
              <div class="footer-item">下载谷歌浏览器</div>
            </div>
            <div class="footer-close" @click="showTip = false">+</div>
          </div> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Login from './components/Login.vue';

export default {
  data() {
    return {
      showTip: false,
    };
  },
  components: { Login },
  created() {
    this.judgeIsChromeBrowser();
  },
  methods: {
    judgeIsChromeBrowser() {
      const baseInfo = window.navigator.userAgent;
      if (!(baseInfo.indexOf('Chrome') > -1)) {
        this.showTip = true;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
