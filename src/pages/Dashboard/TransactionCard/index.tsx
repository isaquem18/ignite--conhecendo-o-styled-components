import React from 'react';

import {
  Title,
  Container,
  Amount,
  Footer,
  Category,
  CategoryIcon,
  CategoryText,
  Date
} from './styles';

export const TransactionCard = () => {
  return (
    <>
      <Container>
        <Title>Desenvolvimento de site</Title>
        <Amount>R$ 12.000,00</Amount>
        <Footer>
          <Category>
            <CategoryIcon name="dollar-sign" />
            <CategoryText>Alimentação</CategoryText>
          </Category>
          <Date>12/04/2022</Date>
        </Footer>
      </Container>
    </>
  )
}