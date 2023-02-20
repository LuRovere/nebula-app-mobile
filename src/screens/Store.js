import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import GamesCategories from "../components/categories/GamesCategories";
import { useEffect } from "react";
import allGamesActions from "../store/allGames/actions";
import { useFocusEffect } from '@react-navigation/native'

const { getAllGamesByFilter, getAllGames } = allGamesActions;

function Store({ navigation }) {
  const gamesStore = useSelector((store) => store?.allgames?.allgames?.allgames);
  const dispatch = useDispatch();
  const text = useSelector((store) => store.allgames.text);
  const inputCategory = useSelector(
    (store) => store?.filterCategories.filterGame
  );
  const [inputText, setInputText] = React.useState(text)

  useFocusEffect(
    useCallback(() => {
      dispatch(getAllGames(""))
    }, [])
  )

  useFocusEffect(
    useCallback(() => {
      dispatch(getAllGamesByFilter({
        inputText: inputText, inputCategory: inputCategory.join(",")
      },)
      )
    }, [inputText, inputCategory]));


  const handleClickDeatils = (id) => {
    console.log( "ID:", id)
    navigation.navigate("Detail", { gameId: id })
  }

  const handleText = (e) => {
    setInputText(e)
  }

  return (
    <ScrollView style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <GamesCategories />
      <TextInput
        onChangeText={handleText}
        placeholder="Find your game here"
        style={styles.textInput}
      />
      {gamesStore.map((game, index) => {
        return (
          <TouchableOpacity
            style={styles.containerCard}
            key={index}
            onPress={() => handleClickDeatils(game.id)}
          >
            <Image
              style={styles.gamePhoto}
              source={{ uri: game.image }}
            />
            <View style={styles.titleAndFav}>
              <Text style={styles.title}>{game.title}</Text>
              <Image
                style={styles.favIcon}
                source={require("../../public/assets/favoriteIcon.png")}
              />
            </View>
            <View style={styles.footerCard}>
              <View style={styles.footerIcons}>
                <Image
                  style={styles.icon}
                  source={require("../../public/assets/windowsIcon.png")}
                />
                <Image
                  style={styles.icon}
                  source={require("../../public/assets/appleIcon.png")}
                />
              </View>
              <Text style={styles.buttonPrice}>${game.price}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerCard: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    borderWidth: 2,
  },
  gamePhoto: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  titleAndFav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    backgroundColor: "#242038",
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  favIcon: {
    width: 20,
    height: 20,
  },
  footerCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  footerIcons: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  buttonPrice: {
    backgroundColor: "#333",
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default Store;