import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import CalculateBMI from './src/CalculateBMI';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';
import BMIResult from './src/BMIResult';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/redux/reducer';
import HomeView from './src/saga/HomeView';
import { store } from './src/saga/Store';


const Stack = createNativeStackNavigator();

// const store = createStore(reducer)

export default class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <StatusBar backgroundColor={'#050230'} barStyle={'light-content'} />
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="CalculateBMI" component={CalculateBMI} />
            <Stack.Screen name="BMIResult" component={BMIResult} />
            <Stack.Screen name="Home" component={HomeView} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
