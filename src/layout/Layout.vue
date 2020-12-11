<template>
	<div>
		<v-header></v-header>
		<div class="main-box">
			<transition name="fade" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
		<footer-bottom></footer-bottom>
	</div>
</template>

<script>
import VHeader from '@/layout/Header.vue';
import FooterBottom from '@/layout/FootBottom.vue';

export default {
  name: 'Layout',
  data() {
    return {};
  },
  components: {
    VHeader,
    FooterBottom,
  },
};
</script>

<style lang="scss" scoped>
.main-box {
	min-height: calc(100vh - 92px - 100px);
	background: #f3f5f7;
}
</style>
