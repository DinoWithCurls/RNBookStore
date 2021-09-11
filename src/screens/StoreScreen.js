import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const StoreScreen = navigation => {
  const [data, setData] = React.useState({});
  const [user, setUser] = React.useState('User');
  const getData = () => {
    const url =
      'https://www.googleapis.com/books/v1/volumes?q=harry+potter&maxResults=20';
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setData(res.items);
      })
      .catch(error => {
        console.log('get data error:' + error);
      });
  };
  const detectUser = async() => {
    const token = await AsyncStorage.getItem('username');
    console.log(token);
    setUser(token);
  }
  React.useEffect(()=>{
      getData();
      detectUser;
  }, []);
  const _renderItem = ({item,index}) => {
    return(
        <View style={styles.container}>
            <Image source = {{uri: item.volumeInfo.imageLinks.smallThumbnail}} style={styles.image} />
            <View style={styles.titleBlock}>
                <Text style={styles.title}>{item.volumeInfo.title}</Text>
                <Text style={styles.subHeader}>{item.volumeInfo.pageCount}</Text>
            </View>
            <Icon name="plus" size={30} style={styles.plusIcon} />
        </View>
    )
  }
  const header = () => {
    return (
      <View>
        <Text>Hello, {user}</Text>
      </View>
    )
  }
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        ListHeaderComponent={header}
        data={data}
        renderItem={_renderItem}
      />
    </View>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
    },
    image: {
        width:80,
        height:120,
        marginLeft:10,
        marginVertical:10
    },
    titleBlock:{
        flexDirection:'column',
        alignItems: 'center',
        marginLeft:10,
        marginTop:40,
    },
    plusIcon:{
        marginRight:90,
        marginTop:50
    },
    title:{
        fontSize:15,
        fontFamily:'Montserrat',
        fontWeight:'500',
        marginVertical:2,
        flexShrink:1
    },
    subHeader:{
        fontFamily:'Montserrat',
        fontSize:14,
        fontWeight:'300',
        marginVertical:2
    }
})