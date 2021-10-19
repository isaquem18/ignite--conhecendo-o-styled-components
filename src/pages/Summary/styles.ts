import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { FlatList, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';

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

export const Content = styled.View`
    flex: 1;
`;

export const ChartContent = styled.View`
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: ${RFPercentage(1)}px 0%;
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
    percentNotFormatted: number; 
    amountNotFormatted: number;
    percent: string;
  }

export const CategoryList = styled(
    FlatList as new () => FlatList<categoryTotalProps>
).attrs({
    contentContainerStyle: {
        paddingBottom: 30,
        paddingHorizontal: RFPercentage(3)
    }
})``;


export const MonthSelect = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: ${RFValue(41)}px;
`;

export const MonthSelectButton = styled(BorderlessButton)``;

export const Month = styled.Text`
    font-size: ${RFValue(20)}px;
    color: ${({theme}) => theme.colors.black};
    font-family: ${({theme}) => theme.fonts.regular};
    line-height: 30px;
    text-align: center;
`;

export const MonthSelectIcon = styled(Feather)`
    font-size: ${RFValue(24)}px;
`;

export const LoaderContainer = styled.View`
    flex: 1;
    width: 100%;

    align-self: center;
    justify-content: center;
`;

export const Loader = styled.ActivityIndicator.attrs(({theme}) => ({
    color: theme.colors.purple_500,
    size: Platform.OS === 'ios' ? 'large' : RFValue(30)
}))``;

export const NotFound = styled.Text`
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.purple_500};
    font-size: ${RFValue(16)}px;
    position: absolute;
    top: 50%; 
    align-self: center;

`;