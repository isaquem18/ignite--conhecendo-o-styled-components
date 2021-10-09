import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

interface ContainerProps {
  color: string;
}

export const Container = styled.View<ContainerProps>`
  background-color: ${({theme}) => theme.colors.white} ;

  flex-direction: row;
  padding: ${RFValue(13)}px ${RFValue(24)}px;
  justify-content: space-between;

  border-left-width: 5px;
  border-left-color: ${({color}) => color};
  border-radius: 5px;

  margin-bottom: ${RFValue(10)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
`

export const Amount = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${RFValue(15)}px;
  color: ${({theme}) => theme.colors.blue_800}
`
