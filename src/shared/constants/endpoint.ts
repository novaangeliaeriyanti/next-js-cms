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
  FETCH_CLIENT_APP_VERSION_BY_ID: `/app-setting/client-app-version`,
  UPDATE_CLIENT_APP_VERSION: `/app-setting/client-app-version`,

  //ENTITY
  FETCH_ENTITY_LIST:'/app-setting/entity/grid',
  DELETE_ENTITY:'/app-setting/entity',
  CREATE_ENTITY:'/app-setting/entity',
  FETCH_ENTITY_BY_ID: `/app-setting/entity`,
  UPDATE_ENTITY: `/app-setting/entity`,

  //FEATURE
  FETCH_FEATURE_LIST:'/app-setting/feature/grid',
  DELETE_FEATURE:'/app-setting/feature',
  CREATE_FEATURE:'/app-setting/feature',
  FETCH_PARENT_FEATURE:'/app-setting/feature/lookup',
  FETCH_FEATURE_BY_ID: `/app-setting/feature`,
  UPDATE_FEATURE: `/app-setting/feature`,

  //PARAMETER_ITEM
  FETCH_PARAMETER_ITEM_LIST:'/app-setting/parameter-item/grid',
  DELETE_PARAMETER_ITEM:'/app-setting/parameter-item',
  CREATE_PARAMETER_ITEM:'/app-setting/parameter-item',
  FETCH_PARAMETER:'/app-setting/parameter-item/lookup',
  FETCH_PARAMETER_ITEM_BY_ID: `/app-setting/parameter-item`,
  UPDATE_PARAMETER_ITEM: `/app-setting/parameter-item`,

  //PARAMETER
  FETCH_PARAMETER_LIST:'/app-setting/parameter/grid',
  DELETE_PARAMETER:'/app-setting/parameter',
  CREATE_PARAMETER:'/app-setting/parameter',
  FETCH_PARAMETER_BY_ID: `/app-setting/parameter`,
  UPDATE_PARAMETER: `/app-setting/parameter`,

  //ROLE
  FETCH_ROLE_LIST:'/app-setting/role/grid',
  DELETE_ROLE:'/app-setting/role',
  CREATE_ROLE:'/app-setting/role',
  FETCH_ROLE_BY_ID: `/app-setting/role`,
  UPDATE_ROLE: `/app-setting/role`,

  //TASK_SCHEDULE
  FETCH_TASK_SCHEDULE_LIST:'/app-setting/task-schedule/grid',
  DELETE_TASK_SCHEDULE:'/app-setting/task-schedule',
  CREATE_TASK_SCHEDULE:'/app-setting/task-schedule',
  FETCH_TASK_SCHEDULE_BY_ID: `/app-setting/task-schedule`,
  UPDATE_TASK_SCHEDULE: `/app-setting/task-schedule`,

  //USER
  FETCH_USER_LIST:'/app-setting/user/grid',
  DELETE_USER:'/app-setting/user',
  CREATE_USER:'/app-setting/user',
  FETCH_USER_BY_ID: `/app-setting/user`,
  UPDATE_USER: `/app-setting/user`,

  //EMPLOYEE
  FETCH_EMPLOYEE_LIST: "/master-data/employee/paging"
}

const MASTER_DATA = {
  //COMPANY
  FETCH_COMPANY_LIST:'/master-data/company/paging',
  FETCH_COMPANY_BY_ID: `/master-data/company`,
  CREATE_COMPANY: `/master-data/company`,
  UPDATE_COMPANY: `/master-data/company`,
  DELETE_COMPANY: `/master-data/company`,

  //EMPLOYEE
  FETCH_EMPLOYEE_LIST:'/master-data/employee/paging',
  FETCH_EMPLOYEE_BY_ID: `/master-data/employee`,
  CREATE_EMPLOYEE: `/master-data/employee`,
  UPDATE_EMPLOYEE: `/master-data/employee`,
  DELETE_EMPLOYEE: `/master-data/employee`,
  FETCH_DIVISION_LIST:'/master-data/employee/lookup'
}

export { BASE_URL, LOGIN, APP_SETTING, MASTER_DATA };
