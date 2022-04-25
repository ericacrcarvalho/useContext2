import React from 'react';
import {Text, View } from 'react-native';
import MyButton from '../components/button/MyButton';

const Child = () => {
    return (
        <View>
            <Text>My Child</Text>
            <MyButton/>
        </View>
    )
};
export default Child;