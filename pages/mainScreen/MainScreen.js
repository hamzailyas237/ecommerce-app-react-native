

import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import { View } from 'react-native';
import Home from '../home/Home';

const Drawer = createDrawerNavigator();

const MainScreen = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Home"
                component={Home}
            />
        </Drawer.Navigator>

    )
}

export default MainScreen