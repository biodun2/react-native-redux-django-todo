import { StyleSheet, Dimensions } from 'react-native';
import { WHITE } from '../../constants';

export default Styles = StyleSheet.create({
    image: {
        height: Dimensions.get('window').height * 0.4,
        justifyContent: 'center'
    },

    textContainer: {
        marginTop: 60,
        height: Dimensions.get('window').height * 0.6,
        alignItems: 'center',
    },

    h1: {
        fontSize: 20,
        color: WHITE,
        fontWeight: 'bold'
    },  

    h3: {
        fontSize: 17,
        color: WHITE
    }
})