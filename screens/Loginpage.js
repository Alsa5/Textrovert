import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import usersData from '../users.json'; // Import users data from JSON file

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      const user = usersData.find(u => u.email === email && u.password === password);

      if (user) {
        // Authentication successful
        navigation.navigate('GetGenzd');
      } else {
        setError('Invalid email or password');
      }
    } catch (error) {
      console.error('Error handling login:', error);
      setError('Failed to authenticate. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
      <Text style={styles.text}>Don't have an account?</Text>
      <Text style={styles.link} onPress={() => navigation.navigate('Signup')}>Signup</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  text: {
    marginTop: 10,
  },
  link: {
    color: 'blue',
    marginTop: 5,
  },
});

export default LoginScreen;
