import React from 'react'
import styled from "styled-components";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen'
import SectionScreen from '../screens/SectionScreen'
import CardsScreen from '../screens/CardsScreen'
import { Ionicons } from '@expo/vector-icons';

const activeColor = '#ff8983'
const inactiveColor = '#b8bece'

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Section: SectionScreen
  },
  {
    mode: 'modal'
  }
);

HomeStack.navigationOptions = ({ navigation }) => {

  let tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  if (routeName == "Section") {
    tabBarVisible = false
  }


  return {
    tabBarVisible,
    tabBarLabel: () => {
      return <Title>Home</Title>
    },
    tabBarIcon: ({ focused }) => {
      return <Ionicons name="ios-home" size={26} color={
        focused ? activeColor : inactiveColor
      } />
    }
  }
}

const CardsStack = createStackNavigator(
  {
    Cards: CardsScreen
  }
);

CardsStack.navigationOptions = {
  tabBarLabel: () => {
    return <Title> My Cards</Title >
  },
  tabBarIcon: ({ focused }) => {
    return <Ionicons name="ios-albums" size={26} color={
      focused ? activeColor : inactiveColor
    } />
  }
}

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  CardsStack
})

export default TabNavigator

const Title = styled.Text`
  font-size: 10px;
  color: #3c4560;
  font-weight: 500;
`;