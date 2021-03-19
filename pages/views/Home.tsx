import { NextPage } from 'next';
import React from 'react';
import Head from 'next/head';

type Props = {
  title: string;
};

const Home: NextPage<Props> = ({ title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      test
    </div>
  );
};

Home.getInitialProps = (ctx): Props => {
  const { title } = ctx.query;
  return { title } as Props;
};

export default Home;
