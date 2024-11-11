import "@/styles/globals.css";
import type {AppProps} from "next/app";
import {Toaster} from "@/components/ui/toaster";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useState} from "react";
import {SpeedInsights} from "@vercel/speed-insights/next";
import {Analytics} from "@vercel/analytics/react";

const fiveMinutes = 1000 * 60 * 5;

// eslint-disable-next-line import/no-default-export
export default function App({Component, pageProps}: AppProps) {
  const [queryClient] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          staleTime: fiveMinutes,
          retry: false,
        },
      },
    });
  });

  return <>
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
      <Toaster/>
      <SpeedInsights/>
      <Analytics/>
    </QueryClientProvider>
  </>;
}
