import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Card(props) {
  console.log(props.character);

  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{
          uri: props?.character?.image,
        }}
      />
      <View style={styles.container}>
        <Text style={styles.title}>{props?.character?.name}</Text>
        <Text style={styles.subtitle}>{props?.character?.origin?.name}</Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '50%',
    padding: 10,
  },
  card: {
    width: '90%',
    backgroundColor: '#3b3d43',
    borderRadius: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 10,
    flexDirection: 'row',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  subtitle: {
    fontSize: 12,
    color: 'white',
  },
});

