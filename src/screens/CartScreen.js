import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Alert,
  Dimensions,
} from 'react-native';
import styles from '../styles/StoreandCart.styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import {deleteFromCart} from '../redux/actions';
const fallbackImage = require('../assets/book.png');
const POST_CART_DATA_URL = 'https://api.tago.care/assignment/';
const height = Dimensions.get('screen').height;
console.log(height);
const CartScreen = ({navigation}) => {
  //Require the cart from redux store using reducers
  const data = useSelector(state => state.cartReducer.cart);
  //Create a dispatch call instance
  const dispatch = useDispatch();
  const deleteItem = item => {
    dispatch(deleteFromCart(item));
  };
  let totalPrice = data.reduce(function (sum, tax) {
    return sum + (tax?.volumeInfo?.pageCount ? tax.volumeInfo.pageCount : 0);
  }, 0);

  const bookDetails = data.map(elem => {
    return {
      id: elem?.id ? elem.id : 0,
      title: elem?.volumeInfo?.title ? elem.volumeInfo.title : 'Not Found',
    };
  });
  var body = {
    name: 'aditya',
    total: totalPrice,
    books: bookDetails,
  };
  console.log(JSON.stringify(body, null, 2));
  const sendDataToAPI = () => {
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    if (bookDetails && bookDetails.length > 0) {
      //Making a POST call to the API
      console.log('Making POST ', POST_CART_DATA_URL, options),
        fetch(POST_CART_DATA_URL, options)
          .then(res => res.json())
          .then(res => {
            console.log('POST https://api.tago.care/assignment/', res);
            //TODO: Empty the cart after making a successful call.
            Alert.alert('Your order has been placed');
          })
          .catch(
            error =>
              console.log(
                'Error POST https://api.tago.care/assignment/',
                error,
              ),
            //Alert.alert('Your order could not be placed, please try again')
          );
    } else {
      Alert.alert('Nothing in cart');
    }
  };
  const _renderItem = ({item}) => {
    const imageUrl = item?.volumeInfo?.imageLinks?.smallThumbnail;
    return (
      <View style={styles.container}>
        <View style={styles.icnblock}>
          <Image
            source={imageUrl ? {uri: imageUrl} : fallbackImage}
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
          <Text style={styles.amtBlock}>
            Rs {item.volumeInfo.pageCount ? item.volumeInfo.pageCount : 0}
          </Text>
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
  const BuyModal = () => {
    return (
      <View
        style={{
          width: 400,
          backgroundColor: 'grey',
          height: 180,
          top: height - 880,
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: 10,
        }}>
        <View style={{marginTop: 20, marginLeft: -200}}>
          <Text>No. of books: {data.length}</Text>
          <Text>Total Price: Rs. {totalPrice}</Text>
        </View>
        <TouchableOpacity
          style={styles.box}
          onPress={() => {
            sendDataToAPI();
          }}>
          <Text style={styles.txtStyle}>Buy now</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <FlatList
          ListHeaderComponent={header}
          data={Object.values(data)}
          renderItem={_renderItem}
          stickyHeaderIndices={[0]}
        />
      </View>
      <View
        style={{
          zIndex: 2000,
          marginTop: 611,
          marginLeft: 10,
          position: 'absolute',
        }}>
        <BuyModal />
      </View>
    </View>
  );
};

export default CartScreen;
