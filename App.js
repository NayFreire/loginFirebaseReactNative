import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './src/Login';
import Profile from './src/Profile';
import Home from './src/Home';
import Lists from './src/Lists';
import About from './src/About'

const Stack = createStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Home"
        component={Home}
        options={{title: 'Início'}}/>

        <Stack.Screen 
        name="Login"
        component={Login}
        options={{title: 'Tela Login'}}/>

        <Stack.Screen 
        name="Profile"
        component={Profile}
        options={{title: 'Perfil'}}/>
        
        <Stack.Screen 
        name="Lists"
        component={Lists}
        options={{title: 'Amizades'}}/>

        <Stack.Screen 
        name="About"
        component={About}
        options={{title: 'Informarções'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
