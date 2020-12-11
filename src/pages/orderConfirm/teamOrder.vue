<template>
	<div class="person-order-wrapper">
		<div class="my-banner-wrapper">
			<div class="person-order-banner clearfix m-1200">
				<h2 class="title">订单信息</h2>
				<div class="step-process">
					<el-steps :active="stepProcessActive" finish-status="success">
						<el-step title="需求采集"></el-step>
						<el-step title="方案选择"></el-step>
						<el-step title="预算填报"></el-step>
						<el-step title="生成订单"></el-step>
					</el-steps>
				</div>
			</div>
		</div>

		<component :is="currentView" @nextStep="nextStep" />
	</div>
</template>

<script>
import EnterpriseDemandCollect from './components/EnterpriseDemandCollect.vue';
import SchemeSelection from './components/SchemeSelection.vue';
import BudgetFill from './components/BudgetFill.vue';
import GenerateOrder from './components/GenerateOrder.vue';

export default {
  components: {
    EnterpriseDemandCollect,

    SchemeSelection: () => import('./components/SchemeSelection.vue'),
    BudgetFill: () => import('./components/BudgetFill.vue'),
    GenerateOrder: () => import('./components/GenerateOrder.vue'),
  },
  data() {
    return {
      stepProcessActive: 0,
      currentView: EnterpriseDemandCollect,
    };
  },
  methods: {
    nextStep(val) {
      this.stepProcessActive = val;
      if (val === 1) {
        this.currentView = SchemeSelection;
      } else if (val === 2) {
        this.currentView = BudgetFill;
      } else if (val === 3) {
        this.currentView = GenerateOrder;
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
