<template>
	<div id="step_container">
		<div class="forget-form">
			<div class="forget-form-tip">
				<span>重置密码</span>
				<span
					>只有绑定手机号和邮箱的用户才可以自己重置密码. 若您尚未绑定，请联系管理员重置密码</span
				>
			</div>
			<div class="forget-form-dynamic"><slot></slot></div>
			<div
				class="forget-form-operate"
				:style="{
					'justify-content':
						Object.keys(operationButtons).length === 1 ? 'center' : 'space-between',
				}"
			>
				<div
					class="operate-item"
					:class="{ blue: key === 'next' }"
					v-for="(val, key, index) in operationButtons"
					@click="btnClick(key)"
					:key="index"
				>
					{{ val }}
				</div>
				<!--        <div class="operate-item blue">下一步</div>-->
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'StepContainer',
  props: {
    operationButtons: {},
  },
  data() {
    return {};
  },
  methods: {
    btnClick(type) {
      if (type === 'pre') {
        this.$emit('preClick');
      } else {
        this.$emit('nextClick');
      }
    },
  },
};
</script>

<style scoped lang="scss">
#step_container {
	.forget-form {
		width: 7.7rem;
		height: 6rem;
		background-color: white;
		box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.3);
		padding: 0.3rem 0.8rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.forget-form-tip {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			> span:nth-child(1) {
				color: #333;
				font-size: 24px;
				line-height: 0.5rem;
			}
			> span:nth-child(2) {
				width: 3.5rem;
				color: #949494;
				line-height: 24px;
				text-align: center;
			}
		}
		.forget-form-dynamic {
			height: 100%;
			margin: 40px 0;
		}
		.forget-form-operate {
			display: flex;
			align-items: center;
			.operate-item {
				color: white;
				cursor: pointer;
				width: 2.4rem;
				height: 0.4rem;
				border-radius: 0.1rem;
				line-height: 0.4rem;
				text-align: center;
				background-color: #7d7d7d;
				&.blue {
					background-color: #0068b7;
				}
			}
		}
	}
}
</style>
