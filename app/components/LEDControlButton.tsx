import React, { useState } from "react";
import { TouchableOpacity, Image, StyleSheet, Text, View, Modal } from "react-native";
import {ShortHandler } from "../utils/GifSelectedHandler";

interface LEDControlButtonProps {
    onPress: () => void;
    onLongPress: () => void;
    gifSource: any;
    title: string;
}

const LEDControlButton: React.FC<LEDControlButtonProps> = ({ onPress, onLongPress, gifSource, title }) => {
    const [modalVisible, setModalVisible] = useState(false);

    const handleCloseModal = () => {
        setModalVisible(false);
    }

    const handleLongP = () => {       
        setModalVisible(true);
    } 

    return (
        <View>
            <TouchableOpacity onPress={ShortHandler} onLongPress={handleLongP} style={styles.button}>
                <Image source={gifSource} style={styles.image} />
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={handleCloseModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Image source={gifSource} style={styles.modalImage} />
                        <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
                            <Text style={styles.closeButtonText}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        margin: 8,
    },
    image: {
        width: 64,
        height: 64,
    },
    text: {
        marginTop: 4,
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    modalImage: {
        width: 200,
        height: 200,
    },
    closeButton: {
        marginTop: 16,
        padding: 8,
        backgroundColor: '#2196F3',
        borderRadius: 4,
    },
    closeButtonText: {
        color: 'white',
        fontSize: 16,
    },
});

export default LEDControlButton;