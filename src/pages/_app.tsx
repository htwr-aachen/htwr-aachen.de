import '../styles/global.css';

import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <Analytics />
  </>
);

export default MyApp;
