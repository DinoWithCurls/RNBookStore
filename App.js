import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import LoginNavigator from './src/navigation/LoginNavigator';
import StoreScreen from './src/screens/StoreScreen';
import GoogleLogin from './src/screens/GoogleLogin';
import InteriorTabNavigator from './src/navigation/InteriorTabNavigator';
const App = () => {
  return (
    <LoginNavigator />
  )
}

export default App
