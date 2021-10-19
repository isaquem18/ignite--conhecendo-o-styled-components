import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
 
export const Container = styled(RectButton)`
  background-color: ${({theme}) => theme.colors.white};
  flex-direction: row;
  border-radius: 5px;
  margin: -${RFPercentage(4)}px ${RFPercentage(4)}px ${RFPercentage(7)}px ${RFPercentage(4)}px;
`;

export const ButtonTitleBox = styled.View`
  flex: 1;
  height: 100%;
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  color: ${({theme}) => theme.colors.blue_800};
  font-family: ${({theme}) => theme.fonts.medium};
  font-size: ${RFValue(14)}px; 
  padding: ${RFValue(18)}px 0;
`;

export const IconBox = styled.View`
  border-right-color: ${({theme}) => theme.colors.gray_500}20;
  border-right-width: 2px;
  padding: 0 16px;
  justify-content: center;
`;