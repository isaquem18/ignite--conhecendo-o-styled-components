import React from 'react';
import { TransactionCard } from '../TransactionCard';

import {
  Title,
  Container,
} from './styles';

export const TransactionsList = () => {
  return (
    <>
      <Title>Listagem</Title>
      <Container>
        <TransactionCard />
      </Container>
    </>
  )
}