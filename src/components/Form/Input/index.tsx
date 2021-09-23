import React from 'react';
import { Container } from './styles';

import { TextInputProps } from 'react-native';

type InputProps = TextInputProps;

export const InputComponent = ({...rest} : InputProps) => {
    return (
        <Container {...rest} />
    )
}