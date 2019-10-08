import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Background from '~/components/Background';
import {
  Container,
  ContainerDay,
  ButtonDayBack,
  ButtonDayFoward,
  Day,
  List,
} from './styles';

import Meetup from '~/components/Meetup';

const data = [1, 2, 3, 4, 5];

export default function Dashboard() {
  return (
    <Background>
      <Header />
      <Container>
        <ContainerDay>
          <ButtonDayBack onPress={() => {}}>
            <Icon name="chevron-left" size={25} color="#FFF" />
          </ButtonDayBack>

          <Day>7 de outubro</Day>

          <ButtonDayFoward onPress={() => {}}>
            <Icon name="chevron-right" size={25} color="#FFF" />
          </ButtonDayFoward>
        </ContainerDay>

        <List
          data={data}
          keyExtractor={item => String(item.id)}
          onEndReachedThreshold={0.2}
          renderItem={({ item }) => (
            <Meetup onSubscribe={() => {}} data={item} />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="format-list-bulleted" size={20} color={tintColor} />
  ),
};
