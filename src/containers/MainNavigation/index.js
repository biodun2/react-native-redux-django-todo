import { View, NavigationExperimental } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Registration from '../Registration';
import Login from '../Login';
import Home from '../../components/Home';
import Splash from '../../components/Splash';
import Todo from '../Todo';
import Intro from '../../components/Intro';

const { CardStack: NavigationCardStack } = NavigationExperimental;

class MainNavigation extends Component {

    renderScene = (props) => {
        let Scene = null;

        switch (props.scene.route.key) {
            case 'todo':
                Scene = (
                    <Todo />
                );
                break;

            case 'intro':
                Scene = <Intro />;
                break;

            case 'home':
                Scene = <Home />
                break;

            case 'login':
                Scene = <Login />
                break;

            case 'registration':
                Scene = <Registration />
                break;

            case 'splash':
            default:
                Scene = (
                    <Splash />
                );
                break;
        }

        return Scene;
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <NavigationCardStack enableGestures={false}
                                     direction={'vertical'}
                                     navigationState={this.props.navigation}
                                     renderScene={this.renderScene}
                />
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        navigation: state.globalNavigator
    };
}

export default connect(mapStateToProps)(MainNavigation);
