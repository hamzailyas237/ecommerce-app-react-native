
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/login/Login';
import Signup from '../screens/signup/Signup';
import ProductDetail from '../screens/productDetail/ProductDetail';
import Splash from '../screens/splash/Splash';
import MainScreen from '../screens/mainScreen/MainScreen';


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


