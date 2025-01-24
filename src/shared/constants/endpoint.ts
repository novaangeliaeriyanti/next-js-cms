const BASE_URL: string = process.env.NEXT_PUBLIC_API_URL || '';

const LOGIN = '/authentication/session';
const SESSION_RENEW = '/authentication/session/renew';
const APP_SETTING = {
  FETCH_ACCESS_LIST:'/app-setting/access/paging',
  FETCH_ACCESS_BY_ID: `/app-setting/access`,
  CREATE_ACCESS: `/app-setting/access`,
  UPDATE_ACCESS: `/app-setting/access`,
  DELETE_ACCESS: `/app-setting/access`,
  EXPORT_PDF_ACCESS: `/app-setting/access/export/pdf`,
  EXPORT_EXCEL_ACCESS: `app-setting/access/export/xlsx`,
  EXPORT_CSV_ACCESS: `app-setting/access/export/csv`,

  //CLIENT APP VERSION
  FETCH_CLIENT_APP_VERSION_LIST:'/app-setting/client-app-version/grid',
  DELETE_CLIENT_APP_VERSION:'/app-setting/client-app-version',
  CREATE_CLIENT_APP_VERSION:'/app-setting/client-app-version',
  FETCH_CLIENT_APP_TYPE:'/app-setting/client-app-version/lookup',
  FETCH_CLIENT_APP_VERSION_BY_ID: `/app-setting/client-app-version`,
  UPDATE_CLIENT_APP_VERSION: `/app-setting/client-app-version`,
  EXPORT_PDF_CLIENT_APP_VERSION: `/app-setting/client-app-version/export/pdf`,
  EXPORT_EXCEL_CLIENT_APP_VERSION: `app-setting/client-app-version/export/xlsx`,
  EXPORT_CSV_CLIENT_APP_VERSION: `app-setting/client-app-version/export/csv`,

  //ENTITY
  FETCH_ENTITY_LIST:'/app-setting/entity/grid',
  DELETE_ENTITY:'/app-setting/entity',
  CREATE_ENTITY:'/app-setting/entity',
  FETCH_ENTITY_BY_ID: `/app-setting/entity`,
  UPDATE_ENTITY: `/app-setting/entity`,
  EXPORT_PDF_ENTITY: `/app-setting/entity/export/pdf`,
  EXPORT_EXCEL_ENTITY: `app-setting/entity/export/xlsx`,
  EXPORT_CSV_ENTITY: `app-setting/entity/export/csv`,

  //FEATURE
  FETCH_FEATURE_LIST:'/app-setting/feature/grid',
  DELETE_FEATURE:'/app-setting/feature',
  CREATE_FEATURE:'/app-setting/feature',
  FETCH_PARENT_FEATURE:'/app-setting/feature/lookup',
  FETCH_FEATURE_BY_ID: `/app-setting/feature`,
  UPDATE_FEATURE: `/app-setting/feature`,
  EXPORT_PDF_FEATURE: `/app-setting/feature/export/pdf`,
  EXPORT_EXCEL_FEATURE: `app-setting/feature/export/xlsx`,
  EXPORT_CSV_FEATURE: `app-setting/feature/export/csv`,

  //PARAMETER_ITEM
  FETCH_PARAMETER_ITEM_LIST:'/app-setting/parameter-item/grid',
  DELETE_PARAMETER_ITEM:'/app-setting/parameter-item',
  CREATE_PARAMETER_ITEM:'/app-setting/parameter-item',
  FETCH_PARAMETER:'/app-setting/parameter-item/lookup',
  FETCH_PARAMETER_ITEM_BY_ID: `/app-setting/parameter-item`,
  UPDATE_PARAMETER_ITEM: `/app-setting/parameter-item`,
  EXPORT_PDF_PARAMETER_ITEM: `/app-setting/parameter-item/export/pdf`,
  EXPORT_EXCEL_PARAMETER_ITEM: `app-setting/parameter-item/export/xlsx`,
  EXPORT_CSV_PARAMETER_ITEM: `app-setting/parameter-item/export/csv`,

  //PARAMETER
  FETCH_PARAMETER_LIST:'/app-setting/parameter/grid',
  DELETE_PARAMETER:'/app-setting/parameter',
  CREATE_PARAMETER:'/app-setting/parameter',
  FETCH_PARAMETER_BY_ID: `/app-setting/parameter`,
  UPDATE_PARAMETER: `/app-setting/parameter`,
  EXPORT_PDF_PARAMETER: `/app-setting/parameter/export/pdf`,
  EXPORT_EXCEL_PAREMETER: `app-setting/parameter/export/xlsx`,
  EXPORT_CSV_PARAMETER: `app-setting/paremeter/export/csv`,

  //ROLE
  FETCH_ROLE_LIST:'/app-setting/role/grid',
  DELETE_ROLE:'/app-setting/role',
  CREATE_ROLE:'/app-setting/role',
  FETCH_ROLE_BY_ID: `/app-setting/role`,
  UPDATE_ROLE: `/app-setting/role`,
  EXPORT_PDF_ROLE: `/app-setting/role/export/pdf`,
  EXPORT_EXCEL_ROLE: `app-setting/role/export/xlsx`,
  EXPORT_CSV_ROLE: `app-setting/role/export/csv`,

  //TASK_SCHEDULE
  FETCH_TASK_SCHEDULE_LIST:'/app-setting/task-schedule/grid',
  DELETE_TASK_SCHEDULE:'/app-setting/task-schedule',
  CREATE_TASK_SCHEDULE:'/app-setting/task-schedule',
  FETCH_TASK_SCHEDULE_BY_ID: `/app-setting/task-schedule`,
  UPDATE_TASK_SCHEDULE: `/app-setting/task-schedule`,
  EXPORT_PDF_TASK_SCHEDULE: `/app-setting/task-schedule/export/pdf`,
  EXPORT_EXCEL_TASK_SCHEDULE: `app-setting/tas-schedule/export/xlsx`,
  EXPORT_CSV_TASK_SCHEDULE: `app-setting/task-schedule/export/csv`,

  //USER
  FETCH_USER_LIST:'/app-setting/user/grid',
  DELETE_USER:'/app-setting/user',
  CREATE_USER:'/app-setting/user',
  FETCH_USER_BY_ID: `/app-setting/user`,
  UPDATE_USER: `/app-setting/user`,
  EXPORT_PDF_USER: `/app-setting/user/export/pdf`,
  EXPORT_EXCEL_USER: `app-setting/user/export/xlsx`,
  EXPORT_CSV_USER: `app-setting/user/export/csv`,

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
  EXPORT_PDF_COMPANY: `/master-data/company/export/pdf`,
  EXPORT_EXCEL_COMPANY: `master-data/company/export/xlsx`,
  EXPORT_CSV_COMPANY: `master-data/company/export/csv`,

  //EMPLOYEE
  FETCH_EMPLOYEE_LIST:'/master-data/employee/paging',
  FETCH_EMPLOYEE_BY_ID: `/master-data/employee`,
  CREATE_EMPLOYEE: `/master-data/employee`,
  UPDATE_EMPLOYEE: `/master-data/employee`,
  DELETE_EMPLOYEE: `/master-data/employee`,
  FETCH_DIVISION_LIST:'/master-data/employee/lookup',
  UPLOAD_EMPLOYEE_IMAGE:'/upload/image',
  EXPORT_PDF_EMPLOYEE: `/master-data/employee/export/pdf`,
  EXPORT_EXCEL_EMPLOYEE: `master-data/employee/export/xlsx`,
  EXPORT_CSV_EMPLOYEE: `master-data/employee/export/csv`,
  UPLOAD_EMPLOYEE_PHOTO:`/master-data/employee/upload/employee-photo`
}

export { BASE_URL, LOGIN, APP_SETTING, MASTER_DATA, SESSION_RENEW };
