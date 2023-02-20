import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import Carrusel from "../components/Carrusel";
import React from "react";
import { useState } from "react";

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.nav}>
        <Image
          style={styles.logo}
          source={require("../../assets/nebulaIsotipeLogotipePosibleVersion.png")}
        />

      </View>
      <View style={styles.line}></View>
      <View>
      </View>

      <View style={styles.buttons}>

        <Pressable onPress={() => navigation.navigate("cart")}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#37f59c" : "#46c651"
            },
            styles.buttonCart,
          ]}
        >
          <Image
            source={require("../../assets/shopIcon.png")}
            style={styles.cartImg}
          />
        </Pressable>

        <Pressable onPress={() => navigation.navigate("favorites")}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#fa70c4" : "#be2d59"
            },
            styles.buttonFav,
          ]}
        >
          <Image
            source={require("../../assets/favoriuteIconNavBar.png")}
            style={styles.favImg}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("store")}
          style={({ pressed }) => [
            {
              backgroundColor: pressed ? "#70d9fa" : "#725AC1"
            },
            styles.buttonStore,
          ]}
        >
          <Text style={styles.store}>Store</Text>
        </Pressable>
      </View>
      <View style={styles.line}></View>
      <Text style={styles.titleGames}> ⇽ Games ⇾ </Text>
      <Carrusel />
      <Text style={styles.titleGames}> ⇽ Games free ⇾ </Text>
      {/* <MiniCarousel /> */}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#221F20",
  },
  nav: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    height: 50,
    width: 190,
  },
  logo: {
    display: "flex",
    alignSelf: "center",
    height: "100%",
    width: "100%",
  }, titleGames: {
    backgroundColor: '#725AC1',
    width: "95%",
    height: 30,
    borderRadius: 5,
    display: 'flex',
    marginLeft: 10,
    margin: 5,
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    padding: 5
  },

  favImg: {
    height: 21,
    width: 23,
    display: 'flex',
    alignSelf: 'center',
  },
  buttonCart: {
    width: 45,
    height: 40,
    padding: 10,
    borderRadius: 5,
    margin: 10
  },
  cartImg: {
    height: 21,
    width: 23,
    display: 'flex',
    alignSelf: 'center',
  },
  buttonFav: {
    width: 45,
    height: 40,
    padding: 10,
    borderRadius: 5,
    margin: 10,
    marginRight: 0
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row-reverse'
  },
  buttonStore: {
    width: 85,
    height: 40,
    padding: 8,
    margin: 10,
    marginRight: 0,
    borderRadius: 5,
  },
  store: {
    color: 'white',
    fontSize: 20,
    display: 'flex',
    alignSelf: 'center'
  },
  line: {
    height: 3,
    borderRadius: 5,
    width: "95%",
    marginLeft: 10,
    backgroundColor: '#575561'
  }
});
export default Home;

