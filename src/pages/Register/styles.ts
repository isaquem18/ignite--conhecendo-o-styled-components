import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    background-color: ${({theme}) => theme.colors.gray_200};
    flex: 1;
`

export const Header = styled.View`
    background-color: ${({theme}) => theme.colors.purple_500};
    width: 100%;
    height: ${RFValue(113)}px;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: ${RFValue(19)}px;
`;

export const Title = styled.Text`
    color: ${({theme}) => theme.colors.white};
    font-family: ${({theme}) => theme.fonts.regular};
    font-size: ${RFValue(18)}px;

`;

export const Form = styled.View`
    flex: 1;
    padding: 24px;
    justify-content: space-between;
`;

export const Fields = styled.View`
    width: 100%;

`;