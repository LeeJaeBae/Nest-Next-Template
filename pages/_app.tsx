import './style.css';
import { FC } from 'react';
import type { AppProps /*, AppContext */ } from 'next/app';

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
