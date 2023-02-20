import { Dimensions, Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

export const SLIDER_WIDTH = Dimensions.get("window").width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 2)

const HEIGTH = Dimensions.get("window").height - ITEM_WIDTH

const Carousel2 = ({ item, index }) => {
  return (

    <View style={styles.container} key={index}>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
          />

          <View style={styles.data}>

            <Text style={styles.title}>{item.title}</Text>

            <View style={styles.buttons}>
              <Pressable onPress={""}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "#37f59c" : "#46c651"
                  },
                  styles.buttonCart,
                ]}
              >
                <Image
                  source={require("../../../assets/shopIcon.png")}
                  style={styles.cartImg}
                />
              </Pressable>

              <Pressable onPress={""}
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? "#fa70c4" : "#be2d59"
                  },
                  styles.buttonFav,
                ]}
              >
                <Image
                  source={require("../../../assets/favoriuteIconNavBar.png")}
                  style={styles.favImg}
                />
              </Pressable>
            </View>
            <Pressable onPress={""}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#70d9fa" : "#725AC1"
                },
                styles.buttonPrice,
              ]}
            >
              <Text style={styles.price}>{item.price}</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#16202D',
    borderRadius: 3,
    width: 365,
    height: 140,
    marginLeft: 10,
    shadowColor: "#000",
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    margin: 25,
    paddingBottom: 10
  },
  image: {
    width: 210,
    height: 100,
    borderRadius: 5,
    margin: 1,
    display: 'flex',
    alignSelf: 'center',
  },
  data: {
    width: "45%",
  },
  title: {
    color: 'white',
    fontSize: 18,
    marginBottom: 5,
    width: "80%",
    display: 'flex',
    alignSelf: 'center',
    textAlign: 'center'
  },
  cardContainer: {
    display: "flex",
    flexDirection: 'row',
    margin: 10,
  },
  card: {
    backgroundColor: "#16202D",
    width: "100%",
    borderRadius: 5,
    display: "flex",
    flexDirection: 'row',

  },
  favImg: {
    height: 20,
    width: 23,
    display: 'flex',
    alignSelf: 'center',
  },
  buttonCart: {
    width: 40,
    height: 35,
    padding: 8,
    borderRadius: 5,
    margin: 10
  },
  cartImg: {
    height: 20,
    width: 23,
    display: 'flex',
    alignSelf: 'center',
  },
  buttonFav: {
    width: 40,
    height: 35,
    padding: 8,
    borderRadius: 5,
    margin: 10,
    marginRight: 0
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 12
  },
  buttonPrice: {
    padding: 0,
    width: 80,
    height: 30,
    marginLeft: 35,
    borderRadius: 5,
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
  },
  price: {
    color: 'white',
    fontSize: 18,
    display: 'flex',
    alignSelf: 'center'
  }
});
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