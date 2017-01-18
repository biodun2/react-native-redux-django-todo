import React, { Component } from 'react';
import {
    Alert,
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import t from 'tcomb-form-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actions as navigationActions } from 'react-native-navigation-redux-helpers';

import { styles } from './styles';
import validateEmail from '../../utils/form';
import * as actionCreators from '../../actions/register';


const { reset } = navigationActions;

const Form = t.form.Form;
const RegistrationForm = t.struct({
    username: t.String,
    email: t.String,
    password: t.String,
    confirm_password: t.String
});

const options = {
    fields: {
        username: {
            error: 'Username is Mandatory',
            maxlength: 25,
            label: 'Username',
            placeholder: 'Specify a username'
        },
        email: {
            error: 'Email is mandatory',
            maxlength: 25,
            label: 'Email Address'
        },
        password: {
            error: 'Password is compulsory',
            maxlength: 25,
            label: 'Password',
            password: true,
            secureTextEntry: true

        },
        confirm_password: {
            error: 'Confirm password is compulsory',
            maxlength: 25,
            label: 'Confirm Password',
            password: true,
            secureTextEntry: true
        }

    }
}


class Registration extends Component {

    handleSubmit = () => {
        const value = this.refs.form.getValue();
        email = validateEmail(value.email);
        confirmPassword = value.password === value.password; 
        shouldSendRequest = email && confirmPassword ? this.props.actions.authRegisterUser(value) : Alert.alert("check your email if it valid e.g h@y.com or password fields matches with confirm password");
        
        responseText = this.props.register.statusText;
        if (responseText) {
            Alert.alert('Your Registration was successful');
        }

        else {
            Alert.alert('Something went wrong');
        }
        nextScreen = 'todo';
        shouldRedirect = this.props.register.isRegistering ? 
                        this.props.dispatch(reset([{
                key: nextScreen,
                index: 0
            }], 'global')) : '';
    }

    render() {
        return (
            <View style={styles.container}>
                <Form 
                    ref="form"
                    type={RegistrationForm}
                    options={options}
                />
                <TouchableHighlight style={styles.button} onPress={this.handleSubmit} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        register: state.register
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        actions: bindActionCreators(actionCreators, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Registration);