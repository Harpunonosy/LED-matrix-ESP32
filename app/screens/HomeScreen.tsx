import axios from 'axios';
import React, { useState } from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import { PermissionsAndroid, Platform } from 'react-native';
import WifiManager from 'react-native-wifi-reborn';  // Alternatywnie do zarządzania Wi-Fi

const HomeScreen = () => {
  const [ssid, setSsid] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');

  // Funkcja do łączenia się z siecią ESP32
  const connectToESP32 = async () => {
    try {
      if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: "Permission to use Wi-Fi",
            message: "App needs permission to connect to Wi-Fi networks",
            buttonPositive: "OK",
          }
        );
        if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
          console.log("Location permission denied");
          return;
        }
      }

      // Łączenie się z Access Point ESP32
      await WifiManager.connectToProtectedSSID('ESP32-Setup', '123456789', false, false);
      console.log("Połączono z ESP32 Access Point");
      
      // Wyślij dane Wi-Fi do ESP32
      const res = await axios.post('http://192.168.4.1/wifi-setup', {
        ssid,
        password
      });
      
      setResponse(res.data);
    } catch (error) {
      console.error('Błąd podczas wysyłania danych:', error);
      setResponse('Błąd podczas wysyłania danych');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        value={ssid}
        onChangeText={setSsid}
        placeholder="Nazwa sieci Wi-Fi"
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Hasło Wi-Fi"
        style={{ borderBottomWidth: 1, marginBottom: 20 }}
        secureTextEntry
      />
      <Button title="Połącz z ESP32 i wyślij dane" onPress={connectToESP32} />
      <Text>Odpowiedź z ESP32: {response}</Text>
    </View>
  );
};

export default HomeScreen;
