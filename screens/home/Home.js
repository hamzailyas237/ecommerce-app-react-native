

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, ScrollView, Text, View } from 'react-native'
import ProductCard from '../../components/ProductCard';
import database from '@react-native-firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';




const Home = () => {

    const [products, setProducts] = useState([])
    const [loader, setLoader] = useState(true)

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");


    const [customProducts, setCustomProducts] = useState([]);



    useEffect(() => {
        // continue from rendering the below data (target nested keys firebase db)
        const getProductsData = async () => {
            const userId = await AsyncStorage.getItem('uid')
            database()
                .ref(`Products/${userId}`)
                .on('value', data => {
                    // console.log(data.val())
                    setLoader(false)
                    data.forEach(async (data, i) => {
                        console.log(data.val())
                    });
                });
        }

        axios.get('https://fakestoreapi.com/products')
            .then((response) => {
                getProductsData()
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
            <View style={{ paddingBottom: 20 }}>
                {
                    loader ? <ActivityIndicator size="large" style={{ marginTop: 10 }} />
                        :

                        products && products.map((product, i) => {
                            return <ProductCard key={i} product={product} />
                        })
                }
            </View>
        </ScrollView>

    )
}

export default Home