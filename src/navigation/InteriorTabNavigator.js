import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StoreScreen from '../screens/StoreScreen';
import CartScreen from '../screens/CartScreen';
const Tab = createBottomTabNavigator();

export default function InteriorTabNavigator({navigation, route}) {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Store">
        <Tab.Screen
          name="Store"
          component={StoreScreen}
          //options={{
            //tabBarIcon: ({color, size}) => (
              //<MaterialCommunityIcons name="home" color={color} size={size} />
            //),
          //}}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          //options={{
            //tabBarIcon: ({color, size}) => (
              //<MaterialCommunityIcons
                //name="cart-plus" color={color} size={size} /> ), }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
