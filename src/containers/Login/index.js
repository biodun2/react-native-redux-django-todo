import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';
import t from 'tcomb-form-native';
import { styles } from '../Registration/styles';


const Form = t.form.Form;
const LoginForm = t.struct({
    username: t.String,
    password: t.String,
    remember_me: t.Boolean
});

const options = {
    auto: 'placeholders',
    fields: {
        username: {
            error: 'Username is Mandatory',
            maxlength: 25,
            label: 'Username'
        },
        password: {
            error: 'Password is compulsory',
            maxlength: 25,
            label: 'Password',
            type: 'password'
        }
    }
}


export default class Login extends Component {

    handleSubmit = () => {
        const value = this.refs.form.getValue();
        console.log(value);
    }

    render() {
        return (
            <View style={styles.container}>
                <Form 
                    ref="form"
                    type={LoginForm}
                    options={options}
                />
                <TouchableHighlight style={styles.button} onPress={this.handleSubmit} underlayColor='#99d9f4'>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableHighlight>
            </View>
        )
    }
}