import React, { useCallback } from 'react'
import { StyleSheet, Text, View,Pressable,Image } from 'react-native'
import ExpensiveCard, {SLIDER_WIDTH,ITEM_WIDTH} from './ExpensiveCard'
import Carousel, {Pagination} from 'react-native-snap-carousel'
import { useSelector,useDispatch } from 'react-redux'
import allGamesActions from "../../store/allGames/actions";
import { useFocusEffect } from '@react-navigation/native'

const { getAllGames } = allGamesActions;

export default function Carrusel({navigation}) {

  const dispatch = useDispatch()
  const gamesStore = useSelector((store) => store?.allgames?.allgames?.allgames);

  const gamesCopy = [...gamesStore]
  gamesCopy.sort(function compare(a, b) {
    let priceA = new Number(a.price);
    let priceB = new Number(b.price);
    return priceB - priceA;
  })

  let gamesMoreExpensibeOnly5 = gamesCopy.slice(0,8)
  console.log(gamesMoreExpensibeOnly5)

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
        data={gamesMoreExpensibeOnly5}
        renderItem={ExpensiveCard}
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
