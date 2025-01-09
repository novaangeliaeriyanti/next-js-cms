const BASE_URL: string = process.env.NEXT_PUBLIC_API_URL || '';

const LOGIN = '/authentication/session';
const APP_SETTING = {
  FETCH_ACCESS_LIST:'/app-setting/access/paging',
  FETCH_ACCESS_BY_ID: `/app-setting/access`,
  CREATE_ACCESS: `/app-setting/access`,
  UPDATE_ACCESS: `/app-setting/access`,
  DELETE_ACCESS: `/app-setting/access`,

  //CLIENT APP VERSION
  FETCH_CLIENT_APP_VERSION_LIST:'/app-setting/client-app-version/grid',
  DELETE_CLIENT_APP_VERSION:'/app-setting/client-app-version',
  CREATE_CLIENT_APP_VERSION:'/app-setting/client-app-version',
  FETCH_CLIENT_APP_TYPE:'/app-setting/client-app-version/lookup',

  //ENTITY
  FETCH_ENTITY_LIST:'/app-setting/entity/grid',
  DELETE_ENTITY:'/app-setting/entity',
  CREATE_ENTITY:'/app-setting/entity',

  //FEATURE
  FETCH_FEATURE_LIST:'/app-setting/feature/grid',
  DELETE_FEATURE:'/app-setting/feature',
  CREATE_FEATURE:'/app-setting/feature',

  //PARAMETER_ITEM
  FETCH_PARAMETER_ITEM_LIST:'/app-setting/parameter-item/grid',
  DELETE_PARAMETER_ITEM:'/app-setting/parameter-item',

  //PARAMETER
  FETCH_PARAMETER_LIST:'/app-setting/parameter/grid',
  DELETE_PARAMETER:'/app-setting/parameter',

  //ROLE
  FETCH_ROLE_LIST:'/app-setting/role/grid',
  DELETE_ROLE:'/app-setting/role',

  //TASK_SCHEDULE
  FETCH_TASK_SCHEDULE_LIST:'/app-setting/task-schedule/grid',
  DELETE_TASK_SCHEDULE:'/app-setting/task-schedule',

  //USER
  FETCH_USER_LIST:'/app-setting/user/grid',
  DELETE_USER:'/app-setting/user',
}

export { BASE_URL, LOGIN, APP_SETTING };
