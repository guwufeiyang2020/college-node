<template>
	<div id="new_portal_step1">
		<step-container
			:operationButtons="operationButtons"
			@preClick="preClick"
			@nextClick="nextClick"
		>
			<div class="step">
				<div class="step-tip">
					STEP.1 请输入账号
				</div>
				<input type="text" placeholder="请输入您的账号名或手机号" />
			</div>
		</step-container>
	</div>
</template>

<script>
import StepContainer from './StepContainer.vue';

export default {
  name: 'Step1',
  components: { StepContainer },
  data() {
    return {
      operationButtons: {
        next: '下一步',
      },
    };
  },
  methods: {
    nextClick() {
      window.eventBus.$emit('current_step', 2);
    },
  },
};
</script>

<style scoped lang="scss">
#new_portal_step1 {
	@import './common';
}
</style>
