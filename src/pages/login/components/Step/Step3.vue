<template>
	<div id="new_portal_step3">
		<step-container
			:operationButtons="operationButtons"
			@preClick="preClick"
			@nextClick="nextClick"
		>
			<div class="step">
				<div class="step-tip">
					STEP.3 密码设置
				</div>
				<input type="password" placeholder="请输入您的密码" />
				<div class="password-strength">
					<span>密码强度:</span>
					<i :style="{ 'background-color': strength >= 1 ? strengthColor : '#DCDCDC' }"></i>
					<i :style="{ 'background-color': strength >= 2 ? strengthColor : '#DCDCDC' }"></i>
					<i :style="{ 'background-color': strength >= 3 ? strengthColor : '#DCDCDC' }"></i>
					<span>{{
						strength === 1 ? '弱' : strength === 2 ? '中' : strength === 3 ? '强' : ''
					}}</span>
				</div>
				<div class="password-tip-content">
					<span
						>请输入您想设置的密码，不少于6位数，为了您的账号安全，请您的密码中包含数字、
						字母和符号。</span
					>
				</div>
				<input type="password" placeholder="确认密码" />
			</div>
		</step-container>
	</div>
</template>

<script>
import StepContainer from './StepContainer.vue';

export default {
  name: 'Step3',
  components: { StepContainer },
  data() {
    return {
      operationButtons: {
        pre: '上一步',
        next: '下一步',
      },
      strength: 0, // 1弱  2中 3强 0无
    };
  },
  methods: {
    preClick() {
      window.eventBus.$emit('current_step', 2);
    },
    nextClick() {
      window.eventBus.$emit('current_step', 4);
    },
  },
  computed: {
    strengthColor() {
      let color = '#ff0000';
      switch (this.strength) {
        case 1:
          color = '#ff0000';
          break;
        case 2:
          color = '#EC6941';
          break;
        case 3:
          color = '#00d1b2';
          break;
        default:
          color = '#ff0000';
          break;
      }
      return color;
    },
  },
};
</script>

<style scoped lang="scss">
#new_portal_step3 {
	@import './common';
	.step-mobile {
		font-size: 0.14rem;
		padding-bottom: 0.2rem;
		span {
			color: #36299b;
		}
	}
	.step {
		.password-strength {
			color: #b3b3b3;
			font-size: 0.14rem;
			padding-top: 0.1rem;
			display: flex;
			justify-content: flex-start;
			align-items: center;
			i {
				margin: 0.1rem;
				display: inline-block;
				width: 0.6rem;
				height: 0.07rem;
				background-color: #dcdcdc;
				&:nth-child(2) {
					border-radius: 0.04rem 0 0 0.04rem;
				}
				&:nth-child(4) {
					border-radius: 0 0.04rem 0.04rem 0;
				}
			}
		}
		.password-tip-content {
			font-size: 0.14rem;
			line-height: 0.24rem;
			color: #b3b3b3;
			padding-bottom: 0.1rem;
			padding-top: 0.1rem;
		}
	}
}
</style>
