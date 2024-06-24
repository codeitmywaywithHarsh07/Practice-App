import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './Screens/HomeScreen';
import SettingScreen from './Screens/SettingScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import CourseScreen from './Screens/CourseScreen';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from './Utils/AppContext';

const Tab = createBottomTabNavigator();

const HomeTab = ({navigation}) => {
    const {user,setUser} = useContext(AppContext);
  return (
    <Tab.Navigator initialRouteName='HomeScreen' screenOptions={{ headerShown: false }}>
        <Tab.Screen name='Home' options={{
            tabBarIcon: ({color,size})=>{
                return <FontAwesome5 name="home" size={18} />
            },
            tabBarLabelStyle:{fontSize:15},
            tabBarActiveTintColor:"blue",
            tabBarInactiveTintColor:"gray"
        }} component={HomeScreen}/>


        <Tab.Screen name='Course' options={{
            tabBarIcon:(color,size)=>{
                return <Ionicons name="library" size={18} />
            },
            tabBarLabelStyle:{fontSize:15},
            tabBarActiveTintColor:"blue",
            tabBarInactiveTintColor:"gray"
        }} component={CourseScreen} />


        <Tab.Screen name='Settings' options={{
            tabBarIcon:(color,size)=>{
                return <Feather name="settings" size={18} />
            },
            tabBarLabelStyle:{fontSize:15},
            tabBarActiveTintColor:"blue",
            tabBarInactiveTintColor:"gray"
        }} component={SettingScreen} />

    </Tab.Navigator>
  )
}

export default HomeTab

const styles = StyleSheet.create({})