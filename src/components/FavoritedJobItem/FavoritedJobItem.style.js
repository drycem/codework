import {StyleSheet} from 'react-native';
import colors from '../../colors/colors';

export default StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderBottomColor: '#c3c3c3',
    margin: 5,
    padding: 10,
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 34,
  },
  location: {
    borderRadius: 30,
    backgroundColor: colors.secondaryColor,
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
  },
  footer_container: {
    alignItems: 'flex-end',
  },
  footer_text: {
    color: colors.secondaryColor,
    fontSize: 30,
  },
});
