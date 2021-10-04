import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from 'styled-components';
import { 
  Platform,
  StatusBar, 
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

//  ROUTES
import { Dashboard } from '../pages/Dashboard';
import { Register } from '../pages/Register';
import {  } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';


const { Navigator, Screen } = createBottomTabNavigator();

export function Routes() {

  const theme = useTheme();

  return (
    <>
      <StatusBar translucent={true} backgroundColor="#ffffff00" barStyle="light-content" />
      <NavigationContainer>
        <Navigator screenOptions={{
          headerShown: false,
          tabBarLabelPosition: 'beside-icon',
          tabBarActiveTintColor: theme.colors.orange_500,
          tabBarInactiveTintColor: theme.colors.gray_800,
          tabBarHideOnKeyboard: Platform.OS === 'ios' ?  false : true,
          tabBarLabelStyle: {
            fontFamily: theme.fonts.medium,
            fontSize: RFValue(12),
            marginLeft: 15,
            padding: 0
          },
          tabBarStyle: {
            height: Platform.OS === 'ios' ? RFPercentage(14) : RFPercentage(10),
            elevation: 0
          },
          tabBarItemStyle: {
            justifyContent: 'center',
            flexDirection: 'row',
          },
          tabBarIconStyle: {
            margin: 0,
            padding: 0
          },

        }}>
          <Screen name="dashboard" component={Dashboard} options={{
            tabBarLabel: 'Listagem',
            tabBarIcon: ({ color, size, focused}) => (
              <MaterialIcons 
                name="format-list-bulleted" 
                color={color}
                size={size}

              />
            ),    
          }}/>
          <Screen name="register" component={Register} options={{
            tabBarLabel: 'Cadastrar',
            tabBarIcon: ({ color, size, focused}) => (
              <MaterialIcons 
                name="attach-money"
                color={color}
                size={size}
              />
            )
          }}/>
          <Screen name="summary" component={Register} options={{
            title: 'Resumo',
            tabBarIcon: ({ color, size, focused}) => (
              <MaterialIcons 
                name="pie-chart"
                color={color}
                size={size}
              />
            )
          }}/>
        </Navigator>
      </NavigationContainer>
    </>
  );
}