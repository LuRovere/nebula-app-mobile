import { Dimensions, Image, Pressable, StyleSheet, Text, Touchable, View } from "react-native";

import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const { height, width } = Dimensions.get('window')

export default function Payment() {
    return (
        <View
            style={{
                backgroundColor: '#242038',
                height: '100%',
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
            <View style={styles.containerCard}>
                <Image source={require('../../../assets/darkNigth.jpg')}
                    style={styles.image}
                />
                <View style={styles.title}>
                    <Text style={styles.text}>Forge of Empires</Text>
                </View>
                <View style={styles.price}>
                    <Text style={{ color: 'white', }}>Price: $1269 </Text>
                    <View style={{ padding: 4, marginTop: 10 }} >
                        <Image source={require('../../../assets/shopIcon.png')}
                            style={styles.delete}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.containerPayment}>
                <View style={styles.payment}>
                    <Text>hola mundo</Text>
                </View>
                <View style={styles.secondContainer}>
                    <View style={styles.containerPrice}>
                        <Text style={{
                            fontSize: 15, textAlign: 'center', color: 'white', marginLeft: 8
                        }}>Total</Text>
                        <Text style={{
                            fontSize: 15, textAlign: 'center', color: 'white',
                            marginRight: 20
                        }}>$1269</Text>
                    </View>

                    <Pressable style={{
                        height: '28%', width: '100%', justifyContent: 'center', alignItems: 'flex-end',
                    }}>
                        <Text style={{ fontSize: 15, textAlign: 'center', color: 'white', backgroundColor: '#725AC1', padding: 8 , marginRight: 20, borderRadius: 10}}>Comprar</Text>
                    </Pressable>
                    <Image
                        style={{ width: '100%', height: '40%', borderRadius: 3 }}
                        source={{ uri: 'https://1.bp.blogspot.com/-817Qdlge3x4/YLaaInpbmqI/AAAAAAAADfw/qQWUesLaYfgQ7qENUQ2_g6zLa6sHT2MVQCLcBGAsYHQ/s640/mercadopago-og.jpg' }}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerCard: {
        width: '92%',
        borderRadius: 5,
        height: 120,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
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
        height: '30%',
        borderBottomWidth: 1,
        borderBottomColor: '#725AC1',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    image: {
        width: '51%',
        marginRight: 3,
        height: '100%',
        borderRadius: 5,
    },
    title: {
        width: '25%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        color: 'white',
    },
    price: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        marginTop: 40,
        marginRight: 5
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
        width: '90%',
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
    }
})