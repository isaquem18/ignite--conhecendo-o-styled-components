import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { TouchableOpacityProps } from 'react-native';

type Props = TouchableOpacityProps;


export const Container = styled.TouchableOpacity.attrs<Props>({
  activeOpacity: 0.8
})`
  background-color: red;
  background-color: ${({theme}) => theme.colors.white};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: ${RFValue(18)}px ${RFValue(16)}px;
  border-radius: 5px;
  margin-top: ${RFValue(16)}px;
`;

export const Category = styled.Text`
  font-size: ${RFValue(16)}px;
  color: ${({theme}) => theme.colors.gray_500};
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const Icon  = styled(Feather)`
  color: ${({theme}) => theme.colors.gray_500};
  font-size: ${RFValue(16)}px;
`;