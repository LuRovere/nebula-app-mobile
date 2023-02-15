import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Carousel from '../components/carrousel/Carrousel'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

const { height, width } = Dimensions.get('window')

const Detail = ({ item, index }) => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', backgroundColor: 'black' }}>

            <ScrollView style={styles.container}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.containerCard}>
                    <View style={styles.containerImg}>
                        <Image source={require('../../assets/dark3.jpg')} style={styles.image} />
                    </View>
                    <View style={styles.containerTitle} >
                        <Text style={styles.title}>Dark Knigth</Text>
                    </View>
                    <View style={styles.containerDescription}>
                        <Text style={styles.description}>
                            Dark Knight is a 3D legendary magic MMOARPG web game featuring the western magical and realistic art style. Built on the Fancy3D engine to give players an immersive experience
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
                        <Text style={{ color: 'gray', margin: 20 }} >Category : MMOARPG </Text>
                        <Text style={{ color: 'gray' }}> Developer : Yoozo Games</Text>
                    </View>
                </View>
                <Carousel />
                <View>
                    <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', height: 60, margin: 30 }} > System Requirements</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={styles.containerFirstReq}>
                        <Text style={{ color: 'white', textAlign: 'center', margin: 10 }}>So:  Windows 7 SP1, Windows 8.1, Windows 10 (64-bit). </Text>
                        <Text style={{ color: 'white', textAlign: 'center', margin: 10 }}> Procesador: Core i5-4430 / AMD FX-6300 </Text>
                    </View>
                    <View style={styles.containerSecondReq}>
                        <Text style={{ color: 'white', textAlign: 'center', margin: 10 }}>
                            Graphics: GeForce GTX 960 2GB / AMD Radeon R7 370 2GB.
                        </Text>
                        <Text style={{ color: 'white', textAlign: 'center', margin: 10 }}>
                            Ram: 8 GB
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
        backgroundColor: 'red',
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
