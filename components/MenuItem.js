import React from "react";
import styled from "styled-components";
import { Ionicons } from '@expo/vector-icons';

const MenuItem = props => (
  <Container>
    <IconView>
      <Ionicons name={props.icon} size={24} color="#ffa822" />
    </IconView>
    <Content>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
    </Content>
  </Container>
);

export default MenuItem;

const Container = styled.View`
  flex-direction: row;
  margin: 15px 0;
`;

const IconView = styled.View`
  width: 32;
  height: 32;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  padding-left: 20;
`;

const Title = styled.Text`
  color: #333333;
  font-size: 24;
  font-weight: 600;
`;

const Text = styled.Text`
  color: #333333;
  font-weight: 600;
  opacity: 0.6;
  margin-top: 5px;
`;
