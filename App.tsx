import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

import theme from './src/global/styles/theme';
import { Routes } from './src/Routes/app.routes';

import { AuthProvider } from './src/hooks/auth';

import {
  useFonts
} from 'expo-font';

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { SignIn } from './src/pages/SignIn';

export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <SignIn />
      </ThemeProvider>
    </AuthProvider>
  );
}
