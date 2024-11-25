import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from './src/Pages/Home';
import Contato from './src/Pages/Contato';
import Inicial from './src/Pages/Inicial';
import Login from './src/Pages/Login';
import TelaAdm from './src/Pages/TelaAdm';
import TelaPedidos from './src/Pages/TelaPedidos';
import Editar from './src/Pages/Editar';
 
 
 
const Stack = createNativeStackNavigator();
 
export default function MainNavigator() {
  return (
    <NavigationContainer initialRoutename="Home">
        <Stack.Navigator>
            <Stack.Screen  component={Inicial} options={{ headerShown: false }} />
            <Stack.Screen component={Home} options={{ headerShown: false }} />
            <Stack.Screen  component={Contato} options={{headerShown:false}} />
            <Stack.Screen  component={Login} options={{headerShown:false}} />
            <Stack.Screen  component={TelaAdm} options={{headerShown:false}} />
            <Stack.Screen  component={TelaPedidos} options={{headerShown:false}} />
            <Stack.Screen  component={Editar} options={{headerShown:false}} />
            
        </Stack.Navigator>
    </NavigationContainer>
   
  )
}