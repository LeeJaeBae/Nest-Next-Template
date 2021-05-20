import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
// import Head from 'next/head';
import { Student } from '../../src/student';

type HomeProps = {
  data: Student[] | [];
};

const Home: NextPage<HomeProps> = ({ data }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const name = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleClick: MouseEventHandler = (e) => {
    if (name.current?.value !== '') {
      setLoading(true);
      axios.post('/', { name: name.current?.value }).then((v) => {
        router.push(`/love?name=${name.current?.value}`);
      });
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="container">
      <div className="input-container">
        <div>
          <input className="input" type="text" name="name" ref={name} />
        </div>
        <div>
          <input
            className="input"
            type="button"
            value="button"
            onClick={handleClick}
          />
        </div>
      </div>
      {!loading &&
        data.map((v: any) => {
          return (
            <div key={v.name}>
              {v.name}
              {v.id}
            </div>
          );
        })}
    </div>
  );
};

Home.getInitialProps = (ctx): HomeProps => {
  const { data } = ctx.query;
  return { data } as HomeProps;
};

export default Home;
