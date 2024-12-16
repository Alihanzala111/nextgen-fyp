import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importing Login and SignUp screens
import LoginScreen from './screens/login.js'; // Update with the correct path if needed
import SignUpScreen from './screens/signup.js'; // Update with the correct path if needed

// Create a Stack Navigator
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ title: 'Login' }} // Optional: set title of the screen
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen} 
          options={{ title: 'Sign Up' }} // Optional: set title of the screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}