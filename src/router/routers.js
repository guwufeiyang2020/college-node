import Layout from '../layout/Layout.vue';

export const routers = [
  // 带头部，尾部页面
  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: '/index',
    children: [{
      path: '/index',
      name: 'index',
      component: () => import ('../pages/home/index.vue'),
    },
    {
      path: '/onlineLearn',
      name: 'onlineLearn',
      component: () => import ('../pages/onlineLearn/onlineLearn.vue'),
    },
    // 个人设置
    {
      path: '/personalCenter',
      name: 'personalCenter',
      component: () => import ('../pages/personalCenter/personalCenter.vue'),
      meta: {
        requireLogin: true,
      },
    },

    // 2020年4月修改
    // 我的
    {
      path: '/my',
      name: 'my',
      component: () => import ('../pages/my/index.vue'),
      meta: {
        requireLogin: true,
      },
    },
    // 个人订单
    {
      path: '/personOrder',
      name: 'personOrder',
      component: () => import ('../pages/orderConfirm/personOrder.vue'),
      meta: {
        requireLogin: true,
      },
    },
    // 团体订单
    {
      path: '/teamOrder',
      name: 'teamOrder',
      component: () => import ('../pages/orderConfirm/teamOrder.vue'),
      meta: {
        requireLogin: true,
      },
    },
    {
      path: '/enterpriseConfirmOrder',
      name: 'enterpriseConfirmOrder',
      component: () => import ('../pages/order/enterpriseOrder.vue'),
      meta: {
        requireLogin: true,
      },
    },
    {
      path: '/personConfirmOrder',
      name: 'personConfirmOrder',
      component: () => import ('../pages/order/personOrder.vue'),
      meta: {
        requireLogin: true,
      },
    },
    // 安全类课程
    {
      path: '/safeClass/:id',
      name: 'safeClass',
      component: () => import ('../pages/obtainEvidence/safeClass.vue'),
      meta: {
        requireLogin: true,
      },
    },
    // 技能类
    {
      path: '/skill/:id',
      name: 'skill',
      component: () => import ('../pages/obtainEvidence/skill.vue'),
      meta: {
        requireLogin: true,
      },
    },
    // 取证中心
    {
      path: '/obtainEvidence/:id',
      name: 'obtainEvidence',
      component: () => import ('../pages/obtainEvidence/obtainEvidence.vue'),
      meta: {
        requireLogin: true,
      },
    },
    // 培训保障
    {
      path: '/trainEnsure/:name',
      name: 'trainEnsure',
      component: () => import ('../pages/trainEnsure/index.vue'),
    },
    ],
  },
  // 注册
  {
    path: '/register',
    name: 'register',
    meta: {
      name: '注册',
    },
    component: () => import ('../pages/register/reg.vue'),
  },
  /* {
        path: '/forgetPassword',
        name: 'forgetPassword',
        meta: {
          name: '忘记密码',
        },
        component: () => import('../pages/NewPortal/LoginPage/Login/components/ForgetPassword.vue'),
      }, */
  // 路由未匹配到，则跳到这里
  {
    path: '*',
    component: () => import ('../pages/otherPages/404.vue'),
  },
];
