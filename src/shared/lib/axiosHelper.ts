import type { AxiosRequestConfig } from 'axios';

import AxiosInstance from '@/shared/api/axiosInstance';

function handleError(error: any) {
  if (error.response || error?.response?.status === 401 || error?.response?.status === 500) {
    console.error(
      'Error response:',
      error
    );
  } else if (error.request) {
    console.error('No response from server:', error.request);
    console.error('Error message:', error.message);
  } else if(error?.isAxiosError) {
    if (error?.code === 'ECONNABORTED') {
      console.error(
        'Error response:',
        error
      );
    }
  } else {
    console.error('Error:', error.message);
  }
  throw error;
}

async function getData({
  endpoint,
  config,
}: {
  endpoint: string;
  config?: AxiosRequestConfig<any>;
}): Promise<any> {
  try {
    const response = await AxiosInstance.get(endpoint, config);

    return response;
  } catch (error: any) {
    handleError(error);
    return error;
  }
}

async function postData({
  endpoint,
  data,
  config,
}: {
  endpoint: string;
  data: any;
  config?: AxiosRequestConfig<any>;
}) {
  try {
    const response = await AxiosInstance.post(endpoint, data, config);
    return response;
  } catch (error: any) {
    console.log('error', error);
    handleError(error);
    return error;
  }
}

async function exportDataPdf({
  endpoint,
  data,
  config = {},
}: {
  endpoint: string;
  data: any;
  config?: AxiosRequestConfig<any>;
}) {
  try {
    const responseConfig = {
      ...config,
      responseType: config.responseType || 'json',
    };

    const response = await AxiosInstance.post(endpoint, data, responseConfig);

    if (responseConfig.responseType === 'arraybuffer') {
      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      return pdfBlob;
    }

    return response.data;
  } catch (error: any) {
    handleError(error);
    throw error;
  }
}

async function exportDataExcel({
  endpoint,
  data,
  config = {},
}: {
  endpoint: string;
  data: any;
  config?: AxiosRequestConfig<any>;
}) {
  try {
    const responseConfig = {
      ...config,
      responseType: config.responseType || 'arraybuffer',
    };

    const response = await AxiosInstance.post(endpoint, data, responseConfig);

    if (responseConfig.responseType === 'arraybuffer') {
      const fileBlob = new Blob([response.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      return fileBlob;
    }

    return response.data;
  } catch (error: any) {
    handleError(error);
    throw error;
  }
}

async function exportDataCsv({
  endpoint,
  data,
  config = {},
}: {
  endpoint: string;
  data: any;
  config?: AxiosRequestConfig<any>;
}) {
  try {
    const responseConfig = {
      ...config,
      responseType: config.responseType || 'arraybuffer',
    };

    const response = await AxiosInstance.post(endpoint, data, responseConfig);

    if (responseConfig.responseType === 'arraybuffer') {
      const fileBlob = new Blob([response.data], { type: 'text/csv' });
      return fileBlob;
    }

    return response.data;
  } catch (error: any) {
    handleError(error);
    throw error;
  }
}

async function putData({
  endpoint,
  data,
  config,
}: {
  endpoint: string;
  data: any;
  config?: AxiosRequestConfig<any>;
}) {
  try {
    const response = await AxiosInstance.put(endpoint, data, config);
    return response;
  } catch (error: any) {
    handleError(error);
    return error;
  }
}

async function patchData({
  endpoint,
  data,
  config,
}: {
  endpoint: string;
  data: any;
  config?: AxiosRequestConfig<any>;
}) {
  try {
    const response = await AxiosInstance.patch(endpoint, data, config);
    return response;
  } catch (error: any) {
    handleError(error);
    return error;
  }
}

async function deleteData({
  endpoint,
  config,
}: {
  endpoint: string;
  config?: AxiosRequestConfig<any>;
}): Promise<any> {
  try {
    const response = await AxiosInstance.delete(endpoint, config);
    return response;
  } catch (error: any) {
    handleError(error);
    return error;
  }
}

export { deleteData, getData, patchData, postData, putData, exportDataPdf, exportDataExcel, exportDataCsv };
