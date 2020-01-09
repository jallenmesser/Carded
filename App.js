import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const [name, setName] = useState('Jallen');

    const URL = `http://localhost:3000/api/v1/users`;
    const [users, setUsers] = useState([]);
    const [loading, setLoading ] = useState(true);
    useEffect(()=>{
      fetch(URL)
      .then((response) => response.json())
      .then( users  => {
        setUsers(users);
        //console.log(users);
        setLoading(false);
      })
      .catch( error => {
        console.error(error);
      });
  
    } , []);
  

  const pressHandler = (id) => {
    console.log(id)
    setUsers((prevCards) => {
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
        data={users} 
        renderItem={({ item }) => ( 
          <TouchableOpacity style={styles.card} onPress={() => pressHandler(item.id)}>
            <Image style={styles.profileIcon} source={{uri: item.image}} />
            <Text style={styles.cardName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
        <Text style={{fontSize: 30}}>users[0]</Text>
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
