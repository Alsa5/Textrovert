import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';
import { RAPID_API_KEY } from '@env';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome icons

const MainScreen = ({ navigation }) => {
  const [word, setWord] = useState('');
  const [meaning, setMeaning] = useState('');
  const [loading, setLoading] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false); // State for menu visibility

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const fetchMeaning = async () => {
    setLoading(true);
    try {
      const options = {
        method: 'GET',
        url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
        params: { term: word },
        headers: {
          'x-rapidapi-key': RAPID_API_KEY,
          'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com',
        },
      };

      const response = await axios.request(options);
      setMeaning(response.data.list[0]?.definition || 'No definition found');
    } catch (error) {
      console.error('Error fetching meaning:', error);
      setMeaning('Failed to fetch meaning. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const navigateToScreen = (screenName) => {
    setMenuVisible(false); // Close menu after navigation
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
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
            onPress={() => navigateToScreen('ProfileSettings')}
          >
            <Icon name="user" size={20} color="#333" style={styles.icon} />
            <Text style={styles.dropdownItemText}>Profile Settings</Text>
          </TouchableOpacity>
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
          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={() => navigateToScreen('Logout')}
          >
            <Icon name="sign-out" size={20} color="#333" style={styles.icon} />
            <Text style={styles.dropdownItemText}>Logout</Text>
          </TouchableOpacity>
        </View>
      )}

      <View style={styles.centerContent}>
        <TextInput
          style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 20 }}
          placeholder="Enter word"
          value={word}
          onChangeText={setWord}
        />
        <Button title="Fetch Meaning" onPress={fetchMeaning} />
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />
        ) : (
          <Text style={{ marginTop: 20 }}>{meaning}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align content at the top
    alignItems: 'center',
    paddingTop: 40, // Push content down from top
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
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
    width: 200, // Adjust width as needed
    position: 'absolute',
    right: 20, // Adjust position as needed
    top: 60, // Adjust position as needed
    zIndex: 1000, // Ensure it's above other components
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
  icon: {
    marginRight: 10,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MainScreen;
