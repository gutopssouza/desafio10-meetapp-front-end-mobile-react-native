import React from 'react';
import { Container, Logo } from './styles';
import logo from '~/assets/M.png';

export default function Header() {
  return (
    <Container>
      <Logo source={logo} />
    </Container>
  );
}
