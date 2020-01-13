import React, { useState, useEffect } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import Card from "./components/Card";
import styled from "styled-components";
import Menu from "./components/Menu";

export default function App() {
  const [name, setName] = useState('Jallen');

  const URL = `http://localhost:3000/api/v1/users`;
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then(users => {
        setUsers(users);
        console.log(users);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });

  }, []);


  const pressHandler = (id) => {
    console.log(id)
    setUsers((prevCards) => {
      return prevCards
    }
    )
  }


  return (
    <Container>
      <Menu></Menu>
      <TitleBar>
        <Logo style={{ resizeMode: "contain" }} source={require('./Logo.png')} />
        <TouchableOpacity>
          <User>
            <UserText>
              <Title>Welcome back,</Title>
              <Name>{name}</Name>
            </UserText>
            <Avatar source={{ uri: "https://pbs.twimg.com/profile_images/1100801423158185984/KbA9oOMI_400x400.jpg" }} />
          </User>
        </TouchableOpacity>
      </TitleBar>
      <Subtitle>{name}'s Cards:</Subtitle>
      <FlatList
        horizontal={true}
        keyExtractor={(item) => item.id}
        data={users}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Card
              title={item.name}
              image={{ uri: item.image }}
              caption={item.name}
              subtitle={item.username} />
          </TouchableOpacity>

        )}
      />
    </Container>
  );
}

const Container = styled.View`
  background: #f0f3f5;
  flex: 1;
`;

const TitleBar = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: 50px;
  padding-left: 20px;
  justify-content: space-between;
  align-items: center;
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
const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-right: 20px;
  top: 0;
  left: 0;
`;
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