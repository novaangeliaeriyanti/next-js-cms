import "@/shared/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from 'next/font/google';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import queryClient from '@/shared/lib/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
  style: ['normal', 'italic'],
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className={roboto.variable}>
        <Component {...pageProps} />
        <Toaster />
      </div>
    </QueryClientProvider>
  )
}
