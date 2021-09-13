import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const CartTabIcon = (props) =>{
    return (
        <View>
            <View 
                style={{
                    position: 'absolute',
                    height: 10,
                    width: 10,
                    borderRadius:15,
                    backgroundColor:'orange',
                    right:-10,
                    bottom:20,
                    alignItems:'center',
                    justifyContent:'center',
                    zIndex:2000
                }}>
            </View>
            <Icon name="cart-plus" color={props.tintColor} size={25} />
        </View>
    )
}

export default CartTabIcon;