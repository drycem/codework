import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import Button from '../Button/Button';
import styles from './FavoritedJobItem.style';

export default ({item, onPress}) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchJob() {
      try {
        let res = await fetch(
          `https://www.themuse.com/api/public/jobs/${item}`,
        );
        let json = await res.json();
        setData(json);
      } catch {
        err => console.log(err);
      }
    }
    fetchJob();
  }, [item]);

  if (data) {
    console.log(data);
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{data.short_name}</Text>
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.location}>{data.locations[0].name}</Text>
        <View style={styles.footer_container}>
          <Text style={styles.footer_text}>{data.levels[0].name}</Text>
        </View>
        <Button text="Remove" onPress={onPress} />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color="red" />
    </View>
  );
};
