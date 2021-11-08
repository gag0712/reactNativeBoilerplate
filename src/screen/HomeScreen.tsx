import React, { useEffect, useState } from 'react';
import {
    Pressable,
    Text,
    View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../modules';
import { decrease, increase } from '../modules/counter';

const HomeScreen = () => {
    const store = useSelector((state: RootState) => state);
    const navigation = useNavigation()
    const dispatch = useDispatch();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Text>
                {store.counter.count}
            </Text>
            <Pressable
                onPress={() => dispatch(decrease())}
            >
                <Text>-1</Text>
            </Pressable>
            <Pressable
                onPress={() => dispatch(increase())}
            >
                <Text>+1</Text>
            </Pressable>
            <Pressable
                onPress={() => navigation.navigate('DetailScreen')}
            >
                <Text>Detail Screen</Text>
            </Pressable>


        </View>
    );
}

export default HomeScreen