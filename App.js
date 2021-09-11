import React from 'react'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import LoginNavigator from './src/navigation/LoginNavigator';
import StoreScreen from './src/screens/StoreScreen';
import GoogleLogin from './src/screens/GoogleLogin';
const App = () => {
  return (
    <GoogleLogin />
  )
}

export default App
