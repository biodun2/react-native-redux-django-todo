import { StyleSheet, Dimensions } from 'react-native';
import {
    WHITE,
    BROWN,
    GREY,
    HONEY_DEW
} from '../../constants';

export const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'pink',
        paddingTop: 80,
        alignItems: 'center'       
    },    
    image: {
        paddingTop: 20,
        height: Dimensions.get('window').height * 0.2,
        justifyContent: 'center',
        borderRadius: 10
    },
    title: {
        paddingTop: 20,
        fontSize: 20,
        color: WHITE,
        justifyContent: 'center',
        fontWeight: 'bold',
        fontFamily: 'arial'
    },
    version: {
        paddingTop:10,
        fontSize: 17,
        color: WHITE,
        justifyContent: 'center'
    },
    copyright: {
        fontSize: 16,
        justifyContent: 'flex-end',
        color: WHITE
    }
})