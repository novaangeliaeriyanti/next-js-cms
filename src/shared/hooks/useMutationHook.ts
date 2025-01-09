import { MutationFunction, UseMutationOptions, useMutation } from '@tanstack/react-query';

type UseMutationHookType = {
  api: MutationFunction<unknown, any>;
  options?: Omit<
    UseMutationOptions<unknown, unknown, unknown, unknown>,
    'mutationFn'
  >;
};

const useMutationHook = ({ api, options }: UseMutationHookType) => {
  const mutationQuery = useMutation({
    mutationFn: api,
    ...options,
  });

  return mutationQuery;
};

export default useMutationHook;
