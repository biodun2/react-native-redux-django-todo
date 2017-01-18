import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { actions as navigationActions } from 'react-native-navigation-redux-helpers';
import { connect } from 'react-redux';
import { styles } from './styles';

const { reset } = navigationActions;

class Home extends Component {

    goToRegistration = () => {
        const nextScreen = 'registration';
        this.props.dispatch(reset([{
            key: nextScreen,
            index: 0
        }], 'global'));
    }

    goToLogin = () => {
        const nextScreen = 'login';
        this.props.dispatch(reset([{
            key: nextScreen,
            index: 0
        }], 'global'));
    }

    render() {
        return (
            <View style={{flex : 1}}>
                <View style={{flex: 1}}>
                <Text style={styles.h4}>To use the App, you need to Register {'\n'} or Login if you have an account with us</Text>
                </View>
                <View style={{flex: 2}}>
                <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={styles.linearGradient}>
                    <TouchableHighlight onPress={this.goToRegistration}>
                        <Text style={styles.buttonText}>
                            Register
                        </Text>
                    </TouchableHighlight>
                </LinearGradient>
                <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']}
                style={[styles.linearGradient, {marginTop: 20}]}>
                
                    <TouchableHighlight onPress={this.goToLogin}>
                        <Text style={[styles.buttonText, {marginTop:20}]}>
                            Login
                        </Text>
                    </TouchableHighlight>
                </LinearGradient>
                </View>
            </View>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}

export default connect(() => { return {}}, mapDispatchToProps)(Home);