import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';
const CartTabIcon = props => {
  const cart = useSelector(state => state.cartReducer.cart);
  //Get the cart state from redux store, to display whether there are items in the cart or not.
  return (
    <View>
      {(cart.length && cart.length > 0) ? (
        <View
          style={{
            position: 'absolute',
            height: 10,
            width: 10,
            borderRadius: 15,
            backgroundColor: 'orange',
            right: -10,
            bottom: 20,
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
          }}/> ): null}
      <Icon name="cart-plus" color={props.tintColor} size={25} />
    </View>
  );
};

export default CartTabIcon;
