
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import Home from '../pages/home/Home';
import ProductDetail from '../pages/productDetail/ProductDetail';


const Stack = createNativeStackNavigator();

function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Sign Up" component={Signup} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Product Detail" component={ProductDetail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;