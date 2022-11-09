import {StyleSheet} from 'react-native';
import colors from '../../colors/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#c3c3c3',
    padding: 10,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
  },
  row_container: {flexDirection: 'row'},
  row_title: {color: colors.secondaryColor, fontSize: 24},
  locations: {fontSize: 24},
  level: {fontSize: 24},
  title2: {fontSize: 34, fontWeight: 'bold', textAlign: 'center'},
  body: {padding: 5},
});
