
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import Home from '../pages/home/Home';
import ProductDetail from '../pages/productDetail/ProductDetail';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Splash from '../pages/splash/Splash';
import MainScreen from '../pages/mainScreen/MainScreen';
import TabNavigation from '../pages/tabNavigation/TabNavigation';


const Stack = createNativeStackNavigator();




function AppNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen name="Sign Up" component={Signup}
                    options={{ headerShown: false }}
                />

                <Stack.Screen name="Splash" component={Splash}
                    options={{ headerShown: false }}
                />

                <Stack.Screen name="MainScreen" component={MainScreen}
                    options={{ headerShown: false }}
                />

                <Stack.Screen name="Product Detail" component={ProductDetail}
                />

            </Stack.Navigator>


        </NavigationContainer>
    );
}

export default AppNavigation;


