import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CartScreen from '../screens/CartScreen';
import StoreStackNavigator from './StoreStackNavigator';
import CartTabIcon from '../components/CartTabIcon';
const Tab = createMaterialBottomTabNavigator();
export default function InteriorTabNavigator({navigation}) {
  return (
      <Tab.Navigator initialRouteName="StoreStack" labeled={false} activeColor="orange" barStyle={{backgroundColor:'white'}}>
        <Tab.Screen
          name="StoreStack"
          component={StoreStackNavigator}
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={27} />)}} />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: ({color}) => (
              <CartTabIcon tintColor={color} />)}} />
      </Tab.Navigator>
    
  );
}
