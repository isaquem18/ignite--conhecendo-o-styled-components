import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    ButtonContainer,
    ButtonTitle
} from './styles';

interface ButtonProps {
    title: string;
    onPress?: (item: any) => void;
}

export const ButtonComponent = ({title, ...rest}: ButtonProps) => {

    return (
        <ButtonContainer {...rest}>
            <ButtonTitle>{title}</ButtonTitle>
        </ButtonContainer>
    )
};