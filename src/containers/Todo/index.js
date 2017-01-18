import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import Header from './Header';
import Footer from './Footer';

export default class Todo extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Header />
                <Footer />
            </View>
        )
    }
}