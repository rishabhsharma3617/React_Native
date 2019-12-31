import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image , ScrollView , TouchableOpacity, FlatList} from 'react-native';

export default function addTodo(props) {

    const [newTodo , setIt] = useState('')

    const changeHandler = (val) => {
        setIt(val)
    }
    return(
        <View>
            <TextInput 
            placeholder='New todo ...'
            onChangeText={changeHandler}
            style={styles.input}/>

            <Button 
            onPress={() => props.submitnewTodo(newTodo)}
            title='Add'
            color='coral'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input : {
        marginBottom : 10,
        paddingHorizontal : 8,
        paddingVertical : 6,
        borderBottomWidth : 1,
        borderBottomColor : '#ddd'
    }
})