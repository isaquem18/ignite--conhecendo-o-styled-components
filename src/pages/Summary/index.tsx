import React, { useCallback, useEffect, useState } from 'react';
import { ActivityIndicator, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { VictoryPie } from 'victory-native';
import { useTheme } from 'styled-components'; 
import { addMonths, subMonths, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { HistoryCard } from '../../components/HistoryCard';

import {
  CategoryList,
  Container,
  Content,
  ChartContent,
  Header,
  Title,
  MonthSelect,
  MonthSelectButton,
  MonthSelectIcon,
  Month,
  LoaderContainer,
  Loader,
  NotFound
} from './styles';

import { categories } from '../../utils/categories';
import { useFocusEffect } from '@react-navigation/core';
import { RFValue } from 'react-native-responsive-fontsize';

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
  percentNotFormatted: number;
  amountNotFormatted: number;
}

interface Props {
  item: categoryTotalProps;
}



export function Summary() {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ data, setData ] = useState([]);
  const [ selectedDate, setSelectedDate ] = useState(new Date());

  const theme = useTheme();

  useEffect(() => {
    console.log(selectedDate)
  }, [selectedDate]);

  function handleDateChange(action: 'next' | 'previous') {
    setIsLoading(true);

    let newDate;
    if (action === 'next') {
      setSelectedDate(addMonths(selectedDate, 1));
    } else {
      setSelectedDate(subMonths(selectedDate, 1));
    }
  }

  async function loadData() {
    const response = await AsyncStorage.getItem('@goFinance:dataKey');
    let responseFormatted = response ? JSON.parse(response) : [];

    const outcomesList = responseFormatted 
      .filter((item: DataProps) => item.transactionType === 'down' &&
      new Date(item.date).getFullYear() === new Date(selectedDate).getFullYear() &&
      new Date(item.date).getMonth() === new Date(selectedDate).getMonth()); 

    const outcomesTotal = outcomesList.reduce((acumulator: number, item: DataProps) => {
      return acumulator += Number(item.amount);
    }, 0);

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

        const percent = `${(categorySum / outcomesTotal * 100).toFixed(2)}%`;
        const percentNotFormatted = (categorySum / outcomesTotal * 100).toFixed(2);

        totalByCategory.push({
          color: categoryItem.color,
          name: categoryItem.name,
          amountTotal: categorySumFormatted,
          amountNotFormatted: categorySum,
          percentNotFormatted,
          percent
        });
      }
    })
    setData(totalByCategory);
    setIsLoading(false);
  }

  useFocusEffect(useCallback(() => {
    loadData();
  }, [selectedDate]))

  return (
    <Container>
         <Header>
            <Title>Resumo por categoria</Title>
          </Header>

        <Content>
        {isLoading ? (
          <LoaderContainer><Loader /></LoaderContainer>
        ) : (
          <>
          <CategoryList 
            data={data}
            keyExtractor={(item: any) => item.name}
            ListHeaderComponent={() => (
                <>
                  <MonthSelect>
                    <MonthSelectButton
                      onPress={() => handleDateChange('previous')}
                    >
                      <MonthSelectIcon name="chevron-left"/>
                    </MonthSelectButton>

                      <Month>{format(selectedDate, 'MMMM, yyyy', { locale: ptBR })}</Month>

                    <MonthSelectButton
                      onPress={() => handleDateChange('next')}
                    >
                      <MonthSelectIcon name="chevron-right"/>
                    </MonthSelectButton>
                  </MonthSelect>
                  <ChartContent>
                    <VictoryPie 
                      data={data}
                      x="percent"
                      y="amountNotFormatted"
                      colorScale={data.map((item: any) => item.color)}
                      labelRadius={80}
                      style={{
                        labels: {
                          fontSize: RFValue(13),
                          fontWeight: 'bold',
                          fill: theme.colors.white
                        }
                      }}
                    />
                  </ChartContent>
                </>
              )}
              renderItem={({item}: Props) => (
                <HistoryCard 
                  color={item.color}
                  title={item.name}
                  amount={item.amountTotal}
                />
              )}
              ListEmptyComponent={() => (
                <NotFound>Não há itens nessa data</NotFound>
              )}
            />
            </>
          )}
        </Content>

    </Container>
  )
}