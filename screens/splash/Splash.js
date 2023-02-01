
import React, { useEffect } from 'react'
import { Text, View } from 'react-native';


const Splash = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('MainScreen')
        }, 2000);
    })
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Splash Screen</Text>
        </View>
    )
}

export default Splash