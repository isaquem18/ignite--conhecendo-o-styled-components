import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { FontAwesome } from '@expo/vector-icons';
import { getStatusBarHeight, ifIphoneX } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray_200};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.purple_500};
  height: ${RFPercentage(33)}px;
  flex-direction: row;
  align-items: flex-start;
  ${ifIphoneX({
  paddingTop: `${getStatusBarHeight() + RFPercentage(4)}px`
}, {
  paddingTop: `${RFPercentage(4)}px`
})}
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
    paddingHorizontal: 24
  }
})`

  margin-top: -${RFPercentage(17)}px;
`;