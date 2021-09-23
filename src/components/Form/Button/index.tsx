import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    ButtonContainer,
    ButtonTitle
} from './styles';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export const ButtonComponent = ({title, ...rest}: ButtonProps) => {

    return (
        <ButtonContainer {...rest}>
            <ButtonTitle>{title}</ButtonTitle>
        </ButtonContainer>
    )
};