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

interface CardProps {
  "id": number;
  "title": string;
  "category": string;
  "type": 'income' | 'cost';
  "date": string;
}

interface InfoProps {
  info: CardProps;
}


export const TransactionCard = ({ info: {  
  id,
  title,
  category,
  type,
  date 
}}: InfoProps) => {
 

  console.log(type);

  return (
    <>
      <Container>
        <Title>{title}</Title>
        <Amount type={type}>R$ 12.000,00</Amount>
        <Footer>
          <Category>
            <CategoryIcon name="dollar-sign" />
            <CategoryText>{category}</CategoryText>
          </Category>
          <Date></Date>
        </Footer>
      </Container>
    </>
  )
}