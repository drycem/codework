import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import RenderHtml from '../../components/RenderHtml/RenderHtml';
import Button from '../../components/Button/Button';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {addToFavs} from '../../context/features/favorites/favoritesSlice';
import styles from './Details.style';

export default ({route}) => {
  const item = route.params;
  // const favIds = useSelector(state => state.favorites.arr);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.name} </Text>
        <View style={styles.row_container}>
          <Text style={styles.row_title}>Locations: </Text>
          <Text style={styles.locations}>{item.locations[0].name}</Text>
        </View>
        <View style={styles.row_container}>
          <Text style={styles.row_title}>Levels: </Text>
          <Text style={styles.level}>{item.levels[0].name}</Text>
        </View>
        <Text style={styles.title2}>Job Detail</Text>
      </View>
      <ScrollView style={styles.body}>
        <RenderHtml source={{html: `${item.contents}`}} />
      </ScrollView>
      <View style={styles.button_container}>
        {/* <Icon name="favorite" size={22} color="black" /> */}
        <Button text="Submit" onPress={null} />
        <Button
          text="Add to Favorites"
          onPress={() => {
            dispatch(addToFavs(item.id) || null);
          }}
        />
      </View>
    </SafeAreaView>
  );
};
