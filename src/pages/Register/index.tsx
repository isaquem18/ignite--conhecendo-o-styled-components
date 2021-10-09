import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import uuid from 'react-native-uuid';
import {
    Alert,
    Keyboard,
    Modal,
    TouchableWithoutFeedback
} from 'react-native';

import { ButtonComponent } from '../../components/Form/Button';
import { CategorySelectButton } from '../../components/Form/CategorySelectButton';
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

const schema = Yup.object().shape({
	name: Yup
		.string()
        .min(4, 'minimo de 4 caracteres')
		.required('nome e obrigatorio'),
	amount: Yup
		.number()
		.typeError('informe apenas numeros')
		.positive('informe um valor positivo')
		.required('valor e obrigatorio')

});

interface Data {
    id: string;
    amount: number;
    transactionType: string;
    name: string;
    category: {
        key: string;
        name: string;
    },
    date: string;
}

export const Register = () => {
    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria',
    });
    const [ selectedTypeButton, setSelectedTypeButton ] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    const navigation = useNavigation<any>();

    const { control, handleSubmit, formState: { errors }, reset } = useForm<any>({
        resolver: yupResolver(schema)
    });

    function handleSelectTypeButton(type: 'up' | 'down' | null) {
        setSelectedTypeButton(type!);
    }

    function handleOpenModal() {
        setCategoryModalOpen(true)
    }

    function handleCloseModal() {
        setCategoryModalOpen(false)
    }

    function handleResetForm() {
        handleSelectTypeButton(null);
        setSelectedTypeButton('');
        setCategory({
            key: 'category',
            name: 'Categoria',
        });
        reset({
            name: "",
            amount: ""
        });

        navigation.navigate('dashboard');
    };

    async function handleRegister(form: any) {
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
            id: uuid.v4(),
            ...form,
            transactionType: selectedTypeButton,
            category,
            date: String(new Date()),
        }
        
        await storeData(data);
        handleResetForm();        
    }

    useEffect(() => {
        (async () => {
           //await AsyncStorage.removeItem('@goFinance:dataKey')
        })()
        
    }, [])

    const storeData = async (data: Data) => {
        const dataStorageKey = '@goFinance:dataKey';
        try {
            const getData = await AsyncStorage.getItem('@goFinance:dataKey');
            let oldData = getData ? JSON.parse(getData) : [];

            const newData = [
                ...oldData,
                data
            ];
            
            await AsyncStorage.setItem(dataStorageKey, JSON.stringify(newData));



        } catch (error) {
            Alert.alert('Erro', `${error}`);
        }
    };

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
                                    error={errors.name && errors.name.message}
                                />
                                <InputForm 
                                    placeholder="Preço"
                                    name="amount"
                                    control={control}
                                    keyboardType="numeric"
                                    error={errors.amount && errors.amount.message}
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