<template>
	<div class="wrapper">
		<h3 class="title">安全须知</h3>
		<div class="Safetyinstructions_center">
			<div class="Safety_matters">培训期间请注意以下安全事项:</div>
			<div v-for="(item, index) in Safetymattersdata" :key="index" class="Safetymatters_data">
				<div class="rule-title">
					<div class="Safetymattersdata_left">
						{{ item.id }}
					</div>
					<div class="Safetymattersdata_right">{{ item.name }}</div>
				</div>
				<div v-for="(sub, index) in item.childdata" :key="index" class="item-sub">
					{{ sub.text }}
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
      Safetymattersdata: [
        {
          id: 1,
          name: '应急',
          childdata: [
            {
              text:
								'当入住房间、进入培训场地时，请仔细识别逃生路径及安全出口。如遇紧急情况，请听从现场安全员指挥，有序撤离。'
            }
          ]
        },
        {
          id: 2,
          name: '防盗',
          childdata: [
            {
              text: '1、妥善保管您的财物，贵重物品可联系培训会务组寄存；'
            },
            {
              text:
								'2、休息时，及时关闭门窗。如发生失窃，请注意保护现场，并联系培训会务组协助报警。'
            }
          ]
        },
        {
          id: 3,
          name: '出行',
          childdata: [
            {
              text: '1、培训期间严禁私自外出，若需要外出请告知会务组您的去向和返回时间；'
            },
            {
              text:
								'2、如若步行外出请注意来往车辆，若乘车外出请系好安全带，步行靠近水边时，请注意安全，谨防落水。'
            }
          ]
        },
        {
          id: 4,
          name: '饮食与健康',
          childdata: [
            {
              text:
								'1、培训期间，请使用会务组提供的饭卡于餐厅自行排队就餐。饭卡无法在超市使用，超市需个人支付（现金、支付宝、微信均可），注意公共卫生，慎食生冷食品；'
            },
            {
              text: '2、会务组在培训期间，已配备医药箱。如有身体不适，请直接联系会务组。'
            }
          ]
        },
        {
          id: 5,
          name: '其他要求',
          childdata: [
            {
              text: '1、培训期间，请统一穿戴工作服'
            },
            {
              text:
								'2、遵守培训教室管理规定，不得随意进入其他教室，不得随意使用培训室内配备的电脑，不得私自拉接电线，不得嬉戏打闹、大声喧哗；'
            },
            {
              text:
								'3、严格执行实训中心安全管理规定，不得随意触摸操作实训中心设备，预防触电事故发生；操作及拆装实操学习时，严格执行有关劳动法律法规、标准，佩戴PPE，预防机械伤害；遵守设定的培训路线，不得随意走动，预防高处坠落事故的发生；不得嬉戏打闹、大声喧哗；'
            },
            {
              text: '4、库区参观学习期间按要求穿戴劳保用品，并严格遵守现场HSE管理要求；'
            },
            {
              text: '5、岙山库区内，未经许可严禁拍照。请勿将敏感信息发布在微博、微信等公共平台。'
            },
            {
              text: '6、入住房间请按照《附件：宿舍管理办法》执行。'
            }
          ]
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
.Safetyinstructions_center {
	padding: 20px;
	background: #fff;
	.Safety_matters {
		font-size: 0.14rem;
		color: #343649;
	}
	.Safetymatters_data {
		width: 100%;
		padding: 10px 0;
		.rule-title {
			display: flex;
			align-items: center;
			margin-bottom: 10px;
		}
		.Safetymattersdata_left {
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
		.Safetymattersdata_right {
			line-height: 40px;
			font-size: 20px;
			font-family: FZZongYi-M05S;
			font-weight: bold;
			color: #0061ae;
			padding-left: 12px;
		}
		.item-sub {
			font-size: 14px;
			color: #383640;
			line-height: 30px;
			margin-bottom: 10px;
			flex-wrap: wrap;
			padding-left: 34px;
		}
	}
}
</style>
