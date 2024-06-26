import { Button, Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
const{width} = Dimensions.get("window");

const QueryForm = ({theme}) => {
    const {subject,setSubject} = useState("");
  return (
    <View style={styles.container}>
      <Text style={[{fontSize: 20,
    fontWeight: 'bold'},{color:theme.textColor}]}>Send Your Queries</Text>
      <View style={{display:"flex", gap:20}}>
        <View>
            <Text style={[styles.label, {color:theme.textColor}]}>Subject</Text>
            <TextInput style={styles.input} value={subject} placeholder='What is the Query About'/>
        </View>

        <View>
            <Text style={[styles.label, {color:theme.textColor}]}>Query</Text>
            <TextInput style={styles.input} placeholder='Write your Query' multiline={true} numberOfLines={4}/>
        </View>

        <TouchableOpacity>
            <Text style={styles.btn}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default QueryForm

const styles = StyleSheet.create({
    container:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        gap:30,
        marginBottom:40
    },
    input:{
        width: width * 0.8,
        padding:8,
        borderRadius:10,
        backgroundColor:"white"
    },
    label:{
        fontSize:16,
        fontWeight:"bold",
        marginBottom:5
    },
    btn:{
        textAlign:"center",
        fontSize:16,
        fontWeight:"bold",
        padding:8,
        borderRadius:10,
        backgroundColor:"lightblue",
        color:"white"
    }
})