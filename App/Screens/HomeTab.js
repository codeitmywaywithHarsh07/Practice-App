import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen';
import SettingScreen from './SettingScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import CourseScreen from './CourseScreen';
import { Ionicons } from '@expo/vector-icons';
import { AppContext } from '../Utils/AppContext';
import { darkTheme, lightTheme } from '../Utils/ColorTheme';
import { ColorThemeContext } from '../Utils/ColorThemeContext';

const Tab = createBottomTabNavigator();

const HomeTab = ({navigation}) => {
    const {user,setUser} = useContext(AppContext);
    const {isDark} = useContext(ColorThemeContext);
    const theme = isDark ? darkTheme : lightTheme;
  return (
    <Tab.Navigator initialRouteName='HomeScreen' 
        screenOptions={({route})=>({
            headerShown: false,
            tabBarStyle:{backgroundColor:theme.backgroundColor, borderColor:"gray"}
        })}>
        <Tab.Screen name='Home' options={{
            tabBarIcon: ({color,size})=>{
                return <FontAwesome5 style={{color:theme.textColor}} name="home" size={18} />
            },
            tabBarLabelStyle:{fontSize:15},
            tabBarActiveTintColor:theme.buttonBackground,
            tabBarInactiveTintColor:"gray"
        }} component={HomeScreen}/>


        <Tab.Screen name='Course' options={{
            tabBarIcon:(color,size)=>{
                return <Ionicons style={{color:theme.textColor}} name="library" size={18} />
            },
            tabBarLabelStyle:{fontSize:15},
            tabBarActiveTintColor:theme.buttonBackground,
            tabBarInactiveTintColor:"gray"
        }} component={CourseScreen} />


        <Tab.Screen name='Settings' options={{
            tabBarIcon:(color,size)=>{
                return <Feather style={{color:theme.textColor}} name="settings" size={18} />
            },
            tabBarLabelStyle:{fontSize:15},
            tabBarActiveTintColor:theme.buttonBackground,
            tabBarInactiveTintColor:"gray"
        }} component={SettingScreen} />

    </Tab.Navigator>
  )
}

export default HomeTab

const styles = StyleSheet.create({})