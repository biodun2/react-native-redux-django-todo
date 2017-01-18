import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';


export default class Footer extends Component {
    render() {
        return (
            <View style={{flexDirection: 'row',  justifyContent: 'space-between', marginLeft: 80, marginRight: 80}}>
                <TouchableOpacity>
                    <Text>All</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>Completed</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text>Active</Text>
                </TouchableOpacity>
            </View>
        )
    }
}