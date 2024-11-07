import { Alert } from 'react-native';

export const sendDataToESP32 = async (login: string, password: string) => {
  try {
    const response = await fetch('http://192.168.4.1/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ 
        ssid: login,
        password: password,
      }),
    });

    const data = await response.json();
    Alert.alert('Status', data.status || 'Wysłano dane');
    return data;
  } catch (error) {
    console.error(error);
    Alert.alert('Błąd', 'Nie udało się wysłać danych');
    throw new Error('Failed to send data');
  }
};