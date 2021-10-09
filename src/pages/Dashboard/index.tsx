import React, { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { ActivityIndicator, StatusBar } from 'react-native';

import TransactionsList from './TransactionsList';
import { HighlightCard } from '../../components/HighlightCard';

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
  formattedDate: string;
}

interface CardSummaryProps {
  amount: string;
}

interface CardSummary {
  incomeSummary: CardSummaryProps;
  outcomeSummary: CardSummaryProps;
  total: CardSummaryProps;
}


import {
  Container,
  Header,
  UserInfo,
  UserWrapper,
  Avatar,
  User,
  UserGreeting,
  UserName,
  LogoutIcon,
  HighlightCards,
  InitLoader
} from './styles';

export const Dashboard = () => {
  const [ isLoading, setIsLoading ] = useState(true);
  const [ transactions, setTransactions ] = useState<CardProps[]>([]);
  const [ lastIncomes, setLastIncomes ] = useState({
      lastTransactions: 0,
      lastTransactionsDateFormatted: ''
  });
  const [ lastOutcomes, setLastOutcomes ] = useState({
    lastTransactions: 0,
    lastTransactionsDateFormatted: ''
});
  const [ highlightData, setHighlightData ] = useState<CardSummary>({
    incomeSummary: {
      amount: '0'
    },
    outcomeSummary: {
      amount: '0'
    },
    total: {
      amount: '0'
    },
  } as CardSummary);

  function handleLastTransactions(transactionsList: CardProps[], upOrDown: 'up' | 'down') {
    console.log(upOrDown);
    const lastTransactions = Math.max.apply(Math, transactionsList
      .filter((item: CardProps) => item.transactionType === upOrDown)
      .map((item: CardProps) => new Date(item.date).getTime()));

    const lastTransactionsDateFormatted = `${new Date(
      lastTransactions
    ).getDate()} de ${new Date(
      lastTransactions
    ).toLocaleString('pt-BR', {
      month: 'long'
    })}    ${new Date(lastTransactions).getHours()}:${new Date(lastTransactions).getMinutes()} `;


    return {
      lastTransactions,
      lastTransactionsDateFormatted
    }
  }

  async function loadTransaction() {
    const dataStorageKey = '@goFinance:dataKey';

    let incomeTotal = 0;
    let outcomeTotal = 0;

    const response = await AsyncStorage.getItem(dataStorageKey);
    const transactions = response ? JSON.parse(response) : [];

    const transactionFormatted: CardProps[] = transactions.map((item: CardProps) => {
      

      if (item.transactionType === 'up') {
        incomeTotal += Number(item.amount)
      } else {
        outcomeTotal += Number(item.amount)
      }

      // format currency
      const amount = Number(item.amount)
        .toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })
      // format 
      const dateFormatted = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      }).format(new Date(item.date));

      return {
        ...item,
        date: dateFormatted,
        amount
      }

    })

    setHighlightData({
      incomeSummary: {
        amount: incomeTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })
      },
      outcomeSummary: {
        amount: outcomeTotal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })
      },
      total: {
        amount: (outcomeTotal + incomeTotal).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })
      }
    });
    setTransactions(transactionFormatted);
    setIsLoading(false);

    const lastIncomes = await (handleLastTransactions(transactions, 'up'));
    const lastOutcomes = await handleLastTransactions(transactions, 'down');
    setLastIncomes(lastIncomes);
    setLastOutcomes(lastOutcomes);


  }

  useFocusEffect(useCallback(() => {
    loadTransaction();
  }, []))

  return (
    <>
      <Container>
       { isLoading ? (
            <>
              <StatusBar barStyle="dark-content" />
              <InitLoader />
            </>
         ) : (   
          <>   
            <Header>
              <UserWrapper>
                <UserInfo>
                  <Avatar source={{ uri: 'https://avatars.githubusercontent.com/u/67105969?v=4' }} />
                  <User>
                    <UserGreeting>Olá,</UserGreeting>
                    <UserName>Isaque</UserName>
                  </User>
                </UserInfo>
                <LogoutIcon name="power-off" />
              </UserWrapper>
            </Header>
            <HighlightCards>
              <HighlightCard
                bg="white"
                title="Entradas"
                iconName="arrow-up-circle"
                amount={highlightData.incomeSummary.amount}
                lastTransaction={`Última entrada dia ${lastIncomes.lastTransactionsDateFormatted}`}
              />
              <HighlightCard
                bg="white"
                title="Saídas"
                iconName="arrow-down-circle"
                amount={highlightData.outcomeSummary.amount}
                lastTransaction={`Última saída dia ${lastOutcomes.lastTransactionsDateFormatted}`}
              />
              <HighlightCard
                bg="orange"
                title="Total"
                iconName="dollar-sign"
                amount={highlightData.total.amount}
                lastTransaction="Última entrada dia 13 de agosto"
              />
            </HighlightCards>
            <TransactionsList 
              data={transactions}
            />
          </>
          )
        }
      </Container>
    </>
  )
}