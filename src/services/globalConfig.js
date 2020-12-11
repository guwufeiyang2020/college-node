import { $http } from '@commonbox/utils';

const setUser = async (isSetUser) => {
  if (!window.globalConfig.user || isSetUser) {
    const {
      data: { data },
    } = await $http.get('/assso/userApi/getUserInfo');
    if (data) {
      window.globalConfig.user = data;
      window.globalConfig.user.id = data.userId;
      window.globalConfig.user.name = data.realName;
    } else {
      window.globalConfig.user = null;
    }
  }
};

// const setFileMaxSize = async () => {
//   if (!window.globalConfig.maxFileSize) {
//     const { data: { maxFileSize } } = await $http.get('/api/store/getUMFSize');
//     window.globalConfig.maxFileSize = maxFileSize;
//   }
// };

// const setAttachService = async () => {
//   if (!window.globalConfig.attachService) {
//     const { data: { result } } = await $http.get('/api2/config/setting/ATTACHMENT_S');
//     window.globalConfig.attachService = result;
//   }
// };
// const getUserSpaceList = async (isSetUser) => {
//   if (!window.globalConfig.container || isSetUser) {
//     const { data: { data } } = await $http.get('/sdkportal/menuPageApi/getUserSpaceList');
//     console.log(data);
//     window.globalConfig.container = data;
//   }
// };

// const getTargetSpeace = async (isSetUser, path) => {
//   // 根据当前容器和子系统门户查询目标容器
//   if (!isSetUser) {
//     // window.AY.getSpaceId();
//     let menuName = '';
//     if (path === '/menu/OfficeSystem') {
//       menuName = '/sdkoa';
//     } else if (path === '/menu/WmsManagement') {
//       menuName = '/sdkbm';
//     } else if (path === '/menu/EmployeeDevelopment') {
//       menuName = '/sdkhr';
//     } else if (path === '/menu/InnovationPlatform') {
//       menuName = '/sdkim';
//     } else if (path === '/menu/HseManagement') {
//       menuName = '/sdksm';
//     } else if (path === '/menu/EmergencyPlatform') {
//       menuName = '/sdkem';
//     } else if (path === '/menu/DeviceHome') {
//       menuName = '/sdkcm';
//     }
//     const params = { nowSpace: window.AY.getSpaceId(), appName: menuName };
//     const { data: { data } } = await $http.post('/sdkportal/menuPageApi/getSpanSpaceAppMes', params);
//     window.globalConfig.targetSpeace = data;
//   }
// };
export const patchGlobalConfig = async (isSetUser = '') => {
  try {
    await setUser(isSetUser);
    // await setFileMaxSize();
    // await setAttachService();
    // await getUserSpaceList(isSetUser);
    // await getTargetSpeace(isSetUser, path);
    return 200;
  } catch (e) {
    return e.response.status;
  }
};
