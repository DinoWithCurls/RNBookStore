import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { addToCart, deleteFromCart} from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
const DetailsScreen = ({navigation, route}) => {

  const dispatch = useDispatch();
  const cart =  useSelector(state => state.cartReducer.cart);
  
  return (
    <View
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}>
      <View style={{marginLeft: -340, marginTop: 20}}>
        <TouchableOpacity onPress={()=>navigation.navigate('Store')}>
          <Icon name="left" size={30} />
        </TouchableOpacity>
      </View>
      <Image
        source={{uri: route.params.book.volumeInfo.imageLinks.thumbnail}}
        style={{width: 200, height: 300, marginVertical: 10}}
      />
      <Text style={styles.bookName}>{route.params.book.volumeInfo.title}</Text>
      <Text style={styles.bookPrice}>
        Rs {route.params.book.volumeInfo.pageCount}
      </Text>
      <Text style={styles.bookDesc}>
        {route.params.book.volumeInfo.description}
      </Text>
      
      { !cart.find(item => item.id === route.params.book.id) ? <TouchableOpacity style={styles.box} onPress={()=> dispatch(addToCart(route.params.book))}>
        <Text style={styles.txtStyle}>Add To Cart</Text>
    </TouchableOpacity> : <TouchableOpacity style={styles.box} onPress={()=> dispatch(deleteFromCart(route.params.book))}>
        <Text style={styles.txtStyle}>Remove From Cart</Text>
    </TouchableOpacity>}
      
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  bookName: {
    fontSize: 21,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    marginVertical: 5,
    marginBottom: 10,
  },
  bookDesc: {
    fontSize: 17,
    fontFamily: 'Montserrat',
    fontWeight: 'normal',
    marginTop: 1,
  },
  bookPrice: {
    fontSize: 21,
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    color: 'grey',
    marginBottom: 20,
  },
  box: {
    width: 326,
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'black',
    marginTop: 50,
  },
  txtStyle: {
    fontFamily: 'Lato',
    fontWeight: '700',
    fontStyle: 'normal',
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: 2.95,
    color: 'white',
  },
});
