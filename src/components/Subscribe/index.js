import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Banner,
  Title,
  Info,
  Date,
  DateText,
  Locale,
  LocaleText,
  Host,
  HostText,
  SubscribeButton,
  ContainerContent,
} from './styles';

export default function Subscribe({ data, onUnsubscribe }) {
  return (
    <Container>
      <Banner
        source={{
          uri: data.Meetup.banner
            ? data.Meetup.banner.url
            : `https://api.adorable.io/avatar/50/${data.Meetup.title}`,
        }}
      />
      <ContainerContent>
        <Title>{data.Meetup.title}</Title>
        <Info>
          <Date>
            <Icon name="event" size={14} color="#999" />
            <DateText>{data.dateFormatted}</DateText>
          </Date>
          <Locale>
            <Icon name="location-on" size={14} color="#999" />
            <LocaleText>{data.Meetup.location}</LocaleText>
          </Locale>
          <Host>
            <Icon name="person" size={14} color="#999" />
            <HostText>{`Organizador: ${data.Meetup.User.name}`}</HostText>
          </Host>
        </Info>
        {!data.Meetup.past && (
          <SubscribeButton onPress={onUnsubscribe}>
            Cancelar inscrição
          </SubscribeButton>
        )}
      </ContainerContent>
    </Container>
  );
}
