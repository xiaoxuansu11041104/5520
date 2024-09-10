import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import {useState} from 'react'

export default function Input() {
  const [text, setText] = useState("")
  return (
    <TextInput 
      // placeholder="Type something"
        autoCorrect={true}
        keyboardType="default" 
        value={text} 
        style = {{borderBottomColor: "purple", borderBottomWidth: 2}}
        onChangeText={function(changeText) {
          setText(changeText);
          

        }}
      />
  )
}

const styles = StyleSheet.create({})