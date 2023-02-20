/* import Detail from '../screens/Details'
import Home from '../screens/Home';
import Login from '../screens/Login';
import Payment from '../components/payment/Payment';
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" 
    screenOptions=
    {
      {drawerStyle: {backgroundColor: '#725AC1', width: 250}}
    } 
    >
    <Drawer.Screen name="Home" component={Home} options={{drawerLabelStyle: {color: 'white'}}} />
    <Drawer.Screen name="Login" component={Login} options={{drawerLabelStyle: {color: 'white'}}}/>
    <Drawer.Screen name="Detail" component={Detail} options={{drawerLabelStyle: {color: 'white'}}} />
    <Drawer.Screen name="Payment" component={Payment} options={{drawerLabelStyle: {color: 'white'}}} />
  </Drawer.Navigator>
  )
}
export default DrawerNavigation */

import { DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer'

import Detail from '../screens/Details';
import Home from '../screens/Home';
import Login from '../screens/Login';
import MenuButtons from '../components/MenuButtons';
import Payment from '../components/payment/Payment';
import React from 'react'
import { StyleSheet } from 'react-native';
import { Text } from 'react-native'

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home"
    drawerContent={(props) => <MenuItems {...props}/> } 
    >
      
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Login" component={Login} />
    <Drawer.Screen name="Detail" component={Detail} />
    <Drawer.Screen name="Payment" component={Payment} />
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
      text= 'Login'
      onPress={() => navigation.navigate('Login')} />
      <MenuButtons
      text= 'Payment'
      onPress={() => navigation.navigate('Payment')} />
      <MenuButtons
      text= 'Detail'
      onPress={() => navigation.navigate('Detail')} /> 
    </DrawerContentScrollView>
  )
}

const styles = StyleSheet.create({
  content:{
    padding: 15,
    backgroundColor: '#725AC1',
    width: 280
  },
  title:{
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white'
  }
})

export default DrawerNavigation
