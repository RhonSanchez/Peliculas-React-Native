import React from 'react';
import {Text, View} from 'react-native';
import currencyFormatter from 'currency-formatter';
import {MovieFull} from '../interfaces/movieInterface';
import {CastElement} from '../interfaces/creditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  movieFull: MovieFull;
  cast: CastElement[];
}

export const MovieDetails = ({movieFull, cast}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" color="grey" size={16} />
          <Text style={{color: 'black'}}> {movieFull.vote_average}</Text>
          <Text style={{color: 'black', marginLeft: 5}}>
            {movieFull.genres.map(g => g.name).join(', ')}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Historia
        </Text>
        <Text style={{fontSize: 16, color: 'black'}}>{movieFull.overview}</Text>
        <Text
          style={{
            fontSize: 20,
            marginTop: 10,
            fontWeight: 'bold',
            color: 'black',
          }}>
          Presupuesto
        </Text>
        <Text style={{fontSize: 18, color: 'black'}}>
          {currencyFormatter.format(movieFull.budget, {code: 'USD'})}
        </Text>
      </View>
    </>
  );
};
