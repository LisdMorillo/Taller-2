import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PantallaLogin from '../screens/PantallaLogin';
import PantallaRegistro from '../screens/PantallaRegistro';

const Stack = createStackNavigator();

export default function NavegacionApp() {
  return (
    <Stack.Navigator initialRouteName="Inicio" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Inicio" component={PantallaLogin}/>
      <Stack.Screen name="Registro" component={PantallaRegistro} />
    </Stack.Navigator>
  );
}
