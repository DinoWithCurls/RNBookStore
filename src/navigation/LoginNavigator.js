import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import InteriorTabNavigator from './InteriorTabNavigator';
import { createStackNavigator } from '@react-navigation/stack';
import GoogleLogin from '../screens/GoogleLogin';
const Stack = createStackNavigator();
const LoginNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="GoogleLogin" component={GoogleLogin} options={{headerShown: false}} />
                <Stack.Screen name="InteriorTab" component={InteriorTabNavigator} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default LoginNavigator
