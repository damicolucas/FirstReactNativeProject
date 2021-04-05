import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CustomTabBar from '../components/CustomTabBar';

import Home from '../screens/Home';
import Account from '../screens/Account';


const Tab = createBottomTabNavigator();

export default () => (
    <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}>        
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
);