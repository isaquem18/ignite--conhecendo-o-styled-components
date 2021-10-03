import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const StatusBarStyle = styled(StatusBar).attrs(({theme}) => ({
  backgroundColor: theme.colors.purple_500,
  translucent: true,
  barStyle: 'light-content'
}))``

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.gray_200};
`;

export const Header = styled.View`
  height: ${getStatusBarHeight() + RFValue(60)}px;
  background-color: ${({theme}) => theme.colors.purple_500};
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: ${RFValue(12)}px;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.white};
  font-size: ${RFValue(18)}px;
`;

interface CategoryProps {
  isActive: boolean;
  onPress: () => void;
}

export const Category = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8
})<CategoryProps>`
  background-color: ${({theme, isActive}) => isActive ? `${theme.colors.orange_500}50` : 'transparent'};
  width: 100%;
  padding: ${RFValue(15)}px;
  flex-direction: row;
  align-items: center;

`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: ${RFValue(16)}px;
`;

export const Name = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.gray_500};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
