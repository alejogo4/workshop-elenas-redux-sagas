import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import Card from './components/card.component';

export default props => {

  const {characters, loading, error} = useSelector(state => state.rickandmorty);


  const renderItem = ({item}) => <Card character={item}></Card>;

  return loading ? (
    <Text>Loading...</Text>
  ) : (
    <View style={{flex: 1, backgroundColor:'#21272e'}}>
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
