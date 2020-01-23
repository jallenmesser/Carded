import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity, Dimensions } from "react-native";
import MenuItem from "./MenuItem";
import { Ionicons } from '@expo/vector-icons';
import { connect } from 'react-redux'
import Avatar from "./Avatar"
import { closeMenu } from '../actionCreators'


function mapStateToProps(state) {
  return { action: state.action, user: state.user }
}

const mapDispatchToProps = {
  closeMenu
}

const screenHeight = Dimensions.get("window").height;

function Menu(props) {
  const [top, setTop] = useState(new Animated.Value(screenHeight));
  useEffect(() => {
    toggleMenu()
  }, []);

  useEffect(() => {
    toggleMenu()
  }, [props.action])

  const toggleMenu = () => {

    if (props.action == 'openMenu') {
      Animated.spring(top, {
        toValue: 54
      }).start();
    }
    if (props.action == 'closeMenu') {
      Animated.spring(top, {
        toValue: screenHeight
      }).start()
    }
  }


  return (
    <AnimatedContainer style={{ top: top }}>
      <Cover>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQua59CnCLZGw_cL-9_drg5zpBNlP9bRVAPPP6qJd-z-uWhdpb7&s' }} />
        <Avatar image={props.user.image} />
        <Title>{props.user.name}</Title>
        <Subtitle>@{props.user.abilities[0].ability.name}</Subtitle>
      </Cover>
      <TouchableOpacity
        onPress={props.closeMenu}
        style={{ position: "absolute", top: 120, left: "50%", marginLeft: -22, zIndex: 1 }}>
        <CloseView>
          <Ionicons name="ios-close" size={44} color="#ff8983" />
        </CloseView>
      </TouchableOpacity>
      <Content>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            icon={item.icon}
            title={item.title}
            text={item.text}
          />
        ))}
      </Content>
    </AnimatedContainer>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

const Container = styled.View`
    position: absolute;
    background: white;
    width: 100%;
    height: 100%;
    z-index: 100;
    border-radius: 10px;
    overflow: hidden;
    `;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
      height: 142px;
      background: white;
      justify-content: center;
      align-items: center;
    `;

const Content = styled.View`
    height: ${screenHeight};
    background: #f0f3f5;
    padding: 50px;
  `;

const CloseView = styled.View`
      width: 44px;
      height: 44px;
      border-radius: 22px;
      background: white;
      justify-content: center;
      align-items: center;
      box-shadow: 0 5px 10px rgba(0,0,0, 0.15)
    `

const Image = styled.Image`
  position: absolute;
  height: 100%;
  width: 100%;
`

const Title = styled.Text`
  color: white
  font-size: 24px
  font-weight: 600
`

const Subtitle = styled.Text`
  color: rgba(255,255,255, 0.5)
  font-size: 12px
  font-weight: 600
  margin-top: 8px
`

const items = [
  {
    icon: "ios-settings",
    title: "Account",
    text: "settings"
  },
  {
    icon: "ios-exit",
    title: "Logout",
    text: "see you soon!"
  }
];