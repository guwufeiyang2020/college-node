<template>
	<div class="person-order-wrapper">
		<div class="my-banner-wrapper">
			<div class="person-order-banner clearfix m-1200">
				<h2 class="title">订单信息</h2>
				<div class="step-process">
					<el-steps :active="stepProcessActive" finish-status="success">
						<el-step title="订单确认"></el-step>
						<el-step title="付款"></el-step>
						<el-step title="购买成功"></el-step>
					</el-steps>
				</div>
			</div>
		</div>

		<component :is="currentView" @nextStep="nextStep" />
	</div>
</template>

<script>
import PersonOrderConfirm from './components/PersonOrderConfirm.vue';
import ToPay from './components/ToPay.vue';

export default {
  components: { PersonOrderConfirm, ToPay },
  data() {
    return {
      stepProcessActive: 0,
      currentView: PersonOrderConfirm,
    };
  },
  methods: {
    nextStep(val) {
      this.stepProcessActive = val;
      if (val === 1) {
        this.currentView = ToPay;
      } else if (val === 2) {
        // this.currentView = BudgetFill;
      } else if (val === 3) {
        //  this.currentView = GenerateOrder;
      }
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.person-order-wrapper {
	overflow: hidden;
}
.person-order-banner {
	height: 126px;
	display: flex;
	align-items: center;
	font-size: 16px;
	.title {
		margin-right: 110px;
		font-size: 30px;
		color: #fff;
	}
}
</style>
