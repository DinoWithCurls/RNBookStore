import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StoreScreen from '../screens/StoreScreen';
import CartScreen from '../screens/CartScreen';
const Tab = createMaterialBottomTabNavigator();
export default function InteriorTabNavigator({navigation, route}) {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Store" activeColor="orange" barStyle={{backgroundColor:'white'}}>
        <Tab.Screen
          name="Store"
          component={StoreScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />)}} />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="cart-plus" color={color} size={size} />)}} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
