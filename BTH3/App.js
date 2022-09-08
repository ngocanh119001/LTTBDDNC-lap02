import React, { useState } from 'react';
import Inputs from './inputs.js'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'


const App = () => {
   return (
      <View style={styles.container}>
      <Text style={styles.title}> Login Screen</Text>
      <View style={styles.inputView}>
          <TextInput style={styles.inputText}
           placeholder="Email"
           placeholderTextColor="#003f5c"/>
      </View>
      <View style={styles.inputView}>
          <TextInput style={styles.inputText}
          secureTextEntry
          placeholder="Password"
          placeholderTextColor="#003f5c"
/>
</View>
     </View>

   )
}
const styles = StyleSheet.create({
   container: {
flex: 1,
backgroundColor: '#4FD3DA',
alignItems: 'center',
justifyContent: 'center',
},
title:{
fontWeight: "bold",
fontSize:50,
color:"#fb5b5a",
marginBottom: 40,
},
inputView:{
width:"80%",
backgroundColor:"#3AB4BA",
borderRadius:25,
height:50,
marginBottom:20,
justifyContent:"center",
padding:20
},
inputText:{
height:50,
color:"white"
},
});

export default App