
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
  LIST: `/app-setting/entity/grid`,
}

const APPSETTING_FEATURE = {
  LIST: `/app-setting/feature/grid`,
}

const APPSETTING_PARAMETER = {
  LIST: `/app-setting/parameter/grid`,
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
  APPSETTING_FEATURE
};
