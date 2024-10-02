import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import LEDControlButton from "../components/LEDControlButton";
import { ShortHandler } from "../utils/GifSelectedHandler";

const gifs = [
    { id: '1', uri: require('../../assets/pikachu.gif'), title: 'pikachu' },
    { id: '2', uri: require('../../assets/katanamen.gif'), title: 'katanamen' },
    { id: '3', uri: require('../../assets/packman.gif'), title: 'packman' },
    { id: '4', uri: require('../../assets/coolduck.gif'), title: 'coolduck' },
    { id: '5', uri: require('../../assets/sus.gif'), title: 'sus' },

];

const ControlScreen: React.FC = () => {
    const renderItem = ({ item }) => (
        <LEDControlButton
            onPress={() => ShortHandler()}
            onLongPress={() => null}
            gifSource={item.uri}
            title={item.title}
        />
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={gifs}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                numColumns={4}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    list: {
        justifyContent: 'center',
    },
});

export default ControlScreen;