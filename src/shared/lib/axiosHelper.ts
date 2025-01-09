import type { AxiosRequestConfig } from 'axios';

import AxiosInstance from '@/shared/api/axiosInstance';

function handleError(error: any) {
  // Handle error
  if (error.response) {
    // Server merespons dengan status selain 2xx
    console.error(
      'Error response:',
      error
    );
  } else if (error.request) {
    // Tidak ada respons dari server
    console.error('No response from server:', error.request);
    console.error('Error message:', error.message);
  } else {
    // Error lainnya
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

export { deleteData, getData, patchData, postData, putData };
