import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import { Entypo } from '@expo/vector-icons';
import { AppContext } from '../Utils/AppContext';
import { useNavigation } from '@react-navigation/native';


const Header = () => {
  const {user, logout} = useContext(AppContext);
  const navigation = useNavigation();
  React.useEffect(()=>{
    if(!user){
      navigation.navigate('WelcomeScreen');
    }
  },[user]);

  function handleProfilePress(){
    // console.log("Profile is pressed");
    navigation.navigate('ProfileScreen');
  }
  

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.profileHeader,{cursor:"pointer"}]} onPress={handleProfilePress}>
        {user && (!user.photoURL ? 
          <Text style={styles.profileIcon}>{user.displayName && user.displayName.charAt(0)}</Text> : 
          <Image source={{uri:user.photoURL}} style={styles.profileImage}/> 
        )}
        
        <Text style={{fontWeight:"500",}}>{user && user.displayName}</Text>
      </TouchableOpacity>

      <Entypo name="log-out" size={20} color="black" style={{padding:10,marginTop:30,}} onPress={logout} />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: 80,
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  profileIcon:{
    backgroundColor:"black",
    color:"white",
    width:30,
    height:30,
    textAlign:"center",
    borderRadius:99,
    fontSize:20
  },
  profileImage:{
    width:30,
    borderRadius:99,
    height:30,
  },
  profileHeader:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:5, 
    marginLeft:20,
    marginTop:30,
    fontSize:25
  }
})