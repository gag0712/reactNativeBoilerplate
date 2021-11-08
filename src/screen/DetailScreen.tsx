import React, { useEffect, useState } from 'react';
import {
    Pressable,
    Text,
    View,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../modules';

const DetailScreen = () => {
    const navigation = useNavigation()
    const store = useSelector((state: RootState) => state);



    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Text>Detail Screen</Text>
            <Text>
                {store.counter.count}
            </Text>


            <Pressable
                onPress={() => navigation.navigate('HomeScreen')}
            >
                <Text>Home Screen</Text>
            </Pressable>


        </View>
    );
}

export default DetailScreen