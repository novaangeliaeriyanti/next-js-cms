import type {
  AxiosError,
  AxiosInstance as AxInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import axios from 'axios';
import Cookies from 'js-cookie';

import { toast } from '@/components/ui/use-toast';
import { BASE_URL, SESSION_RENEW } from '../constants/endpoint';
import { LOGIN } from '@/shared/constants/path';
import useStore from '../store/useStore';
import { postData } from '../lib/axiosHelper';

interface CustomAxiosRequestConfig extends InternalAxiosRequestConfig {
  _retryCount?: number;
}

const AxInstanceConfig = {
  timeout: 30000,
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-CLIENT-TYPE': 'WEB_CMS',
    'X-CLIENT-VERSION': '20241118.093542',
  },
};

const AxiosInstance: AxInstance = axios.create(AxInstanceConfig);

AxiosInstance.interceptors.request.use(
  (config: CustomAxiosRequestConfig) => {
    config.headers.Authorization = `Bearer ${Cookies.get('accessToken')}`;
    if (!config._retryCount) {
      config._retryCount = 0;
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

AxiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response, 
  async (err: AxiosError) => {
    const originalRequest = err.config as CustomAxiosRequestConfig;
    const { login, logout } = useStore.getState();

    if (err.response?.status === 401 && originalRequest._retryCount !== undefined && originalRequest._retryCount < 3) {
      originalRequest._retryCount += 1;

      try {
        const value = localStorage.getItem('user');
        const user = value ? JSON.parse(value) : null;
        const data = {
          access_token: user?.state?.user?.access_token,
          refresh_token: user?.state?.user.refresh_token,
        };

        const res = await postData({
          endpoint: SESSION_RENEW,
          data: data,
        });

        if (res?.status === 200) {
          login(res?.data?.data);
          originalRequest.headers.Authorization = `Bearer ${Cookies.get('accessToken')}`;
          return AxiosInstance(originalRequest);
        } else {
          toast({
            variant: 'destructive',
            title: 'Gagal Memperbarui Sesi',
            description: 'Gagal memperbarui sesi Anda. Silakan coba lagi.',
          });
        }
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Gagal Memperbarui Sesi',
          description: 'Silakan login kembali.',
        });
        logout();
        Cookies.remove('accessToken');
        window.location.href = LOGIN;
      }
    }

    return Promise.reject(err);
  }
);

export default AxiosInstance;
