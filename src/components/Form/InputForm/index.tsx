import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller } from 'react-hook-form';

import { InputComponent } from '../Input';
import { 
  Container,
  Error
} from './styles';

interface Props extends TextInputProps {
  control: any;
  name: string;
  error: string;
}

export const InputForm = ({
  control,
  name,
  error,
  ...rest
}: Props) => {

  return (
    <Container>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <InputComponent 
            {...rest}
            onChangeText={onChange}
            onBlur={onBlur} 
            value={value}
          />
        )}
        name={name}
      />  
      {error && <Error>{error}</Error>}
    </Container>
  )
}