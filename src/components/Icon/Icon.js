import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Icon.style';

export default ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};
