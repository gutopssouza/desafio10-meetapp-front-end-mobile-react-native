import React from 'react';

import {
  Container,
  Banner,
  Title,
  Info,
  Data,
  Locale,
  Host,
  SubscribeButton,
  ContainerContent,
} from './styles';

import logo from '~/assets/testebannermeetapp.jpg';

export default function Meetup() {
  return (
    <Container>
      <Banner source={logo} />
      <ContainerContent>
        <Title>Meetup de React Native</Title>
        <Info>
          <Data>7 de outubro, às 21h</Data>
          <Locale>Rua Paulo Bathke, 259</Locale>
          <Host>Organizador: Augusto Pacheco</Host>
        </Info>
      </ContainerContent>
      <SubscribeButton onPress={() => {}}>Realizar inscrição</SubscribeButton>
    </Container>
  );
}
