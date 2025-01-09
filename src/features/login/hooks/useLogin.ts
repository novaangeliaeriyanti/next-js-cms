// type
import { LoginInputType, postLogin } from '@/shared/api/mutations/auth';
import useMutationHook from '@/shared/hooks/useMutationHook';
import useStore from '@/shared/store/useStore';

const usePostLogin = () => {
  const { login } = useStore();
  const mutationQuery = useMutationHook({
    api: postLogin,
    options: {
      onSuccess: (data: any) => {
        console.log('🚀 ~ usePostLogin ~ data:', data);
        if (data?.meta?.is_success) {
          login(data?.data)
        }
      },
      onError: (err: any) => {
      },
    },
  });

  const handleOnSubmit = async (data: LoginInputType) => {
    mutationQuery.mutate(data);
  };

  return {
    mutationQuery,
    handleOnSubmit,
  };
};

export default usePostLogin;
