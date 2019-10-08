import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerDay = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 30px;
`;

export const ButtonDayBack = styled(TouchableOpacity)``;
export const ButtonDayFoward = styled(TouchableOpacity)``;

export const Day = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  align-self: center;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;
