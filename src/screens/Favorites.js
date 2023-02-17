import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import React from "react";
import favoritesActions from "../store/favorites/actions";
import { useSelector, useDispatch } from "react-redux";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { Pressable } from "react-native";
const { addFav, readFav } = favoritesActions;

const Favorites = () => {
  const dispatch = useDispatch();
  let { token } = useSelector((store) => store?.auth);
  let favs = useSelector((store) => store.allgames);

  useFocusEffect(
    useCallback(() => {
      dispatch(readFav(token));
    }, [])
  );
  console.log(favs);
  //const favorites = favs.response
  return (
    <ScrollView style={styles.container}>
      {/*  {favs.map((fav)=>(*/}
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Image
            source={require("../../assets/prueba.jpg")}
            /* source={{ uri: item.image }} */
            style={styles.image}
          />
        
        <View>
          <Text style={styles.title}>{/* {fav.title} */}Title de algun juego</Text>

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
        source={require("../../assets/shopIcon.png")}
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
        source={require("../../assets/favoriuteIconNavBar.png")}
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
             <Text style={styles.price}>$1234</Text>
          </Pressable>
        </View>
        </View>
      </View>

      {/*     ))}  */}
    </ScrollView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#221F20"
  },
  image: {
    width: 200,
    height: 140,
   borderRadius:5,
    margin: 5,
    display:'flex',
    alignSelf:'center'
  },
  title:{
    color:'white',
    fontSize:20,
    padding:3,
    width:"90%"
  },
  cardContainer: {
    display: "flex",
    flexDirection:'row',
    margin: 10,
  },
  card: {
    backgroundColor: "#575561",
    width: "100%",
    borderRadius:5,
    display: "flex",
    flexDirection:'row',
    
  },
  favImg:{
    height:20,
    width:23,
    display:'flex',
    alignSelf:'center',
  },
  buttonCart:{
    width:45,
    height:40,
    padding:10,
    borderRadius:5,
    margin:10
  },
  cartImg:{
    height:20,
    width:23,
    display:'flex',
    alignSelf:'center',
  },
  buttonFav:{
    width:45,
    height:40,
    padding:10,
    borderRadius:5,
    margin:10,
    marginRight:0
  },
  buttons:{
    display:'flex',
    flexDirection:'row'
  },
  buttonPrice:{
    padding:0,
    width:80,
    height:30,
    marginLeft:25,
    borderRadius:5,
    display:'flex',
    justifyContent:'center',
    alignContent:'center',
  },
  price:{
    color:'white',
   fontSize:18,
   display:'flex',
   alignSelf:'center'
  }
});

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
