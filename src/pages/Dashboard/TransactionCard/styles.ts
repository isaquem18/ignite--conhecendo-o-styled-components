import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${RFValue(17)}px ${RFValue(24)}px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.blue_800};
  font-family: ${({ theme }) => theme.fonts.medium};
  margin-bottom: ${RFValue(2)}px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

`;

type AmountProps = {
  type: 'up' | 'down';
};

export const Amount = styled.Text<AmountProps>`
  color: ${({ theme, type }) => type === 'up' ? theme.colors.green_500 : theme.colors.red_500};
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  margin-bottom: ${RFValue(19)}px;
`;

export const Footer = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CategoryIcon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.gray_500};
  margin-right: ${RFValue(12)}px;
`;

export const CategoryText = styled.Text`
  color: ${({ theme }) => theme.colors.gray_500};
`;

export const Date = styled.Text`
  color: ${({ theme }) => theme.colors.gray_500};
`;

