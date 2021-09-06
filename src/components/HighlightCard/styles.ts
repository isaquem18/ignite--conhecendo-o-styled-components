import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import theme from '../../global/styles/theme';

interface BgProps {
  bg: string;
}

interface TextProps {
  name: string;
}


export const Container = styled.View<BgProps>`
  background-color: ${({ theme, bg }) => bg === 'white' ? theme.colors.white : theme.colors.orange_500};
  width: ${RFPercentage(45)}px;
  height: ${RFPercentage(28)}px;
  border-radius: 10px;
  padding: ${RFPercentage(2)}px ${RFPercentage(2.5)}px;
  padding-bottom: ${RFValue(43)}px;
  margin-right: ${RFValue(12)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${RFPercentage(4)}px;
`;

export const Title = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, name }) => name === 'dollar-sign' ? theme.colors.white : theme.colors.blue_800}
`;

export const HeaderIcon = styled(Feather).attrs({})`
  font-size: ${RFPercentage(5)}px;

  color: ${({ theme, name }) => {
    if (name === 'arrow-up-circle') {
      return theme.colors.green_500;
    } else if (name === 'arrow-down-circle') {
      return theme.colors.red_500;
    } else {
      return theme.colors.white;
    }
  }};

`;

// color: ${({ theme, title }) => {
//   if (title === 'entradas') {
//     return theme.colors.green_500
//   } else {
//     return theme.colors.red_500
//   }
// }}; 

export const Footer = styled.View``;

export const Amount = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFPercentage(4.6)}px;
  color: ${({ theme, name }) => name === 'dollar-sign' ? theme.colors.white : theme.colors.blue_800}
`;

export const LastTransactionDate = styled.Text<TextProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, name }) => name === 'dollar-sign' ? theme.colors.white : theme.colors.gray_500}
`;