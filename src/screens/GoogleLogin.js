import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
import WEBCLIENT_ID from '../../keys';
import { useDispatch, useSelector} from 'react-redux';
import {setFirstTimeLoginDone, createList} from '../redux/actions';

GoogleSignin.configure({
  webClientId: WEBCLIENT_ID,
  offlineAccess: false,
});
const GoogleLogin = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const dispatch = useDispatch();
  const isFirstTimeLogin = useSelector(state => state.loginReducer.isFirstTimeLogin);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUsername(userInfo.user.name);
      await AsyncStorage.setItem('username', username);
      navigation.navigate('InteriorTab')
      console.log(username, 'signed in succesfully');
      dispatch(setFirstTimeLoginDone());

    } catch (error) {
      console.log(error.message);
    }
  };
  
  const getData = () => {
    const url =
      'https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=20';
    fetch(url)
      .then(res => res.json())
      .then(res => {
        dispatch(createList(res.items));
        console.log(' res.items ', res.items.length);
        
      })
      .catch(error => {
        console.log('get data error:', error);
      });
  };
  React.useEffect(() => {
    console.log(' isFirstTimeLogin', isFirstTimeLogin);
    if(isFirstTimeLogin){
      //api call and dispatch action to set cart data only on first time login
      getData();
    }
  }, [])
  return (
    <View style={{padding:20, alignItems:'center', flex:1, marginTop:150}}>
      <Text style={styles.welcomeText}>WELCOME</Text>
      <View style={{
            width: 400,
            height: 80,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
        <GoogleSigninButton
          onPress={signIn}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          style={{flex: 1, height: '100%', width: '100%'}}
        />
      </View>
    </View>
  );
};

export default GoogleLogin;
const styles=StyleSheet.create({
  welcomeText:{
    fontFamily:'Montserrat',
    fontWeight:'600',
    fontSize:40,
    marginBottom:200
  }
})