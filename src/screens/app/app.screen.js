import React, {useEffect} from 'react';
import {View, Text, FlatList, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetch_characters} from './../../redux/actions/rickandmorty.action';
import Card from './components/card.component';

export default props => {
  const dispatch = useDispatch();
  const {characters, loading, error} = useSelector(state => state.rickandmorty);

  useEffect(() => {
    dispatch(fetch_characters());
  }, []);

  const renderItem = ({item}) => <Card character={item}></Card>;

  return loading ? (
    <Text>Loading...</Text>
  ) : (
    <View style={{flex: 1, backgroundColor: '#21272e'}}>
      <Button
        onPress={()=>props.navigation.navigate("app2")}
        title="Ver estado"
        color="#841584"
      />
      <FlatList
        data={characters}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
