import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { FontAwesome } from '@expo/vector-icons';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  padding: 0 ${RFPercentage(4)}px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin: ${RFPercentage(5)}px ${RFPercentage(4)}px;
  font-size: ${RFValue(18)}px;
`;
