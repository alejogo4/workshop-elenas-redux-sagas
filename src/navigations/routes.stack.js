import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import App from './../screens/app/app.screen';

const Stack = createStackNavigator();

export default props => {
  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <Stack.Navigator
        initialRouteName='app'>
        <Stack.Screen name="app" component={App} />
        
      </Stack.Navigator>
    </>
  );
};
