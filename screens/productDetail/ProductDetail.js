
import { Text } from '@rneui/base'
import React, { useState } from 'react'
import { TouchableOpacity, ScrollView } from 'react-native';
import { Card } from '@rneui/themed';
import { Header } from '@rneui/themed';

const ProductDetail = ({ route }) => {
    const product = route.params

    return (
        <ScrollView>
            <Card>
                <Card.Title>{product.title}</Card.Title>
                <Card.Divider />
                <Card.Image
                    resizeMode='contain'
                    source={{
                        uri: product.image
                    }}
                />
                <Text style={{ marginTop: 30, marginBottom: 10 }}>{product.description}</Text>
                <Text style={{ marginBottom: 10 }}>
                    {product.price} $
                </Text>
                <Text style={{ marginBottom: 10 }}>

                    {product.rating ?
                        <Text>
                            {`${product.rating.rate} ratings`} |
                            {` ${product.rating.count} orders`}
                        </Text>
                        :
                        <Text>
                            no ratings |
                            no orders
                        </Text>

                    }
                </Text>
                <TouchableOpacity>
                    <Text style={{ textAlign: 'center' }}>Add To Cart</Text>
                </TouchableOpacity>
            </Card>
        </ScrollView>
    )
}

export default ProductDetail