import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider, Hydrate } from '@tanstack/react-query';
import '@styles/globals.css';
import 'normalize.css/normalize.css';

function MyApp ({ Component, pageProps }: AppProps) {
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
