import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize'; 
import {
    TextInput
} from 'react-native';

export const Container = styled(TextInput).attrs({
    placeholderTextColor: "#969CB2"
})`
    padding: 16px 18px;
    width: 100%;
    font-size: ${RFValue(14)}px;
    background-color: ${({theme}) => theme.colors.white};
    border-radius: 5px;
    margin-bottom: 8px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.gray_800};
`;