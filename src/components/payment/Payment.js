import { Dimensions, Image, Pressable, StyleSheet, Text, Touchable, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux"

import React from "react";
import gamesActions from '../../store/games/action'
import { useCallback } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import { useRoute } from '@react-navigation/native';

const { getGame } = gamesActions;

const { width } = Dimensions.get('window')

export default function Payment() {

    const gameStore = useSelector((store) => store?.games);
    const dispatch = useDispatch()

    const route = useRoute();
    const id = route.params.gameId;
    console.log('funcionaa o kee', id)

    useFocusEffect(
        useCallback(() => {
            if (gameStore) {
                dispatch(getGame(id));
            }
        }, [id])
    );

    return (
        <View
            style={{
                backgroundColor: '#242038',
                height: '100%',
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <ScrollView
                style={{ width: '100%', height: '100%', }}
                showsVerticalScrollIndicator={false}
            >
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                    <View style={styles.containerCard}>
                        <Image source={{ uri: gameStore?.game?.response?.image }}
                            style={styles.image}
                        />

                        <View style={styles.price}>
                            <View style={styles.title}>
                                <Text style={styles.text}> {gameStore?.game?.response?.title} </Text>
                            </View>
                            <Text style={{ color: 'white', height: '20%', textAlign: 'center' }}> ${gameStore?.game?.response.price} </Text>
                            <View style={{height: '20%', justifyContent:'center', alignItems: 'center'}} >
                                <Image source={require('../../../assets/shopIcon.png')}
                                    style={styles.delete}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.containerPayment}>
                        <View style={styles.payment}>
                            <View style={styles.imageContainer}>
                                <Image source={{ uri: gameStore?.game?.response?.trailer[3] }}
                                    style={styles.image2}
                                />
                            </View>
                        </View>
                        <View style={styles.secondContainer}>
                            <View style={styles.containerPrice}>
                                <Text style={{
                                    fontSize: 15, textAlign: 'center', color: 'white', marginLeft: 8
                                }}>Total</Text>
                                <Text style={{
                                    fontSize: 15, textAlign: 'center', color: 'white',
                                    marginRight: 20
                                }}> ${gameStore.game.response.price} </Text>
                            </View>

                            <Pressable style={{
                                height: '28%', width: '100%', justifyContent: 'center', alignItems: 'flex-end',
                            }}>
                                <Text style={{ fontSize: 15, textAlign: 'center', color: 'white', backgroundColor: '#725AC1', padding: 8, marginRight: 20, borderRadius: 10 }}>Comprar</Text>
                            </Pressable>
                            <Image
                                style={{ width: '100%', height: '40%', borderRadius: 3 }}
                                source={{ uri: 'https://1.bp.blogspot.com/-817Qdlge3x4/YLaaInpbmqI/AAAAAAAADfw/qQWUesLaYfgQ7qENUQ2_g6zLa6sHT2MVQCLcBGAsYHQ/s640/mercadopago-og.jpg' }}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    containerCard: {
        width: '98%',
        borderRadius: 5,
        margin: 20,
        height: 120,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#16202D',
        borderWidth: 0.5,
        borderColor: '#725AC1',
        shadowColor: '#8D86C9',
        shadowOffset: {
            width: -2,
            height: 2
        },
        shadowOpacity: 20
    },
    containerPrice: {
        flexDirection: 'row',
        width: '90%',
        height: '40%',
        borderBottomWidth: 1,
        borderBottomColor: '#725AC1',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    image: {
        width: '50%',
        marginRight: 3,
        height: '100%',
        borderRadius: 5,
    },
    title: {
        height: '40%'
    },
    text: {
        textAlign: 'center',
        color: 'white',
    },
    price: {
        width: '50%',
        marginRight: 3,
        height: '100%',
        borderRadius: 5,
        justifyContent: 'space-around',
        textAlign: 'center'
    },
    delete: {
        width: 28,
        height: 25,
        justifyContent: 'center',
    },
    containerPayment: {
        width: 350,
        height: 400,
        backgroundColor: '#000',
        margin: 50,
        borderWidth: 1,
        borderColor: '#725AC1',
        borderRadius: 5,
        backgroundColor: '#16202D',
        justifyContent: 'center',
        alignItems: 'center'
    },
    payment: {
        height: '60%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#725AC1',
    },
    secondContainer: {
        height: '40%',
        width: '100%',
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image2: {
        width: '100%',
        height: 200,
        margin: 5
    },
    imageContainer: {
        width: '100%',
        height: '100%',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    }
})