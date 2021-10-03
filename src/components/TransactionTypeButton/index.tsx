import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import {
    Container,
    Icon,
    Title
} from './styles';

interface TransactionTypeButtonProps {
    title: string;
    type: 'up' | 'down';
    selected: boolean;
    onPress: (x: any) => void;
    selectedTypeButton: string;
}

const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle'
}

export const TransactionTypeButton = ({title, type, selected, onPress, selectedTypeButton}: TransactionTypeButtonProps) => {
    return (
        <Container 
            selected={selected} 
            onPress={onPress}
            type={type}
            selectedTypeButton={selectedTypeButton}
        >
            <Icon 
                name={icons[type]}
                selected={selected} 
                selectedTypeButton={selectedTypeButton}
                />
            <Title
                selected={selected} 
                selectedTypeButton={selectedTypeButton}
            >{title}</Title>
        </Container>
    )
}