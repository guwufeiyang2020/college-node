<template>
	<div class="right-box-list">
		<a class="right-box-item">
			<div class="box-item-img"></div>
			<div class="box-item-text">学院</div>
		</a>
		<router-link class="right-box-item" to="/my" target="_blank">
			<div class="box-item-img"></div>
			<div class="box-item-text">我的</div>
		</router-link>
		<a class="right-box-item">
			<div class="box-item-img"></div>
			<div class="box-item-text">积分商城</div>
		</a>
		<a class="right-box-item" @click="showData">
			<div class="box-item-img"></div>
			<div class="box-item-text">反馈</div>
		</a>
		<a class="right-box-item" @click="showData">
			<div class="box-item-img"></div>
			<div class="box-item-text">咨询</div>
		</a>
		<a class="right-box-item back-top" @click="backTop()" v-if="btnFlag">
			<div class="topback-img"></div>
		</a>
	</div>
</template>

<script>
export default {
  data() {
    return {
      btnFlag: false,
      timer: '',
      scrollTop: 0,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.scrollToTop);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollToTop);
    clearInterval(this.timer);
  },

  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      const that = this;

      this.timer = setInterval(() => {
        const ispeed = Math.floor(-that.scrollTop / 5);

        window.pageYOffset = that.scrollTop + ispeed;
        document.documentElement.scrollTop = that.scrollTop + ispeed;
        document.body.scrollTop = that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(this.timer);
        }
      }, 16);
    },
    scrollToTop() {
      const scrollTop =				window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      this.scrollTop = scrollTop;
      if (this.scrollTop > 60) {
        this.btnFlag = true;
      } else {
        this.btnFlag = false;
      }
    },
    showData() {
      this.$alert('该功能暂未开发');
    },
  },
};
</script>

<style lang="scss" scoped>
.right-box-list {
	position: fixed;
	bottom: 30px;
	right: 30px;
	z-index: 10;
	width: 60px;
	border-radius: 5px;
	overflow: hidden;
	background: #fff;
	.right-box-item {
		display: block;
		height: 68px;
		border: 1px solid #ddd;
		margin-top: -1px;
		padding-top: 12px;
		display: flex;
		flex-direction: column;
		align-items: center;
		color: #51585e;
		cursor: pointer;
		&:hover {
			background: #0060af;
			border: 1px solid #0060af;
			color: #fff;
		}
		&:first-of-type {
			margin-top: 0;
			border-radius: 5px 5px 0 0;
		}
		&.back-top {
			height: 50px;
			border: 0 none;
			border-radius: 0 0 5px 5px;
			background: #0060af;
			.topback-img {
				width: 30px;
				height: 25px;
				background: url('../assets/images/rightBox/topback1.png') no-repeat center;
			}
		}
		.box-item-img {
			width: 28px;
			height: 28px;
			background: url('../assets/images/rightBox/college1.png') no-repeat center;
		}
		&:visited {
			color: #51585e;
		}
		&:nth-of-type(1) {
			.box-item-img {
				background-image: url('../assets/images/rightBox/college1.png');
			}
			&:hover {
				.box-item-img {
					background-image: url('../assets/images/rightBox/college2.png');
				}
			}
		}
		&:nth-of-type(2) {
			.box-item-img {
				background-image: url('../assets/images/rightBox/my1.png');
			}
			&:hover {
				.box-item-img {
					background-image: url('../assets/images/rightBox/my2.png');
				}
				.box-item-text {
					color: #fff;
				}
			}
		}
		&:nth-of-type(3) {
			.box-item-img {
				background-image: url('../assets/images/rightBox/store1.png');
			}
			&:hover {
				.box-item-img {
					background-image: url('../assets/images/rightBox/store2.png');
				}
			}
		}
		&:nth-of-type(4) {
			.box-item-img {
				background-image: url('../assets/images/rightBox/feedback1.png');
			}
			&:hover {
				.box-item-img {
					background-image: url('../assets/images/rightBox/feedback2.png');
				}
			}
		}
		&:nth-of-type(5) {
			.box-item-img {
				background-image: url('../assets/images/rightBox/consult1.png');
			}
			&:hover {
				.box-item-img {
					background-image: url('../assets/images/rightBox/consult2.png');
				}
			}
		}
	}

	.topback {
		height: 50px;
		border: 1px solid #0060af;
	}
}
</style>
