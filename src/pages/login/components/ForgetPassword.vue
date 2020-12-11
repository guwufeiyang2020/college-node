<template>
	<div id="new_portal_forget_password">
		<div class="forget-container">
			<div class="forget-top"></div>
			<div class="forget-form-container">
				<div class="forget-form-top">
					<img src="../../../../../assets/images/logo-white.png" alt />
				</div>
				<component :is="currentStep"></component>
				<div class="forget-form-bottom">
					<Footer></Footer>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Step1 from './Step/Step1.vue';
import Step2 from './Step/Step2.vue';
import Step3 from './Step/Step3.vue';
import Step4 from './Step/Step4.vue';
import Footer from './Footer.vue';

export default {
  name: 'ForgetPassword',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Footer,
    Step1,
    Step2,
    Step3,
    Step4,
  },
  data() {
    return {
      currentStep: 'Step1', // 当前忘记密码节点 默认 1
    };
  },
  created() {
    this.receiveCurrentStep();
  },
  methods: {
    receiveCurrentStep() {
      // 接收当前节点
      window.eventBus.$on('current_step', (data) => {
        this.currentStep = `Step${data}`;
      });
    },
  },
};
</script>

<style scoped lang="scss">
#new_portal_forget_password {
	height: 100%;
	.forget-container {
		height: 100%;
		position: relative;
		display: flex;
		justify-content: center;
		.forget-top {
			width: 100%;
			height: 58%;
			background-image: url('/../../../assets/assets/images/forgetBg.png');
			background-size: 100% 100%;
		}
		.forget-form-container {
			position: absolute;
			top: 0;
			height: 100%;
			width: 50%;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			padding: 40px 0 80px;
			.forget-form-top {
				text-align: center;
				img {
					width: 300px;
					height: 50px;
				}
			}
		}
	}
}
</style>
