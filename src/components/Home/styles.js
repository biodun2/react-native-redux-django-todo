import { StyleSheet } from 'react-native';
import {
  WHITE,
  BROWN
} from '../../constants';

export const styles = StyleSheet.create({
  linearGradient: {
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginLeft: 40,
    marginRight: 40
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: WHITE,
    backgroundColor: 'transparent',
  },
  h4: {
    marginTop: 30,
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'verdana',
    color: BROWN
  }
});