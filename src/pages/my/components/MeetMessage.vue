<template>
	<div class="wrapper">
		<h3 class="title">会务安排</h3>
		<div class="Conference_information">
			<div class="list_data">
				<div class="list-title">
					<div class="listdata-left">1</div>
					<div class="listdata-right">作息时间</div>
				</div>

				<div class="title_infotime">
					<div class="title_image"></div>
					<!-- <div class="time_day">
            <div>一天</div>
          </div>
          <div class="hr_color"></div>
          <div class="Progress_barconter">
            <div class="Progress_barfrist"></div>
            <div class="Progress_barsecond"></div>
            <div class="Progress_barthrid"></div>
            <div class="Progress_barfourth"></div>
            <div class="Progress_barfive"></div>
          </div>
          <div class="time_axis">
            <div>时间轴</div>
          </div>-->
				</div>
			</div>
			<div class="list_data">
				<div class="list-title">
					<div class="listdata-left">2</div>
					<div class="listdata-right">天气预报</div>
				</div>
				<div class="title-infoweather">
					<img src="../../../assets/images/weather-forecast.png" class="weather-forecast" />
				</div>
			</div>
			<div class="list_data">
				<div class="list-title">
					<div class="listdata-left">3</div>
					<div class="listdata-right">会务组及联系方式</div>
				</div>

				<div class="contact_conter">
					<div class="title_infocontact" v-for="(item, index) in contactdata" :key="index">
						<div class="item_photo">
							<i class="el-icon-user"></i>
						</div>
						<div class="name_gongsi">
							<div class="item_name">{{ item.name }}</div>
							<div class="item_gongsi">{{ item.gongsi }}</div>
						</div>
						<div class="phone_contact">
							<div class="item_phone">{{ item.phone }}</div>
							<div class="item_contact">{{ item.contact }}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      titledata: [
        {
          id: 1,
          name: '作息时间'
        },
        {
          id: 2,
          name: '天气预报'
        },
        {
          id: 3,
          name: '会务组及联系方式'
        }
      ],
      contactdata: [
        {
          name: '刘广哲',
          gongsi: '中化舟山应急救援基地',
          phone: 18957229206,
          contact: '电话'
        },
        {
          name: '汪佳瑶',
          gongsi: '中化舟山应急救援基地',
          phone: 17705805338,
          contact: '电话'
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
	margin-bottom: 20px;
}
.title {
	height: 34px;
	line-height: 34px;
	background: #f2f6f9;
	border-left: 1px solid #fff;
	border-right: 1px solid #fff;
	padding-left: 16px;
	color: #51585e;
}
.title_image {
	width: 100%;
	height: 80px;
	background: url('../../../assets/images/time-shaft.png') no-repeat;
	background-size: 100% 100%;
}
.Conference_information {
	.list_data {
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
		position: relative;
		background: #fff;
	}
	.list-title {
		display: flex;
		align-items: center;
		margin-bottom: 10px;
	}
	.listdata-left {
		width: 22px;
		height: 22px;
		background: #0061ae;
		border-radius: 3px;
		font-size: 20px;
		line-height: 22px;
		font-weight: bold;
		color: #fff;
		text-align: center;
	}
	.listdata-right {
		line-height: 40px;
		font-size: 20px;
		color: #0061ae;
		padding-left: 12px;
	}
	.title_infotime {
		display: flex;
		width: 1200px;
		margin: 0.3rem auto;
		height: 1rem;
		.Progress_barconter {
			width: 8.8rem;
			height: 0.07rem;
			margin-top: 0.52rem;
			display: flex;
			position: absolute;
			margin-left: 1.6rem;
			.Progress_barfrist {
				width: 0.8rem;
				height: 0.07rem;
				background: rgba(236, 105, 65, 1);
			}
			.Progress_barsecond {
				width: 2.4rem;
				height: 0.07rem;
				background: rgba(50, 177, 108, 1);
			}
			.Progress_barthrid {
				width: 1.6rem;
				height: 0.07rem;
				background: rgba(0, 160, 233, 1);
			}
			.Progress_barfourth {
				width: 2.4rem;
				height: 0.07rem;
				background: rgba(50, 177, 108, 1);
			}
			.Progress_barfive {
				width: 1.6rem;
				height: 0.07rem;
				background: rgba(236, 105, 65, 1);
			}
		}
		.time_day {
			margin-top: 0.5rem;
			width: 0.67rem;
			height: 0.2rem;
			background: rgba(0, 97, 174, 1);
			border-radius: 10px;
			display: flex;
			margin-left: 0.35rem;
			div {
				margin: 0 auto;
				width: 0.29rem;
				height: 0.12rem;

				color: rgba(255, 255, 255, 1);
				line-height: 0.2rem;
			}
		}
		.hr_color {
			margin-top: 0.58rem;
			width: 11rem;
			height: 0.03rem;
			background: rgba(220, 220, 220, 1);
			opacity: 0.7;
		}
		.time_axis {
			margin-top: 0.5rem;
			width: 0.67rem;
			height: 0.2rem;
			background: rgba(0, 97, 174, 1);
			border-radius: 10px;
			display: flex;
			margin-right: 0.35rem;
			div {
				margin: 0 auto;
				width: 0.45rem;
				height: 0.12rem;

				color: rgba(255, 255, 255, 1);
				line-height: 0.2rem;
			}
		}
	}
	.title-infoweather {
		width: 100%;
		height: 288px;
		margin: 0.2rem auto;
	}
	.weather-forecast {
		width: 100%;
		height: 288px;
	}
	.contact_conter {
		width: 100%;
		display: flex;
		justify-content: space-between;
		.title_infocontact {
			width: 490px;
			height: 94px;
			background: rgba(255, 255, 255, 1);
			border: 1px solid rgba(217, 230, 238, 1);
			color: rgba(49, 49, 49, 1);
			display: flex;
			align-items: center;
			position: relative;
			.item_photo {
				width: 55px;
				height: 55px;
				background: rgba(217, 230, 238, 1);
				border: 1px solid rgba(217, 230, 238, 1);
				border-radius: 50%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				margin: 0 17px 0 13px;
				i {
					width: 29px;
					height: 29px;
					font-size: 29px;
				}
			}
			.name_gongsi {
				flex: 1;
				height: 52px;
				display: flex;
				flex-direction: column;
				.item_name {
					line-height: 30px;
				}
				.item_gongsi {
					line-height: 22px;
					opacity: 0.5;
				}
			}
			.phone_contact {
				width: 123px;
				height: 52px;
				display: flex;
				margin-right: 13px;
				flex-direction: column;
				text-align: right;
				.item_phone {
					line-height: 30px;
				}
				.item_contact {
					line-height: 22px;
					opacity: 0.5;
				}
			}
		}
	}
}
</style>
