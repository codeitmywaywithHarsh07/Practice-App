import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Header from '../Components/Header';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import QueryForm from '../Components/QueryForm';
import { useNavigation } from '@react-navigation/native';
import { AppContext } from '../Utils/AppContext';
import Spinner from 'react-native-loading-spinner-overlay';

const {width} = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation();
  const {user, loading} = useContext(AppContext);

    console.log("Home Screen User --->",user)
  return (
    <View>
      <Spinner textContent='Loading...' visible={loading} style={styles.spinnerStyle}/>
        <Header userObj={user}/>
        
        <ScrollView>

            <View style={styles.body}>
              <View style={styles.categoryContent} >
                <Text style={styles.title}>Categories</Text>
                <ScrollView 
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.categories}>
                  <FontAwesome5 style={styles.icon} name="react" size={24} color="black" />
                  <FontAwesome5 style={styles.icon} name="java" size={24} color="black" />
                  <Ionicons style={styles.icon} name="logo-javascript" size={24} color="black" />
                  <FontAwesome5 style={styles.icon} name="node-js" size={24} color="black" />
                  <AntDesign style={styles.icon} name="HTML" size={24} color="black" />
                  <FontAwesome5 style={styles.icon}  name="css3" size={24} color="black" />
                  <FontAwesome5 name="python" style={styles.icon} size={24} color="black" />
                  <Fontisto name="mongodb" size={24} style={styles.icon} color="black" />
                </ScrollView>
              </View>

              <View style={styles.content}>
                <Text style={styles.title}>Top Courses</Text>
                <ScrollView 
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.categories}>
                  <View style={styles.courseModal}>
                      <Image source={{uri:"https://d502jbuhuh9wk.cloudfront.net/courses/6610ef3fc32f6201821ac503/6610ef3fc32f6201821ac503_scaled_cover.jpg?v=1"}} style={styles.courseImage}/>
                      <Text style={{fontSize: 20,
        fontWeight: 'bold',}}>DSA Supreme 3.0</Text>
                  </View>
                  
                  <View style={styles.courseModal}>
                    <Image source={{uri:"https://media.cosmofeed.com/IMG-20231028-WA0044-2023-29-10-03-12-16.jpg"}} style={styles.courseImage}/>
                    <Text style={{fontSize: 20,
        fontWeight: 'bold',}}>Web Development Course</Text>
                  </View>

                  <View style={styles.courseModal}>
                    <Image source={{uri:"https://d502jbuhuh9wk.cloudfront.net/courses/656da487e4b00e2f57191749/656da487e4b00e2f57191749_scaled_cover.jpg?v=3"}} style={styles.courseImage}/>
                    <Text style={{fontSize: 20,
        fontWeight: 'bold',}}>Low Level Design BootCamp</Text>
                    
                  </View>

                  <View style={styles.courseModal}>
                    <Image source={{uri:"https://i.ytimg.com/vi/5LRO2I65aR8/maxresdefault.jpg"}} style={styles.courseImage}/>

                    <Text style={{fontSize: 20,
        fontWeight: 'bold',}}>Introduction to HTML</Text>

                  </View>

                  <FontAwesome name="arrow-right" style={styles.icon} size={24} color="black" onPress={()=>{navigation.navigate('CourseScreen',{userObj})}} />
                </ScrollView>
              </View>

              <QueryForm/>
            </View>


        </ScrollView>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  categories:{
    // width:0.8*width,
    justifyContent:"center",
    alignItems:"center",
    marginTop:10,
    display:"flex",
    flexDirection:"row",
    overflow:"scroll",
    gap:10
    
  },
  icon: {
    fontSize: 50,
    padding: 15,
    borderRadius: 12,
    backgroundColor: 'lightblue',
  },
  categoryContent: {
    marginTop: 100,
    width: 0.9 * width,
    alignSelf: 'center',
  },
  content: {
    width: 0.9 * width,
    alignSelf: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  courseImage:{
    width:200,
    borderRadius:20,
    height:200,
    objectFit:"contain"
  },
  body:{
    display:"flex",
    flexDirection:"column",
    gap:50
  },
  courseModal:{
    width:250,
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center",
    backgroundColor:"white",
    paddingVertical:20,
    borderRadius:20
  },
  spinnerStyle:{
    color:"black"
  }
})