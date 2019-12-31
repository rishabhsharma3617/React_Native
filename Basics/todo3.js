import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image , ScrollView , TouchableOpacity, FlatList} from 'react-native';
import Header from './components/header'
import TodoItem from './components/todoitem'
import AddTodo from './components/addtodo'

export default function App() {
  const [todos , setTodos] = useState([
    { text : 'Drinking Coffe' , key : '1'},
    { text : 'Go to College' , key : '2'},
    { text : 'Study Hard' , key : '3'},
    { text : 'Fitness Goals' , key : '4'},
    { text : 'New Year Resolutions' , key : '5'},
    { text : 'SIx Paxks' , key : '6'},
  ])
  
  const deleteItem = (key) => {
  setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.key!=key)
  })  
  }

  const submitnewTodo = (text) => {
    setTodos((prevTodos) => {
      return [
        { text : text , key : Math.random().toString() },
        ...prevTodos
      ]

    })

  }


  return (
    <View style={styles.container}>
       {/**header */}
       <Header />
       <View style={styles.content}>
         <AddTodo submitnewTodo={submitnewTodo}/>
         <View style={styles.list}>
           <FlatList 
           data= {todos}
           renderItem={( {item }) => (
           <TodoItem item={item} deleteItem={deleteItem}/>
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
