import React from 'react';
import { View, Text, Button } from 'react-native';
import LEDControlButton from '../components/LEDControlButton';
import { GifSelectedHandler } from '../utils/GifSelectedHandler';

const ControlScreen = () => {
    return(
        <View>
            <LEDControlButton onPress={GifSelectedHandler} imageSource={'../assets/test.png'} title='test'></LEDControlButton>
        </View>    
    )
}

export default ControlScreen;