

import React from 'react'
import { Alert, Text, View, TouchableOpacity } from 'react-native'
import { Card, Button, Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const ProductCard = ({ product }) => {

    const navigation = useNavigation();
    const goToProductDetail = () => {
        navigation.navigate('Product Detail', product)
    }

    return (
        <Card>
            <Card.Title>{product.title}</Card.Title>
            <Card.Divider />
            <Card.Image
                resizeMode='contain'
                source={{
                    uri: product.image
                }}
            />
            <Text style={{ marginBottom: 10 }}>
                {product.price} $
            </Text>
            <TouchableOpacity onPress={goToProductDetail}>
                <Text style={{ textAlign: 'center' }}>VIEW DETAIL</Text>
            </TouchableOpacity>
        </Card>
    )
}

export default ProductCard