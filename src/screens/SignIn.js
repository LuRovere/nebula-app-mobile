import { View, Text, ImageBackground, StyleSheet, TextInput, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
 import authActions from  "../store/auth/actions"

const { iniciar_sesion } = authActions

const SignIn = ({navigation}) => {
    const [mail, setmail] = useState('')
    const [password, setPassword] = useState('')
    const { messages } = useSelector(store =>store.auth) 
    const dispatch = useDispatch()

    const handleMail = (text) => {
        setmail(text)
    }

    const handlePassword = (text) => {
        setPassword(text)
    }

    const captureData = async() => {
        let data = { 
            mail: mail,
            password: password
        }

        let res = await dispatch(iniciar_session(data))
        if (res.payload.success) {
            navigation.navigate('Home')
        }
    }

    return (
        <View /* style={styles.container} */>
            <View /* style={styles.logoContainer} */>
                {/* <Image source={require('../../assets/nebulaIsotipeLogotipePosibleVersion.png')}/> */}
            </View>
            <View /* style={styles.inputContainer} */>
                <TextInput placeholder= 'Email'/* style={styles.input} */ onChangeText={handleMail}/>
                <TextInput secureTextEntry={true} placeholder='Passport' /* style={styles.input} */ onChangeText={handlePassword}/>
                <TouchableOpacity onPress={captureData} /* style={styles.sendBtn} */>
                        <Text /* style = {styles.btnText} */>Send</Text>
                </TouchableOpacity>
            </View>
            <View /* style={styles.signupContainer} */>
                <Text>Still dont have account</Text>
                <TouchableOpacity /* style={styles.signupBtn} */>
                    <Text /* style={styles.btnText} */>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#FFFFFF',
    },
})

export default SignIn;