import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen1 from './src/screens/screen1';
import HomeScreen2 from './src/screens/screen2';
import HomeScreen3 from './src/screens/screen3';
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home1" component={HomeScreen1} />
        <Stack.Screen name="Home2" component={HomeScreen2} />
        <Stack.Screen name="Home3" component={HomeScreen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App