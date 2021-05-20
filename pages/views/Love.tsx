import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
// import Head from 'next/head';
import { Student } from '../../src/student';

type LoveProps = {
  data: Student[] | [];
  name: string;
};

const Love: NextPage<LoveProps> = ({ data, name }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const first = useRef<HTMLInputElement>(null);
  const second = useRef<HTMLInputElement>(null);
  const third = useRef<HTMLInputElement>(null);
  const router = useRouter();
  const handleClick: MouseEventHandler = (e) => {
    console.log(
      first.current?.value,
      second.current?.value,
      third.current?.value,
    );
    if (name !== '') {
      setLoading(true);
      axios
        .post('/love', {
          name: name,
          first: first.current?.value,
          second: second.current?.value,
          third: third.current?.value,
        })
        .then((v) => {
          router.push(`/hate?name=${name}`);
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
          <input className="input" type="text" name="first" ref={first} />
          <input className="input" type="text" name="second" ref={second} />
          <input className="input" type="text" name="third" ref={third} />
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
      {/* {!loading &&
        data.map((v: any) => {
          return (
            <div key={v.name}>
              {v.name}
              {v.id}
            </div>
          );
        })} */}
    </div>
  );
};

Love.getInitialProps = (ctx): LoveProps => {
  const { data, name } = ctx.query;

  return { data, name } as LoveProps;
};

export default Love;
