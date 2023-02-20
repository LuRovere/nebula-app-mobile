import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

import Carousel from '../components/carrousel/Carrousel'
import { ScrollView } from 'react-native-gesture-handler'
import gamesActions from '../store/games/action'
import { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'

const { height, width } = Dimensions.get('window')

const { getGame } = gamesActions;

const Detail = ({ item, index }) => {

    const gameStore = useSelector((store) => store?.games);
    const dispatch = useDispatch()

    // usar para obtener el id
/* 
    const route = useRoute();
    const id = route.params; */

    useFocusEffect(
        useCallback(() => {
            if (gameStore) {
                dispatch(getGame('63e2ca9058a16079e6c746e9'));
            }
        }, ['63e2ca9058a16079e6c746e9'])
    );


    return (

        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: 'black' }}>
            <ScrollView style={styles.container}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.containerCard}>
                    <View style={styles.containerImg}>
                        <Image source={{ uri: gameStore?.game?.response?.image }} style={styles.image} />
                    </View>
                    <View style={styles.containerTitle} >
                        <Text style={styles.title}>  {gameStore.title} </Text>
                    </View>
                    <View style={styles.containerDescription}>
                        <Text style={styles.description}>
                            {gameStore?.game?.response?.description}
                        </Text>
                    </View>
                    <View style={styles.containerIcons}>
                        <Image source={require('../../assets/windowsIcon.png')} style={styles.icon} />
                        <Image source={require('../../assets/appleIcon.png')} style={styles.icon} />
                        <TouchableOpacity style={{ backgroundColor: '#8D86C9', padding: 2, borderRadius: 5 }}
                        >
                            <Image source={require('../../assets/shopIcon.png')} style={styles.iconShop} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.containerInfo}>
                        <Text style={{ color: 'gray', margin: 20 }} >Category :  {gameStore?.game?.response?.category}  </Text>
                        <Text style={{ color: 'gray' }}> Developer : {gameStore?.game?.response.developer}  </Text>
                    </View>
                </View>
                <Carousel
                    key={""}
                />
                <View>
                    <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', height: 60, margin: 30 }} > System Requirements</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.containerFirstReq}>
                        <Text style={{ color: 'white', textAlign: 'center', margin: 10 }}>So:  {gameStore?.game?.response?.so}  </Text>
                        <Text style={{ color: 'white', textAlign: 'center', margin: 10 }}> Procesador:  {gameStore?.game?.response?.procesador} </Text>
                    </View>
                    <View style={styles.containerSecondReq}>
                        <Text style={{ color: 'white', textAlign: 'center', margin: 10 }}>
                            Graphics:  {gameStore?.game?.response?.graphics}
                        </Text>
                        <Text style={{ color: 'white', textAlign: 'center', margin: 10 }}>
                            Ram: {gameStore?.game?.response?.ram}
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Detail

const styles = StyleSheet.create({

    container: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
    },
    containerCard: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 700,
    },

    image: {
        height: 200,
        width: 400,
        borderRadius: 2
    },

    containerTitle: {
        margin: 10
    },

    title: {
        color: 'white',
        textAlign: 'center',
        margin: 5,
        opacity: 0.5,
    },
    containerDescription: {
        height: 150,
        width: '95%',
        borderRadius: 3,
        backgroundColor: '#725AC1',
        justifyContent: 'center',
        alignItems: 'center'
    },

    description: {
        color: 'white',
        margin: 5,
        textAlign: 'center',
        opacity: 0.7
    },
    containerIcons: {
        width: '95%',
        borderRadius: 3,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: '#CAC4CE',
    },
    icon: {
        width: 30,
        height: 35,
    },
    iconShop: {
        width: 44,
        height: 40,
        padding: '3%',
        borderRadius: 4
    },
    containerInfo: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20,
    },
    containerFirstReq: {
        margin: 10,
        height: 110,
        width: '80%',
        backgroundColor: '#16202D',
        borderWidth: 1,
        borderColor: '#725AC1',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    containerSecondReq: {
        margin: 10,
        height: 110,
        width: '80%',
        backgroundColor: 'red',
        backgroundColor: '#16202D',
        borderWidth: 1,
        borderColor: '#725AC1',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginBottom: 60
    }
})
