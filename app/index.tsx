import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import ControlScreen from './screens/ControlScreen';
import AddScreen from './screens/AddScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={ControlScreen} />
        <Tab.Screen name="Add" component={AddScreen}/>
      </Tab.Navigator>
  );
}