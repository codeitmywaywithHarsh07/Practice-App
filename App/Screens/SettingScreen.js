import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Header from '../Components/Header'
import { AppContext } from '../Utils/AppContext';
import { ColorThemeContext } from '../Utils/ColorThemeContext';
import { darkTheme, lightTheme } from '../Utils/ColorTheme';

const SettingScreen = () => {
  const {user} = useContext(AppContext);
  const {isDark} = useContext(ColorThemeContext);
  const theme = isDark ? darkTheme : lightTheme;  
  
  return (
    <View style={[styles.container, {backgroundColor:theme.backgroundColor}]}>
        <Header userObj={user}/>
        <View>
          <Text>Settings</Text>
          
        </View>
    </View>
  )
}

export default SettingScreen

const styles = StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  }
})