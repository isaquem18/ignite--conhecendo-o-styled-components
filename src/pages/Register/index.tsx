import React from 'react';

import {
    StatusBar
} from 'react-native';
import { ButtonComponent } from '../../components/Form/Button';

import { InputComponent } from '../../components/Form/Input';
import { TransactionTypeButton } from '../../components/TransactionTypeButton';
import {
    Container,
    Header,
    Form,
    Fields,
    Title,
} from './styles';

export const Register = () => {
    return (
        <>
        <StatusBar translucent={true} backgroundColor="#ffffff00"/>
        <Container>
            <Header>
                <Title>Cadastro</Title>
            </Header>
            <Form>
                <Fields>
                    <InputComponent 
                        placeholder="Nome"
                    />
                    <InputComponent 
                        placeholder="Preço"
                    />
                    <TransactionTypeButton />
                </Fields>

                <ButtonComponent 
                    title="Enviar"
                />
            </Form>
        </Container>
        </>
    )
}