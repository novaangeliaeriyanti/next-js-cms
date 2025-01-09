import { StateCreator, create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';
import Cookies from 'js-cookie';


type User = {
  user: any;
  access_token: string;
  refresh_token?: string;
};

type AuthSlice = {
  user: any;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (user: User) => void;
  logout: () => void;
  stopLoading: () => void;
};

const initialUserState = {
  user: null,
  access_token: '',
  refresh_token: '',

};

const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  user: initialUserState,
  isAuthenticated: false,
  isLoading: true,
  login: (data: User) => {
    Cookies.set('accessToken', data?.access_token);
    set((state) => ({ ...state, isAuthenticated: true, user: {...data?.user, access_token: data?.access_token, refresh_token: data?.refresh_token} }));
  },
  logout: () => {
    Cookies.remove('accessToken');
    set((state) => ({ ...state, isAuthenticated: false, user: initialUserState }));
  },
  stopLoading: () => {
    set((state) => ({ ...state, isLoading: false }));
  },
});


export default createAuthSlice;
export type { AuthSlice, User };
