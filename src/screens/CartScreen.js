import React from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import styles from '../styles/StoreandCart.styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import {deleteFromCart} from '../redux/actions';

const CartScreen = ({navigation}) => {

  const data = useSelector(state => state.cartReducer.cart);
  const dispatch = useDispatch();

  const deleteItem = item => {
      dispatch(deleteFromCart(item));
  };

  const _renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <View style={styles.icnblock}>
          <Image
            source={{uri: item.volumeInfo.imageLinks.smallThumbnail}}
            style={styles.image}
          />
        </View>
        <View style={styles.titleBlock}>
          <Text style={styles.title}>{item.volumeInfo.title}</Text>
          <Icon
            name="delete"
            size={20}
            style={styles.deleteIcon}
            onPress={() => deleteItem(item)}
          />
        </View>
        <View style={styles.plusBlock}>
          <Text style={styles.amtBlock}>Rs {item.volumeInfo.pageCount}</Text>
        </View>
      </View>
    );
  };
  const header = () => {
    return (
      <View style={styles.headerblock}>
        <Text style={[styles.headerSubTitle, {marginTop: 60}]}>
          Shopping Cart
        </Text>
        <Text
          style={[
            styles.amtBlock,
            {color: 'black', marginLeft: 350, marginTop: 1},
          ]}>
          Amount
        </Text>
      </View>
    );
  };
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <FlatList
        ListHeaderComponent={header}
        data={Object.values(data)}
        renderItem={_renderItem}
        stickyHeaderIndices={[0]}
      />
    </View>
  );
};

export default CartScreen;
