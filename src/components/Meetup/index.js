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

export default function Meetup({ data, onSubscribe }) {
  return (
    <Container>
      <Banner
        source={{
          uri: data.banner
            ? data.banner.url
            : `https://api.adorable.io/avatar/50/${data.provider.name}`,
        }}
      />
      <ContainerContent>
        <Title>{data.title}</Title>
        <Info>
          <Date>
            <Icon name="event" size={14} color="#999" />
            <DateText>{data.dateFormatted}</DateText>
          </Date>
          <Locale>
            <Icon name="location-on" size={14} color="#999" />
            <LocaleText>{data.location}</LocaleText>
          </Locale>
          <Host>
            <Icon name="person" size={14} color="#999" />
            <HostText>{`Organizador: ${data.User.name}`}</HostText>
          </Host>
        </Info>
        {!data.past && (
          <SubscribeButton onPress={onSubscribe}>
            Realizar inscrição
          </SubscribeButton>
        )}
      </ContainerContent>
    </Container>
  );
}
