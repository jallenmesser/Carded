import React, { useEffect } from 'react'
import styled from 'styled-components'
import { TouchableOpacity, StatusBar } from "react-native";
import { Ionicons } from '@expo/vector-icons';


function SectionScreen(props) {
  const { navigation } = props
  const card = navigation.getParam('section')

  useEffect(() => { StatusBar.setBarStyle("light-content", true) }, [])

  useEffect(() => {
    return () => {
      StatusBar.setBarStyle("dark-content", true);
    }
  }, []);

  return (
    <Container>
      <StatusBar hidden />
      <Cover>
        <Image source={{ uri: card.sprites.front_shiny }} />
        <Title>{card.name}</Title>
        <Caption>{card.website}</Caption>
      </Cover>
      <TouchableOpacity
        onPress={() => {
          props.navigation.goBack();
        }}
        style={{
          position: "absolute",
          top: 20,
          right: 20
        }}
      >
        <CloseView>
          <Ionicons
            name="ios-close"
            size={40}
            color="#ff8983"
          />
        </CloseView>
      </TouchableOpacity>
    </Container>
  )
}

SectionScreen.navigationOptions = {
  headerShown: false
}

export default SectionScreen

const Container = styled.View`
flex: 1;
`;

const Cover = styled.View`
height: 100%;
`;

const Image = styled.Image`
height: 100%;
width: 100%;
position: absolute;
top: 0;
background: #3c4560;
`;

const Title = styled.Text`
font-size: 24px;
color: white;
font-weight: bold;
width: 170px;
position: absolute;
top: 78px;
left: 20px;
`;

const Caption = styled.Text`
color: white;
font-size: 17;
position: absolute;
bottom: 20px;
left: 20px;
max-width: 300px;
`;

const CloseView = styled.View`
width: 40px;
height: 40px;
background: white;
border-radius: 22px;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
justify-content: center;
align-items: center;
`;

const Wrapper = styled.View`
flex-direction: row;
position: absolute;
top: 40px;
left: 20px;
align-items: center;
`;

const Subtitle = styled.Text`
font-size: 15px;
font-weight: 600;
color: rgba(255, 255, 255, 0.8);
margin-left: 5px;
text-transform: uppercase;
`;