import styled, { css } from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { FontAwesome } from '@expo/vector-icons';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';

import {
  ActivityIndicator,
  Platform
} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_200};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.purple_500};
  height: ${RFPercentage(30)}px;
  flex-direction: row;
  align-items: flex-start;
  padding-top: ${getStatusBarHeight()}px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1; 

`;

export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 20px;
  flex-direction: row;
  align-items: center;
  margin-top: ${RFPercentage(3.5)}px;
`;

export const Avatar = styled.Image`
  width: ${RFValue(55)}px;
  height: ${RFValue(55)}px;
  border-radius: 10px;
`;

export const User = styled.View`
  margin-left: 17px;
  
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFPercentage(2.3)}px; 
`;

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFPercentage(2.3)}px; 
`;

export const LogoutIcon = styled(FontAwesome)`
  color: ${({ theme }) => theme.colors.orange_500};
  font-size: ${RFPercentage(3.5)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 24,
  }
})`

  margin-top: -${Platform.OS === 'ios' ? RFPercentage(12) : RFPercentage(9)}px;
  width: 100%;
  max-height: ${RFPercentage(24)}px;
`;

export const InitLoader = styled(ActivityIndicator).attrs(props => ({
  color: props.theme.colors.purple_500,
  size: Platform.OS === 'ios' ? 'large' : 30
}))`
  font-size: ${RFPercentage(8)}px;
  align-self: center;
  margin-top: 50%;
`;