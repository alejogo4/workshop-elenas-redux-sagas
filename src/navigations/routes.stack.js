import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import App from './../screens/app/app.screen';

const Stack = createStackNavigator();

export default props => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Stack.Navigator
        initialRouteName='app'>
        <Stack.Screen name="app" options={{title:'Rick and morty'}} component={App} />
        
      </Stack.Navigator>
    </>
  );
};
