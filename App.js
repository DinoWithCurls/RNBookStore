import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import LoginNavigator from './src/navigation/LoginNavigator';
import StoreScreen from './src/screens/StoreScreen';
import GoogleLogin from './src/screens/GoogleLogin';
import InteriorTabNavigator from './src/navigation/InteriorTabNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  const [isLoading, setLoading] = React.useState(true);
  const [isLoggedIn, setLoggedIn] = React.useState(null);
  const detectLogin = async() => {
    const token = await AsyncStorage.getItem('username');
    console.log(token);
    if(token) setLoggedIn(true);
    else setLoggedIn(false);
  }
  React.useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
      detectLogin();
    }, 1000);
  }, []);
  if(isLoading) {
    return(
      <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
  return (
    /*(isLoggedIn===true) ? <GoogleLogin /> : */<InteriorTabNavigator />
  )
}

export default App
