import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList } from 'react-native';

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.gray_200};
    flex: 1;
`

export const Header = styled.View`
    background-color: ${({theme}) => theme.colors.purple_500};
    width: 100%;
    height: ${getStatusBarHeight() + RFValue(60)}px;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: ${RFValue(12)}px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;

`;

interface categoryTotalProps {
    amountTotal: string;
    name: string;
    color: string;
  }

export const CategoryList = styled(
    FlatList as new () => FlatList<categoryTotalProps>
)`
    padding: ${RFValue(24)}px;
`;