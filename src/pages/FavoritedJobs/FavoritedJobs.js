import React from 'react';
import {
  SafeAreaView,
  Text,
  Button,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  increment,
  decrement,
  removeFromFavs,
} from '../../context/features/favorites/favoritesSlice';

import styles from './FavoritedJobs.style';

export default () => {
  const favIds = useSelector(state => state.favorites.arr);
  const dispatch = useDispatch();
  function renderJob({item}) {
    return (
      <TouchableOpacity onPress={() => dispatch(removeFromFavs(item))}>
        <Text>{item}</Text>
      </TouchableOpacity>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text>FavoritedJobs:</Text>
      <FlatList data={favIds} renderItem={renderJob} />
    </SafeAreaView>
  );
};
