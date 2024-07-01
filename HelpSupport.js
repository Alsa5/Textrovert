import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HelpSupport = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Help & Support</Text>
      <View style={styles.content}>
        <Text>FAQs</Text>
        <Text>Contact Support</Text>
        <Text>Report a Problem</Text>
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

export default HelpSupport;
