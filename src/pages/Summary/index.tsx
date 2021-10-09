import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { HistoryCard } from '../../components/HistoryCard';

import {
  CategoryList,
  Container,
  Header,
  Title
} from './styles';
import { categories } from '../../utils/categories';
import { useFocusEffect } from '@react-navigation/core';
import { View } from 'react-native';

interface DataProps {
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

interface categoryTotalProps {
  amountTotal: string;
  name: string;
  color: string;
}

interface Props {
  item: categoryTotalProps;
}

export function Summary() {
  const [ data, setData ] = useState([]);

  async function loadData() {
    const response = await AsyncStorage.getItem('@goFinance:dataKey');
    let responseFormatted = response ? JSON.parse(response) : [];

    const outcomesList = responseFormatted 
      .filter((item: DataProps) => item.transactionType === 'down');


    const totalByCategory: any = [];
    categories.forEach((categoryItem) => {

      let categorySum = 0;

      outcomesList.forEach((outcomeItem: DataProps) => {
        if (categoryItem.key === outcomeItem.category.key) {
          categorySum += Number(outcomeItem.amount);
        }
      })
      const { name } = categoryItem;
      if (categorySum > 0) {
        const categorySumFormatted = categorySum
          .toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          })

        totalByCategory.push({
          color: categoryItem.color,
          name: categoryItem.name,
          amountTotal: categorySumFormatted
        });
      }
    })
    setData(totalByCategory);
  }

  useFocusEffect(useCallback(() => {
    loadData();
  }, []))


  return (
    <Container>
         <Header>
            <Title>Resumo por categoria</Title>
          </Header>
        <CategoryList 
          data={data}
          keyExtractor={(item: categoryTotalProps) => item.name}
          renderItem={({item}: Props) => (
            <HistoryCard 
              color={item.color}
              title={item.name}
              amount={item.amountTotal}
            />
          )}
        />

    </Container>
  )
}