import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'
const CartButton = () =>
{
    const navigation = useNavigation()
    return (
        <View>
            <TouchableOpacity
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: 10,
                    marginLeft: 10,
                    paddingHorizontal: 20,
                    paddingVertical: 10
                }}
                onPress={() => { navigation.navigate('Cart') }}
            >
                <Icon name='cart-plus' style={{ color: 'black', fontSize: 20 }} />
            </TouchableOpacity>
        </View>
    )
}

export default CartButton