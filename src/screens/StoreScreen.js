import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
const StoreScreen = ({navigation}) => {
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
  /*const detectUser = async() => {
    const token = await AsyncStorage.getItem('username');
    console.log(token);
    setUser(token);
  }*/
  React.useEffect(() => {
    getData();
    //detectUser;
  }, []);
  const _renderItem = ({item, index}) => {
    return (
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => navigation.navigate('Details', { book: item})}>
          <View style={styles.icnblock}>
            <Image
              source={{uri: item.volumeInfo.imageLinks.smallThumbnail}}
              style={styles.image}
            />
          </View>
          <View style={styles.titleBlock}>
            <Text style={styles.title}>{item.volumeInfo.title}</Text>
            <Text style={styles.subHeader}>Rs {item.volumeInfo.pageCount}</Text>
          </View>
          <View style={styles.plusBlock}>
            <Icon
              name="plus"
              size={30}
              style={styles.plusIcon}
              onPress={() => console.log('hello')}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const header = () => {
    return (
      <View style={styles.headerblock}>
        <Text style={styles.headertitle}>Hello, {user}!</Text>
        <Text style={styles.headerSubTitle}>LIST</Text>
      </View>
    );
  };
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        ListHeaderComponent={header}
        data={Object.values(data)}
        renderItem={_renderItem}
      />
    </View>
  );
};

export default StoreScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
    flex: 1,
    width: 450,
  },
  image: {
    width: 80,
    height: 120,
    marginVertical: 10,
  },
  titleBlock: {
    flexDirection: 'column',
    flex: 5,
  },
  plusIcon: {
    marginTop: 30,
  },
  title: {
    fontSize: 15,
    fontFamily: 'Montserrat',
    fontWeight: '700',
    marginTop: 20,
    flexShrink: 1,
    marginRight: 20,
    marginLeft: -5,
  },
  subHeader: {
    fontFamily: 'Montserrat',
    fontSize: 14,
    fontWeight: '200',
    marginVertical: 2,
    marginLeft: -5,
  },
  headerblock: {
    height: 90,
  },
  headertitle: {
    fontSize: 20,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    marginTop: 20,
    marginLeft: 50,
  },
  headerSubTitle: {
    fontSize: 25,
    fontFamily: 'Montserrat',
    fontWeight: '500',
    marginVertical: 2,
    marginLeft: 50,
  },
  icnblock: {
    flex: 2,
  },
  plusBlock: {
    flex: 1.5,
  }
});
