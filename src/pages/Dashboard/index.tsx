import React from 'react';
import TransactionsList from './TransactionsList';

import {
  SafeAreaView
} from 'react-native';

import { HighlightCard } from '../../components/HighlightCard';

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
  HighlightCards
} from './styles';

export const Dashboard = () => {
  return (
    <>
      <Container>
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
              amount={2199.33}
              lastTransaction="Última entrada dia 13 de abril"
            />
            <HighlightCard
              bg="white"
              title="Saídas"
              iconName="arrow-down-circle"
              amount={699.33}
              lastTransaction="Última entrada dia 13 de julho"
            />

            <HighlightCard
              bg="orange"
              title="Total"
              iconName="dollar-sign"
              amount={2199.33}
              lastTransaction="Última entrada dia 13 de agosto"
            />
          </HighlightCards>
          <TransactionsList />
      </Container>
    </>
  )
}