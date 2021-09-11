import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  GoogleSignin,
  GoogleSigninButton,
} from '@react-native-community/google-signin';
import WEBCLIENT_ID from '../../keys';
GoogleSignin.configure({
  webClientId: WEBCLIENT_ID,
  offlineAccess: false,
});
const GoogleLogin = ({navigation}) => {
  const [username, setUsername] = React.useState('');
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setUsername(userInfo);
      console.log(userInfo.user.name)
      console.log('lmao again');
    } catch (error) {
      console.log(error.message);
    }
  };
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
      <Text style={{marginBottom:20}}>{username && username.user && username.user.name}</Text>
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