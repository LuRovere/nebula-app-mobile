import React, { Component } from 'react'
import { Text, View,StyleSheet,Dimensions,Image } from 'react-native'

export const SLIDER_WIDTH = Dimensions.get("window").width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 2)

 const HEIGTH = Dimensions.get("window").height - ITEM_WIDTH

const Carousel2 = ({item, index })=>{

  console.log(item)

    return (

      <View style={styles.container} key={index}>
      <Image
        source={{ uri: item.imgUrl }}
        style={styles.image}
      />
      
      <Text>ayuda</Text>
    </View>
    )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#575561',
    borderRadius: 3,
    width: 365,
    marginLeft:10,
    shadowColor: "#000",
    flex:1,
    justifyContent:'center',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: 355,
    height: 200,
    borderRadius:5,
    margin:5
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

/*
fondo negro : #221F20
azulviolaceo : #725AC1
gris: #575561
celeste claro: #8D86C9
azul boton: #3C29E3
CARTAS::after
azul oscuro: #242038
gris claro: #CAC4CE
boton azul: #3C29E3
*/