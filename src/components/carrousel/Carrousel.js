import { Dimensions, Image, Text, Touchable, TouchableOpacity, View } from "react-native";

import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux"
import { useState } from "react";

const { height, width } = Dimensions.get('window')
export default function Carousel({ key }) {

    const gameStore = useSelector((store) => store?.games?.game?.response);
    
    const pics = gameStore?.trailer.map((x) => x)
    console.log(pics)


    const [currentIndex, setCurrentIndex] = useState(0)
    const [store, setStore] = useState(false)

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: height / 2 }}>
                <FlatList
                    data={gameStore.trailer}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    key={key}
                    onScroll={e => {
                        const x = e.nativeEvent.contentOffset.x;
                        setCurrentIndex((x / width).toFixed(0))
                    }}
                    renderItem={({ item, index }) => {
                        return (
                            <View >
                                <View style={{
                                    width: width,
                                    height: height / 2,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <TouchableOpacity
                                        disabled={true}
                                        style={{
                                            width: '100%',
                                            height: '80%',
                                            flexDirection: 'row-reverse'
                                        }}>
                                        {gameStore.trailer.map((pic) => {
                                            return (
                                                <Image
                                                    source={{ uri: pic }}
                                                    style={{ width: '100%', height: '80%', borderRadius: 10 }}
                                                    key={item.title}
                                                />
                                            )
                                        })}
                                    </TouchableOpacity>
                                </View>
                            </View>
                        );
                    }}
                />
            </View>
            <View style={{
                flexDirection: 'row',
                width: width,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {
                    pics.map((item, index) => {
                        return (
                            <View style={{
                                width: currentIndex == index ? 40 : 8,
                                height: currentIndex == index ? 9 : 8,
                                borderRadius: 4,
                                backgroundColor: currentIndex == index ? '#725AC1' : '#CAC4CE',
                                marginLeft: 5,
                            }}>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

 