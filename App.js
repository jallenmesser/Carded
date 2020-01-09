import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [name, setName] = useState('Jallen');
  const [cards, setCards] = useState([
    { name: 'Jallen', id: '1', image: 'https://image.flaticon.com/icons/png/512/149/149452.png' },
    { name: 'yoshi', id: '2', image: 'https://i.ytimg.com/vi/0iUTZajxlWI/maxresdefault.jpg' },
    { name: 'mario', id: '3', image: 'https://image.flaticon.com/icons/png/512/149/149452.png' },
    { name: 'luigi', id: '4', image: 'https://image.flaticon.com/icons/png/512/149/149452.png' },
    { name: 'peach', id: '5', image: 'https://image.flaticon.com/icons/png/512/149/149452.png' },
    { name: 'toad', id: '6', image: 'https://image.flaticon.com/icons/png/512/149/149452.png' },
    { name: 'bowser', id: '7', image: 'https://image.flaticon.com/icons/png/512/149/149452.png' },
  ]);

  const pressHandler = (id) => {
    console.log(id)
    setCards((prevCards) => {
      return prevCards
    }
    )}

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Image style={styles.logo} source={require('./Logo.png')} />
      </View>
      <View style={styles.cardTitle}>
        <Text style={{fontSize: 30}}>{name}'s Cards:</Text>
      </View>
      <FlatList 
        numColumns={3}
        keyExtractor={(item) => item.id} 
        data={cards} 
        renderItem={({ item }) => ( 
          <TouchableOpacity style={styles.card} onPress={() => pressHandler(item.id)}>
            <Image style={styles.profileIcon} source={{uri: item.image}} />
            <Text style={styles.cardName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nav: {
    marginTop: 50,
    height: 55,
    backgroundColor: 'white',
    elevation: 3,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  logo: {
    width: 200,
    resizeMode: "contain",
  },
  cardTitle: {
    marginTop: 25,
    marginLeft: 25,
    alignItems: "flex-start"
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#ff8983',
    fontSize: 24,
    justifyContent: "flex-start",
    alignItems: 'center',
    borderRadius: 10,
  },
  profileIcon: {
    width: 30, 
    height: 30,
    borderRadius: 20,
  },
  cardName: {
    flex: 1,
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderStyle: 'solid',
  }
});
