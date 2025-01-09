import { LOGIN } from '@/shared/constants/endpoint';
import { postData } from '@/shared/lib/axiosHelper';

export type LoginInputType = {
  user_name: string;
  password: string;
};

const postLogin = async (data: LoginInputType) => {
  const dataLogin = {
    ...data,
    "ip_address": "111.95.56.81",
    "latitude": -6.219399929046631,
    "longitude": 106.66780090332031,
    "device_location": "{}",
    "device_info": "{}"
  }
  const res = await postData({
    endpoint: LOGIN, 
    data: dataLogin}
  );

  return res?.data;
};

export { postLogin };
