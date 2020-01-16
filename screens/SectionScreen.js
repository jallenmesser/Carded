import React from 'react'
import styled from 'styled-components'
import { Button } from 'react-native'


function SectionScreen(props) {

  return (
    <Container>
      <Text>SectionScreen</Text>
      <Button title="Close" onPress={() => {
        props.navigation.goBack()
      }} />
    </Container>
  )
}

SectionScreen.navigationOptions = {
  headerShown: false
}

export default SectionScreen

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Text = styled.Text`

`