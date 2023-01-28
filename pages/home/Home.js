

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native'
import ProductCard from '../../components/ProductCard';

const Home = () => {

    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                setProducts(response.data)
            })
            .catch(err => console.log('err', err))
    }, [])

    return (
        <ScrollView>
            <View>

                {
                    products ? products.map(product => {
                        return <ProductCard key={product.id} product={product} />
                    })
                        :
                        <Text>Loading...</Text>
                }
            </View>
        </ScrollView>

    )
}

export default Home