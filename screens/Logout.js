import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LogoutScreen = ({ navigation }) => {
  const handleLogout = () => {
    // Perform logout actions here (clear token, reset state, etc.)
    // Example: Clear user session/token
    // AsyncStorage.removeItem('userToken');
    
    // Navigate to the login screen or any initial screen
    navigation.navigate('Login'); // Replace 'Login' with your login screen name
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Are you sure you want to logout?</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default LogoutScreen;
