import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  padding: 0 ${RFPercentage(4)}px;
  flex: 1;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin: 0 ${RFPercentage(4)}px ${RFPercentage(2)}px ${RFPercentage(4)}px;
  font-size: ${RFValue(18)}px;
`;

export const NotFoundItems = styled.Text`
  color: ${({ theme }) => theme.colors.red_500};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin: ${RFPercentage(4)}px ${RFPercentage(4)}px;
  font-size: ${RFValue(14)}px;
  margin-top: ${RFPercentage(4)}px;
  align-self: center;
`;