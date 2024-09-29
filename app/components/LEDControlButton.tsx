import React from "react";
import { TouchableOpacity , Image , StyleSheet, Text } from "react-native";

interface LEDControlButtonProps {
    onPress:() => void;
    imageSource: any;
    title: string;
}

const LEDControlButton: React.FC<LEDControlButtonProps> = ({onPress, imageSource, title}) => {
    return(
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Image source={imageSource} style={styles.image}/>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 5
    },
    image:{
        width: 100,
        height: 100
    },
    text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
})

export default LEDControlButton;