import React, {useEffect} from 'react';
import {View, Text, FlatList, Button} from 'react-native';

export default props => {
  
  return true ? (
    <Text>Loading...</Text>
  ) : (
    <View style={{flex: 1, backgroundColor: '#21272e'}}>
      
    </View>
  );
};
