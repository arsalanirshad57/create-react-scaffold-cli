import React from 'react';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import toast from 'react-hot-toast';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const QueryProvider = ({ children }) => {
  const [queryCache] = React.useState(
    new QueryCache({
      onError: () => {},
    })
  );

  const [mutationCache] = React.useState(
    new MutationCache({
      onError: (error) => {
        const isAxiosError = error instanceof AxiosError;

        if (!isAxiosError) {
          return toast.error('Something went wrong.');
        }
        if (error.code === AxiosError.ERR_NETWORK) {
          return toast.error('Network Error');
        }
        if (error.status === 500) {
          return toast.error('Network Error');
        }
        const { response } = error;
        if (!response) {
          return toast.error('Something went wrong');
        }
        const { data } = response;
        if (!data) {
          return toast.error('Something went wrong');
        }
        const { message } = data;
        if (!message) {
          return toast.error('Something went wrong');
        }
        const isIterable = Array.isArray(message);
        if (!isIterable) {
          return toast.error(message);
        }
        for (let index = 0; index < message.length; index++) {
          const error = message[index];
          toast.error(error);
        }
      },
    })
  );

  const [client] = React.useState(
    new QueryClient({
      queryCache: queryCache,
      mutationCache: mutationCache,
      defaultOptions: {
        queries: {
          retry: false,
          refetchOnWindowFocus: false,
          refetchOnReconnect: false,
        },
        mutations: {
          retry: false,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};
