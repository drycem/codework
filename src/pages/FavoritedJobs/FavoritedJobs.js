import React from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {removeFromFavs} from '../../context/features/favorites/favoritesSlice';

import styles from './FavoritedJobs.style';
import FavoritedJobItem from '../../components/FavoritedJobItem/FavoritedJobItem';

export default () => {
  const favIds = useSelector(state => state.favorites.arr);
  const dispatch = useDispatch();

  function renderJob({item}) {
    return (
      <FavoritedJobItem
        item={item}
        onPress={() => {
          dispatch(removeFromFavs(item));
        }}
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text>FavoritedJobs:</Text>
      <FlatList data={favIds} renderItem={renderJob} />
    </SafeAreaView>
  );
};
