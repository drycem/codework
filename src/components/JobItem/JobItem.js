import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import styles from './JobItem.style';

export default ({item, onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.title}>{item.short_name}</Text>
    <Text style={styles.text}>{item.name}</Text>
    <Text style={styles.location}>{item.locations[0].name}</Text>
    <View style={styles.footer_container}>
      <Text style={styles.footer_text}>{item.levels[0].name}</Text>
    </View>
  </TouchableOpacity>
);
