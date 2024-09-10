import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Header(props) {
  return (
    <View>
      {/* use the prop here */}
      <Text>Welcome to {props.name}</Text>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({})