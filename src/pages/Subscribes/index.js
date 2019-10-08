import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import Header from '~/components/Header';
import Background from '~/components/Background';
import { Container, List } from './styles';

import Subscribe from '~/components/Subscribe';

export default function Subscribes() {
  const [subscribes, setSubscribes] = useState([]);

  useEffect(() => {
    async function loadSubscribes() {
      const response = await api.get('subscribes');

      const data = response.data.map(meetup => {
        const dateFormatted = formatRelative(
          parseISO(meetup.Meetup.date),
          new Date(),
          {
            locale: pt,
            addSuffix: true,
          }
        );
        return {
          ...meetup,
          dateFormatted,
        };
      });
      setSubscribes(data);
    }
    loadSubscribes();
  }, [subscribes]);

  async function handleUnsubscription(id) {
    try {
      await api.delete(`subscribes/${id}`);
      Alert.alert('Sucesso!', 'Sua inscrição foi cancelada');
    } catch (error) {
      Alert.alert('Erro!', `Houve um erro no cancelamento!`);
    }
  }

  return (
    <Background>
      <Header />
      <Container>
        <List
          data={subscribes}
          keyExtractor={item => String(item.id)}
          onEndReachedThreshold={0.2}
          renderItem={({ item }) => (
            <Subscribe
              onUnsubscribe={() => handleUnsubscription(item.id)}
              data={item}
            />
          )}
        />
      </Container>
    </Background>
  );
}

Subscribes.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="local-offer" size={20} color={tintColor} />
  ),
};
