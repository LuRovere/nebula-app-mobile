import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer'
import { Text, View } from 'react-native'

import Detail from '../screens/Details';
import Favorites from '../screens/Favorites';
import Home from '../screens/Home';
import Login from '../screens/Login';
import MenuButtons from '../components/MenuButtons';
import Payment from '../components/payment/Payment';
import SignIn from '../screens/SignIn';
import React from 'react'
import Store from '../screens/Store';
import { StyleSheet } from 'react-native';


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home"
    drawerContent={(props) => <MenuItems {...props}/> } 
    >
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Login" component={Login} />
    <Drawer.Screen name="Favorites" component={Favorites} />
    <Drawer.Screen name="Detail" component={Detail} />
    <Drawer.Screen name="Store" component={Store} />
    <Drawer.Screen name="Payment" component={Payment}/>
    <Drawer.Screen name="SignIn" component={SignIn}/>
  </Drawer.Navigator>
 
  
  )
}

const MenuItems = ({navigation}) => {

  return(
    <DrawerContentScrollView style={styles.content}>
      <Text style= {styles.title}>Nebula</Text>
        <MenuButtons
      text= 'Home'
      onPress={() => navigation.navigate('Home')} />
      <MenuButtons
      text= 'Favorites'
      onPress={() => navigation.navigate('Favorites')} />
      <MenuButtons
      text= 'Store'
      onPress={() => navigation.navigate('Store')} />
      <MenuButtons
      /* text= 'Payment' */
      onPress={() => navigation.navigate('Payment')} />
      <MenuButtons
      text= 'SignIn'
      onPress={() => navigation.navigate('SignIn')} />
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  content:{
    padding: 15,
    backgroundColor: '#242038',
    width: 280
  }, 
  title:{
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  }
})

export default DrawerNavigation