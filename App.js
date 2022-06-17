import {Text, StyleSheet, View, StatusBar} from 'react-native';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import CalculateBMI from './src/CalculateBMI';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
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
