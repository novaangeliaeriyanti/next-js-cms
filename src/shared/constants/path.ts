
const DASHBOARD = '/';
const LOGIN = `/login`;
const APPSETTING_ACCESS = {
  LIST: `/app-setting/access`,
  ADD: `/app-setting/access/add`,
  UPDATE: `/app-setting/access/update`
}

const APPSETTING_CLIENT_APP_VERSION = {
  LIST: `/app-setting/client-app-version`,
  ADD: `/app-setting/client-app-version/add`,
  UPDATE: `/app-setting/client-app-version/update`
}

const APPSETTING_ENTITY = {
  LIST: `/app-setting/entity`,
  ADD: `/app-setting/entity/add`,
  UPDATE: `/app-setting/entity/update`
}

const APPSETTING_FEATURE = {
  LIST: `/app-setting/feature`,
  ADD: `/app-setting/feature/add`,
  UPDATE: `/app-setting/feature/update`
}

const APPSETTING_PARAMETER = {
  LIST: `/app-setting/parameter`,
  ADD: `/app-setting/parameter/add`,
  UPDATE: `/app-setting/parameter/update`
}

const APPSETTING_PARAMETER_ITEM = {
  LIST: `/app-setting/parameter-item`,
  ADD: `/app-setting/parameter-item/add`,
  UPDATE: `/app-setting/parameter-item/update`
}

const APPSETTING_ROLE = {
  LIST: `/app-setting/role`,
  ADD: `/app-setting/role/add`,
  UPDATE: `/app-setting/role/update`
}

const APPSETTING_TASK_SCHEDULE = {
  LIST: `/app-setting/task-schedule`,
  ADD: `/app-setting/task-schedule/add`,
  UPDATE: `/app-setting/task-schedule/update`
}

const APPSETTING_USER = {
  LIST: `/app-setting/user`,
  ADD: `/app-setting/user/add`,
  UPDATE: `/app-setting/user/update`
}

// const PRIVATE_ROUTES = [DASHBOARD];
const AUTH_ROUTES = [LOGIN];

export {
  DASHBOARD,
  LOGIN,
  APPSETTING_ACCESS,
  AUTH_ROUTES,
  APPSETTING_CLIENT_APP_VERSION,
  APPSETTING_ENTITY,
  APPSETTING_PARAMETER,
  APPSETTING_FEATURE,
  APPSETTING_PARAMETER_ITEM,
  APPSETTING_ROLE,
  APPSETTING_TASK_SCHEDULE,
  APPSETTING_USER
};
