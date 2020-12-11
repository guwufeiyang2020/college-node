<template>
	<div id="new_portal_homepage_notice" v-if="notice_visible">
		<div class="notice-container">
			<div class="notice-item">
				<span class="notice-img"></span>
				<span class="notice-badge">[升级]</span>
				<span class="notice-title">中化物流港平台1.0版本正式上线啦！</span>
				<span class="notice-status"></span>
			</div>
			<div class="close-btn" @click="closeNotice"></div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Notice',
  props: {
    visible: {},
  },
  data() {
    return {
      noticeList: [
        {
          id: 1,
          typeName: '升级',
          title: '物流港升级公告',
        },
      ],
      notice_visible: false,
    };
  },
  watch: {
    visible: {
      handler(val) {
        this.notice_visible = val;
      },
      immediate: true,
    },
    notice_visible: {},
  },
  methods: {
    closeNotice() {
      this.notice_visible = false;
      this.$emit('update:visible', this.notice_visible);
    },
  },
};
</script>

<style scoped lang="scss">
#new_portal_homepage_notice {
	.notice-container {
		position: relative;
		display: flex;
		align-items: center;
		.notice-item {
			display: flex;
			align-items: center;
			font-size: 0.14rem;
			.notice-img {
				display: inline-block;
				width: 0.21rem;
				height: 0.17rem;
				background-image: url('../../../assets/assets/images/rednotice.png');
				background-size: 100% 100%;
				margin-right: 0.1rem;
			}
			.notice-badge {
				color: #ff1f1f;
				margin-right: 0.05rem;
			}
			.notice-title {
				text-decoration: underline;
				margin-right: 0.1rem;
				cursor: pointer;
				max-width: 2.5rem;
			}
			.notice-status {
				display: inline-block;
				width: 0.35rem;
				height: 0.13rem;
				background-image: url('../../../assets/assets/images/new.gif');
				background-size: 100% 100%;
			}
		}
		.close-btn {
			position: absolute;
			right: 0;
			width: 0.1rem;
			height: 0.1rem;
			background-image: url('../../../assets/assets/images/close.png');
			background-size: 100% 100%;
			cursor: pointer;
		}
	}
}
</style>
