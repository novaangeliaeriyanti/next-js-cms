import type {
    AxiosError,
    AxiosInstance as AxInstance,
    AxiosResponse,
    CreateAxiosDefaults,
    InternalAxiosRequestConfig,
  } from 'axios';
  import axios from 'axios';
  import Cookies from 'js-cookie';
  
//   import { toast } from '@/components/ui/use-toast';
  
//   import { BASE_API_URL } from '../constants/endpoint';
import { BASE_URL } from '../constants/endpoint';

  import {LOGIN } from '@/shared/constants/path'

  const  AxiosInstanceConfig = {
    timeout: 30000,
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
      'X-CLIENT-TYPE':'WEB_CMS',
      'X-CLIENT-VERSION': '20241118.093542'
    },
  };

  const AxiosInstance: AxInstance = axios.create(AxiosInstanceConfig);
  console.log('cookies', Cookies.get('accessToken'))
  AxiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      config.headers.Authorization = `Bearer ${Cookies.get('accessToken')}`
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );
  
  AxiosInstance.interceptors.response.use(
    function (response: AxiosResponse) {
      return response; // simply return the response
    },
    function (err) {
      console.log('error response', err)
      // const status = err.response ? err.response.status : null;
  
      // if (status === 401) {
      //   Cookies.remove('accessToken');
      //   window.location.href = LOGIN;
      //   // toast({
      //   //   variant: 'destructive',
      //   //   title: 'Session Anda Telah Berakhir',
      //   //   description: 'Silakan login kembali.',
      //   // });
      // }
  
      return Promise.reject(err);
    },
  );
  
  export default AxiosInstance;
  