import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTabNavigator from './src/navigations/BottomTabNavigation'
import HomeStackNavigation from './src/navigations/HomeStackNavigation'
import { StatusBar } from 'react-native'


export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
      <StatusBar/>
    </NavigationContainer>
  )
}