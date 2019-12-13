import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';

export default function App() {
  const [userName , setUsername] = useState('') //using this hook to save the value in name and setname is the 
  const [pin , setPin] =useState('')                                              //name of function which we will use later to change the  
 
  return (
    <View>
    <View>
      <Image source={require('./assets/174855.png')}  style={styles.logo} />
    </View>
    <View style={styles.container}>

     <Text style={styles.header}>Enter your App's Credentials</Text>


     <TextInput 
     style={styles.input}
     multiline
     placeholder="eg . rishabhsharma3617"
     onChange={(val) => setUsername(val)} />


    
     <TextInput 
     keyboardType='numeric'
     style={styles.input}
     placeholder="eg .  123**"
     onChange={(val) => setUsername(val)} />
        
     <Text></Text>
     
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop : 180
  },
  input : {
    borderWidth : 2,
    borderColor : '#777',
    padding : 20,
    margin : 10,
    width :   300,
    fontSize : 5
  },
  header : {
    fontSize : 25
  },
 
  logo : {
    alignItems : 'center',
    justifyContent : 'center',
    left: 162,
    marginTop : 50,
    width : 90,
    height : 90
  }

 
});
