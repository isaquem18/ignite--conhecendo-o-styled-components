import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    Alert,
    Keyboard,
    Modal,
    StatusBar,
    TouchableWithoutFeedback
} from 'react-native';

import { ButtonComponent } from '../../components/Form/Button';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';

import { InputComponent } from '../../components/Form/Input';
import { InputForm } from '../../components/Form/InputForm';
import { TransactionTypeButton } from '../../components/TransactionTypeButton';
import { CategorySelect } from '../CategorySelect';
import {
    Container,
    Header,
    Form,
    Fields,
    Title,
    TransactionTypes
} from './styles';

export const Register = () => {
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    });
    const [ selectedTypeButton, setSelectedTypeButton ] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    function handleSelectTypeButton(type: 'up' | 'down') {
        setSelectedTypeButton(type);
    }

    function handleOpenModal() {
        setCategoryModalOpen(true)
    }

    function handleCloseModal() {
        setCategoryModalOpen(false)
    }

    function handleRegister(form: any) {
        if (!selectedTypeButton) {
            return Alert.alert(
                'Não foi possível concluir operação',
                'Selecione o tipo de transação',
            )
        }

        if (!form.name || !form.amount) {
            return Alert.alert(
                'Não foi possível concluir operação',
                'Preencha todos os campos'
            )
        }

        if (category.key === 'category') {
            return Alert.alert(
                'Não foi possível concluir operação',
                'Selecione a categoria da transação'
            )
        }

        const data = {
            ...form,
            transactionType: selectedTypeButton,
            category
        }
        console.log(data);
    }

    const { control, handleSubmit, formState: { errors } } = useForm();

    return (
        <>
            <TouchableWithoutFeedback
                onPress={() => Keyboard.dismiss()}
            >
                <Container>
                        <Header>
                            <Title>Cadastro</Title>
                        </Header>
                        <Form>
                            <Fields>
                                <InputForm 
                                    placeholder="Nome"
                                    name="name"
                                    control={control}
                                    autoCorrect={false}
                                    autoCapitalize="none"
                                />
                                <InputForm 
                                    placeholder="Preço"
                                    name="amount"
                                    control={control}
                                    keyboardType="numeric"
                                />
                                <TransactionTypes>
                                    <TransactionTypeButton 
                                        title='Income'
                                        type="up"
                                        onPress={() => handleSelectTypeButton('up')}
                                        selected={selectedTypeButton === 'up'}
                                        selectedTypeButton={selectedTypeButton}
                                    />

                                    <TransactionTypeButton 
                                        title='Outcome'
                                        type="down"
                                        onPress={() => handleSelectTypeButton('down')}
                                        selected={selectedTypeButton === 'down'}
                                        selectedTypeButton={selectedTypeButton}
                                    />
                                </TransactionTypes>
                                <CategorySelectButton
                                    title={category.name}
                                    onPress={handleOpenModal}
                                />
                            </Fields>

                            <ButtonComponent 
                                title="Enviar"
                                onPress={handleSubmit(handleRegister)}
                            />
                        </Form>

                        <Modal visible={categoryModalOpen}>
                            <CategorySelect 
                                category={category}
                                setCategory={setCategory}
                                closeSelectCategory={handleCloseModal}
                            />
                        </Modal>
                </Container>
            </TouchableWithoutFeedback>
        </>
    )
}