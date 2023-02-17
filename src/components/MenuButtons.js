import {Text, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MenuButtons = ({text, onPress}) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
        paddingTop: 20
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
    }
})

export default MenuButtons