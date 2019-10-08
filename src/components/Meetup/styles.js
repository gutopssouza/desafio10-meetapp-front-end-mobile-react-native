import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;

  border-radius: 4px;
  background: #fff;

  opacity: ${props => (props.past ? 0.6 : 1)};
`;

export const ContainerContent = styled.View`
  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Banner = styled.Image`
  height: 150px;
  width: 100%;
  border-radius: 4px;
`;

export const Title = styled.Text``;
export const Info = styled.View``;
export const Data = styled.Text``;
export const Locale = styled.Text``;
export const Host = styled.Text``;
export const SubscribeButton = styled(Button)``;
