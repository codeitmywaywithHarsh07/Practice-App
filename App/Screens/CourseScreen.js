import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Header from '../Components/Header'
import { AppContext } from '../Utils/AppContext';

const CourseScreen = ({route}) => {
  const {user,setUser} = useContext(AppContext);
  return (
    <View style={styles.container}>
        <Header userObj={user}/>
        <Text style={{marginTop:200,fontWeight:"bold"}}>This is the Courses Page</Text>

    </View>
  )
}

export default CourseScreen

const styles = StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  }
})