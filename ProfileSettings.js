import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileSettings = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Profile Settings</Text>
      <View style={styles.content}>
        <Text>Edit Profile Picture</Text>
        <Text>Update Bio</Text>
        <Text>Change Password</Text>
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

export default ProfileSettings;
