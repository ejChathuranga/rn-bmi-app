import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import CalculateBMI from './src/CalculateBMI';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StatusBar} from 'react-native';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor={'#050230'} barStyle={'light-content'} />
        <Stack.Navigator
          initialRouteName="CalculateBMI"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="CalculateBMI" component={CalculateBMI} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
