import styled from 'styled-components/native';
import { TouchableOpacityProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const ButtonContainer = styled.TouchableOpacity.attrs<TouchableOpacityProps>({
    activeOpacity: 0.8
})` 
    background-color: ${({theme}) => theme.colors.orange_500};
    border: none;
    width: 100%;
    align-items: center;
    border-radius: 5px;
    height: ${RFValue(56)}px;
    justify-content: center;
`;

export const ButtonTitle = styled.Text`
    opacity: 1;
    color: ${({theme}) => theme.colors.white};
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.medium};
`; 