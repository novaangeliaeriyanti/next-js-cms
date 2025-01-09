
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
}

const APPSETTING_ENTITY = {
  LIST: `/app-setting/entity`,
  ADD: `/app-setting/entity/add`,
}

const APPSETTING_FEATURE = {
  LIST: `/app-setting/feature`,
  ADD: `/app-setting/feature/add`,
}

const APPSETTING_PARAMETER = {
  LIST: `/app-setting/parameter`,
}

const APPSETTING_PARAMETER_ITEM = {
  LIST: `/app-setting/parameter-item`,
}

const APPSETTING_ROLE = {
  LIST: `/app-setting/role`,
}

const APPSETTING_TASK_SCHEDULE = {
  LIST: `/app-setting/task-schedule`,
}

const APPSETTING_USER = {
  LIST: `/app-setting/user`,
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
