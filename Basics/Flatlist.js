import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image , ScrollView , FlatList} from 'react-native';

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
 //flatlist is preferred in the cases where the list is high in number , it already comes with a scrollview and key property it requires
 //in the item so we have to manually specify the mapping of key and the id hich we are using
  return (   
    <View>
      <FlatList 
      numColumns={2}
      keyExtractor={(item) => item.id} //we usied it because the unique vaue of item is the id in the object not key
      data={people}                     //if it wads key we need not to do it because flatlist looks for key as a default
      renderItem={({item}) => (
      <Text style={styles.item}>{item.name}</Text>
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
