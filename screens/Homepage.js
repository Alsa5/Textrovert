import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const HomeScreen = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const navigateToScreen = (screenName) => {
    setMenuVisible(false);
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.navbar}>
          <Text style={styles.logo}>Textrovert</Text>
          <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
            <Text style={styles.menuText}>Menu</Text>
          </TouchableOpacity>
        </View>

        {menuVisible && (
          <View style={styles.dropdownMenu}>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => navigateToScreen('Settings')}
            >
              <Icon name="cog" size={20} color="#333" style={styles.icon} />
              <Text style={styles.dropdownItemText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => navigateToScreen('HelpSupport')}
            >
              <Icon name="question-circle" size={20} color="#333" style={styles.icon} />
              <Text style={styles.dropdownItemText}>Help & Support</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => navigateToScreen('About')}
            >
              <Icon name="info-circle" size={20} color="#333" style={styles.icon} />
              <Text style={styles.dropdownItemText}>About</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.profileSection}>
          <Text style={styles.profileHeading}>Welcome Back!</Text>
        </View>

        <View style={styles.mainContent}>
          <Text style={styles.heading}>Find the Meaning</Text>
        </View>
      </View>
      
      <View style={styles.authContainer}>
  <View style={styles.buttonContainer}>
    <Button title="Login" onPress={() => navigation.navigate('Login')} />
  </View>
  <View style={styles.orContainer}>
    <Text style={styles.orText}>OR</Text>
  </View>
  <View style={styles.buttonContainer}>
    <Button title="Signup" onPress={() => navigation.navigate('Signup')} />
  </View>
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
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  authContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 10,
  },
  orContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  orText: {
    fontSize: 18,
    color: '#333',
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  dropdownMenu: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  dropdownItemText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  profileSection: {
    marginTop: 20,
    marginBottom: 40,
  },
  profileHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
  },
  icon: {
    marginRight: 10,
  },
});

export default HomeScreen;
