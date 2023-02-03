

import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import { View } from 'react-native';
import Home from '../home/Home';
import Location from '../location/Location';
import Post from '../post/Post';
import Profile from '../profile/Profile';
import TabNavigation from '../tabNavigation/TabNavigation';

const Drawer = createDrawerNavigator();

const MainScreen = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name="Home"
                component={Home}
            />
            <Drawer.Screen
                name="Profile"
                component={Profile}
            />
            <Drawer.Screen
                name="Map"
                component={Location}
                options={{ headerShown: false }}
            />
            <Drawer.Screen
                name="Post"
                component={Post}
            />
            <Drawer.Screen
                name="TabNavigation"
                component={TabNavigation}
                options={{ headerShown: false }}
            />
        </Drawer.Navigator>

    )
}

export default MainScreen