import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/StoreandCart.styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart, deleteFromCart} from '../redux/actions';

const fallbackImage=require('../assets/book.png');
const StoreScreen = ({navigation}) => {
  const data = useSelector(state => state.listReducer.list);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartReducer.cart);
  const username = useSelector(state => state.loginReducer.username);

  const isInCart = item => {
    return cart.find(book => book.id === item.id);
  };
  const onPressPlus = item => {
    if (isInCart(item)) {
      dispatch(deleteFromCart(item));
    } else {
      dispatch(addToCart(item));
    }
  };
  const _renderItem = ({item, index}) => {
    const imageUrl=item?.volumeInfo?.imageLinks?.smallThumbnail;
    return (
      <View>
        <TouchableOpacity
          style={styles.container}
          onPress={() => navigation.navigate('Details', {book: item})}>
          <View style={styles.icnblock}>
            <Image
              source={ imageUrl ? {uri:imageUrl}  : fallbackImage}
              style={styles.image}
            />
          </View>
          <View style={styles.titleBlock}>
            <Text style={styles.title}>{item.volumeInfo.title}</Text>
            <Text style={styles.subHeader}>Rs {(item.volumeInfo.pageCount) ? item.volumeInfo.pageCount : 0}</Text>
          </View>
          <View style={styles.plusBlock}>
            <Icon
              name="plus"
              size={30}
              style={[
                styles.plusIcon,
                {
                  color: isInCart(item) ? 'orange' : 'black',
                },
              ]}
              onPress={() => onPressPlus(item)}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  const header = () => {
    return (
      <View style={styles.headerblock}>
        <Text style={styles.headertitle}>Hello, {username}!</Text>
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
