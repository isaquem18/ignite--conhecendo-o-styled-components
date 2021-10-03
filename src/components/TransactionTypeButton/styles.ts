import styled, { css } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {
  TouchableOpacity,
  TouchableOpacityProps
} from 'react-native';

interface TransactionTypeButtonProps extends TouchableOpacityProps {
  type?: 'up' | 'down';
  selected: boolean;
  selectedTypeButton: string;
}


export const Container = styled(TouchableOpacity).attrs<TransactionTypeButtonProps>({
  activeOpacity: 0.8
})<TransactionTypeButtonProps>`
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
  padding: 16px 0;
  justify-content: center;
  width: 48%;
 

  ${({selected, type}) => selected && type === 'up' && css`
    background-color: ${({theme}) => theme.colors.green_500}30
  `}

  ${ ({selected, type}) => selected && type === 'down' && css`
    background-color: ${({theme}) => theme.colors.red_500}30
  `}

  ${({selected, theme}) => !selected && css`border: 1.5px solid ${theme.colors.gray_500}20;`}


  ${({selectedTypeButton, theme}) => selectedTypeButton === '' && css`border: 1.5px solid ${theme.colors.gray_500}90`}

`;


interface IconProps {
  type?: 'up' | 'down';
  selected: boolean;
  selectedTypeButton: string;
  name: string;
}

export const Icon = styled(Feather)<IconProps>`
  font-size: ${RFValue(16)}px;
  color: ${(props) => props.name === 'arrow-up-circle' ? props.theme.colors.green_500 : props.theme.colors.red_500};

  ${({selected}) => selected ? css`opacity: 1;` : css`opacity: 0.2;`}


  ${({selectedTypeButton}) => selectedTypeButton === '' && css`opacity: 1;`}
  
`;



export const Title = styled.Text<TransactionTypeButtonProps>`
  font-size: ${RFValue(16)}px;
  margin: 0 ${RFPercentage(1)}px;
  color: ${({theme}) => theme.colors.blue_800}


  ${({selected, theme}) => !selected && css`color: ${({theme}) => theme.colors.blue_800}40;`}


  ${({selectedTypeButton, theme}) => selectedTypeButton === '' && css`color: ${({theme}) => theme.colors.blue_800}`}
`;