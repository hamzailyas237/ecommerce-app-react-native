


import { Text } from '@rneui/base'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Setting from '../setting/Setting';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Setting"
                component={Setting}
            />
        </Tab.Navigator>
    )
}

export default TabNavigation