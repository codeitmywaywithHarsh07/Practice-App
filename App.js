import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './App/Screens/WelcomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './App/Screens/HomeScreen';
import HomeTab from './App/HomeTab';
import CourseScreen from './App/Screens/CourseScreen';
import { AppProvider } from './App/Utils/AppContext';
import ProfileScreen from './App/Screens/ProfileScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='WelcomeScreen' screenOptions={{ headerShown: false }} >
          <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
          <Stack.Screen name='HomeTab' component={HomeTab} />
          <Stack.Screen name='CourseScreen' component={CourseScreen} />
          <Stack.Screen name='ProfileScreen' component={ProfileScreen} />
        </Stack.Navigator> 
      </NavigationContainer>
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
