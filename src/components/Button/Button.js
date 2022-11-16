import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './Button.style';

export default ({text, onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);
