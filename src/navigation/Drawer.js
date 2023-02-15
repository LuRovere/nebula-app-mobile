import Detail from '../screens/Details'
import Home from '../screens/Home';
import Login from '../screens/Login';
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
  </Drawer.Navigator>
  )
}
export default DrawerNavigation