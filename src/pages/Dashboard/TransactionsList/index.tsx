import React, { memo, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [data, setData] = useState({})

  useEffect(() => {
    (async () => {
      const getData = await AsyncStorage.getItem('@goFinance:dataKey');
      setData(JSON.parse(getData!));

      // const { data } = await api.get('/transaction-list');
      // setCardList(data);
    })()
  }, []);

  return (
    <>
      <Title>{JSON.stringify(data)}</Title>
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