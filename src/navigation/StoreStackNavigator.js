import React from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import StoreScreen from '../screens/StoreScreen';
import DetailsScreen from '../screens/DetailsScreen';
const StoreStack = createStackNavigator();
const StoreStackNavigator = () => {
  return (
    <StoreStack.Navigator>
      <StoreStack.Screen
        name="Store"
        component={StoreScreen}
        options={{headerShown: false}}
      />
      <StoreStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{headerShown: false}}
      />
    </StoreStack.Navigator>
  );
};

export default StoreStackNavigator;
