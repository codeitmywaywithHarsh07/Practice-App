import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AppContext } from '../Utils/AppContext';
const {width} = Dimensions.get('window');
import firebase from '../Authentication/FirebaseAuth';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';


const ProfileScreen = () => {
    const {user, uploadProfilePicture, setUser, profileImg, setProfileImg} = useContext(AppContext);
    const [newName, setNewName] = useState(user.displayName);
    const navigation = useNavigation();

    const pickImage = async () =>{
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.MediaTypeOptions.Images,
            allowsEditing:true,
            aspect:[1, 1],
            quality:1
        });

        if(!result.canceled){
            // console.log(result.assets[0].uri)
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

        setProfileImg(null)
        navigation.goBack();
    };

    console.log(profileImg);

  return (
    <View style={styles.container} >

        <View style={{alignItems:"center"}}>
            {user.photoURL ? <Image source={{uri:user.photoURL}} style={styles.profileImage}/> :
                <View style={styles.profileIcon}>
                    <Text style={{textAlign:"center", color:"white", fontSize:50}} >{user && user.displayName.charAt(0)}</Text>
                </View>
            }
            <TouchableOpacity style={styles.btn} onPress={pickImage}><Text>Edit Picture</Text></TouchableOpacity>
        </View>
        <View>
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} placeholder='New Name' value={newName} onChangeText={(text)=>{setNewName(text)}}/>
        </View>

        <View>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.input} readOnly={true} value={user.email}/>
        </View>

        <TouchableOpacity onPress={updateProfilePicture} style={styles.btn}>
            <Text>Update Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{navigation.navigate("HomeScreen")}} style={styles.btn}>
            <Text>Go Back</Text>
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