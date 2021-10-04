import React from 'react';

import {
  FlatList,
} from 'react-native';
import { ButtonComponent } from '../../components/Form/Button';
import { categories } from '../../utils/categories';

import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,
} from './styles';

interface Category {
  key: string;
  name: string;
}

interface Props {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: (item: any) => void;
}

export function CategorySelect({
  category,
  setCategory,
  closeSelectCategory
} : Props) {
  return (
    <>
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <FlatList 
        data={categories}
        style={{flex: 1, width: '100%'}}
        keyExtractor={(item) => item.key.toString()}
        renderItem={({ item }) => (
          <Category
            isActive={category.key === item.key}
            onPress={() => setCategory({key: item.key, name: item.name})}
          >
            <Icon name={item.icon}/>
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
      <Footer>
        <ButtonComponent 
          title="Selecionar"
          onPress={closeSelectCategory}
        />
      </Footer>
    </Container>
    </>
  )
}