<template>
	<div class="scheme-select-wrapper">
		<section class="section-wrapper">
			<div class="section-header">根据您的需求信息，我们为您制定了以下几种课程方案！</div>
			<div class="section-body">
				<ul class="scheme-list">
					<li class="scheme-item" v-for="scheme in schemeList" :key="scheme.id">
						<div class="scheme-title" v-if="scheme.subList && scheme.subList.length > 0">
							<h3>{{ scheme.schemeName }}</h3>
							<button class="btn-edit" @click="editScheme(scheme)" v-if="!scheme.canEdit">
								<i class="icon-edit"></i>编辑
							</button>
							<button class="btn-finish" @click="finishScheme(scheme)" v-if="scheme.canEdit">
								<i class="icon-finish"></i>完成
							</button>
						</div>
						<ul class="scheme-sub-list">
							<li
								class="scheme-sub-item"
								:class="{ 'can-edit': scheme.canEdit }"
								v-for="subScheme in scheme.subList"
								:key="subScheme.id"
							>
								<i class="icon-close" @click="deleteClass(scheme, subScheme)"></i>
								<img v-lazy="subScheme.img" />
								<div class="scheme-content">
									<p class="name txt-ellipsis">{{ subScheme.className }}</p>
									<p class="desc">{{ subScheme.desc }}</p>
								</div>
							</li>
							<li class="add-class" v-if="scheme.canEdit"><i class="icon-add"></i>添加课程</li>
						</ul>
					</li>
				</ul>
			</div>
		</section>
		<section class="section-wrapper footer-area">
			<div class="footer-left">
				<label>请选择</label>
				<el-checkbox-group v-model="selectSchemes">
					<el-checkbox
						:label="scheme.schemeName"
						border
						v-for="scheme in schemeList"
						:key="scheme.id"
					></el-checkbox>
				</el-checkbox-group>
			</div>
			<button @click="submit">确认提交</button>
		</section>
	</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      schemeList: [
        {
          schemeName: '方案一',
          canEdit: false,
          subList: [
            {
              id: '001',
              img: require('../../../assets/images/temp/scheme-img.jpg'),
              className: '企业生产安全应急预案数字化推演及复盘',
              desc: '危险作业HSE管理 | 2学时'
            },
            {
              id: '002',
              img: require('../../../assets/images/temp/scheme-img.jpg'),
              className: '火灾应急处置',
              desc: '危险作业HSE管理 | 2学时'
            },
            {
              id: '003',
              img: require('../../../assets/images/temp/scheme-img.jpg'),
              className: '中毒应急处置',
              desc: '危险作业HSE管理 | 2学时'
            },
            {
              id: '004',
              img: require('../../../assets/images/temp/scheme-img.jpg'),
              className: '触电应急处置',
              desc: '危险作业HSE管理 | 2学时'
            }
          ]
        },
        {
          schemeName: '方案二',
          canEdit: false,
          subList: [
            {
              id: '001',
              img: require('../../../assets/images/temp/scheme-img.jpg'),
              className: '企业生产安全应急预案数字化推演及复盘',
              desc: '危险作业HSE管理 | 2学时'
            },
            {
              id: '002',
              img: require('../../../assets/images/temp/scheme-img.jpg'),
              className: '盲板抽堵作业HSE管理',
              desc: '危险作业HSE管理 | 2学时'
            },
            {
              id: '003',
              img: require('../../../assets/images/temp/scheme-img.jpg'),
              className: '动火作业HSE管理',
              desc: '危险作业HSE管理 | 2学时'
            },
            {
              id: '004',
              img: require('../../../assets/images/temp/scheme-img.jpg'),
              className: '高处作业HSE管理',
              desc: '危险作业HSE管理 | 2学时'
            },
            {
              id: '005',
              img: require('../../../assets/images/temp/scheme-img.jpg'),
              className: '受限空间作业HSE管理',
              desc: '危险作业HSE管理 | 2学时'
            }
          ]
        },
        {
          schemeName: '方案三',
          canEdit: false,
          subList: [
            {
              id: '001',
              img: require('../../../assets/images/temp/scheme-img.jpg'),
              className: '企业生产安全应急预案数字化推演及复盘',
              desc: '危险作业HSE管理 | 2学时'
            },
            {
              id: '002',
              img: require('../../../assets/images/temp/scheme-img.jpg'),
              className: '吊装作业HSE管理',
              desc: '危险作业HSE管理 | 2学时'
            },
            {
              id: '003',
              img: require('../../../assets/images/temp/scheme-img.jpg'),
              className: '泄漏应急处置',
              desc: '危险作业HSE管理 | 2学时'
            },
            {
              id: '004',
              img: require('../../../assets/images/temp/scheme-img.jpg'),
              className: '临时用电作业HSE管理',
              desc: '危险作业HSE管理 | 2学时'
            }
          ]
        }
      ],
      selectSchemes: []
    };
  },

  methods: {
    editScheme(item) {
      item.canEdit = true;
    },
    finishScheme(item) {
      item.canEdit = false;
    },
    deleteClass(item, subItem) {
      const index = item.subList.indexOf(subItem);
      item.subList.splice(index, 1);
    },
    submit() {
      if (this.selectSchemes.length === 0) {
        this.$message({
          type: 'warning',
          message: '请选择一个方案'
        });
      } else {
        this.$emit('nextStep', 2);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.sub-title {
	height: 40px;
	color: #91999e;
	font-weight: normal;
}
.section-wrapper .section-body {
	padding: 0px 28px 20px;
}
.scheme-title {
	height: 72px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	h3 {
		color: #363b40;
		font-size: 16px;
		font-weight: normal;
	}
	button {
		height: 72px;
		color: #4272d7;
		display: flex;
		align-items: center;
		[class^='icon-'] {
			display: inline-block;
			width: 18px;
			height: 18px;
			margin-right: 4px;
			background: url('../../../assets/images/icon/icon-edit-blue.png');
		}
	}
	.btn-finish {
		color: #707070;
		.icon-finish {
			background-image: url('../../../assets/images/icon/icon-success.png');
		}
	}
}
.scheme-sub-list {
	display: flex;
	flex-wrap: wrap;
}
.add-class {
	width: 353px;
	height: 80px;
	border: 1px dashed #cad1d9;
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ced4dc;
	cursor: pointer;
	.icon-add {
		display: inline-block;
		width: 20px;
		height: 20px;
		margin-right: 12px;
		background: url('../../../assets/images/icon/icon-add.png');
	}
}
.scheme-sub-item {
	position: relative;
	width: 353px;
	height: 80px;
	border: 1px solid #cad1d9;
	display: flex;
	align-items: center;
	margin: 0 41px 20px 0;
	padding: 0 10px;
	cursor: pointer;
	&.can-edit {
		border: 1px dashed #cad1d9;
		.icon-close {
			display: inline-block;
		}
	}
	&:after {
		content: ' ';
		position: absolute;
		right: -30px;
		top: 32px;
		width: 18px;
		height: 17px;
		background: url('../../../assets/images/icon/icon-plus.png');
	}
	&:nth-child(3n) {
		margin-right: 0;
	}
	&:nth-child(3n):after,
	&:last-child:after {
		display: none;
	}
	img {
		width: 85px;
		height: 52px;
		margin-right: 22px;
	}
	.name {
		width: 238px;
		line-height: 26px;
		font-size: 16px;
		color: #363b40;
	}
	.desc {
		line-height: 26px;
		color: #989ea2;
	}
	.icon-close {
		display: none;
		position: absolute;
		right: -7px;
		top: -7px;
		width: 19px;
		height: 19px;
		background: url('../../../assets/images/icon/icon-del.png');
		&:hover {
			background-image: url('../../../assets/images/icon/icon-del-active.png');
		}
	}
}
.footer-area {
	height: 93px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 28px;
	.footer-left {
		display: flex;
		align-items: center;
		label {
			color: #51585e;
			font-size: 16px;
			margin-right: 10px;
		}
	}
	button {
		width: 130px;
		height: 40px;
		background: #0060af;
		color: #fff;
		text-align: center;
		line-height: 40px;
	}
}
</style>
