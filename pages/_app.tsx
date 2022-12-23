import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import '@styles/globals.css';
import 'normalize.css/normalize.css';

import useAuth from '@hooks/useAuth';
import { useEffect } from 'react';
import { onTokenChanged } from '@services/auth';

function MyApp ({ Component, pageProps }: AppProps<{ dehydratedState: unknown }>) {
  const { user, setToken } = useAuth();

  useEffect(() => {
    onTokenChanged((token) => {
      if (user) {
        setToken(token);
        console.log({ token123: token });
      }
    });
  }, []);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
