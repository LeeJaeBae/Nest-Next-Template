import axios from 'axios';
import { NextPage } from 'next';
import React, { MouseEventHandler, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
// import Head from 'next/head';
import { Student } from '../../src/student';

type Props = {
  data: Student[] | [];
};

const Home: NextPage<Props> = ({ data }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const name = useRef<HTMLInputElement>(null);
  const handleClick: MouseEventHandler = (e) => {
    if (name.current?.value !== '') {
      setLoading(true);
      axios.post('/', { name: name.current?.value }).then((v) => {
        window.location.reload();
      });
    }
  };

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <Container>
      <InputContainer>
        <div>
          <Input type="text" name="name" ref={name} />
        </div>
        <div>
          <Input type="button" value="button" onClick={handleClick} />
        </div>
      </InputContainer>
      {!loading &&
        data.map((v) => {
          return (
            <div key={v.name}>
              {v.name}
              {v.id}
            </div>
          );
        })}
    </Container>
  );
};

Home.getInitialProps = (ctx): Props => {
  const { data } = ctx.query;
  return { data } as Props;
};

export default Home;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  text-align: center;
  align-items: center;
  position: relative;
`;

const Input = styled.input`
  height: 2rem;
  width: 10rem;
  border-radius: 1rem;
  position: relative;
`;

const InputContainer = styled.div`
  width: 12rem;
  height: 6rem;
  position: relative;
  left: calc(50% - 6rem);
  ::last-child {
    background-color: #00ff00;
  }
`;
