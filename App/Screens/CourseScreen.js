import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Header from '../Components/Header'
import { AppContext } from '../Utils/AppContext';
import SearchBar from '../Components/SearchBar';
import allCourses from '../Data/AllCourses';
import { ColorThemeContext } from '../Utils/ColorThemeContext';
import { darkTheme, lightTheme } from '../Utils/ColorTheme';

const {width} = Dimensions.get('window');


const CourseScreen = () => {
  const {user,setUser} = useContext(AppContext);
  const {isDark} = useContext(ColorThemeContext);
  const theme = isDark ? darkTheme : lightTheme;
  return (
    <View style={[styles.container, {backgroundColor:theme.backgroundColor}]}>
        <Header userObj={user}/>
        <SearchBar theme={theme}/>
        <View style={styles.courseList}>
            <Text style={[{fontWeight:700,fontSize:18, marginVertical:10},{color:theme.textColor}]}>All Courses</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
              {allCourses.map((course, key)=>{
                return  <View style={styles.courseCard} key={key}>
                            <Image style={styles.courseImage} source={{uri:course.image}}/>
                            <View>
                              <Text style={[{fontWeight:"bold", width:0.6*width},{color:theme.textColor}]}>{course.title}</Text>
                              <Text style={{color:"grey", fontWeight:"condensedBold", fontSize:13}}>{course.instructor}</Text>
                              <Text style={{color:theme.textColor}}>{course.ratings}⭐</Text>
                              <Text style={{color:theme.textColor}}>Rs. {course.price}</Text>
                            </View>
                        </View>
              })}
            </ScrollView>
        </View>

    </View>
  )
}

export default CourseScreen

const styles = StyleSheet.create({
  fixedContent:{
    flex:1,
    alignItems:"center"
  },
  container:{
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  courseList:{
    width:0.9*width,
    paddingBottom:350
  },
  courseCard:{
    marginVertical:10,
    borderBottomWidth:1,
    borderColor:"gray",
    paddingBottom:20,
    flexDirection:"row",
    gap:10,
    width:0.9*width
  },
  courseImage:{
    width:100,
    height:60,
  }
})