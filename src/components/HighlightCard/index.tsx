import React from 'react';

interface HighlightCardProps {
  title: string;
  iconName: 'arrow-up-circle' | 'arrow-down-circle' | 'dollar-sign';
  amount: number;
  lastTransaction: string;
  bg: 'white' | 'orange';
}

import {
  Container,
  Header,
  Title,
  HeaderIcon,
  Footer,
  Amount,
  LastTransactionDate
} from './styles';



export const HighlightCard = ({ title, iconName, amount, lastTransaction, bg }: HighlightCardProps) => {
  return (
    <Container bg={bg}>
      <Header>
        <Title name={iconName}>{title}</Title>
        <HeaderIcon name={iconName} title={title} iconName />
      </Header>
      <Footer>
        <Amount name={iconName}>R$ {amount}</Amount>
        <LastTransactionDate name={iconName}>{lastTransaction}</LastTransactionDate>
      </Footer>
    </Container >
  )
}