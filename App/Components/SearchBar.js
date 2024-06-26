import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
const {width} = Dimensions.get('window');

const SearchBar = ({theme}) => {
    const [searchCourse, setSearchCourse] = useState('');
  return (
    <View style={[styles.searchContainer]}>
      <TextInput style={[styles.search, {color:theme.textColor}]} placeholder='Search Courses..' value={searchCourse} onChangeText={(text)=>{setSearchCourse(text)}}/>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchContainer:{
      marginTop:270
    },
    search:{
        width: width*0.9,
        borderRadius:15,
        paddingHorizontal:15,
        paddingVertical:5,
        borderColor:"gray",
        borderWidth:1.4,
    }
})