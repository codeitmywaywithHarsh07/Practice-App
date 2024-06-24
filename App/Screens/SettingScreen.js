import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Header from '../Components/Header'
import { AppContext } from '../Utils/AppContext';

const SettingScreen = ({route}) => {
  const {user,setUser} = useContext(AppContext);
  
  return (
    <View style={styles.container}>
        <Header userObj={user}/>
        <Text style={{marginTop:200,fontWeight:"bold"}}>This is the Settings Page</Text>
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