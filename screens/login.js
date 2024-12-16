import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const LoginScreen = ({ navigation }) => {  // Adding navigation prop here
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (name === '' || password === '') {
      Alert.alert('Error', 'Please enter both name and password.');
    } else {
      Alert.alert('Success', `Welcome, ${name}!`);
    }
  };

  return (
    <View style={styles.container}>
      {/* White Background for the upper section with space for the image */}
      <View style={styles.topSection}></View>

      {/* Sky-Blue Background for Login Form */}
      <View style={styles.bottomSection}>
        <Text style={styles.loginText}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        {/* Navigate to SignUp Screen */}
        <TouchableOpacity 
          style={styles.signupButton} 
          onPress={() => navigation.navigate('SignUp')}  // Navigation to SignUp screen
        >
          <Text style={styles.signupButtonText}>
            Don't have an account? Sign Up!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5E7FF', // Sky-blue background for the full container
    borderTopLeftRadius: 15, // Slightly rounded top-left corner
    borderTopRightRadius: 15, // Slightly rounded top-right corner
    overflow: 'hidden', // Prevents overflow of child components with rounded corners
  },
  topSection: {
    flex: 1.5, // Occupies 1.5 parts of the screen
    backgroundColor: '#FFF', // White background
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 2, // Occupies 2 parts of the screen
    backgroundColor: '#D5E7FF', // Sky-blue background
    paddingTop: 40,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    paddingLeft: 15,
    fontSize: 16,
  },
  loginButton: {
    width: '80%',
    height: 50,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupButton: {
    marginTop: 10,
  },
  signupButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'normal',
  },
});

export default LoginScreen;
