import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect} from 'react'
import { AppContext } from '../Utils/AppContext';
import Spinner from 'react-native-loading-spinner-overlay';

const {width} = Dimensions.get('window');

const WelcomeScreen = ({navigation}) => {
    const {name, email, password, user, login, signup, setName, setPassword, setEmail, loading} = useContext(AppContext);
    console.log("Welcome Screen User --->",user)

    React.useEffect(()=>{
      if(user){
        navigation.navigate('HomeTab');
      }
    },[user]);


  return (
    <View style={styles.container}>
      <Spinner textContent='Loading...' visible={loading} style={{color:"blue"}}/>
      <Image style={styles.logoImage} source={require("../../assets/winuallwhite.png")} alt='Logo'/>
      <View>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} value={name} placeholder='Enter Your Name' onChangeText={(text)=>{setName(text)}} />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} value={email} placeholder='Enter Your Email' keyboardType='email' onChangeText={(text)=>{setEmail(text)}} />

        <Text style={styles.label}>Password</Text>
        <TextInput style={styles.input} value={password} secureTextEntry={true} placeholder='Enter a Password' onChangeText={(text)=>{setPassword(text)}} />

      </View>
      <View style={{gap:20}}>
        <TouchableOpacity>
          <Text style={styles.signInBtn} onPress={login}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.signInBtn} onPress={signup}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    logoImage:{
        width:300,
        height:100,
        objectFit:"contain",
    },
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        gap:50,
        backgroundColor:"white"
    },
    signInBtn:{
        width:width*0.8,
        textAlign:"center",
        backgroundColor:"lightblue",
        color:"white",
        borderRadius:10,
        fontSize:20,
        paddingHorizontal:20,
        paddingVertical:10
    },
    label:{
        fontSize:20,
        marginBottom:8,
    },
    input:{
        borderWidth:1,
        borderColor:"lightgray",
        borderRadius:10,
        width:0.8*width,
        padding:10,
        marginBottom: 16,
    }
});