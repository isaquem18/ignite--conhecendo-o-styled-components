import React from 'react';
import { TextInputProps } from 'react-native';
import { Control, Controller, useForm } from 'react-hook-form';

import { InputComponent } from '../Input';
import { 
  Container
} from './styles';

interface Props extends TextInputProps {
  control: Control;
  name: string;
}

export const InputForm = ({
  control,
  name,
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
    </Container>
  )
}