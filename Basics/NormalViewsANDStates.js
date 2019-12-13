import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [name , setName] = useState('Rishabh Sharma') //using this hook to save the value in name and setname is the 
  const [Person , setPerson] = useState({ name:'Raman' , age : 20})                                                  //name of function which we will use later to change the  
  const clickHandler = () => {
    console.log("in handler")
    if(name==='Rishabh Sharma')
    {
      setName('Raghav')
    }
    if(name==='Raghav')
    {
      setName('Rishabh Sharma')
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
  <Text style={styles.boldText}>Hello My name is {name}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.boldText}>I <Text>am</Text> thankful</Text> 
        <Text>I am {Person.name} and my age is {Person.age}</Text>
        <Text>I am Blessed</Text>
        <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={clickHandler}/>
        </View>
        
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
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: 'green',
    padding: 20,
    fontWeight: 'bold',

  },
  buttonContainer : {
    marginTop : 20
  }
});
