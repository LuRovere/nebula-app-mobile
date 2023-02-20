import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export const SLIDER_WIDTH = Dimensions.get("window").width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 2)

const HEIGTH = Dimensions.get("window").height - ITEM_WIDTH

const Carousel2 = ({ item, index }) => {

  return (

    <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
      />

    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16202D',
    borderRadius: 3,
    width: 365,
    marginLeft: 10,
    shadowColor: "#000",
    flex: 1,
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 1,
    margin: 25
  },
  image: {
    width: 355,
    height: 200,
    borderRadius: 5,
    margin: 5
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    paddingLeft: 20,
    paddingRight: 20
  }
})
export default Carousel2