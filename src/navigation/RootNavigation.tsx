import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '../screen/HomeScreen';
import DetailScreen from '../screen/DetailScreen';

const RootStack = createNativeStackNavigator();

export default () => {
    return (<RootStack.Navigator initialRouteName="HomeScreen">
        <RootStack.Screen name="HomeScreen" component={HomeScreen} />
        <RootStack.Screen name="DetailScreen" component={DetailScreen} />
    </RootStack.Navigator>)
}