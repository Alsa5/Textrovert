import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>About</Text>
      <View style={styles.content}>
        <Text>App Version: 1.0.0</Text>
        <Text>Developer: Sakthi Alagappan</Text>
        <Text>Privacy Policy</Text>
        <Text>Terms of Service</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  content: {
    paddingHorizontal: 20,
  },
});

export default About;
