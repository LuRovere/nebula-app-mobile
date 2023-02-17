import React, { useCallback } from 'react'
import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import MiniCard, {SLIDER_WIDTH,ITEM_WIDTH} from './MiniCard'
import Carousel, {Pagination} from 'react-native-snap-carousel'
import { useSelector,useDispatch } from 'react-redux'
import allGamesActions from "../store/allGames/actions";
import { useFocusEffect } from '@react-navigation/native'

const { getAllGames } = allGamesActions;

export default function Carrusel({navigation}) {

  const dispatch = useDispatch()
  const games = useSelector((store)=>store.allgames.allgames)
  console.log(games)

  useFocusEffect(
    useCallback(()=>{
    dispatch(getAllGames(""))
  },[])
  )
  
  //console.log(games) 
  
  const [index,setIndex] = React.useState(0)
  const isCarousel = React.useRef(null)
  
  
  return (
    <View>
     <View> 
      <Carousel
        layout="tinder"
        layoutCardOffset={9}
        ref={isCarousel}
        data={games}
        renderItem={MiniCard}
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
