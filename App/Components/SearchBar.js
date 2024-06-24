import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
const {width} = Dimensions.get('window');

const SearchBar = () => {
    const [searchCourse, setSearchCourse] = useState('');
  return (
    <View>
      <TextInput style={styles.search} placeholder='Search Courses..' value={searchCourse} onChangeText={(text)=>{setSearchCourse(text)}}/>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    search:{
        width: width*0.9,
        marginTop:90,
        borderRadius:15,
        paddingHorizontal:15,
        paddingVertical:5,
        borderColor:"gray",
        borderWidth:1.4,
    }
})