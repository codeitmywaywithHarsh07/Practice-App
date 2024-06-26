import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Utils/AppContext';
const {width} = Dimensions.get('window');
import firebase from '../Authentication/FirebaseAuth';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import { ColorThemeContext } from '../Utils/ColorThemeContext';
import { darkTheme, lightTheme } from '../Utils/ColorTheme';


const ProfileScreen = () => {
    const {user, uploadProfilePicture, setUser, profileImg, setProfileImg} = useContext(AppContext);
    const [newName, setNewName] = useState(user.displayName);
    const navigation = useNavigation();
    const {isDark} = useContext(ColorThemeContext);
    const theme = isDark ? darkTheme : lightTheme;


    const pickImage = async () =>{
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1, 1],
            quality:1
        });

        if(!result.canceled){
            setProfileImg(result.assets[0].uri);
        }
    };

    const updateProfilePicture = async () => {
        if (profileImg) {
          const profilePictureUrl = await uploadProfilePicture(profileImg);
        //   console.log("Profile Picture URL : ",profilePictureUrl)
        //   const user = firebase.auth().currentUser;
            console.log(newName, user.displayName);
            await firebase.auth().currentUser.updateProfile({ photoURL: profilePictureUrl });
        }

        if(newName!==user.displayName){
            await firebase.auth().currentUser.updateProfile({ displayName: newName });
        }

        setProfileImg(null);
        navigation.navigate('Home');
    };
    

  return (
    <View style={[styles.container, {backgroundColor:theme.backgroundColor}]} >

        <View style={{alignItems:"center"}}>
            {user.photoURL ? <Image source={{uri:user.photoURL}} style={styles.profileImage}/> :
                <View style={styles.profileIcon}>
                    <Text style={{textAlign:"center", color:"white", fontSize:50}} >{user && user.displayName.charAt(0)}</Text>
                </View>
            }
            <TouchableOpacity style={styles.btn} onPress={pickImage}><Text style={{color:theme.buttonTextColor}}>Edit Picture</Text></TouchableOpacity>
        </View>
        <View>
            <Text style={[styles.label, {color:theme.textColor}]}>Name</Text>
            <TextInput style={[styles.input, {color:theme.textColor}]} placeholder='New Name' value={newName} onChangeText={(text)=>{setNewName(text)}}/>
        </View>

        <View>
            <Text style={[styles.label, {color:theme.textColor}]}>Email</Text>
            <TextInput style={[styles.input, {color:theme.textColor}]} readOnly={true} value={user.email}/>
        </View>

        <TouchableOpacity onPress={updateProfilePicture} style={styles.btn}>
            <Text style={{color:theme.buttonTextColor}}>Update Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{navigation.goBack()}} style={styles.btn}>
            <Text style={{color:theme.buttonTextColor}}>Go Back</Text>
        </TouchableOpacity>

    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    profileIcon:{
        backgroundColor:"black",
        width:100,
        height:100,
        borderRadius:99,
        justifyContent:"center",
        alignItems:"center",
        marginBottom:30
    },
    profileImage:{
        borderRadius:99,
        width:100,
        height:100,
        marginBottom:30
    },
    input:{
        borderWidth:1,
        borderColor:"lightgray",
        borderRadius:10,
        width:0.8*width,
        padding:10,
        marginBottom: 16,
    },
    label:{
        fontSize:16,
        fontWeight:"bold",
        marginBottom:5
    },
    btn:{
        textAlign:"center",
        backgroundColor:"lightblue",
        color:"white",
        borderRadius:10,
        fontSize:18,
        paddingHorizontal:20,
        paddingVertical:10,
        marginBottom:10
    }
})