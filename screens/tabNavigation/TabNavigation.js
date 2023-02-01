


import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Setting from '../setting/Setting';
import Notifications from '../notifications/Notifications';
import Icon from 'react-native-vector-icons/MaterialIcons';



const Tab = createBottomTabNavigator();


{/* <Tab.Navigator tabBarOptions={{
    activeTintColor: '#e91e63',
}}> */}

const TabNavigation = () => {
    return (
        <Tab.Navigator screenOptions={{
            // I you remove tint color, by default primary color will be applied 
            tabBarActiveTintColor: 'green',
        }}>
            <Tab.Screen
                name="Setting"
                component={Setting}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="settings" color={color} size={size} />)
                }}
            />
            <Tab.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="notifications" color={color} size={size} />)
                }}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation