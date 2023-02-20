import Carousel, { Pagination } from 'react-native-snap-carousel'
import Carousel2, { ITEM_WIDTH, SLIDER_WIDTH } from './Carousel2'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import allGamesActions from "../store/allgames/action";
import { useFocusEffect } from '@react-navigation/native'

const { getAllGames } = allGamesActions;

export default function Carrusel({ navigation }) {

    const dispatch = useDispatch()
    const games = useSelector((store) => store.allgames.allgames)
    console.log(games)

    useFocusEffect(
        useCallback(() => {
            dispatch(getAllGames(""))
        }, [])
    )
    

    const [index, setIndex] = React.useState(0)
    const isCarousel = React.useRef(null)


    return (
        <View>
            <View>
                <Carousel
                    layout="tinder"
                    layoutCardOffset={9}
                    ref={isCarousel}
                    data={games}
                    renderItem={Carousel2}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    inactiveSlideShift={0}
                    useScrollView={true}
                />
            </View>
            <Pagination
                carouselRef={isCarousel}
            />

        </View>

    )
}

const styles = StyleSheet.create({

})

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