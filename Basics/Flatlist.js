import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image , ScrollView , FlatList , TouchableOpacity} from 'react-native';

export default function App() {
  const [people , setPeople] = useState([
    { name : "Rishabh Sharma" , id : 1},
    { name : "RamanPreet" , id : 2},
    { name : "Rakshit Sharma" , id : 3},
    { name : "Raghav Sekhri" , id : 4},
    { name : "Jaspreeet Singh" , id : 5},
    { name : "Ujj Gupta" , id : 6},
    { name : "Rahul Sharma" , id : 7},
    { name : "Anshul Goel" , id : 8},
    { name : "Abhay Rana" , id : 9}
  ])
 const deleteHandler = (id) => {
     console.log(id)
     const temp = [ ...people ]
     temp.splice(id,1)
     setPeople(temp)
 }
 //flatlist is preferred in the cases where the list is high in number , it already comes with a scrollview and key property it requires
 //in the item so we have to manually specify the mapping of key and the id hich we are using
  return (   
    <View>
      <FlatList 
      numColumns={2}
      keyExtractor={(item) => item.id} //we usied it because the unique vaue of item is the id in the object not key
      data={people}                     //if it wads key we need not to do it because flatlist looks for key as a default
      renderItem={({item}) => (
          <TouchableOpacity onPress={() => deleteHandler(item.id)}> 
              <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
      
      )}/>

     
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
