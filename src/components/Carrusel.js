import Carousel, { Pagination } from "react-native-snap-carousel";
import Carousel2, { ITEM_WIDTH, SLIDER_WIDTH } from "./Carousel2";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

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
  const [index, setIndex] = React.useState(0);
  const isCarousel = React.useRef(null);

  return (
    <View>
      <View>
        <Carousel
          layout="tinder"
          layoutCardOffset={16}
          ref={isCarousel}
          data={gamesStore}
          renderItem={Carousel2}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={2}
          useScrollView={true}
        />
      </View>
      <Pagination carouselRef={isCarousel} />
    </View>
  );
}

const styles = StyleSheet.create({});