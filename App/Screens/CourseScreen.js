import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Header from '../Components/Header'
import { AppContext } from '../Utils/AppContext';
import SearchBar from '../Components/SearchBar';
import allCourses from '../Data/AllCourses';

const CourseScreen = () => {
  const {user,setUser} = useContext(AppContext);
  return (
    <View style={styles.container}>
        <Header userObj={user}/>
        <SearchBar/>
        <View style={styles.courseList}>
            <Text style={{fontWeight:700,fontSize:18}}>All Courses</Text>
            {allCourses.map((course)=>{
              return  <View>
                          <Image source={{uri:course.image}}/>
                          <View>
                            <Text>{course.title}</Text>
                            <Text>{course.instructor}</Text>
                            <Text>{course.ratings}⭐</Text>
                            <Text>Rs. {course.price}</Text>
                          </View>
                      </View>
            })}
        </View>

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
  },
  courseList:{
    
  }
})