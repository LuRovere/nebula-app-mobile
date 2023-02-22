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
    console.log(messages);
    const dispatch = useDispatch()

    const handleMail = (text) => {
        setmail(text)
    }

    const handlePassword = (text) => {
        setPassword(text)
    }

    const captureData = async() => {
        console.log(mail, password);
        let data = { 
            mail: mail,
            password: password
        }

        let res = await dispatch(iniciar_sesion(data))
        if (res.payload.success) {
            navigation.navigate('Home', { replace: true })
        }
    }

    return (
        <View style={styles.container}>
  <View style={styles.logoContainer}>
    <Image
      source={require('../../assets/nebulalogo.png')}
      style={styles.logo}
    />
  </View>
  <View style={styles.inputContainer}>
    <TextInput
      placeholder="Email"
      style={styles.input}
      onChangeText={handleMail}
    />
    <TextInput
      secureTextEntry={true}
      placeholder="Password"
      style={styles.input}
      onChangeText={handlePassword}
    />
    <TouchableOpacity onPress={captureData} style={styles.sendBtn}>
      <Text style={styles.sendBtnText}>SignIn</Text>
    </TouchableOpacity>
  </View>
  <View style={styles.signupContainer}>
    <Text style={styles.signupText}>Still don't have an account?</Text>
    <TouchableOpacity style={styles.signupBtn}>
      <Text style={styles.signupBtnText}>SignIn</Text>
    </TouchableOpacity>
  </View>
</View>

    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#221F20',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logoContainer: {
      marginBottom: 50,
    },
    logo: {
      width: 200,
      height: 100,
      resizeMode: 'contain',
    },
    inputContainer: {
      width: '80%',
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: '#CCCCCC',
      padding: 10,
      marginBottom: 10,
    },
    sendBtn: {
      backgroundColor: '#007AFF',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 10,
    },
    sendBtnText: {
      color: '#FFFFFF',
      fontSize: 16,
    },
    signupContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    signupText: {
      marginRight: 5,
    },
    signupBtn: {
      backgroundColor: '#007AFF',
      padding: 5,
      borderRadius: 5,
      alignItems: 'center',
    },
    signupBtnText: {
      color: '#FFFFFF',
      fontSize: 16,
    },
  });

export default SignIn;