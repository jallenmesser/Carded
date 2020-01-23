import React, { useState } from 'react'
import styled from 'styled-components'
import { Animated, TouchableWithoutFeedback, Dimensions, StatusBar, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux'
import { openCard, closeCard } from '../actionCreators'

function mapStateToProps(state) {
  return {
    action: state.action
  }
}

// const mapDispatchToProps = {
//   openCard,
//   closeCard
// }
function mapDispatchToProps(dispatch) {
  return {
    openCard: () =>
      dispatch({
        type: "OPEN_CARD"
      }),
    closeCard: () =>
      dispatch({
        type: "CLOSE_CARD"
      })
  };
}

const screenWidth = Dimensions.get("window").width
const screenHeight = Dimensions.get("window").height
const tabBarHeight = 83

function Project(props) {

  const { cardInFullScreen } = useSelector(state => state)
  const dispatch = useDispatch()

  const [cardWidth, setCardWidth] = useState(new Animated.Value(315))
  const [cardHeight, setCardHeight] = useState(new Animated.Value(600))
  const [titleTop, setTitleTop] = useState(new Animated.Value(20))
  const [opacity, setOpacity] = useState(new Animated.Value(0))

  const showCard = () => {
    console.log("First")
    console.log("First 2.0")


    // dispatch(openCard())

    console.log("Second")

    if (!props.canOpen) return;

    Animated.spring(cardWidth, { toValue: screenWidth }).start()
    Animated.spring(cardHeight, { toValue: screenHeight - tabBarHeight }).start()
    Animated.spring(titleTop, { toValue: 40 }).start()
    Animated.timing(opacity, { toValue: 1 }).start()
    console.log("Third")


    // props.openCard()
    // dispatch(openCard())
    console.log('I am aftert the open card')
    StatusBar.setHidden(true)
    console.log('I am after the status bar')
  }

  const unshowCard = () => {
    // dispatch(closeCard())

    Animated.spring(cardWidth, { toValue: 315 }).start()
    Animated.spring(cardHeight, { toValue: 600 }).start()
    Animated.spring(titleTop, { toValue: 20 }).start()
    Animated.timing(opacity, { toValue: 0 }).start()

    StatusBar.setHidden(false)
    // props.closeCard()

    // console.log(props.action)
  }

  return (
    <TouchableWithoutFeedback onPress={showCard}>
      <AnimatedContainer style={{ width: cardWidth, height: cardHeight }}>
        <Cover>
          <Image source={{ uri: props.image }} />
          <AnimatedTitle style={{ top: titleTop }}>{props.title}</AnimatedTitle>
          <Author>by {props.name}</Author>
        </Cover>
        <Text>{props.company}</Text>
        <TouchableOpacity style={{ position: "absolute", top: 20, right: 20 }} onPress={unshowCard}>
          <AnimatedCloseView style={{ opacity: opacity }}>
            <Ionicons name="ios-close" size={32} color="#ff8983" />
          </AnimatedCloseView>
        </TouchableOpacity>
      </AnimatedContainer>
    </TouchableWithoutFeedback>
  )
}

export default Project;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  border-radius 16px;
  justify-content: center;
  align-items: center;
`

const AnimatedCloseView = Animated.createAnimatedComponent(CloseView)

const Container = styled.View`
  width: 315px;
  height: 600px;
  border-radius: 14px;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container)

const Cover = styled.View`
  height: 500px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 500px;
`;

const Title = styled.Text`
  position: absolute;
  top: 20px;
  left: 20px;
  font-size: 24px;
  font-weight: bold;
  color: white;
  width: 300px;
`;

const AnimatedTitle = Animated.createAnimatedComponent(Title)

const Author = styled.Text`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Text = styled.Text`
  font-size: 17px;
  margin: 20px;
  line-height: 24px;
  color: #3c4560;
`;