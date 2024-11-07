import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { sendDataToESP32 } from '../services/ESP32Service';

const HomeScreen = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSendData = async () => {
    try {
      await sendDataToESP32(login, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Login"
        value={login}
        onChangeText={setLogin}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Send Data" onPress={handleSendData} />
    </View>
  );
};

export default HomeScreen;