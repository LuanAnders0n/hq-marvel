import React from 'react';
import Hqs from '../../Components/Hqs';
import NavBar from '../../Components/NavBar';
import { Container } from './styled';

const Home = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <Hqs />
      </Container>
    </div>
  );
};

export default Home;
