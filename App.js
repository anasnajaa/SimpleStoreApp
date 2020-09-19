import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import {v4} from 'uuid';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: v4(), text: 'Milk'},
    {id: v4(), text: 'Eggs'},
    {id: v4(), text: 'Bread'},
    {id: v4(), text: 'Juice'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Please enter item', {
        text: 'OK',
      });
      return null;
    }
    setItems((prevItems) => {
      return [{id: v4(), text}, ...prevItems];
    });
  };

  return (
    <NavigationContainer>
      <View style={styles.contaier}>
        <Header />
        <AddItem addItem={addItem} />
        <FlatList
          data={items}
          renderItem={({item}) => (
            <ListItem item={item} deleteItem={deleteItem} />
          )}
        />
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  contaier: {
    flex: 1,
    paddingTop: 60,
  },
});

export default App;
