import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image , ScrollView , TouchableOpacity, FlatList} from 'react-native';
import Header from './components/header'

export default function App() {
  const [todos , setTodos] = useState([
    { text : 'Drinking Coffe' , key : '1'},
    { text : 'Go to College' , key : '2'},
    { text : 'Study Hard' , key : '3'},
    { text : 'Fitness Goals' , key : '4'},
    { text : 'New Year Resolutions' , key : '5'},
    { text : 'SIx Paxks' , key : '6'},
  ])
  
  return (
    <View style={styles.container}>
       {/**header */}
       <Header />
       <View style={styles.content}>
         {/**tolit */}
         <View style={styles.list}>
           <FlatList 
           data= {todos}
           renderItem={( {item }) => (
           <Text>{item.text}</Text>
           )}
           
           />
         </View>
       </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content : {
    padding: 40
  },
  list : {
    marginTop : 20
  } 
  
 
});
