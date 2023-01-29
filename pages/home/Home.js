

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import ProductCard from '../../components/ProductCard';

const Home = () => {

    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                setProducts(response.data)
                setLoader(false)
            })
            .catch(err => {
                console.log('err', err)
                setLoader(false)
            })
    }, [])

    return (
        <ScrollView>
            <View>

                {
                    loader ? <ActivityIndicator size="large" style={{ marginTop: 10 }} />
                        :
                        products && products.map(product => {
                            return <ProductCard key={product.id} product={product} />
                        })
                }
            </View>
        </ScrollView>

    )
}

export default Home