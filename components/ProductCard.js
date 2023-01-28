

import React from 'react'
import { Alert, Text, View, TouchableOpacity } from 'react-native'
import { Card, Button, Icon } from '@rneui/themed';

const ProductCard = ({ navigation, product }) => {

    const goToProductDetail = () => {
        navigation.navigate('Product Detail')
    }

    return (
        <Card>
            <Card.Title>{product.title}</Card.Title>
            <Card.Divider />
            <Card.Image
                style={{ padding: 0 }}
                source={{
                    uri:
                        'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
                }}
            />
            <Text style={{ marginBottom: 10 }}>
                {product.price}
            </Text>
            <Text style={{ marginBottom: 10 }}>
                {`${product.rating.rate} ratings`} |
                {` ${product.rating.count} orders`}
            </Text>
            <TouchableOpacity onPress={goToProductDetail}>
                <Text style={{ textAlign: 'center' }}>VIEW MORE</Text>
            </TouchableOpacity>
        </Card>)
}

export default ProductCard