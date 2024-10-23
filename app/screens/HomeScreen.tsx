import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const HomeScreen = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const sendData = async () => {
    try {
      const response = await fetch('http://192.168.4.1/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: login,
          password: password,
        }),
      });

      const data = await response.json();
      Alert.alert('Status', data.status || 'Wysłano dane');
    } catch (error) {
      console.error(error);
      Alert.alert('Błąd', 'Nie udało się wysłać danych');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Login"
        value={login}
        onChangeText={setLogin}
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Hasło"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <Button title="Wyślij" onPress={sendData} />
    </View>
  );
};

export default HomeScreen;
