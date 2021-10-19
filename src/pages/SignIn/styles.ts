import styled from 'styled-components/native';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import FinanceSVG from '../../assets/finance.svg';
import AppleSVG from '../../assets/apple.svg';
import GoogleSVG from '../../assets/google.svg';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 70%;
  background-color: ${({theme}) => theme.colors.purple_500};

  justify-content: flex-end;
  align-items: center;
`;

export const FinanceSVGIcon = styled(FinanceSVG).attrs({
  width: RFValue(120),
  height: RFValue(68)
})`
  align-self: center;
  width: ${RFValue(400)}px;
`;

export const TitleWrapper = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.white};
  font-size: ${RFValue(30)}px;
  text-align: center;
  line-height: ${RFValue(40)}px;
  margin-top: ${RFValue(45)}px;
  width: ${RFPercentage(42)}px;
`;

export const SignInTitle = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-size: ${RFValue(16)}px;
  font-family: ${({theme}) => theme.fonts.regular};
  text-align: center;
  width: ${RFPercentage(29)}px;
  line-height: ${RFValue(24)}px;
  margin-top: ${RFPercentage(10)}px;
  margin-bottom: ${RFPercentage(8)}px;
`;

export const Footer = styled.View`
  background-color: ${({theme}) => theme.colors.orange_500};
  flex: 1;
`;

export const GoogleSVGIcon = styled(GoogleSVG).attrs({
  width: RFValue(24),
  height: RFValue(24)
})``;

export const AppleSVGIcon = styled(AppleSVG).attrs({
  width: RFValue(24),
  height: RFValue(24)
})``;

