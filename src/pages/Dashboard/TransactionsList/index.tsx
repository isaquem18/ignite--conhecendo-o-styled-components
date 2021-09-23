import React, { memo, useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { TransactionCard } from '../TransactionCard';
import api from '../../../api';

import {
  Title,
  Container,
} from './styles';

type CardProps = {
  "id": number;
  "title": string;
  "category": string;
  "type": 'income' | 'cost';
  "date": string;
}

const TransactionsList = () => {
  const [cardList, setCardList] = useState([])

  useEffect(() => {
    (async () => {
      const { data } = await api.get('/transaction-list');
      setCardList(data);
    })()
  }, []);

  return (
    <>
      <Title>Listagem</Title>
      <Container>
        <FlatList
          data={cardList}
          renderItem={({ item }: { item: CardProps }) => (
            <TransactionCard 
              info={item} 
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </Container>
    </>
  )
}

export default memo(TransactionsList);