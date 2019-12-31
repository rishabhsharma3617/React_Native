import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image , ScrollView , TouchableOpacity, FlatList} from 'react-native';

export default function TodoItem(props) {
    return(
        <TouchableOpacity onPress={() => props.deleteItem(props.item.key)}>
            <Text style={styles.item}>{props.item.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item : {
        padding : 16,
        marginTop : 16,
        borderColor : '#bbb',
        borderWidth : 2,
        borderRadius : 10
    }
})