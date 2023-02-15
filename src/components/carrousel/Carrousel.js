import { Dimensions, Image, Text, Touchable, TouchableOpacity, View } from "react-native";

import { FlatList } from "react-native-gesture-handler";
import { useState } from "react";

const { height, width } = Dimensions.get('window')


export default function Carousel() {
    const tuData = [
        {
            nombre: 'Machu Picchu',
            descripcion: 'Antigua ciudad inca en Perú',
            imagen: 'https://analisadaily.com/imagesfile/202211/20221129-192005_valorant-akan-segera-hadir-di-android.jpeg',
        },
        {
            nombre: 'Gran Cañón',
            descripcion: 'Parque nacional en Arizona, Estados Unidos',
            imagen: 'https://www.mmogames.com/uploads/public/Dark_Knight2_560x315_0d1ff79c6f/Dark_Knight2_560x315_0d1ff79c6f.png',
        },
        {
            nombre: 'Torre Eiffel',
            descripcion: 'Monumento en París, Francia',
            imagen: 'https://dk.opogame.com/sites/all/files/opogame-dk/screens/loading_4.jpg',
        }, 
        {
            nombre: 'Machu Picchu',
            descripcion: 'Antigua ciudad inca en Perú',
            imagen: 'https://analisadaily.com/imagesfile/202211/20221129-192005_valorant-akan-segera-hadir-di-android.jpeg',
        },
        {
            nombre: 'Torre Eiffel',
            descripcion: 'Monumento en París, Francia',
            imagen: 'https://dk.opogame.com/sites/all/files/opogame-dk/screens/loading_4.jpg',
        }, 
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ height: height / 2 }}>

                <FlatList
                    data={tuData}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    key={tuData.map((index) => index)}
                    onScroll={e => {
                        const x = e.nativeEvent.contentOffset.x;
                        setCurrentIndex((x / width).toFixed(0))
                    }}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={{
                                width: width,
                                height: height / 2,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <TouchableOpacity
                                    disabled={true}
                                    style={{
                                        width: '95%',
                                        height: '80%',
                                    }}>
                                    <Image
                                        source={{uri: item.imagen}}
                                        style={{width: '100%', height: '100%', borderRadius: 10 }}
                                    />
                                </TouchableOpacity>
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
                    tuData.map((item, index) => {
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

