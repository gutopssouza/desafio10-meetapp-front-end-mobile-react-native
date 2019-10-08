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

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Info = styled.View`
  margin-top: 10px;
`;

export const Date = styled.View`
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
`;

export const DateText = styled.Text`
  font-size: 14px;
  color: #999;
  margin-left: 5px;
`;

export const Locale = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
`;

export const LocaleText = styled.Text`
  font-size: 14px;
  color: #999;
  margin-left: 5px;
`;

export const Host = styled.View`
  margin-top: 5px;
  flex-direction: row;
  align-items: center;
`;

export const HostText = styled.Text`
  font-size: 14px;
  color: #999;
  margin-left: 5px;
`;

export const SubscribeButton = styled(Button)`
  margin-top: 15px;
`;
