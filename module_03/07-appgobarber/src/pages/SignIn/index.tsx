import React from 'react';
import { Image } from 'react-native';

import { Container, Title, Input } from './styles';

import logoImg from '../../assets/logo.png';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={logoImg} />
      <Title>Faça seu logon</Title>
      <Input placeholder="Cola mais" />
    </Container>
  );
};

export default SignIn;
