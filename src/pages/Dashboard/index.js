import React, { useState, useMemo, useEffect } from 'react';
import { format, subDays, addDays, formatRelative, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

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

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [date, setDate] = useState(new Date());

  const [page, setPage] = useState(1);

  const actualDate = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadMeetups() {
      const queryDate = format(date, "yyyy'-'MM'-'dd", { locale: pt });
      const response = await api.get('meetups', {
        params: { date: queryDate, page },
      });

      const data = response.data.map(meetup => {
        const dateFormatted = formatRelative(
          parseISO(meetup.date),
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
      setMeetups(data);
      if (data) {
        // setPage(page + 1);
      }
    }
    loadMeetups();
  }, [date, page]);

  function handleDayBack() {
    setDate(subDays(date, 1));
    setPage(1);
    // setMeetups([]);
  }
  function handleDayFoward() {
    setDate(addDays(date, 1));
    setPage(1);
    // setMeetups([]);
  }
  return (
    <Background>
      <Header />
      <Container>
        <ContainerDay>
          <ButtonDayBack onPress={handleDayBack}>
            <Icon name="chevron-left" size={25} color="#FFF" />
          </ButtonDayBack>

          <Day>{actualDate}</Day>

          <ButtonDayFoward onPress={handleDayFoward}>
            <Icon name="chevron-right" size={25} color="#FFF" />
          </ButtonDayFoward>
        </ContainerDay>

        <List
          data={meetups}
          keyExtractor={item => String(item.id)}
          onEndReachedThreshold={0.2}
          renderItem={({ item }) => <Meetup data={item} />}
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
