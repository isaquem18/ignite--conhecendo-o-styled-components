import React, { memo, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TransactionCard } from '../TransactionCard';
import api from '../../../api';

import {
  Title,
  Container,
  NotFoundItems
} from './styles';

type CardProps = {
  id: string;
  amount: number;
  transactionType: 'up' | 'down';
  name: string;
  category: {
      key: string;
      name: string;
  },
  date: string;
}

interface CardPropsList {
  data: CardProps[]
}

const TransactionsList = ({ data }: CardPropsList) => {
  const [cardList, setCardList] = useState([])

  return (
    <>
      <Title>Listagem</Title>
      <Container>
        <FlatList
          data={data}
          renderItem={({ item }: { item: CardProps }) => (
            <TransactionCard 
              info={item} 
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <NotFoundItems>Não há itens cadastrados!</NotFoundItems>
          )}
        />
      </Container>
    </>
  )
}

export default memo(TransactionsList);