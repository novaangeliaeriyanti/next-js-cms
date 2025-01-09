import { QueryClient, QueryCache } from '@tanstack/react-query';

function handleError(error: any, query: any, queryClient: QueryClient) {
  if (query?.meta?.errorMessage) {
    // toast({
    //   variant: 'destructive',
    //   title: query.meta.errorMessage,
    //   description: error?.response?.data?.message ?? error?.message,
    //   action: query?.meta?.errorAction ? (
    //     <ToastAction
    //       altText='Coba lagi'
    //       onClick={() => {
    //         const queryKey = query.queryKey;
    //         if (queryKey) {
    //           queryClient.invalidateQueries(queryKey); // Invalidate and refetch the query
    //         }
    //       }}
    //     >
    //       Coba lagi
    //     </ToastAction>
    //   ) : undefined,
  // });
  console.log('error')
  }
}

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => handleError(error, query, queryClient),
  }),
  defaultOptions: {
    queries: {
      // With SSR, we usually want to set some default staleTime
      // above 0 to avoid refetching immediately on the client
      staleTime: 5 *60* 1000, //5 minutes
      // cacheTime: 1000 * 60 * 5, // Data akan disimpan dalam cache selama 5 menit (50000 milidetik) setelah query menjadi inactive

      // refetchInterval: 60 * 1000,
    },
  },
  
});
export default queryClient;
