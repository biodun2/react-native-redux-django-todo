import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';
import store from 'react-native-simple-store';
import Icon from 'react-native-vector-icons/FontAwesome';
import { actions as navigationActions } from 'react-native-navigation-redux-helpers';
import { connect } from 'react-redux';
import { styles } from './styles';
import { APP_NAME,
    VERSION
} from '../../constants';
const logo = require('../../images/download.png');
const { reset } = navigationActions;

class Splash extends Component {
    
    componentDidMount() {
        setTimeout(() => {
            store.get('introSeen').then((introSeen) => {
                const nextScreen = introSeen ? 'home' : 'intro';
                this.props.dispatch(reset([{
                    key: nextScreen,
                    index: 0
                }], 'global'));
            });
        }, 4000);
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <ScrollView>
                <Image style={styles.image} source={logo} />
                <View style={{alignItems: 'center', marginTop: 60}}>
                <Text style={styles.title}>{APP_NAME}</Text>
                <Text style={styles.version}>Version {VERSION} </Text>
                </View>
                </ScrollView>
                <Text style={styles.copyright}>Copyright  © Created By Raheem Azeez Abiodun </Text>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
} 

export default connect(() => { return {}; }, mapDispatchToProps)(Splash)