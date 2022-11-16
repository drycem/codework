import {StyleSheet} from 'react-native';
import colors from '../../colors/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.secondaryColor,
    borderRadius: 15,
    padding: 10,
    marginHorizontal: 5,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  },
});
