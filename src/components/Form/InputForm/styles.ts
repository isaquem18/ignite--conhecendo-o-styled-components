import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  
`;

export const Error = styled.Text`
  color: ${({theme}) => theme.colors.red_500};
  font-size: ${RFValue(12)}px;
  font-family: ${({theme}) => theme.fonts.bold};
`;