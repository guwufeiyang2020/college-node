<template>
	<div id="new_portal_step2">
		<step-container
			:operationButtons="operationButtons"
			@preClick="preClick"
			@nextClick="nextClick"
		>
			<div class="step">
				<div class="step-tip">
					STEP.2 身份验证
				</div>
				<div class="step-mobile">您的账号绑定的手机号码为: <span>158****2134</span></div>
				<div class="verify-code">
					<input type="text" placeholder="请输入您的验证码" />
					<span v-show="verifyShow" @click="getVerifyCode">点击获取验证码</span>
					<span v-show="!verifyShow">{{ count }}</span>
				</div>
			</div>
		</step-container>
	</div>
</template>

<script>
import StepContainer from './StepContainer.vue';

const TIME_REMAIN = 60;
export default {
  name: 'Step2',
  components: { StepContainer },
  data() {
    return {
      operationButtons: {
        pre: '上一步',
        next: '下一步',
      },
      count: null,
      verifyShow: true,
      timer: null,
    };
  },
  methods: {
    preClick() {
      window.eventBus.$emit('current_step', 1);
    },
    nextClick() {
      window.eventBus.$emit('current_step', 3);
    },
    getVerifyCode() {
      if (!this.timer) {
        this.verifyShow = false;
        this.count = TIME_REMAIN;
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_REMAIN) {
            this.count = this.count - 1;
          } else {
            this.verifyShow = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
      // this.timer = setInterval(() => {
      //   this.remainingTime = this.remainingTime - 1;
      //   this.verifyTip = this.remainingTime;
      //   if (this.remainingTime === 1) {
      //     this.remainingTime = 60;
      //     this.verifyTip = '点击获取验证码';
      //     clearInterval(this.timer);
      //   }
      // }, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
#new_portal_step2 {
	@import './common';
	.step-mobile {
		font-size: 0.14rem;
		padding-bottom: 0.2rem;
		span {
			color: #36299b;
		}
	}
	.step {
		.verify-code {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: center;
			input {
				width: 100%;
			}
			span {
				height: 0.5rem;
				line-height: 0.5rem;
				color: #22899b;
				font-size: 0.16rem;
				position: absolute;
				right: 0.2rem;
				cursor: pointer;
			}
		}
	}
}
</style>
