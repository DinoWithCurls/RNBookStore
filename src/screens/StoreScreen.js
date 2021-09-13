import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import styles from '../styles/StoreandCart.styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import { addToCart } from '../redux/actions';

const StoreScreen = ({navigation}) => {
  const data = useSelector(state => state.listReducer.list); 
  const [user, setUser] = React.useState('User');
  
  
  const dispatch = useDispatch();
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
              onPress={() => console.log('plus sign ', item.id)}
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

