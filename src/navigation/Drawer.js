import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native';
import React from 'react'
import { createDrawerNavigator,DrawerContentScrollView } from '@react-navigation/drawer'
import Home from '../screens/Home';
import Login from '../screens/Login';
import MenuButtons from '../components/MenuButtons';
import Store from '../screens/Store';
import Detail from '../screens/Details';



const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator initialRouteName="Home"
    drawerContent={(props) => <MenuItems {...props}/> } 
    >
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Login" component={Login} />
    <Drawer.Screen name="Detail" component={Detail} />
    <Drawer.Screen name="Store" component={Store} />

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
      text= 'Store'
      onPress={() => navigation.navigate('Store')} />
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