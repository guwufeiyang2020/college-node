<template>
	<div id="new_portal_step4">
		<step-container
			:operationButtons="operationButtons"
			@preClick="preClick"
			@nextClick="nextClick"
		>
			<div class="step">
				<div class="step-tip">STEP.4 完成</div>
				<div class="finish-tip">
					<i></i>
					<span>您的密码已经设置完成，赶快去登录吧！</span>
				</div>
			</div>
		</step-container>
	</div>
</template>

<script>
import StepContainer from './StepContainer.vue';

export default {
  name: 'Step4',
  components: { StepContainer },
  data() {
    return {
      operationButtons: {
        pre: '上一步',
        next: '登录',
      },
      count: null,
      verifyShow: true,
      timer: null,
    };
  },
  methods: {
    preClick() {
      window.eventBus.$emit('current_step', 3);
    },
    nextClick() {
      this.$router.push({
        path: '/newPortal/login',
      });
    },
  },
};
</script>

<style scoped lang="scss">
#new_portal_step4 {
	@import './common';
	.step {
		.finish-tip {
			margin-top: 0.5rem;
			display: flex;
			justify-content: center;
			align-items: center;
			i {
				display: inline-block;
				width: 0.3rem;
				height: 0.35rem;
				background-image: url('../../../../../../assets/assets/images/success.png');
				background-size: 100% 100%;
				margin-right: 0.1rem;
			}
			span {
				color: #b3b3b3;
				font-size: 0.14rem;
				line-height: 0.35rem;
			}
		}
	}
}
</style>
