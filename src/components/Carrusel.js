import React, { useCallback } from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import Carousel2, { SLIDER_WIDTH, ITEM_WIDTH } from "./Carousel2";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { useSelector, useDispatch } from "react-redux";
import allGamesActions from "../store/allGames/actions";
import { useFocusEffect } from "@react-navigation/native";

const { getAllGames } = allGamesActions;

export default function Carrusel({ navigation }) {
  const dispatch = useDispatch();
  const gamesStore = useSelector(
    (store) => store?.allgames?.allgames?.allgames
  );


  useFocusEffect(
    useCallback(() => {
      dispatch(getAllGames(""));
    }, [])
  );

  //console.log(games)

  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View>
      <View>
        <Carousel
          layout="tinder"
          layoutCardOffset={9}
          ref={isCarousel}
          data={gamesStore}
          renderItem={Carousel2}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          useScrollView={true}
        />
      </View>
      <Pagination carouselRef={isCarousel} />
    </View>
  );
}

const styles = StyleSheet.create({});

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
