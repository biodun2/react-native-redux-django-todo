import React, { Component } from 'react';
import { AppRegistry,
    View
} from 'react-native';
import { Provider } from 'react-redux';
import MainNavigation from './src/containers/MainNavigation';
import configureStore from './src/store';


const store = configureStore();

class TodoApp extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{flex: 1}}>
                    <MainNavigation />
                </View>
            </Provider>
        )
    }
}


AppRegistry.registerComponent('TODO', () => TodoApp);
