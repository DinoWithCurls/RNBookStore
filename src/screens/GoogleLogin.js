import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
import WEBCLIENT_ID from '../../keys';
import { useDispatch, useSelector} from 'react-redux';
import {setFirstTimeLoginDone, createList, setUsername} from '../redux/actions';
import adjust from '../styles/ScreenSizeAdjust';
GoogleSignin.configure({
  webClientId: WEBCLIENT_ID,
  offlineAccess: false,
});
const GoogleLogin = ({navigation}) => {
  const dispatch = useDispatch();
  //Check whether the user is logging in for the first time or not. 
  const isFirstTimeLogin = useSelector(state => state.loginReducer.isFirstTimeLogin);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      dispatch(setUsername(userInfo.user.name));
      navigation.navigate('InteriorTab')
      console.log(userInfo.user.name,'signed in succesfully');
      dispatch(setFirstTimeLoginDone());
    } catch (error) {
      console.log(error.message);
    }
  };
  //Fetch the itemsList data from API, only when the user is logging in for the first time, to prevent rerendering and hence unnecessary data usage.
  //Here, we fetch the data, store it in the AsyncStorage using redux, then use it in our app, wherever needed.
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
    <View style={{padding:20, alignItems:'center', flex:1, }}>
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
          style={{flex: 1, height: '100%', width: '90%'}}
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
    fontSize:adjust(40),
    marginBottom:200
  }
})