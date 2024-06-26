import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './App/Screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeTab from './App/Screens/HomeTab';
import CourseScreen from './App/Screens/CourseScreen';
import { AppProvider } from './App/Utils/AppContext';
import ProfileScreen from './App/Screens/ProfileScreen';
import { ColorThemeProvider } from './App/Utils/ColorThemeContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <ColorThemeProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='WelcomeScreen' screenOptions={{ headerShown: false }} >
            <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
            <Stack.Screen name='HomeTab' component={HomeTab} />
            <Stack.Screen name='CourseScreen' component={CourseScreen} />
            <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
          </Stack.Navigator> 
        </NavigationContainer>
      </ColorThemeProvider>
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
