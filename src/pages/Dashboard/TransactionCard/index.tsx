import React from 'react';
import { categories } from '../../../utils/categories';

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

type CardProps = {
  amount: number;
  transactionType: 'up' | 'down';
  name: string;
  category: {
      key: string;
      name: string;
  },
  date: string;
}

interface InfoProps {
  info: CardProps;
}

export const TransactionCard = ({ info: {  
  name,
  amount,
  category,
  transactionType,
  date,
}}: InfoProps) => {

  const [selectedCategory] = categories.filter(
    (item) => item.key === category.key
  )

  return (
    <>
      <Container>
        <Title>{name}</Title>
        <Amount type={transactionType}>{transactionType === 'down' && '-'} {amount}</Amount>
        <Footer>
          <Category>
            <CategoryIcon name={selectedCategory.icon} />
            <CategoryText>{category.name}</CategoryText>
          </Category>
          <Date>{date}</Date>
        </Footer>
      </Container>
    </>
  )
}