import React from 'react';
import { SvgProps } from 'react-native-svg';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  ButtonTitleBox,
  ButtonTitle,
  IconBox
} from './styles';

interface SignInButtonProps extends RectButtonProps {
  svg: React.FC<SvgProps>;
  title: string;
}

export function SignInButton({ svg: Svg, title, ...rest} : SignInButtonProps) {
  return (
    <Container
      {...rest}
    >
      <IconBox><Svg /></IconBox>
      <ButtonTitleBox><ButtonTitle>{title}</ButtonTitle></ButtonTitleBox>
    </Container>
  )
}