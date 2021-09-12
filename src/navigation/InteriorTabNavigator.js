import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StoreScreen from '../screens/StoreScreen';
import CartScreen from '../screens/CartScreen';
import StoreStackNavigator from './StoreStackNavigator';
const Tab = createMaterialBottomTabNavigator();
export default function InteriorTabNavigator({navigation}) {
  return (
      <Tab.Navigator initialRouteName="StoreStack" labeled={false} activeColor="orange" barStyle={{backgroundColor:'white'}}>
        <Tab.Screen
          name="StoreStack"
          component={StoreStackNavigator}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="home" color={color} size={27} />)}} />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="cart-plus" color={color} size={25} />)}} />
      </Tab.Navigator>
    
  );
}
