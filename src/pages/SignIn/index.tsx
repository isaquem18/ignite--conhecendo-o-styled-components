import React from 'react';
import { Alert } from 'react-native';
import { SignInButton } from '../../components/SignInButton';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  Header,
  TitleWrapper,
  Title,
  FinanceSVGIcon,
  SignInTitle,
  Footer,
  GoogleSVGIcon,
  AppleSVGIcon
} from './styles';

export function SignIn() {
  const { user, setUser, signInWithGoogle } = useAuth();

  const handleGoogleLoginButton = () => {
    try {
      signInWithGoogle();
    } catch(e) {
      console.log(e);
      Alert.alert('Erro', 'Não foi possível concluir login')
    }
  }
  return (
    <Container>
      <Header>
        <TitleWrapper>
          <FinanceSVGIcon /> 
          <Title>
            Controle suas
            finanças de forma
            muito simples
          </Title> 
        </TitleWrapper>

        <SignInTitle>
         {user.name}
        </SignInTitle>
      </Header>

      <Footer>
        <SignInButton
          svg={GoogleSVGIcon}
          title="Entrar com Google"
          onPress={handleGoogleLoginButton}
        /> 
        <SignInButton
          svg={AppleSVGIcon}
          title="Entrar com Apple"
        />                
      

      </Footer>      
    </Container>
  )
}