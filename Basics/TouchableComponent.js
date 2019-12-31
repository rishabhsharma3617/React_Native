import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image , ScrollView , TouchableOpacity} from 'react-native';

export default function App() {
  const [people , setPeople] = useState([
    { name : "Rishabh Sharma" , key : 1},
    { name : "RamanPreet" , key : 2},
    { name : "Rakshit Sharma" , key : 3},
    { name : "Raghav Sekhri" , key : 4},
    { name : "Jaspreeet Singh" , key : 5},
    { name : "Ujjwal Gupta" , key : 6},
    { name : "Rahul Sharma" , key : 7},
    { name : "Anshul Goel" , key : 8},
    { name : "Abhay Rana" , key : 9}
  ])   
  
  pressHandler = (key) => {
    setPeople((prevPeople) => {
      return prevPeople.filter(person => person.key != key)
    })
  }
  return (
    <View>
      <ScrollView>      
        { people.map((item) => {
        return(
         
           <View key={item.key}>
              <TouchableOpacity onPress={() => pressHandler(item.key)}>
              <Text style={styles.item}>{item.name}</Text>
              </TouchableOpacity>
           </View>
          

        )
      })}
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop  : 40,
    paddingHorizontal : 20,
    ///alignItems: 'center',
    // justifyContent: 'center',
    // marginTop : 180 */
  },
  item : {
    marginTop : 24,
    margin : 20,
    padding : 30,
    backgroundColor : 'pink',
    fontSize : 24
  }
  
 
});
