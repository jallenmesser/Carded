import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import Project from '../components/Project'
import { PanResponder, Animated } from 'react-native'
import { connect } from 'react-redux'
import { fetchUser, fetchCards } from '../actionCreators'
import { useSafeArea } from 'react-native-safe-area-context'

function mapStateToProps(state) {
  return { action: state.action, user: state.user, cards: state.cards, cardInFullScreen: state.cardInFullScreen }
}

const mapDispatchToProps = {
  fetchUser,
  fetchCards
}

const CardsScreen = props => {
  const [cardInFullScreen, setCardInFullScreen] = useState(props.cardInFullScreen)
  const [cards, setCards] = useState(props.cards);
  const [user, setUser] = useState(props.user);
  const [position, setPosition] = useState(new Animated.ValueXY())
  const [scale, setScale] = useState(new Animated.Value(0.91))
  const [translateY, setTranslateY] = useState(new Animated.Value(44))
  const [thirdScale, setThirdScale] = useState(new Animated.Value(0.8))
  const [thirdTranslateY, setThirdTranslateY] = useState(new Animated.Value(-50))
  const [index, setIndex] = useState(0)

  // const position = useRef(new Animated.ValueXY()).current;

  function getNextIndex(number) {
    let nextIndex = number + 1
    if (nextIndex > cards.length - 1) {
      return 0
    }
    return nextIndex
  }

  useEffect(() => {
    setCardInFullScreen(props.cardInFullScreen)
  }, [props.cardInFullScreen])


  const panResponder = React.useMemo(() => PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      if (gestureState.dx === 0 && gestureState.dy === 0) {
        return false;
      } else {
        console.log('pan responder', cardInFullScreen)
        if (cardInFullScreen === 'openCard') {
          return false;
        } else {
          return true;
        }
      }
    },

    onPanResponderGrant: () => {
      Animated.spring(scale, { toValue: 1 }).start()
      Animated.spring(translateY, { toValue: 1 }).start()
      Animated.spring(thirdScale, { toValue: 0.91 }).start()
      Animated.spring(thirdTranslateY, { toValue: 44 }).start()
    },

    onPanResponderMove: (evt, gestureState) => {
      position.setValue({ x: gestureState.dx, y: gestureState.dy });
    },

    onPanResponderRelease: (evt, gestureState) => {
      const positionY = position.y.__getValue()
      const positionX = position.x.__getValue()
      console.log(positionX)
      if (positionY > 300) {
        Animated.timing(position, {
          toValue: { x: positionX, y: 1000 }
        }).start(() => {
          position.setValue({ x: 0, y: 0 })
          scale.setValue(0.91)
          translateY.setValue(44)
          thirdScale.setValue(0.8)
          thirdTranslateY.setValue(-50)
          setIndex(getNextIndex(index))
        })
      } else if (positionY < -300) {
        Animated.timing(position, {
          toValue: { x: positionX, y: -1000 }
        }).start(() => {
          position.setValue({ x: 0, y: 0 })
          scale.setValue(0.91)
          translateY.setValue(44)
          thirdScale.setValue(0.8)
          thirdTranslateY.setValue(-50)
          setIndex(getNextIndex(index))
        })
      } else if (positionX < -150) {
        Animated.timing(position, {
          toValue: { x: -1000, y: positionY }
        }).start(() => {
          position.setValue({ x: 0, y: 0 })
          scale.setValue(0.91)
          translateY.setValue(44)
          thirdScale.setValue(0.8)
          thirdTranslateY.setValue(-50)
          setIndex(getNextIndex(index))
        })
      } else if (positionX > 150) {
        Animated.timing(position, {
          toValue: { x: 1000, y: positionY }
        }).start(() => {
          position.setValue({ x: 0, y: 0 })
          scale.setValue(0.91)
          translateY.setValue(44)
          thirdScale.setValue(0.8)
          thirdTranslateY.setValue(-50)
          setIndex(getNextIndex(index))
        })
      } else {
        position.setValue({ x: 0, y: 0 })
        Animated.spring(scale, { toValue: 0.91 }).start()
        Animated.spring(translateY, { toValue: 44 }).start()
        Animated.spring(thirdScale, { toValue: 0.8 }).start()
        Animated.spring(thirdTranslateY, { toValue: -50 }).start()
        // setIndex(getNextIndex(index))
      }

    },
  }), [index]);

  return (
    <Container>
      <Animated.View {...panResponder.panHandlers}
        style={[
          { transform: position.getTranslateTransform() },
          // styles.appStyles,
        ]}>
        <Project
          image={cards[index].picture}
          title={cards[index].company}
          name={cards[index].name}
          company={cards[index].company}
          canOpen={true}
        />
      </Animated.View>
      <Animated.View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        transform: [
          { scale: scale },
          { translateY: translateY }
        ]
      }}>
        <Project
          image={cards[getNextIndex(index)].picture}
          title={cards[getNextIndex(index)].company}
          name={cards[getNextIndex(index)].name}
          company={cards[getNextIndex(index)].company}
        />
      </Animated.View>
      <Animated.View style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -3,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        transform: [
          { scale: thirdScale },
          { translateY: thirdTranslateY }
        ]
      }}>
        <Project
          image={cards[getNextIndex(index + 1)].picture}
          title={cards[getNextIndex(index + 1)].company}
          name={cards[getNextIndex(index + 1)].name}
          company={cards[getNextIndex(index + 1)].company}
        />
      </Animated.View>
    </Container>
  )
}

CardsScreen.navigationOptions = {
  headerShown: false
}


export default connect(mapStateToProps, mapDispatchToProps)(CardsScreen)

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background: #f0f3f5;
`

const Text = styled.Text`

`

