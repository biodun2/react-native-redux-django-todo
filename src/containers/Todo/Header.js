import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableHighlight
} from 'react-native';
import { styles } from './styles';
import { checkHttpStatus } from '../../utils/ApiUtils';


export default class Header extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit = (e) => {
        fetch('http://192.168.56.1:8000/api/todo/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                todo: e.nativeEvent.text
            })
        })
            .then( (response) => console.log(response) )
            .catch(error => console.error(error))
    }

    render() {
        return (
            <View style={styles.inputWrapper}>
                <TextInput style={styles.input}
                    placeholder="Enter a new todo item"
                    onSubmitEditing={this.handleSubmit}
                    returnKeyType="submit"
                />
                <TouchableHighlight style={styles.btn}>
                    <Text style={styles.btnText}>Go!</Text>
                </TouchableHighlight>
            </View>
        )
    }
}