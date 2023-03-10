import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {generateURI} from '../helpers/getUri';
import {CastElement} from '../interfaces/creditsInterface';

interface Props {
  actor: CastElement;
}

export const CastItem = ({actor}: Props) => {
  const uri = generateURI(actor.profile_path);

  return (
    <View style={styles.container}>
      {actor.profile_path && (
        <Image
          source={{uri}}
          style={{width: 50, height: 50, borderRadius: 10}}
        />
      )}
      <View style={styles.actorInfo}>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#2A2C2F'}}>
          {actor.name}
        </Text>
        <Text style={{fontSize: 16, opacity: 0.7, color: '#2A2C2F'}}>
          {actor.character}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.84,

    elevation: 10,
    marginHorizontal: 20,
    paddingRight: 15,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
});
