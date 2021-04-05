import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Preload from '../screens/Preload';
import Login from '../screens/Login';
import MainTabs from '../stacks/MainTabs';


const Stack = createStackNavigator ();

export default () => (
    <Stack.Navigator
        initialRouteName="Preload"
        screenOptions={{
            headerShown: false,
        }}
    >
        <Stack.Screen name="Preload" component={Preload} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
);
