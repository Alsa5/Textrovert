import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Homepage';
import LoginScreen from './screens/Loginpage';
import SignupScreen from './screens/Signuppage';
import MainScreen from './screens/Mainpage';
import ProfileSettings from './screens/ProfileSettings';
import Settings from './screens/Settings';
import HelpSupport from './screens/HelpSupport';
import About from './screens/About';
import LogoutScreen from './screens/Logout';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="GetGenzd" component={MainScreen} />
        <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="HelpSupport" component={HelpSupport} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Logout" component={LogoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
