import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import GamesCategories from "../components/categories/GamesCategories";
import allGamesActions from "../store/allGames/actions";
import { useFocusEffect } from '@react-navigation/native'

const { getAllGamesByFilter, getAllGames } = allGamesActions;
function Store({ navigation }) {
  const gamesStore = useSelector((store) => store?.allgames?.allgames?.allgames);
  console.log(gamesStore)
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
            onPress={() => handleClickDeatils(game._id)}
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
              <View style={styles.buttonPrice}>
              <Text style={{color: 'white'}}>${game.price}</Text>
              </View>
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
    height:35,
    borderRadius: 5
  },
  textInput: {
    height: 40,
    margin: 12,
    borderWidth: 1.2,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 4
  },
  favIcon: {
    width: 19,
    height: 17,
    marginRight: 4
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
    height: 35,
    marginRight: 10,
    marginLeft: 1
  },
  buttonPrice: {
    backgroundColor: "#242038",
    color: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default Store;