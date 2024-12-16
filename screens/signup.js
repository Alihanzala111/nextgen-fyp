import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';

const SignUpScreen = ({ navigation }) => {  // Adding navigation prop here
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
      Alert.alert('Error', 'Please fill in all fields.');
    } else if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
    } else {
      Alert.alert('Success', `Account created for ${name}!`);
      navigation.navigate('Login');  // Navigate to Login screen after successful sign up
    }
  };

  return (
    <View style={styles.container}>
      {/* White Background for the upper section with space for the image */}
      <View style={styles.topSection}></View>

      {/* Sky-Blue Background for Sign Up Form */}
      <View style={styles.bottomSection}>
        <Text style={styles.signupText}>Sign Up</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#888"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm your password"
          placeholderTextColor="#888"
          secureTextEntry
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />

        <TouchableOpacity style={styles.signupButton} onPress={handleSignUp}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Navigate back to Login Screen */}
        <TouchableOpacity 
          style={styles.loginButton} 
          onPress={() => navigation.navigate('Login')}  // Navigation to Login screen
        >
          <Text style={styles.loginButtonText}>
            Already have an account? Login!
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
    overflow: 'hidden', // Prevents overflow of child components with rounded corners
  },
  topSection: {
    flex: 1, // Reduced height for the top section
    backgroundColor: '#FFF', // White background
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 3, // Increased height for the blue section
    backgroundColor: '#D5E7FF', // Sky-blue background
    paddingTop: 20, // Reduced padding to move fields up
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  signupText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10, // Reduced margin to pull it closer
    color: '#000',
  },
  input: {
    width: '80%',
    height: 45,
    backgroundColor: '#FFF',
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 15,
    paddingLeft: 15,
    fontSize: 16,
  },
  signupButton: {
    width: '80%',
    height: 45,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 15,
  },
  signupButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginButton: {
    marginTop: 10,
  },
  loginButtonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default SignUpScreen;
