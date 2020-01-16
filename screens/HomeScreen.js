import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity, SafeAreaView, Animated, Easing } from 'react-native';
import Card from "../components/Card";
import styled from "styled-components";
import Menu from "../components/Menu";
import Avatar from "../components/Avatar";
import { connect } from 'react-redux'
import { openMenu, fetchUser, fetchCards } from '../actionCreators'

function mapStateToProps(state) {
  return { action: state.action, user: state.user, cards: state.cards }
}

const mapDispatchToProps = {
  fetchUser,
  fetchCards,
  openMenu
}

function HomeScreen(props) {
  const [user, setUser] = useState(props.user);
  const [scale, setScale] = useState(new Animated.Value(1))
  const [opacity, setOpacity] = useState(new Animated.Value(1))
  const [cards, setCards] = useState(props.cards);


  useEffect(() => {
    props.fetchCards()
    props.fetchUser()
  }, [])

  useEffect(() => {
    setUser(props.user)
  }, [props.user])

  useEffect(() => {
    setCards(props.cards)
  }, [props.cards])

  useEffect(() => {
    toggleMenu()
  }, [props.action])


  const toggleMenu = () => {
    if (props.action == 'openMenu') {
      Animated.timing(scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(opacity, {
        toValue: 0.5
      }).start();
    }
    if (props.action == 'openMenu') {
      Animated.timing(scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(opacity, {
        toValue: 1
      }).start();
    }
  }

  const pressHandler = (id) => {
    console.log(id)
    setCards((prevCards) => {
      return prevCards
    }
    )
  }


  return (
    <RootView>
      <Menu></Menu>
      <AnimatedContainer style={{ transform: [{ scale: scale }], opacity: opacity }}>
        <SafeAreaView>

          <TitleBar>
            <Logo style={{ resizeMode: "contain" }} source={require('../Logo.png')} />
            <TouchableOpacity onPress={props.openMenu}>
              <User>
                <UserText>
                  <Title>Welcome back,</Title>
                  <Name>{user.name}</Name>
                </UserText>
                <Avatar />
              </User>
            </TouchableOpacity>
          </TitleBar>
          <Subtitle>{user.name}'s Cards:</Subtitle>
          <FlatList
            horizontal={true}
            keyExtractor={(item) => item.id.toString()}
            data={cards}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => { props.navigation.push('Section') }}>
                <Card
                  title={item.note}
                  image={{ uri: item.picture }}
                  caption={item.name}
                  subtitle={item.company} />
              </TouchableOpacity>

            )}
          />
        </SafeAreaView>
      </AnimatedContainer>
    </RootView>
  );
}

HomeScreen.navigationOptions = {
  headerShown: false
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)

const RootView = styled.View`
  background: black;
  flex: 1;
`

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
  border-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container)

const TitleBar = styled.View`
  flex-direction: row;
  width: 100%;
  padding-left: 20px;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;
const Logo = styled.Image`
  width: 100;
`
// const Avatar = styled.Image`
//   width: 44px;
//   height: 44px;
//   background: black;
//   border-radius: 22px;
//   margin-right: 20px;
//   top: 0;
//   left: 0;
// `;
const User = styled.View`
  flex-direction: row;
`
const UserText = styled.View`
  align-items: flex-end;
  margin-right: 10px;
`
const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;